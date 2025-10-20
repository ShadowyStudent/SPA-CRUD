<template>
  <div class="container">
    <h1>Productos</h1>
    <router-link to="/productos/crear">Crear producto</router-link>
    <div v-for="p in productos" :key="p.id" style="border:1px solid #ddd;margin:8px;padding:8px;">
      <h3>{{ p.nombre }} - ${{ p.precio }}</h3>
      <p>{{ p.descripcion }}</p>
      <button @click="editar(p.id)">Editar</button>
      <button @click="eliminar(p.id)">Eliminar</button>
      <button @click="agregar(p)">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup>
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import { useRouter } from 'vue-router'

const productoStore = useProductoStore()
const carritoStore = useCarritoStore()
const router = useRouter()

const productos = productoStore.productos

function editar(id) { router.push(`/productos/${id}`) }
function eliminar(id) { productoStore.eliminarProducto(id) }
function agregar(p) { carritoStore.agregarAlCarrito(p, 1) }
</script>
