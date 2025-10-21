<template>
  <section class="container py-8">
    <h1 class="text-2xl font-semibold mb-4">Editar producto</h1>
    <div v-if="producto">
      <div class="mb-4 text-sm">ID: <span class="font-mono">{{ producto.id }}</span></div>
      <form @submit.prevent="actualizar">
        <input v-model="form.name" placeholder="Nombre" class="w-full p-2 mb-2"/>
        <input v-model="form.short" placeholder="Descripción" class="w-full p-2 mb-2"/>
        <input v-model.number="form.price" placeholder="Precio" class="w-full p-2 mb-2"/>
        <div class="flex gap-2">
          <button type="submit" class="px-4 py-2 bg-gray-800 text-white">Guardar</button>
          <button type="button" @click="cancelar" class="px-4 py-2 border">Cancelar</button>
        </div>
      </form>
    </div>
    <div v-else>
      <p>Producto no encontrado.</p>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const productoStore = useProductoStore()
    const router = useRouter()
    const route = useRoute()
    const producto = productoStore.obtenerProductoPorId(route.params.id)
    const form = reactive({
      name: producto?.name ?? '',
      short: producto?.short ?? '',
      price: producto?.price ?? 0
    })

    function actualizar() {
      productoStore.actualizarProducto(route.params.id, { name: form.name, short: form.short, price: form.price })
      router.push({ name: 'Productos' })
    }

    function cancelar() { router.push({ name: 'Productos' }) }

    return { producto, form, actualizar, cancelar }
  }
}
</script>
