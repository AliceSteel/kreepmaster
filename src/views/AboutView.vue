<template>
  <section class="w-full min-h-screen pt-[30vh]">
    <div class="w-3/4 container mx-auto grid grid-rows-2 grid-flow-col gap-8">
      <div class="row-span-2 p-4"><img src="/img/info.png" alt="info" /></div>

      <h2 class="col-span-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure voluptatibus at aliquam
        nulla explicabo ipsam magnam! Iusto, provident adipisci consequuntur ipsam reprehenderit
        ullam quam, tenetur numquam dolore soluta suscipit.
      </h2>
      <p class="col-span-2 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse quae qui ratione
        ea! Reiciendis quos ratione illum. Voluptatibus dolor rerum nam unde, officiis doloremque
        minus culpa officia nostrum aspernatur!
      </p>
    </div>

    <div class="w-full h-full py-8">
      <img src="/img/arrows2.png" alt="arrows" srcset="" />
    </div>
  </section>
  <section id="contact">
    <div class="w-3/4 container mx-auto grid grid-flow-col gap-8 pb-[10vh]">
      <div class="row-span-2 p-4"><img src="/img/contact.png" alt="info" /></div>
      <h2 class="col-span-2">
        Fill out the booking form below to ask any questions, or reach out to us directly at
        kreepomatic@gmail.com with any questions or concerns.
      </h2>
      <div class="col-span-2">
        <contact-form />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'AboutView',
  components: { ContactForm }
}
</script>

<style scoped>
.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
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
