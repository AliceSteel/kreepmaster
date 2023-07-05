<template>
  <main class="bg-zinc-900 text-white font-body text-2xl scroll-smooth">
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
