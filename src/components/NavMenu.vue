<script setup lang="ts">
import '@/assets/css/menu.css'
import AppLink from '@/components/AppLink.vue'
import { ref } from 'vue'

const iconSize = ref('lg')
const menuItems = [
  { to: '/games', class: 'games', icon: ['fas', 'gamepad'], tooltip: 'Games', color: '#242424' },
  { to: '/apps', class: 'apps', icon: ['fab', 'app-store-ios'], tooltip: 'Apps', color: '#242424' }
]
const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1)
</script>

<template>
  <div class="menu">
    <AppLink
      v-for="item in menuItems"
      :key="item.to"
      :class="item.class"
      class="menu-item"
      :to="item.to"
    >
      <font-awesome-icon class="menu-icon" :icon="item.icon" :size="iconSize" />
      <p class="menu-label">{{ capitalize(item.class) }}</p>
      
    </AppLink>
  </div>
</template>
