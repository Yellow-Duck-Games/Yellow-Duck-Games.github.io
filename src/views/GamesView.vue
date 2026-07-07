<script setup lang="ts">
import List, { type ListEntry } from '@/components/ListComponent.vue'
import { useGamesStore } from '@/store'

const games = useGamesStore()
const items: ListEntry[] = games.products.map((product) => ({
  product,
  route: `/games/${product.id}`
}))
</script>

<template>
  <List
    header="Games"
    emoji="🎮"
    tag="Game"
    subtitle="Clever, joyful games that are easy to learn and hard to put down."
    :items="items"
  />
</template>
