<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/logo.png'

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const links = [
  { to: '/games', label: 'Games' },
  { to: '/apps', label: 'Apps' }
]
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__inner container">
      <RouterLink to="/" class="brand" @click="menuOpen = false">
        <img :src="logo" alt="Yellow Duck Games logo" class="brand__logo" />
        <span class="brand__name">Yellow Duck<span class="brand__accent"> Games</span></span>
      </RouterLink>

      <button
        class="nav__toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
      </button>

      <nav class="nav__links" :class="{ 'nav__links--open': menuOpen }">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
          @click="menuOpen = false"
          >{{ link.label }}</RouterLink
        >
        <a class="btn btn--primary nav__cta" href="mailto:info@yellowduckgames.com">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          Contact
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  transition:
    background 0.25s var(--ease-out),
    border-color 0.25s var(--ease-out),
    backdrop-filter 0.25s var(--ease-out);
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(20, 16, 23, 0.72);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--line);
}

.nav__inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* --- brand --- */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text);
}
.brand:hover {
  color: var(--text);
}
.brand__logo {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  box-shadow: 0 0 0 rgba(255, 186, 8, 0);
  transition:
    transform 0.4s var(--ease-bounce),
    box-shadow 0.3s var(--ease-out);
}
.brand:hover .brand__logo {
  transform: rotate(-8deg) scale(1.05);
  box-shadow: 0 0 18px rgba(255, 186, 8, 0.5);
}
.brand__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}
.brand__accent {
  color: var(--gold);
}

/* --- links --- */
.nav__links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.nav__link {
  position: relative;
  font-family: var(--font-display);
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.3rem 0;
}
.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s var(--ease-out);
}
.nav__link:hover {
  color: var(--text);
}
.nav__link:hover::after,
.nav__link.router-link-active::after {
  transform: scaleX(1);
}
.nav__link.router-link-active {
  color: var(--text);
}
.nav__cta {
  padding: 0.65rem 1.15rem;
  font-size: 0.92rem;
}

/* --- mobile toggle --- */
.nav__toggle {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: var(--surface);
  position: relative;
}
.nav__toggle span,
.nav__toggle span::before,
.nav__toggle span::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transform: translate(-50%, -50%);
  transition: transform 0.25s var(--ease-out);
}
.nav__toggle span::before {
  transform: translate(-50%, -8px);
}
.nav__toggle span::after {
  transform: translate(-50%, 6px);
}
.nav__toggle span.open {
  background: transparent;
}
.nav__toggle span.open::before {
  transform: translate(-50%, 0) rotate(45deg);
}
.nav__toggle span.open::after {
  transform: translate(-50%, 0) rotate(-45deg);
}

@media (max-width: 640px) {
  .nav__toggle {
    display: block;
  }
  .nav__links {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
    padding: 1rem clamp(1.1rem, 4vw, 2rem) 1.4rem;
    background: rgba(20, 16, 23, 0.96);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.2s var(--ease-out),
      transform 0.2s var(--ease-out);
  }
  .nav__links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .nav__link {
    padding: 0.6rem 0.2rem;
  }
  .nav__cta {
    justify-content: center;
    margin-top: 0.4rem;
  }
}
</style>
