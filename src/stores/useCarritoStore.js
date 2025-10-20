import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCarritoStore = defineStore('carrito', () => {
  const carrito = ref([])
  const saved = localStorage.getItem('carrito_v1')
  if (saved) carrito.value = JSON.parse(saved)

  function guardar() {
    localStorage.setItem('carrito_v1', JSON.stringify(carrito.value))
  }

  function agregarAlCarrito(producto, cantidad = 1) {
    const item = carrito.value.find(i => i.productoId === producto.id)
    if (item) item.cantidad += cantidad
    else carrito.value.push({
      id: `${producto.id}-${Date.now()}`,
      productoId: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad
    })
    guardar()
  }

  function eliminarDelCarrito(productoId) {
    carrito.value = carrito.value.filter(i => i.productoId !== productoId)
    guardar()
  }

  function vaciarCarrito() {
    carrito.value = []
    guardar()
  }

  const totalArticulos = computed(() => carrito.value.reduce((s, i) => s + i.cantidad, 0))
  const totalPrecio = computed(() => carrito.value.reduce((s, i) => s + i.precio * i.cantidad, 0))

  watch(carrito, guardar, { deep: true })

  return { carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, totalArticulos, totalPrecio }
})
