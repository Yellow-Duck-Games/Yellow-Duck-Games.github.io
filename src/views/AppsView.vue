<script setup lang="ts">
import List, { type ListEntry } from '@/components/ListComponent.vue'
import { useAppsStore } from '@/store'

const apps = useAppsStore()
const items: ListEntry[] = apps.products
  .slice()
  .reverse()
  .map((product) => ({
    product,
    route: `/apps/${product.id}`
  }))
</script>

<template>
  <List
    header="Apps"
    emoji="📱"
    tag="App"
    subtitle="Handy little apps we built to make everyday things more fun."
    :items="items"
  />
</template>
