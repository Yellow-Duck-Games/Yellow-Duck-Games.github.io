<script setup lang="ts">
const size = 'lg'

const socialLinks: { href: string; icon: [string, string]; size: string }[] = [
  // { href: 'https://twitter.com/yellow_duck_games', icon: ['fab', 'twitter'], size },
  // { href: 'https://github.com/orgs/Yellow-Duck-Games', icon: ['fab', 'github'], size: 'lg' },
  // { href: 'https://www.instagram.com/yellow_duck_games', icon: ['fab', 'instagram'], size }
]
</script>

<template>
  <ul class="social-links">
    <li v-for="link in socialLinks" :key="link.href">
      <a target="_blank" rel="noopener noreferrer" :href="link.href">
        <font-awesome-icon :icon="link.icon" :size="link.size" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-links {
  display: flex;
  margin-left: auto;
}
</style>
