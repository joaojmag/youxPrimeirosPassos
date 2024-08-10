import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/TelaLogin.vue'),
      meta: { showHeader: false }
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/TelaDeCadastro.vue'),
      meta: { showHeader: false }
    },
    {
      path: '/perfiladm',
      name: 'perfiladm',
      component: () => import('../views/PerfilAdm.vue'),
      meta: { showHeader: true }
    },
    {
      path: '/perfilusuario',
      name: 'perfilusuario',
      component: () => import('../views/PerfilUser.vue'),
      meta: { showHeader: true }
    },
    {
      path: '/jogo',
      name: 'jogo',
      component: () => import('../views/Jogo.vue'),
      meta: { showHeader: true }
    }
  ]
})

export default router
