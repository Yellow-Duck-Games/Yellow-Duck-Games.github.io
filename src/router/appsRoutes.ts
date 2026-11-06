import AppsView from '@/views/AppsView.vue'
import ProductView from '@/views/ProductView.vue'
import TermsView from '@/views/TermsView.vue'

export const appsRoutes = [
  {
    path: '/apps',
    name: 'apps',
    component: AppsView,
  },
  {
    path: '/apps/:productId',
    name: 'app-details',
    component: ProductView,
    props: true,
  },
  {
    path: '/apps/:productId/terms',
    name: 'app-terms',
    component: TermsView,
    props: true,
  },
];
