import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('carrito') || '[]')
  }),
  getters: {
    totalItems: (state) => state.items.reduce((s, i) => s + i.cantidad, 0),
    totalPrecio: (state) => state.items.reduce((s, i) => s + i.cantidad * i.precio, 0)
  },
  actions: {
    guardar() {
      localStorage.setItem('carrito', JSON.stringify(this.items))
    },
    agregar(item) {
      const found = this.items.find(i => i.productId === item.productId)
      if (found) found.cantidad += item.cantidad
      else this.items.push({ ...item })
      this.guardar()
    },
    actualizarCantidad(productId, cantidad) {
      const it = this.items.find(i => i.productId === productId)
      if (!it) return
      it.cantidad = cantidad
      if (it.cantidad <= 0) this.items = this.items.filter(i => i.productId !== productId)
      this.guardar()
    },
    eliminar(productId) {
      this.items = this.items.filter(i => i.productId !== productId)
      this.guardar()
    },
    vaciar() {
      this.items = []
      this.guardar()
    }
  }
})
