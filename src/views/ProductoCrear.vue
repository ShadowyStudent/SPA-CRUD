<template>
  <div class="container">
    <h1>Crear producto</h1>
    <form @submit.prevent="submit">
      <label>Nombre</label><br/>
      <input v-model="form.nombre" required /><br/>
      <label>Precio</label><br/>
      <input v-model.number="form.precio" required type="number" step="0.01"/><br/>
      <label>Stock</label><br/>
      <input v-model.number="form.stock" required type="number"/><br/>
      <label>Descripción</label><br/>
      <textarea v-model="form.descripcion"></textarea><br/>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRouter } from 'vue-router'

const productoStore = useProductoStore()
const router = useRouter()
const form = reactive({ nombre: '', precio: 0, stock: 0, descripcion: '' })

function submit() {
  productoStore.crearProducto({ ...form })
  router.push('/productos')
}
</script>
