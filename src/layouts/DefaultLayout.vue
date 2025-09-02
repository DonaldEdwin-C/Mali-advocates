<template>
  <div>
    <Navbar />
    <main class="min-h-[100vh]">
      <slot />

      <RouterView />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
