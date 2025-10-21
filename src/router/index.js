import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Productos from '/src/views/Productos.vue'
import CrearProducto from '/src/views/CrearProducto.vue'
import EditarProducto from '/src/views/EditarProducto.vue'
import Carrito from '/src/views/Carrito.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/productos', name: 'Productos', component: Productos },
  { path: '/productos/crear', name: 'CrearProducto', component: CrearProducto },
  { path: '/productos/:id', name: 'EditarProducto', component: EditarProducto, props: true },
  { path: '/carrito', name: 'Carrito', component: Carrito }
]

export default createRouter({ history: createWebHistory(), routes })
