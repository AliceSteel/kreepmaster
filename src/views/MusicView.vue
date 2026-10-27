<template>
  <div class="relative overflow-hidden h-screen">
    <Carousel
      ref="carousel"
      v-model="currentSlide"
      snapAlign="center"
      id="activeClasses"
      :itemsToShow="1"
      :wrapAround="true"
      :transition="500"
      :breakpoints="breakpoints"
      class="bg-black"
    >
      <slide
        v-for="album in albums"
        :key="album.id"
        class="carousel__item w-full h-screen p-0 z-1"
        :id="album.id"
        :style="{ background: `url('${album.backgroundImg}') center / cover no-repeat` }"
      >
        <a
          :href="album.link"
          target="_blank"
          rel="nofollow, noreferrer"
          class="absolute top-0 left-0 w-full h-full"
          title="Listen on Spotify"
        >
        </a>
        <div class="flex flex-col justify-center self-end pb-[15%]">
          <h2 class="capitalize text-4xl font-bold">{{ album.title }}</h2>
          <p>{{ album.year }}</p>
        </div>
      </slide>
    </Carousel>
    <div class="fixed left-[15%] bottom-[10%] z-20 flex justify-start items-center">
      <button @click="prev" class="btn_prev">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 10"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 6.09375V4.51562L2.29688 4.57812L3.73438 2.78125L3.75 0.625L0 5.3125L3.75 9.96875L3.76562 7.95312L2.3125 6.17188L30 6.09375Z"
            fill="white"
          />
        </svg>
      </button>
      <button @click="next" class="btn_next">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 10"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <div class="overlays">
      <div class="overlay_left"></div>
      <div class="overlay_right"></div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import musicData from '@/assets/musicData.json'

export default {
  name: 'MusicView',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      albums: [...musicData.albums].sort((a, b) => Number(b.year) - Number(a.year)),
      currentSlide: 0,
      breakpoints: {
        // 500px and up
        500: {
          itemsToShow: 2
        }
      }
    }
  },

  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
#activeClasses {
  .carousel__slide {
    padding: 0;
  }

  .carousel__viewport {
    perspective: 2000px;
    overflow: hidden;
  }

  .carousel__track {
    transform-style: preserve-3d;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--prev {
    opacity: 0.4;
    transform: rotateY(-10deg) scale(0.95);
    z-index: 0;
  }

  .carousel__slide.carousel__slide--next {
    opacity: 0.4;
    transform: rotateY(10deg) scale(0.95);
    z-index: 0;
  }

  .carousel__slide--active {
    z-index: 3;
    transform: scale(1.1);
    transition: transform 0.8s 1.4s cubic-bezier(0.84, 0, 0.08, 0.99);
  }
  .carousel__slide {
    transition: transform 0.7s cubic-bezier(0.84, 0, 0.08, 0.99);
  }
}

.btn_prev,
.btn_next {
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  padding: 1.5rem;
  border: 2px solid #fff;
  font-size: 1rem;
  border-radius: 50%;
  margin: 0.4rem;

  &:focus {
    outline: none;
  }
}
</style>
