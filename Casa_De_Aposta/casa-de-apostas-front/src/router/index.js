import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/TelaDeCadastro.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/TelaLogin.vue')
    },
    {
      path: '/perfiladm',
      name: 'perfiladm',
      component: () => import('../views/PerfilAdm.vue')
    },
    {
      path: '/perfilusuario',
      name: 'perfilusuario',
      component: () => import('../views/PerfilUser.vue')
    }
  ]
})

export default router
