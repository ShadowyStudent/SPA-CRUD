import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductoStore = defineStore('producto', () => {
  const productos = ref([
    { id: 'p1', nombre: 'Camisa', precio: 20.0, stock: 10, descripcion: 'Algodón' },
    { id: 'p2', nombre: 'Pantalón', precio: 35.0, stock: 6, descripcion: 'Jeans' },
    { id: 'p3', nombre: 'Gorra', precio: 12.5, stock: 15, descripcion: 'Unisex' },
    { id: 'p4', nombre: 'Zapatos', precio: 60.0, stock: 4, descripcion: 'Cuero sintético' },
    { id: 'p5', nombre: 'Calcetines', precio: 5.0, stock: 30, descripcion: 'Algodón' }
  ])

  function crearProducto(producto) {
    producto.id = producto.id || `p${Date.now()}`
    productos.value.push(producto)
  }

  function actualizarProducto(id, nuevo) {
    const idx = productos.value.findIndex(p => p.id === id)
    if (idx !== -1) productos.value[idx] = { ...productos.value[idx], ...nuevo }
  }

  function eliminarProducto(id) {
    productos.value = productos.value.filter(p => p.id !== id)
  }

  function obtenerProductoPorId(id) {
    return productos.value.find(p => p.id === id)
  }

  return { productos, crearProducto, actualizarProducto, eliminarProducto, obtenerProductoPorId }
})
