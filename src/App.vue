<template>
  <main class="bg-black text-white font-body text-2xl">
    <app-header />
    <router-view />
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>
