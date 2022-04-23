import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/CatalogView')
  },{
    path: '/catalog/item/:id',
    name: 'item',
    component: () => import('../views/ItemsView')
  },{
    path: '/catalog/delete/:id',
    name: 'delete',
    component: () => import('../views/DeleteView')
  },{
    path: '/catalog/edit/:id',
    name: 'edit',
    component: () => import('../views/EditView')
  },{
    path: '/add',
    name: 'add',
    component: () => import('../views/AddView')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
