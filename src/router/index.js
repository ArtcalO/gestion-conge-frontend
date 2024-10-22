import { createWebHistory, createRouter } from 'vue-router'
import LoginView from  "../views/auth/LoginView.vue"
import EmployesView from '@/views/employes/EmployesView.vue'

const routes = [
  {path:"/login", component:LoginView},
  {path:"/employes", component:EmployesView}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router