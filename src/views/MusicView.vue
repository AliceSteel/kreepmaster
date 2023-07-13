<template>
  <!-- <section class="project_slider">
			<div class="container w100">
				<carousel :settings="sliderSettings" :breakpoints="breakpoints">
					<slide v-for="(image, index) in itemPics" :key="index">
						<div class="carousel__item">
							<img :src="require('@/assets/images/' + image)" alt="project_slider_2" v-if="image !== ' '">
						</div>
					</slide>

					<template #addons>
						<navigation />
					</template>
				</carousel>
				<h3>{{ item.title }}</h3>
			</div>
		</section> -->
  <Carousel
    ref="carousel"
    v-model="currentSlide"
    snapAlign="center"
    id="activeClasses"
    :itemsToShow="1.5"
    :wrapAround="true"
    :transition="500"
    class="image_slider bg-black"
  >
    <slide
      class="carousel__item image_slide"
      id="one"
      style="background: url('/img/slider-img-1.jpg') no-repeat 50% 50%; background-size: cover"
    >
      <h1>Prepare To meet Your God</h1>
      <p>2011 - EP</p>
    </slide>
    <slide
      class="carousel__item image_slide"
      id="two"
      style="background: url('/img/slider-img-2.jpg') no-repeat 50% 50%; background-size: cover"
    >
      <h1>Supralizer</h1>
      <p>2012 - Album</p>
    </slide>
    <slide
      class="carousel__item image_slide"
      id="three"
      style="background: url('/img/slider-img-3.jpg') no-repeat 50% 50%; background-size: cover"
    >
      <h1>The Watchers</h1>
      <p>2014 - Single</p>
    </slide>
    <slide
      class="carousel__item image_slide"
      id="four"
      style="background: url('/img/slider-img-4.jpg') no-repeat 50% 50%; background-size: cover"
    >
      <h1>KM.3.Centralia</h1>
      <p>2017 - Album</p>
    </slide>
    <slide
      class="carousel__item image_slide"
      id="five"
      style="background: url('/img/slider-img-5.jpg') no-repeat 50% 50%; background-size: cover"
    >
      <h1>The Ionization</h1>
      <p>2019 - Single</p>
    </slide>
    <slide
      class="carousel__item image_slide"
      id="six"
      style="background: url('/img/slider-img-5.jpg') no-repeat 50% 50%; background-size: cover"
    >
      <h1>Conjoiners</h1>
      <p>2022 - Album</p>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </Carousel>
  <div class="buttons">
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
  <div class="blocks">
    <div class="block_1"></div>
    <div class="block_2"></div>
    <div class="block_3"></div>
  </div>

  <div class="overlay"></div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
export default {
  name: 'MusicView',
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      currentSlide: 0,
      sliderSettings: {
        /* itemsToShow: 1.5,
        wrapAround: true,*/
        snapAlign: 'center'
      },

      breakpoints: {
        // 700px and up
        700: {
          /*   itemsToShow: 2.5*/
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
body {
  height: 100vh;
  overflow: hidden;
}

.image_slider {
  z-index: 1;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100vh;
}
.image_slide {
  height: 100vh;
  margin: 0 auto;
}
#activeClasses {
  .carousel__slide {
    padding: 5;
  }

  .carousel__viewport {
    perspective: 2000px;
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

  /* .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }*/

  .carousel__slide--prev {
    opacity: 0.9;
    transform: rotateY(-10deg) scale(0.95);
    z-index: 0;
  }

  .carousel__slide.carousel__slide--next {
    opacity: 0.9;
    transform: rotateY(10deg) scale(0.95);
    z-index: 0;
  }

  .carousel__slide--active {
    z-index: 1;
    transform: scale(1.2);
    transition: transform 0.8s 1.4s cubic-bezier(0.84, 0, 0.08, 0.99);
  }
  .carousel__slide {
    transition: transform 0.7s cubic-bezier(0.84, 0, 0.08, 0.99);
  }
}
.buttons {
  position: fixed;
  left: 15%;
  bottom: 10%;
  top: auto;
  z-index: 20;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.btn_prev,
.btn_next {
  background-color: transparent;
  cursor: pointer;
  margin: 0;

  background-position: 50% 50%;
  background-repeat: no-repeat;
  padding: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  border-radius: 50%;
  margin: 0.4rem;

  &:focus {
    outline: none;
  }
}
/*.btn_prev {
  background-image: url('/img/arrow_l.svg');
}

.btn_next {
  background-image: url('/img/arrow_r.svg');
}*/
.block_1 {
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 5%;
  left: 0%;
  background: black;
}
.block_2 {
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 25%;
  left: 25%;
  background: black;
}
.block_3 {
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 5%;
  right: 0%;
  background: black;
}
.overlay {
  z-index: 1;
  position: fixed;
  height: 100vh;
  width: 20%;
  left: 5%;
  background: rgba(0, 0, 0, 0.25);
}
/*.text-slider_wrapper {
  z-index: 2;
  position: absolute;
  width: 45%;
}
.text_slider {
  margin: 0;
  padding: 0;
  height: 100vh;
}
.text_slide h1 {
  color: #fff;
  font-size: 4rem;
  text-transform: uppercase;
  padding-left: 10%;
}*/
@media (max-width: 990px) {
  .block_2,
  .overlay {
    display: none;
  }
  .block_1 {
    width: 50%;
  }
  .block_3 {
    width: 12%;
  }
  .slide_slick {
    display: none !important;
  }
  .text_slide h1 {
    font-size: 30px !important;
  }
  .text-slider_wrapper {
    position: absolute;
    top: 60% !important;
  }
  .slide_control {
    left: 22.5%;
  }
}
</style>
