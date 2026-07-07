<script setup lang="ts">
import { RouterLink } from 'vue-router'

const values = [
  { emoji: '🎯', title: 'Simple to grasp', text: 'Pick up in seconds. Every game is easy to learn from the very first tap.' },
  { emoji: '🧠', title: 'Hard to master', text: 'Under the surface, there’s real depth — enough to keep you coming back.' },
  { emoji: '💛', title: 'Made with joy', text: 'We build the kind of games and apps we love to play ourselves.' }
]
</script>

<template>
  <main class="page">
    <section class="section container">
      <header class="about-head fade-up">
        <span class="kicker">🦆 About us</span>
        <h1>We’re Yellow Duck Games</h1>
        <p>
          A small, passionate team of game enthusiasts who love creating unique and engaging
          experiences. Whether it’s designing gameplay, crafting stories, or building little worlds,
          we’re driven by our shared love for games and the joy they bring to people.
        </p>
      </header>

      <div class="values">
        <div v-for="v in values" :key="v.title" class="value card">
          <span class="value__emoji">{{ v.emoji }}</span>
          <h3>{{ v.title }}</h3>
          <p>{{ v.text }}</p>
        </div>
      </div>

      <div class="about-cta">
        <RouterLink to="/games" class="btn btn--primary">
          <font-awesome-icon :icon="['fas', 'gamepad']" /> See what we made
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-head {
  max-width: 60ch;
  margin-bottom: 2.6rem;
}
.about-head h1 {
  margin: 0.9rem 0 1rem;
}
.about-head p {
  font-size: 1.1rem;
  line-height: 1.75;
}
.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 1.4rem;
}
.value {
  padding: 1.6rem;
}
.value__emoji {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.7rem;
}
.value h3 {
  margin-bottom: 0.4rem;
}
.value p {
  font-size: 0.95rem;
}
.about-cta {
  margin-top: 2.6rem;
}
</style>
