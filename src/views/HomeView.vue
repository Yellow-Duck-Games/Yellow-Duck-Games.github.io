<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useGamesStore, useAppsStore } from '@/store'
import ProductCard from '@/components/ProductCard.vue'
import logo from '@/assets/images/logo.png'

const games = useGamesStore()
const apps = useAppsStore()

const showcase = [
  ...games.products
    .slice()
    .reverse()
    .map((p) => ({ product: p, route: `/games/${p.id}`, tag: 'Game' })),
  ...apps.products
    .slice()
    .reverse()
    .map((p) => ({ product: p, route: `/apps/${p.id}`, tag: 'App' }))
]
</script>

<template>
  <main class="page">
    <!-- HERO -->
    <section class="hero container">
      <div class="hero__copy fade-up">
        <span class="kicker">🦆 Indie game studio</span>
        <h1 class="hero__title">
          Games worth<br />
          <span class="hero__pop">quacking</span> about.
        </h1>
        <p class="hero__lead">
          We’re a small team of game enthusiasts crafting unique, joyful experiences —
          from clever puzzles to handy little apps. Simple to pick up, hard to put down.
        </p>
        <div class="hero__actions">
          <RouterLink to="/games" class="btn btn--ghost">
            <font-awesome-icon :icon="['fas', 'gamepad']" />
            Explore Games
          </RouterLink>
          <RouterLink to="/apps" class="btn btn--ghost">
            <font-awesome-icon :icon="['fab', 'app-store-ios']" />
            See our Apps
          </RouterLink>
        </div>
      </div>

      <div class="hero__art fade-up">
        <div class="hero__blob"></div>
        <img :src="logo" alt="Yellow Duck" class="hero__duck" />
        <span class="hero__spark hero__spark--1">✦</span>
        <span class="hero__spark hero__spark--2">✦</span>
        <span class="hero__spark hero__spark--3">✦</span>
      </div>
    </section>

    <!-- SHOWCASE -->
    <section class="section container">
      <div class="section-head">
        <h2>Our stuff</h2>
        <p>A handful of things we’ve made — and loved making.</p>
      </div>
      <div class="showcase-grid">
        <ProductCard
          v-for="item in showcase"
          :key="item.route"
          :product="item.product"
          :route="item.route"
          :tag="item.tag"
        />
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section container">
      <div class="contact card">
        <div class="contact__blob"></div>
        <h2>Let’s make something fun</h2>
        <p>Got an idea, some feedback, or just want to say hi? We’d love to hear from you.</p>
        <a class="btn btn--primary" href="mailto:info@yellowduckgames.com">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          info@yellowduckgames.com
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ---------------- hero ---------------- */
.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 2rem;
  padding-block: clamp(2.5rem, 7vw, 5.5rem);
}
.hero__copy,
.hero__art {
  min-width: 0;
}
.hero__title {
  margin: 1.1rem 0 1.2rem;
}
.hero__pop {
  color: var(--gold);
  position: relative;
  display: inline-block;
}
.hero__pop::after {
  content: '';
  position: absolute;
  left: -2%;
  right: -2%;
  bottom: 0.08em;
  height: 0.28em;
  background: rgba(255, 186, 8, 0.25);
  border-radius: 4px;
  z-index: -1;
}
.hero__lead {
  font-size: 1.12rem;
  max-width: 46ch;
  color: var(--text-muted);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.8rem;
}

/* hero art */
.hero__art {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 320px;
}
.hero__blob {
  position: absolute;
  inset: 8%;
  background: radial-gradient(circle at 35% 30%, var(--gold), var(--gold-deep));
  border-radius: 42% 58% 63% 37% / 45% 42% 58% 55%;
  filter: blur(2px);
  opacity: 0.9;
  animation: morph 12s ease-in-out infinite;
  box-shadow: 0 30px 80px -20px rgba(255, 186, 8, 0.45);
}
.hero__duck {
  position: relative;
  width: min(58%, 240px);
  border-radius: 50%;
  border: 4px solid var(--bg);
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.6);
  animation: bob 4.5s ease-in-out infinite;
}
.hero__spark {
  position: absolute;
  color: var(--mint);
  font-size: 1.4rem;
  animation: twinkle 3s ease-in-out infinite;
}
.hero__spark--1 {
  top: 10%;
  left: 12%;
  color: var(--gold-soft);
}
.hero__spark--2 {
  bottom: 14%;
  right: 8%;
  animation-delay: 1s;
}
.hero__spark--3 {
  top: 28%;
  right: 18%;
  color: var(--coral);
  font-size: 1rem;
  animation-delay: 2s;
}

@keyframes bob {
  0%,
  100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-16px) rotate(2deg);
  }
}
@keyframes morph {
  0%,
  100% {
    border-radius: 42% 58% 63% 37% / 45% 42% 58% 55%;
  }
  50% {
    border-radius: 60% 40% 38% 62% / 55% 58% 42% 45%;
  }
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

/* ---------------- sections ---------------- */
.section-head {
  margin-bottom: 2rem;
}
.section-head h2 {
  margin-bottom: 0.3rem;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(260px, 100%), 1fr));
  gap: 1.4rem;
}

/* ---------------- contact ---------------- */
.contact {
  position: relative;
  text-align: center;
  padding: clamp(2.5rem, 6vw, 4rem);
  overflow: hidden;
}
.contact:hover {
  transform: none;
}
.contact__blob {
  position: absolute;
  width: 340px;
  height: 340px;
  top: -160px;
  right: -120px;
  background: radial-gradient(circle, rgba(255, 186, 8, 0.22), transparent 70%);
  pointer-events: none;
}
.contact h2 {
  margin-bottom: 0.5rem;
}
.contact p {
  max-width: 44ch;
  margin: 0 auto 1.6rem;
}

@media (max-width: 780px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero .kicker {
    justify-content: center;
  }
  .hero__lead {
    margin-inline: auto;
  }
  .hero__actions {
    justify-content: center;
  }
  .hero__art {
    order: -1;
    min-height: 260px;
  }
}
</style>
