import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/TelaLogin.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/TelaDeCadastro.vue')
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
    },
    {
      path: '/jogo',
      name: 'jogo',
      component: () => import('../views/Jogo.vue')
    }
  ]
})

export default router
