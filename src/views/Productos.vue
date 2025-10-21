<template>
  <section class="container py-8">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-semibold">Productos</h1>
      <router-link to="/productos/crear" class="px-4 py-2 bg-indigo-600 text-white rounded">Crear producto</router-link>
    </div>

    <div class="mb-6 flex gap-4 items-center">
      <input v-model="q" placeholder="Buscar por ID (ej. 1001 o parte: 100)" class="w-80 p-3 border rounded" />
      <button @click="buscarAhora" class="px-3 py-2 bg-indigo-600 text-white rounded">Buscar por ID</button>
      <button @click="limpiar" class="px-3 py-2 border rounded">Limpiar</button>
      <div class="text-sm text-gray-600">Resultados: {{ resultados.length }}</div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard
        v-for="p in resultados"
        :key="p.id"
        :product="p"
        @agregar="onAgregar"
        @eliminar="onEliminar"
        @editar="onEditar"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useCarritoStore } from '../stores/useCarritoStore'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  components: { ProductCard },
  setup() {
    const productoStore = useProductoStore()
    const carritoStore = useCarritoStore()
    const router = useRouter()
    const q = ref('')
    const resultados = ref([...productoStore.productos])

    function buscarAhora() { resultados.value = productoStore.buscarPorIdPartial(q.value) }
    function limpiar() { q.value = ''; resultados.value = [...productoStore.productos] }

    watch(() => productoStore.productos, () => { resultados.value = productoStore.buscarPorIdPartial(q.value) }, { deep: true })

    function onAgregar(payload) { carritoStore.agregarAlCarritoCantidad(payload.product, payload.cantidad) }
    function onEliminar(id) { productoStore.eliminarProducto(id) }
    function onEditar(id) { router.push({ name: 'EditarProducto', params: { id } }) }

    return { q, resultados, onAgregar, onEliminar, onEditar, buscarAhora, limpiar }
  }
}
</script>
