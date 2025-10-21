import { defineStore } from 'pinia'
import { ref } from 'vue'

let counter = 1001
function genNumericId() { return counter++ }

export const useProductoStore = defineStore('producto', () => {
  const productos = ref([
    { id: genNumericId(), name: 'Lienzo 50x70 cm', short: 'Lienzo preparado para acrílico', price: 250 },
    { id: genNumericId(), name: 'Set Pinceles 12pz', short: 'Pinceles redondos y planos, sintéticos', price: 120 },
    { id: genNumericId(), name: 'Óleo Tubo 200ml - Blanco', short: 'Pintura al óleo alta pigmentación', price: 180 },
    { id: genNumericId(), name: 'Acrílico Tubo 120ml - Prisma', short: 'Acrílico profesional, colores surtidos', price: 95 },
    { id: genNumericId(), name: 'Paleta de Madera', short: 'Paleta ergonómica para mezcla de colores', price: 40 }
  ])

  function crearProducto(producto) {
    const p = { id: genNumericId(), ...producto }
    productos.value.push(p)
    return p
  }

  function actualizarProducto(id, datos) {
    const i = productos.value.findIndex(p => p.id === Number(id))
    if (i !== -1) productos.value[i] = { ...productos.value[i], ...datos }
  }

  function eliminarProducto(id) {
    const i = productos.value.findIndex(p => p.id === Number(id))
    if (i !== -1) productos.value.splice(i, 1)
  }

  function obtenerProductoPorId(id) {
    return productos.value.find(p => p.id === Number(id)) || null
  }

  function buscarPorIdPartial(query) {
    if (!query) return productos.value
    const q = String(query).trim()
    return productos.value.filter(p => String(p.id).includes(q))
  }

  return { productos, crearProducto, actualizarProducto, eliminarProducto, obtenerProductoPorId, buscarPorIdPartial }
})
