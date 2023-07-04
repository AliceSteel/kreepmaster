<template>
  <div>
    <section class="w-full h-screen flex flex-wrap">
      <div class="w-1/2 h-full flex justify-center items-center p-12 bg-white text-6xl text-black">
        404
      </div>
      <div class="w-1/2 h-full flex justify-start items-center p-12 bg-black text-5xl">
        <p>
          Sorry, but that page doesn't exist.<br />
          <router-link to="/" class="text-white menu_link_white">Back to Homepage</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '404Page'
}
</script>
