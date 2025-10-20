import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import ProductoCrear from '../views/ProductoCrear.vue'
import ProductoEditar from '../views/ProductoEditar.vue'
import Carrito from '../views/Carrito.vue'

const routes = [
  { path: '/', component: Inicio },
  { path: '/productos', component: Productos },
  { path: '/productos/crear', component: ProductoCrear },
  { path: '/productos/:id', component: ProductoEditar, props: true },
  { path: '/carrito', component: Carrito }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
