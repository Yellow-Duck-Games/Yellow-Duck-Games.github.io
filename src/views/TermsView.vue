<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import type { Product } from '@/store/ProductType'
import { getStoreByRouteParam } from '@/utils/GetStoreByRouteParam'

const route = useRoute()
const productId = route.params.productId.toString()
const store = getStoreByRouteParam(productId)
const product: Product | undefined = store.products.find(({ id }) => id === productId)
const backPath = store.title === 'Games' ? '/games' : '/apps'

const termsText = ref('')

onMounted(async () => {
  if (!product) return
  document.title = `${product.title} · Terms of Service · Yellow Duck Games`
  try {
    termsText.value = (await (await fetch(product.termsOfService)).text()).trim()
  } catch (ex) {
    console.log('Error in fetch. ' + ex)
  }
})
</script>

<template>
  <main class="page terms">
    <div class="container">
      <nav class="crumb">
        <RouterLink :to="backPath">{{ store.title }}</RouterLink>
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="crumb__sep" />
        <RouterLink v-if="product" :to="`${backPath}/${product.id}`">{{ product.title }}</RouterLink>
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="crumb__sep" />
        <span>Terms of Service</span>
      </nav>

      <article class="terms__body fade-up">
        <p v-if="!product">This product could not be found.</p>
        <p v-else class="terms-text">{{ termsText }}</p>
      </article>
    </div>
  </main>
</template>

<style scoped>
.terms {
  padding-block: clamp(1.5rem, 4vw, 2.5rem) clamp(3rem, 6vw, 4.5rem);
}
.crumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-dim);
  margin-bottom: 2rem;
}
.crumb a {
  color: var(--text-muted);
  font-weight: 600;
}
.crumb a:hover {
  color: var(--gold);
}
.crumb__sep {
  font-size: 0.7rem;
}
.terms__body {
  max-width: 72ch;
}
.terms-text {
  white-space: pre-wrap;
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}
</style>
