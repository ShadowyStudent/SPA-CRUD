<template>
  <section class="container py-8">
    <h1 class="text-2xl font-semibold mb-4">Carrito</h1>

    <div v-if="carrito.length">
      <ul class="space-y-4">
        <li v-for="item in carrito" :key="item.id" class="flex items-center justify-between p-3 border rounded">
          <div>
            <div class="font-medium">{{ item.name }}</div>
            <div class="text-sm text-gray-500">ID: <span class="font-mono">{{ item.id }}</span></div>
          </div>
          <div class="flex items-center gap-3">
            <button @click="cambiar(item.id, item.cantidad - 1)" class="px-2 py-1 border rounded">-</button>
            <input type="number" v-model.number="item.cantidad" @change="onInputChange(item)" class="w-20 p-1 text-center border rounded bg-white" />
            <button @click="cambiar(item.id, item.cantidad + 1)" class="px-2 py-1 border rounded">+</button>
            <div class="ml-4 font-medium">{{ (item.price * item.cantidad).toFixed(2) }}$</div>
            <button @click="eliminar(item.id)" class="ml-3 px-3 py-1 bg-red-600 text-white rounded">Eliminar</button>
          </div>
        </li>
      </ul>

      <div class="mt-6 flex items-center justify-between">
        <div>Total artículos: {{ totalArticulos }}</div>
        <div>Total precio: {{ totalPrecio.toFixed(2) }}$</div>
      </div>

      <div class="mt-4">
        <button @click="vaciar" class="px-4 py-2 bg-gray-800 text-white rounded">Vaciar carrito</button>
      </div>
    </div>

    <div v-else>
      <p>El carrito está vacío.</p>
    </div>
  </section>
</template>

<script>
import { useCarritoStore } from '../stores/useCarritoStore'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const carritoStore = useCarritoStore()
    const { carrito, totalArticulos, totalPrecio } = storeToRefs(carritoStore)

    function cambiar(id, nuevaCantidad) { carritoStore.cambiarCantidad(id, nuevaCantidad) }
    function eliminar(id) { carritoStore.eliminarDelCarrito(id) }
    function vaciar() { carritoStore.vaciarCarrito() }
    function onInputChange(item) { carritoStore.cambiarCantidad(item.id, item.cantidad) }

    return { carrito, totalArticulos, totalPrecio, cambiar, eliminar, vaciar, onInputChange }
  }
}
</script>
