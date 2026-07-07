<script setup lang="ts">
import { onMounted, watch, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import type { Product } from '@/store/ProductType'
import Modal from './ModalView.vue'
import { getStoreByRouteParam } from '@/utils/GetStoreByRouteParam'

const route = useRoute()
const router = useRouter()
const store = getStoreByRouteParam(route.params.productId.toString())
const products = store.products
const product: Product | undefined = products.find(({ id }) => id === route.params.productId)
const backPath = store.title === 'Games' ? '/games' : '/apps'

const showPrivacyPolicy = ref(document.URL.includes('?privacy-policy'))
const selectedScreenshot = ref('')
const showScreenshot = ref(false)
const shortDescriptionText = ref('')
const longDescriptionText = ref('')
const privacyText = ref('')

const openScreenshotModal = (screenshot: string): void => {
  selectedScreenshot.value = screenshot
  showScreenshot.value = true
}

const parseFile = async (filePath: string): Promise<string> => {
  try {
    const fetchResponse = await fetch(filePath)
    return (await fetchResponse.text()).trim()
  } catch (ex) {
    console.log('Error in fetch. ' + ex)
  }
  return filePath
}

onMounted(async () => {
  if (product) {
    shortDescriptionText.value = await parseFile(product.shortDescription)
    longDescriptionText.value = await parseFile(product.longDescription)
    privacyText.value = await parseFile(product.privacyPolicy)
  }
})

watch(
  () => showPrivacyPolicy.value,
  (newValue) => {
    if (newValue) {
      router.replace({ query: { 'privacy-policy': null } })
    } else {
      router.replace({ query: undefined })
    }
  }
)

watch(
  () => [showPrivacyPolicy.value, showScreenshot.value],
  (values) => {
    document.body.classList.toggle('stop-scrolling', values.some((v) => v))
  }
)
</script>

<template>
  <main class="page product">
    <div class="container">
      <!-- breadcrumb -->
      <nav class="crumb">
        <RouterLink :to="backPath">{{ store.title }}</RouterLink>
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="crumb__sep" />
        <span>{{ product?.title }}</span>
      </nav>

      <!-- hero -->
      <header class="product__hero fade-up">
        <img
          v-if="product"
          :src="product.thumbnail"
          :alt="`${product.title} icon`"
          class="product__icon"
        />
        <div class="product__intro">
          <h1>{{ product?.title }}</h1>
          <p class="product__tagline">{{ shortDescriptionText }}</p>
          <div class="store-buttons">
            <a :href="product?.iosLink" target="_blank" rel="noopener" class="btn btn--ghost">
              <font-awesome-icon :icon="['fab', 'app-store-ios']" /> App Store
            </a>
            <a :href="product?.androidLink" target="_blank" rel="noopener" class="btn btn--ghost">
              <font-awesome-icon :icon="['fab', 'google-play']" /> Google Play
            </a>
          </div>
        </div>
      </header>

      <!-- description -->
      <section class="product__about">
        <h2>About</h2>
        <p class="product__desc">{{ longDescriptionText }}</p>
      </section>

      <!-- screenshots -->
      <section v-if="product?.screenshots?.length" class="product__shots">
        <h2>Screenshots</h2>
        <div class="shots-row">
          <button
            v-for="screenshot in product.screenshots"
            :key="screenshot"
            class="shot"
            @click="openScreenshotModal(screenshot)"
          >
            <img :src="screenshot" :alt="`${product.title} screenshot`" loading="lazy" />
          </button>
        </div>
      </section>

      <!-- meta links -->
      <footer class="product__meta">
        <a href="#" class="meta-link" @click.prevent="showPrivacyPolicy = true">
          <font-awesome-icon :icon="['fas', 'shield-halved']" /> Privacy Policy
        </a>
        <RouterLink
          class="meta-link"
          :to="{ path: '/data-deletion-request', query: { title: product?.title } }"
        >
          <font-awesome-icon :icon="['fas', 'trash-can']" /> Data Deletion Request
        </RouterLink>
      </footer>
    </div>

    <!-- privacy modal -->
    <Teleport to="body">
      <Modal :show="showPrivacyPolicy" @close="showPrivacyPolicy = false" :show-header="true">
        <template #header>{{ product?.title }} · Privacy Policy</template>
        <template #body>
          <p class="privacy-text">{{ privacyText }}</p>
        </template>
      </Modal>
    </Teleport>

    <!-- screenshot lightbox -->
    <Teleport to="body">
      <Modal :show="showScreenshot" @close="showScreenshot = false" :show-header="false">
        <template #body>
          <img :src="selectedScreenshot" class="lightbox-img" alt="Screenshot" />
        </template>
      </Modal>
    </Teleport>
  </main>
</template>

<style scoped>
.product {
  padding-block: clamp(1.5rem, 4vw, 2.5rem) clamp(3rem, 6vw, 4.5rem);
}

/* breadcrumb */
.crumb {
  display: flex;
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

/* hero */
.product__hero {
  display: flex;
  gap: clamp(1.2rem, 4vw, 2.4rem);
  align-items: center;
  flex-wrap: wrap;
}
.product__icon {
  width: clamp(100px, 22vw, 140px);
  height: clamp(100px, 22vw, 140px);
  border-radius: 28px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-soft);
}
.product__intro {
  flex: 1;
  min-width: 260px;
}
.product__intro h1 {
  font-size: clamp(2rem, 5vw, 3rem);
}
.product__tagline {
  font-size: 1.12rem;
  color: var(--text-muted);
  margin: 0.6rem 0 1.4rem;
  max-width: 52ch;
}
.store-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

/* about */
.product__about,
.product__shots {
  margin-top: clamp(2.5rem, 6vw, 3.5rem);
}
.product__about h2,
.product__shots h2 {
  margin-bottom: 1rem;
}
.product__desc {
  font-size: 1.05rem;
  line-height: 1.8;
  max-width: 68ch;
}

/* screenshots */
.shots-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
}
.shot {
  flex: 0 0 auto;
  padding: 0;
  border: none;
  background: none;
  border-radius: var(--radius);
  overflow: hidden;
  scroll-snap-align: start;
  transition: transform 0.25s var(--ease-bounce);
}
.shot img {
  height: clamp(260px, 42vw, 380px);
  width: auto;
  border-radius: var(--radius);
  border: 1px solid var(--line);
}
.shot:hover {
  transform: translateY(-6px) scale(1.02);
}

/* meta */
.product__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.8rem;
  margin-top: clamp(2.5rem, 6vw, 3.5rem);
  padding-top: 1.6rem;
  border-top: 1px solid var(--line);
}
.meta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-dim);
}
.meta-link:hover {
  color: var(--gold);
}

/* modal content */
.privacy-text {
  white-space: pre-wrap;
  font-size: 0.92rem;
}
.lightbox-img {
  max-width: 80dvw;
  max-height: 78dvh;
  width: auto;
}
</style>
