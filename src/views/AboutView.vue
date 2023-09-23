<template>
  <section class="w-full min-h-screen pt-[30vh] flex flex-col justify-between mb-8">
    <div class="container sm:w-3/4 mx-auto grid grid-col-2 grid-row-3 gap-8">
      <div class="row-span-2 p-4"><img src="/img/info.png" alt="info" /></div>

      <h2 class="w-full">A relentless fusion of metallic mayhem and cybernetic chaos.</h2>
      <p class="text-lg w-full">
        This one-man metal band from the dystopian depths of a future unknown harnesses the raw
        power of steel and circuitry to forge a sonic experience like no other. With meaty guitar
        riffs that evoke the gritty, neon-lit streets of a cyberpunk metropolis, thunderous
        industrial rhythms that pound like the heart of a machine.
      </p>
      <p class="col-span-2 text-lg w-full">
        KreepMaster propels you into a relentless, dystopian soundscape. His music is a relentless
        journey through the digital abyss, inviting you to immerse yourself in the pulse of the
        future's mechanical heart.
      </p>
    </div>

    <div class="hidden sm:block w-full h-full py-8 overflow-hidden">
      <img src="/img/arrows2.png" alt="arrows" />
    </div>
  </section>
  <section id="contact">
    <div class="container sm:w-3/4 mx-auto grid grid-flow-row sm:grid-flow-col gap-8 pb-[10vh]">
      <div class="sm:row-span-2 p-4">
        <picture>
          <source media="(max-width: 640px)" srcset="/img/contact_horiz.png" />
          <img src="/img/contact_vert.png" alt="contact" />
        </picture>
      </div>

      <h2>
        Fill out the form below to ask any questions, or reach out to us directly at
        kreepomatic@gmail.com with any questions or concerns.
      </h2>
      <div>
        <contact-form />
      </div>
    </div>
  </section>
  <app-footer />
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'AboutView',
  components: { ContactForm, AppFooter }
}
</script>

<style scoped>
.marquee {
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translate(-100%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}
</style>
