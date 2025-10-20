<template>
  <div class="container" v-if="producto">
    <h1>Editar producto</h1>
    <form @submit.prevent="submit">
      <label>Nombre</label><br/>
      <input v-model="form.nombre" required /><br/>
      <label>Precio</label><br/>
      <input v-model.number="form.precio" required type="number" step="0.01"/><br/>
      <label>Stock</label><br/>
      <input v-model.number="form.stock" required type="number"/><br/>
      <label>Descripción</label><br/>
      <textarea v-model="form.descripcion"></textarea><br/>
      <button type="submit">Actualizar</button>
    </form>
  </div>
  <div v-else class="container">
    <p>Producto no encontrado.</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const productoStore = useProductoStore()
const id = route.params.id
const producto = productoStore.obtenerProductoPorId(id)

const form = reactive(producto ? { ...producto } : { nombre: '', precio: 0, stock: 0, descripcion: '' })

function submit() {
  productoStore.actualizarProducto(id, { ...form })
  router.push('/productos')
}
</script>
