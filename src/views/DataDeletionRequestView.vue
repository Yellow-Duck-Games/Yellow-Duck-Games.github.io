<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const productTitle = computed(() => route.query.title?.toString() || '')
const pageTitle = computed(() =>
  productTitle.value ? `Data Deletion Request for ${productTitle.value}` : 'Data Deletion Request'
)
const emailBody = computed(() => {
  const titleText = productTitle.value ? ` in connection with ${productTitle.value}` : ''
  return `Hello Yellow Duck Games Team,%0D%0A%0D%0AI am writing to request the permanent deletion of all personal data you have collected about me${titleText}. Please confirm once this request has been completed.%0D%0A%0D%0AThank you for your prompt attention to this matter.%0D%0A%0D%0ABest regards,%0D%0A%0D%0A[Your Full Name]`
})
</script>

<template>
  <main class="page">
    <section class="section container ddr">
      <article class="ddr__card card fade-up">
        <span class="kicker">🔒 Privacy</span>
        <h1>{{ pageTitle }}</h1>
        <p>
          To delete your personal information stored by Yellow Duck Games, please send a request by
          email to:
        </p>
        <a
          class="btn btn--primary"
          :href="`mailto:DPO@unity3d.com?subject=Request%20to%20Delete%20Collected%20Personal%20Information&body=${emailBody}`"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
          DPO@unity3d.com
        </a>
        <p>
          This request helps us comply with your privacy rights and remove any personally
          identifiable data associated with your account or usage.
        </p>
        <p>
          For more information, please review the product privacy policy on the relevant product
          page.
        </p>
        <RouterLink to="/" class="ddr__back">
          <font-awesome-icon :icon="['fas', 'arrow-left']" /> Back to Home
        </RouterLink>
      </article>
    </section>
  </main>
</template>

<style scoped>
.ddr {
  display: flex;
  justify-content: center;
}
.ddr__card {
  width: 100%;
  max-width: 620px;
  padding: clamp(1.8rem, 5vw, 3rem);
}
.ddr__card:hover {
  transform: none;
}
.ddr__card h1 {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin: 0.9rem 0 1.2rem;
}
.ddr__card p {
  margin: 1.1rem 0;
  line-height: 1.75;
}
.ddr__card .btn {
  margin: 0.4rem 0 0.6rem;
}
.ddr__back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.4rem;
  font-family: var(--font-display);
  font-weight: 600;
}
</style>
