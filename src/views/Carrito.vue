<template>
  <div class="container">
    <h1>Carrito</h1>
    <div v-if="carrito.length">
      <div v-for="item in carrito" :key="item.id" style="border-bottom:1px solid #eee;padding:8px 0;">
        <strong>{{ item.nombre }}</strong>
        <div>Cantidad: {{ item.cantidad }}</div>
        <div>Subtotal: ${{ (item.precio * item.cantidad).toFixed(2) }}</div>
        <button @click="eliminar(item.productoId)">Eliminar</button>
      </div>
      <p><strong>Total artículos:</strong> {{ totalArticulos }}</p>
      <p><strong>Total precio:</strong> ${{ totalPrecio.toFixed(2) }}</p>
      <button @click="vaciar">Vaciar carrito</button>
    </div>
    <div v-else>
      <p>El carrito está vacío.</p>
    </div>
  </div>
</template>

<script setup>
import { useCarritoStore } from '../stores/useCarritoStore'
const carritoStore = useCarritoStore()
const carrito = carritoStore.carrito
const totalArticulos = carritoStore.totalArticulos
const totalPrecio = carritoStore.totalPrecio

function eliminar(id) { carritoStore.eliminarDelCarrito(id) }
function vaciar() { carritoStore.vaciarCarrito() }
</script>
