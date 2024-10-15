import { createWebHistory, createRouter } from 'vue-router'
import EmployesView from '@/views/EmployesView.vue'
import CongeView from '@/views/CongeView.vue'

const routes = [
  {path:"/employes", component:EmployesView},
  {path:"/conges", component:CongeView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router