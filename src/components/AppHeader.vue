<template>
  <header
    class="fixed z-50 top-0 right-4 w-48 h-16 overflow-hidden uppercase cursor-ponter rounded-2xl"
    :class="{ 'h-80': isMenuOpen }"
  >
    <button
      class="absolute w-48 left-0 text-right p-4 uppercase"
      :class="{
        slide_text: isMenuOpen,
        bounce: !isMenuOpen && $route.name === 'home'
      }"
      style="animation-delay: 0s"
      id="menu-toggle"
      @click.prevent.stop="toggleMenu"
    >
      view more
    </button>
    <ul class="absolute w-48 cursor-pointer left-48 flex flex-col items-left">
      <li
        class="p-4 bg-gradient-to-r from-black md:bg-none"
        :class="{ slide_text: isMenuOpen }"
        style="animation-delay: 0s"
        id="close-menu"
        @click="toggleMenu"
      >
        <span class="text-white menu_link_white"> X </span>
      </li>

      <li
        v-for="(link, index) in menuLinks"
        :key="link.label"
        class="p-4 bg-gradient-to-r from-black md:bg-none"
        :class="{ slide_text: isMenuOpen }"
        :style="{ animationDelay: `${(index + 1) * 0.2}s` }"
        @click="toggleMenu"
      >
        <router-link :to="link.to" class="text-white menu_link_white" :title="link.label">
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    menuLinks() {
      return [
        { label: 'Home', to: { name: 'home' } },
        { label: 'About', to: { name: 'about' } },
        { label: 'Music', to: { name: 'music' } },
        {
          label: 'Contact',
          to: { name: 'about', hash: '#contact' }
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.bounce {
  animation: bounce 1.2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.slide_text {
  animation: slide-left 1s forwards;
}

@keyframes slide-left {
  0% {
    transform: translate(0%);
    opacity: 1;
  }
  100% {
    transform: translate(-100%);
    opacity: 1;
  }
}
</style>
