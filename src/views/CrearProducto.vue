<template>
  <section class="container py-8">
    <h1 class="text-2xl font-semibold mb-4">Crear producto</h1>

    <form @submit.prevent="crear" class="max-w-lg bg-white/5 p-6 rounded border space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">Nombre del producto</label>
        <input v-model="form.name" placeholder="Ej: Lienzo 50x70 cm" class="w-full p-3 border rounded" />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Descripción corta</label>
        <textarea v-model="form.short" placeholder="Breve descripción para mostrar en la lista" class="w-full p-3 border rounded"></textarea>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Precio (número)</label>
        <input v-model.number="form.price" type="number" placeholder="Ej: 250" class="w-full p-3 border rounded" />
      </div>

      <div class="flex gap-3">
        <button type="submit" class="px-4 py-2 bg-indigo-600 text-white rounded">Crear producto</button>
        <button type="button" @click="cancelar" class="px-4 py-2 border rounded">Cancelar</button>
      </div>
    </form>
  </section>
</template>

<script>
import { reactive } from 'vue'
import { useProductoStore } from '../stores/useProductoStore'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const productoStore = useProductoStore()
    const router = useRouter()
    const form = reactive({ name: '', short: '', price: 0 })

    function crear() {
      if (!form.name) return
      productoStore.crearProducto({ name: form.name, short: form.short, price: Number(form.price) })
      router.push({ name: 'Productos' })
    }

    function cancelar() { router.push({ name: 'Productos' }) }

    return { form, crear, cancelar }
  }
}
</script>
