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
  <Carousel id="activeClasses" :itemsToShow="1.5" :wrapAround="true" :transition="500">
    <slide class="text_slider_wrapper text_slider">
      <div class="carousel__item text_slide">
        <h1>Prepare To meet Your God</h1>
        <p>2011 - EP</p>
      </div>
      <div class="carousel__item text_slide">
        <h1>Supralizer</h1>
        <p>2012 - Album</p>
      </div>
      <div class="carousel__item text_slide">
        <h1>The Watchers</h1>
        <p>2014 - Single</p>
      </div>
      <div class="carousel__item text_slide">
        <h1>KM.3.Centralia</h1>
        <p>2017 - Album</p>
      </div>
      <div class="carousel__item text_slide">
        <h1>The Ionization</h1>
        <p>2019 - Single</p>
      </div>
      <div class="carousel__item text_slide">
        <h1>Conjoiners</h1>
        <p>2022 - Album</p>
      </div>
    </slide>
    <template #addons>
      <navigation class="slide_control">
        <button type="button" class="carousel__prev">
          <svg
            width="30"
            height="10"
            viewBox="0 0 30 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 6.09375V4.51562L2.29688 4.57812L3.73438 2.78125L3.75 0.625L0 5.3125L3.75 9.96875L3.76562 7.95312L2.3125 6.17188L30 6.09375Z"
              fill="black"
            />
          </svg>
        </button>

        <button type="button" class="carousel__next">
          <svg
            width="30"
            height="10"
            viewBox="0 0 30 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6.09375V4.51562L27.7031 4.57812L26.2656 2.78125L26.25 0.625L30 5.3125L26.25 9.96875L26.2344 7.95312L27.6875 6.17188L0 6.09375Z"
              fill="black"
            />
          </svg>
        </button>
      </navigation>
    </template>
    <div class="blocks">
      <div class="block_1"></div>
      <div class="block_2"></div>
      <div class="block_3"></div>
    </div>

    <div class="overlay"></div>

    <div class="image_slider">
      <div
        class="image_slide"
        id="one"
        style="background: url('/img/slider-img-1.jpg') no-repeat 50% 50%; background-size: cover"
      ></div>
      <div
        class="image_slide"
        id="two"
        style="background: url('/img/slider-img-2.jpg') no-repeat 50% 50%; background-size: cover"
      ></div>
      <div
        class="image_slide"
        id="three"
        style="background: url('/img/slider-img-3.jpg') no-repeat 50% 50%; background-size: cover"
      ></div>
      <div
        class="image_slide"
        id="four"
        style="background: url('/img/slider-img-4.jpg') no-repeat 50% 50%; background-size: cover"
      ></div>
      <div
        class="image_slide"
        id="five"
        style="background: url('/img/slider-img-5.jpg') no-repeat 50% 50%; background-size: cover"
      ></div>
      <div
        class="image_slide"
        id="six"
        style="background: url('/img/slider-img-5.jpg') no-repeat 50% 50%; background-size: cover"
      ></div>
    </div>
  </Carousel>
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
  }
}
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
  overflow: hidden;
}

.image_slider {
  z-index: 0;
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
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  .carousel__slide.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  .carousel__slide--active {
    transform: scale(1.2);
    transition: transform 0.8s 1.4s cubic-bezier(0.84, 0, 0.08, 0.99);
  }
}
.carousel__slide {
  transition: transform 0.7s cubic-bezier(0.84, 0, 0.08, 0.99);
}
.slide_control {
  margin: 0;
  position: absolute;
  z-index: 2;
  bottom: 8%;
  left: 15%;
  transform: translate(-50%, -50%);
  display: flex;
}
button {
  color: #fff;
  background: none;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  border-radius: 50%;
  margin: 0.4rem;
  display: inline-block;
}
button:focus {
  outline: none;
}
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
.text-slider_wrapper {
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
}
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
