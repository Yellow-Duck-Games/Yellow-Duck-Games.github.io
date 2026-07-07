<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <div class="footer__brand">
        <span class="footer__quack">Quack! 🦆</span>
        <p>Small studio. Big fun. Made with a love of games.</p>
      </div>
      <div class="footer__links">
        <router-link to="/games">Games</router-link>
        <router-link to="/apps">Apps</router-link>
        <a href="mailto:info@yellowduckgames.com">Contact</a>
        <router-link to="/data-deletion-request">Data Deletion</router-link>
      </div>
    </div>
    <div class="footer__bar container">
      <span>© {{ year }} Yellow Duck Games</span>
      <a href="mailto:info@yellowduckgames.com">info@yellowduckgames.com</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  flex-shrink: 0;
  margin-top: auto;
  border-top: 1px solid var(--line);
  background: rgba(0, 0, 0, 0.2);
  padding-top: clamp(2.5rem, 5vw, 3.5rem);
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 2rem;
}
.footer__quack {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--gold);
}
.footer__brand p {
  margin-top: 0.4rem;
  max-width: 32ch;
  font-size: 0.95rem;
}
.footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.6rem;
}
.footer__links a {
  color: var(--text-muted);
  font-weight: 600;
}
.footer__links a:hover {
  color: var(--gold);
}
.footer__bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  justify-content: space-between;
  padding-block: 1.2rem;
  border-top: 1px solid var(--line);
  font-size: 0.85rem;
  color: var(--text-dim);
}
.footer__bar a {
  color: var(--text-dim);
}
.footer__bar a:hover {
  color: var(--gold);
}
</style>
