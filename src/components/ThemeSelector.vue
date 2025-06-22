<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const currentTheme = ref<'light' | 'dark'>('dark')
const iconSize = ref<'lg'>('lg')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', currentTheme.value)
}

const icon = computed(() => (currentTheme.value === 'dark' ? ['fas', 'sun'] : ['fas', 'moon']))
</script>

<template>
  <div>
    <a @click.prevent="toggleTheme" href="about:blank">
      <font-awesome-icon class="icon" :icon="icon" :size="iconSize" />
    </a>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.icon {
  color: var(--contrast);
}
</style>
