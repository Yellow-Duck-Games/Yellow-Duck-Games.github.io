<template>
  <main class="container">
    <article>
      <header>
        <h1>{{ pageTitle }}</h1>
      </header>
      <section class="form-wrapper">
        <p>
          To delete your personal information stored by Yellow Duck Games,
          please send a request by email to:
        </p>
        <p>
          <a
            class="mailto"
            :href="`mailto:DPO@unity3d.com?subject=Request%20to%20Delete%20Collected%20Personal%20Information&body=${emailBody}`"
          >
            DPO@unity3d.com
          </a>
        </p>
        <p>
          This request helps us comply with your privacy rights and remove any personally identifiable data associated with your account or usage.
        </p>
        <p>
          For more information, please review the product privacy policy in the relevant product page.
        </p>
      </section>
      <footer class="footer">
        <AppLink to="/">Back to Home</AppLink>
      </footer>
    </article>
  </main>
</template>

<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productTitle = computed(() => route.query.title?.toString() || '')
const pageTitle = computed(() =>
  productTitle.value ? `Data Deletion Request for ${productTitle.value}` : 'Data Deletion Request'
)
const emailBody = computed(() => {
  const titleText = productTitle.value
    ? ` in connection with ${productTitle.value}`
    : ''
  return `Hello Yellow Duck Games Team,%0D%0A%0D%0AI am writing to request the permanent deletion of all personal data you have collected about me${titleText}. Please confirm once this request has been completed.%0D%0A%0D%0AThank you for your prompt attention to this matter.%0D%0A%0D%0ABest regards,%0D%0A%0D%0A[Your Full Name]`
})
</script>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  /* background: linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%); */
  /* color: #333; */
}

article {
  width: 100%;
  max-width: 560px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.form-wrapper {
  /* background: #fff; */
  /* border-radius: 8px; */
  /* padding: 30px; */
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}

p {
  margin: 1rem 0;
  line-height: 1.7;
  /* color: #444; */
}

a.mailto {
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

a.mailto:hover {
  text-decoration: underline;
}

.footer {
  margin-top: 20px;
  text-align: center;
}

.footer a {
  color: #007bff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
