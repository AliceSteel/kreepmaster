<template>
  <header
    class="fixed z-50 top-0 right-4 w-48 h-16 overflow-hidden uppercase cursor-ponter rounded-2xl"
    :class="{ 'h-80': isMenuOpen }"
  >
    <button
      class="absolute w-48 left-0 text-right p-4"
      :class="{ slide_text: isMenuOpen }"
      style="animation-delay: 0s"
      id="menu-toggle"
      @click.prevent.stop="toggleMenu"
    >
      MENU
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
        class="p-4 bg-gradient-to-r from-black md:bg-none"
        :class="{ slide_text: isMenuOpen }"
        style="animation-delay: 0.2s"
        @click="toggleMenu"
      >
        <router-link :to="{ name: 'home' }" class="text-white menu_link_white" title="Home"
          >Home
          <!--  <i class="fa fa-eye text-green-400 text-2xl md:hidden"></i>-->
        </router-link>
      </li>
      <li
        class="p-4 bg-gradient-to-r from-black md:bg-none"
        :class="{ slide_text: isMenuOpen }"
        style="animation-delay: 0.4s"
        @click="toggleMenu"
      >
        <router-link :to="{ name: 'about' }" class="text-white menu_link_white" title="About"
          >About
          <!--  <i class="fa fa-eye text-green-400 text-2xl md:hidden"></i>-->
        </router-link>
      </li>

      <li
        class="p-4 bg-gradient-to-r from-black md:bg-none"
        :class="{ slide_text: isMenuOpen }"
        style="animation-delay: 0.6s"
        @click="toggleMenu"
      >
        <router-link :to="{ name: 'music' }" class="text-white menu_link_white" title="Music"
          >Music
        </router-link>
      </li>

      <li
        class="p-4 bg-gradient-to-r from-black md:bg-none"
        :class="{ slide_text: isMenuOpen }"
        style="animation-delay: 0.8s"
        @click="toggleMenu"
      >
        <router-link
          v-if="this.$route.name === 'about'"
          to="#contact"
          title="Contact"
          class="text-white menu_link_white"
        >
          Contact
        </router-link>
        <router-link
          v-else
          :to="{ name: 'about', hash: '#contact' }"
          class="text-white menu_link_white"
          >Contact
        </router-link>
      </li>
    </ul>
  </header>
  <!--  </header>-->
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false
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
