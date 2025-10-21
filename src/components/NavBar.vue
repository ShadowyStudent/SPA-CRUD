<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="brand">Tienda de Arte · SPA</router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/productos" class="nav-link">Productos</router-link>
        <router-link to="/carrito" class="nav-link">Carrito</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default { name: 'Navbar' }
</script>
