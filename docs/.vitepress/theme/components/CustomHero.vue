<template>
  <div class="custom-hero-composition">
    <div class="composition-wrap">
      <div class="torus"></div>
      <div class="torus2"></div>
      <div class="sphere-wrap">
        <div class="sphere"></div>
      </div>
      <div class="cube" style="top: 20px; right: 10px; -webkit-animation-delay: -1s; animation-delay: -1s;"></div>
      <div class="cube2" style="bottom: 30px; left: 10px; -webkit-animation-delay: -2s; animation-delay: -2s;"></div>
      <div class="cube" style="bottom: 50px; right: 40px; width: 20px; height: 20px; -webkit-animation-delay: -3s; animation-delay: -3s; opacity: 0.6;"></div>
      <div class="cube2" style="top: 60px; left: 50px; -webkit-animation-delay: -4s; animation-delay: -4s;"></div>
      
      <!-- Particles -->
      <div class="particle" style="top: 10%; left: 20%; -webkit-animation-delay: 0s; animation-delay: 0s;"></div>
      <div class="particle" style="top: 30%; right: 5%; -webkit-animation-delay: -1s; animation-delay: -1s;"></div>
      <div class="particle" style="bottom: 20%; left: 30%; -webkit-animation-delay: -2s; animation-delay: -2s; width: 2px; height: 2px;"></div>
      <div class="particle" style="top: 50%; left: 5%; -webkit-animation-delay: -0.5s; animation-delay: -0.5s;"></div>
      <div class="particle" style="bottom: 10%; right: 20%; -webkit-animation-delay: -1.5s; animation-delay: -1.5s; width: 2px; height: 2px;"></div>
      <div class="particle" style="top: 15%; left: 60%; -webkit-animation-delay: -2.5s; animation-delay: -2.5s;"></div>
      <div class="particle" style="bottom: 40%; right: 10%; -webkit-animation-delay: -0.8s; animation-delay: -0.8s; width: 2px; height: 2px; background: rgba(139,92,246,0.6);"></div>
      <div class="particle" style="top: 70%; left: 15%; -webkit-animation-delay: -1.2s; animation-delay: -1.2s; background: rgba(6,182,212,0.5);"></div>

      <!-- Orbiting elements -->
      <div class="orbiting-wrap">
        <div class="orbit-particle-1"></div>
        <div class="orbit-particle-2"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Purely visual composition component. Styles are injected via config.mjs to ensure un-shakable delivery.
</script>
