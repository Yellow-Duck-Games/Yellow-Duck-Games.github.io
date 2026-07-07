import '@/assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Font Awesome — import only the icons we actually use (keeps the bundle small)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faGamepad,
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faXmark,
  faShieldHalved,
  faTrashCan,
  faRocket
} from '@fortawesome/free-solid-svg-icons'
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

library.add(
  faEnvelope,
  faGamepad,
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faXmark,
  faShieldHalved,
  faTrashCan,
  faRocket,
  faAppStoreIos,
  faGooglePlay
)

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
