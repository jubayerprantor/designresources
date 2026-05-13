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
// No logic needed, purely visual CSS animation composition
</script>

<style>
/* ============================================================
   CANVA-DESIGNED 3D GLASSMORPHIC HERO COMPOSITION (2D BACKED)
   ============================================================ */

.custom-hero-composition {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 320px;
  position: relative;
  overflow: visible;
}

.composition-wrap {
  position: relative;
  width: 280px;
  height: 280px;
}

/* Keyframes using high-performance, hardware-independent 2D fallback paths */

@-webkit-keyframes float1 {
  0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
  50% { -webkit-transform: translateY(-12px) rotate(180deg); transform: translateY(-12px) rotate(180deg); }
}
@keyframes float1 {
  0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
  50% { -webkit-transform: translateY(-12px) rotate(180deg); transform: translateY(-12px) rotate(180deg); }
}

@-webkit-keyframes float2 {
  0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
  50% { -webkit-transform: translateY(-8px) rotate(-180deg); transform: translateY(-8px) rotate(-180deg); }
}
@keyframes float2 {
  0%, 100% { -webkit-transform: translateY(0) rotate(0deg); transform: translateY(0) rotate(0deg); }
  50% { -webkit-transform: translateY(-8px) rotate(-180deg); transform: translateY(-8px) rotate(-180deg); }
}

@-webkit-keyframes orbit {
  0% { -webkit-transform: rotate(0deg) translateX(90px) rotate(0deg); transform: rotate(0deg) translateX(90px) rotate(0deg); }
  100% { -webkit-transform: rotate(360deg) translateX(90px) rotate(-360deg); transform: rotate(360deg) translateX(90px) rotate(-360deg); }
}
@keyframes orbit {
  0% { -webkit-transform: rotate(0deg) translateX(90px) rotate(0deg); transform: rotate(0deg) translateX(90px) rotate(0deg); }
  100% { -webkit-transform: rotate(360deg) translateX(90px) rotate(-360deg); transform: rotate(360deg) translateX(90px) rotate(-360deg); }
}

@-webkit-keyframes orbit2 {
  0% { -webkit-transform: rotate(120deg) translateX(110px) rotate(-120deg); transform: rotate(120deg) translateX(110px) rotate(-120deg); }
  100% { -webkit-transform: rotate(480deg) translateX(110px) rotate(-480deg); transform: rotate(480deg) translateX(110px) rotate(-480deg); }
}
@keyframes orbit2 {
  0% { -webkit-transform: rotate(120deg) translateX(110px) rotate(-120deg); transform: rotate(120deg) translateX(110px) rotate(-120deg); }
  100% { -webkit-transform: rotate(480deg) translateX(110px) rotate(-480deg); transform: rotate(480deg) translateX(110px) rotate(-480deg); }
}

@-webkit-keyframes drift {
  0%, 100% { -webkit-transform: translateY(0) translateX(0); transform: translateY(0) translateX(0); opacity: 0.6; }
  50% { -webkit-transform: translateY(-6px) translateX(3px); transform: translateY(-6px) translateX(3px); opacity: 1; }
}
@keyframes drift {
  0%, 100% { -webkit-transform: translateY(0) translateX(0); transform: translateY(0) translateX(0); opacity: 0.6; }
  50% { -webkit-transform: translateY(-6px) translateX(3px); transform: translateY(-6px) translateX(3px); opacity: 1; }
}

@-webkit-keyframes pulse-sphere {
  0%, 100% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.15); }
  50% { box-shadow: 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 60px rgba(139, 92, 246, 0.25); }
}
@keyframes pulse-sphere {
  0%, 100% { box-shadow: 0 0 60px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.15); }
  50% { box-shadow: 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 60px rgba(139, 92, 246, 0.25); }
}

/* 2D equivalent torus elliptic spinning avoids GPU 3D transform blocks */
@-webkit-keyframes torus-spin {
  0% { -webkit-transform: scaleY(0.4) rotate(0deg); transform: scaleY(0.4) rotate(0deg); }
  100% { -webkit-transform: scaleY(0.4) rotate(360deg); transform: scaleY(0.4) rotate(360deg); }
}
@keyframes torus-spin {
  0% { -webkit-transform: scaleY(0.4) rotate(0deg); transform: scaleY(0.4) rotate(0deg); }
  100% { -webkit-transform: scaleY(0.4) rotate(360deg); transform: scaleY(0.4) rotate(360deg); }
}

@-webkit-keyframes torus-spin2 {
  0% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(0deg); transform: scaleY(0.5) rotate(45deg) rotate(0deg); }
  100% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(-360deg); transform: scaleY(0.5) rotate(45deg) rotate(-360deg); }
}
@keyframes torus-spin2 {
  0% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(0deg); transform: scaleY(0.5) rotate(45deg) rotate(0deg); }
  100% { -webkit-transform: scaleY(0.5) rotate(45deg) rotate(-360deg); transform: scaleY(0.5) rotate(45deg) rotate(-360deg); }
}

/* Sphere styling */
.sphere-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 2;
}

.sphere {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.05) 60%, transparent 80%);
  border: 1px solid rgba(139, 92, 246, 0.2);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  -webkit-animation: pulse-sphere 4s ease-in-out infinite;
  animation: pulse-sphere 4s ease-in-out infinite;
  position: relative;
}

.sphere::after {
  content: '';
  position: absolute;
  top: 15%;
  left: 20%;
  width: 30%;
  height: 20%;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(255, 255, 255, 0.25), transparent);
}

/* Torus Rings utilizing scaleY to bypass 3D transform acceleration bugs */
.torus {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 2px solid rgba(245, 158, 11, 0.4);
  -webkit-animation: torus-spin 20s linear infinite;
  animation: torus-spin 20s linear infinite;
  box-shadow: 0 0 12px rgba(245, 158, 11, 0.2);
  top: 30px;
  left: 30px;
  z-index: 1;
}

.torus2 {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 1.5px solid rgba(245, 158, 11, 0.25);
  -webkit-animation: torus-spin2 28s linear infinite;
  animation: torus-spin2 28s linear infinite;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.15);
  top: 10px;
  left: 10px;
  z-index: 1;
}

/* Floating Cubes */
.cube {
  width: 28px;
  height: 28px;
  position: absolute;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.4));
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 4px;
  -webkit-animation: float1 6s ease-in-out infinite;
  animation: float1 6s ease-in-out infinite;
  box-shadow: 0 0 16px rgba(139, 92, 246, 0.3);
  z-index: 3;
}

.cube2 {
  width: 18px;
  height: 18px;
  position: absolute;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.3));
  border: 1px solid rgba(6, 182, 212, 0.3);
  border-radius: 3px;
  -webkit-animation: float2 8s ease-in-out infinite;
  animation: float2 8s ease-in-out infinite;
  box-shadow: 0 0 12px rgba(6, 182, 212, 0.3);
  z-index: 3;
}

/* Particles */
.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  -webkit-animation: drift 3s ease-in-out infinite;
  animation: drift 3s ease-in-out infinite;
  z-index: 1;
}

/* Orbiting Path Particles */
.orbiting-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.orbit-particle-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  margin: -3px;
  border-radius: 50%;
  background: #F59E0B;
  box-shadow: 0 0 8px #F59E0B;
  -webkit-animation: orbit 15s linear infinite;
  animation: orbit 15s linear infinite;
}

.orbit-particle-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  margin: -2.5px;
  border-radius: 50%;
  background: #06B6D4;
  box-shadow: 0 0 8px #06B6D4;
  -webkit-animation: orbit2 22s linear infinite;
  animation: orbit2 22s linear infinite;
}
</style>
