<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/store/ProductType'

export interface ListEntry {
  product: Product
  route: string
}

defineProps<{
  header: string
  subtitle?: string
  emoji?: string
  tag?: string
  items: ListEntry[]
}>()
</script>

<template>
  <main class="page">
    <section class="section container">
      <header class="list-head fade-up">
        <span class="kicker">{{ emoji }} {{ header }}</span>
        <h1>{{ header }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
      </header>

      <div v-if="items.length" class="product-grid">
        <ProductCard
          v-for="entry in items"
          :key="entry.route"
          :product="entry.product"
          :route="entry.route"
          :tag="tag"
        />
      </div>
      <p v-else class="empty">Nothing here yet — check back soon! 🦆</p>
    </section>
  </main>
</template>

<style scoped>
.list-head {
  margin-bottom: 2.4rem;
}
.list-head h1 {
  margin: 0.8rem 0 0.4rem;
}
.list-head p {
  font-size: 1.08rem;
  max-width: 52ch;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 1.4rem;
}
.empty {
  font-size: 1.1rem;
  color: var(--text-muted);
}
</style>
