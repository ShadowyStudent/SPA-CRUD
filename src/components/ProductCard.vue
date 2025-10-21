<template>
  <div class="rounded-lg overflow-hidden shadow p-5 border bg-white/5 flex flex-col justify-between">
    <div>
      <div class="text-sm text-gray-500 mb-2">ID: <span class="font-mono text-gray-700">{{ product.id }}</span></div>
      <h3 class="font-semibold text-xl mb-1">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ product.short }}</p>
    </div>

    <div class="mt-3 flex items-center justify-between gap-3">
      <div class="font-medium text-indigo-700 text-lg">{{ product.price }}$</div>
      <div class="flex items-center gap-2">
        <input type="number" v-model.number="qty" min="1" class="w-20 p-2 rounded border text-sm bg-white" />
        <button @click="agregarCantidad" class="px-3 py-2 bg-indigo-600 text-white rounded text-sm">Agregar</button>
      </div>
    </div>

    <div class="mt-4 flex justify-between gap-2">
      <button @click="$emit('editar', product.id)" class="px-3 py-2 border rounded text-sm">Editar</button>
      <button @click="$emit('eliminar', product.id)" class="px-3 py-2 border rounded text-sm">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: { product: { type: Object, required: true } },
  data() { return { qty: 1 } },
  methods: {
    agregarCantidad() { this.$emit('agregar', { product: this.product, cantidad: Number(this.qty) }) }
  }
}
</script>
