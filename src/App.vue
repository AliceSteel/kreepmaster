<template>
  <main class="bg-zinc-900 text-white font-body text-2xl scroll-smooth">
    <app-header />

    <router-view v-slot="{ Component, route }">
      <transition name="slide-down" mode="out-in">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
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

<style>
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(400px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: 0.3s ease-out;
}
</style>
