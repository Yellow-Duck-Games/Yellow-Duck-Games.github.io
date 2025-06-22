<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NavMenu from '@/components/NavMenu.vue'
import SocialLinks from './components/SocialLinks.vue'
import LogoComponent from './components/LogoComponent.vue'
import ThemeSelector from './components/ThemeSelector.vue'

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
})
</script>

<template>
  <main class="container">
    <header>
      <nav class="header">
        <LogoComponent />
        <NavMenu />
        <SocialLinks />
        <ThemeSelector />
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
}
</style>
