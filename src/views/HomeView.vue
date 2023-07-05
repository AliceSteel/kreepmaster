<template>
  <section
    class="w-full h-screen bg-cover bg-center"
    style="background-image: url('/img/homepage.png')"
  >
    <div class="container_glitch font-[Exan]">
      <div class="glitch" data-text="KreepMaster">kreepmaster</div>
      <div class="glow">kreepmaster</div>
      <p class="subtitle">instrumental metal</p>
    </div>
    <div class="scanlines"></div>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.container_glitch {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: fit-content;
}

.glitch {
  color: #fff;
  position: relative;
  font-size: 7vw;
  animation: glitch 5s 5s infinite;
}

.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: -5px 0 magenta;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
}

.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -5px 0 lightgreen;
  background: black;
  overflow: hidden;
  top: 0;
  animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
}

@keyframes glitch {
  1% {
    transform: rotateX(10deg) skewX(90deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}

@keyframes noise-1 {
  $steps: 30;
  @for $i from 1 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

@keyframes noise-2 {
  $steps: 30;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      $top: random(100);
      $bottom: random(101 - $top);
      clip-path: inset(#{$top}px 0 #{$bottom}px 0);
    }
  }
}

.scanlines {
  overflow: hidden;
  mix-blend-mode: difference;
}

.scanlines::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 98%;
  top: 0;
  left: 0;

  background: repeating-linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 255, 133, 0.15) 0.5%,
    transparent 1%
  );

  animation: fudge 7s ease-in-out alternate infinite;
}

@keyframes fudge {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 2%);
  }
}

.glow {
  color: #fff;
  position: relative;
  font-size: 7vw;
  animation: glitch 5s 5s infinite;
  text-shadow: 0 0 1000px rgb(223, 191, 191);
  color: transparent;
  position: absolute;
  top: 0;
}

.subtitle {
  font-size: 0.8vw;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  position: absolute;
  top: 200%;
  text-align: center;
  animation: glitch-2 5s 5.02s infinite;
}

@keyframes glitch-2 {
  1% {
    transform: rotateX(10deg) skewX(70deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>
