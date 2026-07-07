<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import type { Product } from '@/store/ProductType'

const props = defineProps<{
  product: Product
  route: string
  tag?: string
}>()

const blurb = ref('')

onMounted(async () => {
  try {
    const res = await fetch(props.product.shortDescription)
    blurb.value = (await res.text()).trim()
  } catch {
    blurb.value = ''
  }
})
</script>

<template>
  <RouterLink :to="route" class="card product-card">
    <div class="product-card__top">
      <img
        :src="product.thumbnail"
        :alt="`${product.title} icon`"
        class="product-card__icon"
        loading="lazy"
      />
      <span v-if="tag" class="product-card__tag">{{ tag }}</span>
    </div>
    <div class="product-card__body">
      <h3 class="product-card__title">{{ product.title }}</h3>
      <p class="product-card__blurb">{{ blurb }}</p>
    </div>
    <span class="product-card__cta">
      Play
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </span>
  </RouterLink>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  color: var(--text);
  height: 100%;
}
.product-card:hover {
  color: var(--text);
}

.product-card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.product-card__icon {
  width: 76px;
  height: 76px;
  border-radius: 20px;
  border: 1px solid var(--line);
  transition: transform 0.3s var(--ease-bounce);
}
.product-card:hover .product-card__icon {
  transform: rotate(-4deg) scale(1.04);
}
.product-card__tag {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--mint);
  border: 1px solid rgba(79, 227, 193, 0.35);
  background: rgba(79, 227, 193, 0.08);
  padding: 0.25rem 0.6rem;
  border-radius: var(--radius-pill);
}

.product-card__body {
  flex: 1;
}
.product-card__title {
  margin-bottom: 0.35rem;
}
.product-card__blurb {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--gold);
}
.product-card__cta svg {
  transition: transform 0.25s var(--ease-out);
}
.product-card:hover .product-card__cta svg {
  transform: translateX(5px);
}
</style>
