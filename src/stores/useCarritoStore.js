import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {
  const carrito = ref([])

  function agregarAlCarritoCantidad(producto, cantidad = 1) {
    const id = Number(producto.id)
    const existente = carrito.value.find(p => p.id === id)
    if (existente) existente.cantidad += Number(cantidad)
    else carrito.value.push({ id, name: producto.name, price: Number(producto.price), cantidad: Number(cantidad) })
  }

  function agregarAlCarrito(producto) { agregarAlCarritoCantidad(producto, 1) }

  function eliminarDelCarrito(id) {
    const i = carrito.value.findIndex(p => p.id === Number(id))
    if (i !== -1) carrito.value.splice(i, 1)
  }

  function cambiarCantidad(id, nuevaCantidad) {
    const item = carrito.value.find(p => p.id === Number(id))
    if (!item) return
    item.cantidad = Number(nuevaCantidad)
    if (item.cantidad <= 0) eliminarDelCarrito(id)
  }

  function vaciarCarrito() { carrito.value.splice(0, carrito.value.length) }

  const totalArticulos = computed(() => carrito.value.reduce((s, p) => s + (p.cantidad || 0), 0))
  const totalPrecio = computed(() => carrito.value.reduce((s, p) => s + (p.price * (p.cantidad || 1)), 0))

  return { carrito, agregarAlCarrito, agregarAlCarritoCantidad, eliminarDelCarrito, cambiarCantidad, vaciarCarrito, totalArticulos, totalPrecio }
})
