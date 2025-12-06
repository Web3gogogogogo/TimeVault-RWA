<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F9F7F2] text-stone-900 pt-20">
    <!-- Background Particles/Texture -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 invert"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[120px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
      
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
        class="mb-6"
      >
        <span class="inline-block px-4 py-1.5 border border-amber-600/20 rounded-full bg-amber-500/5 text-amber-700 text-sm tracking-[0.2em] uppercase font-medium">
          Global First RWA NFT
        </span>
      </div>

      <h1
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 100 }"
        class="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4 text-stone-900"
      >
        陈皮纪元
      </h1>

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 200 }"
        class="text-xl md:text-2xl text-stone-500 font-light tracking-wide mb-12 max-w-2xl mx-auto"
      >
        全球首枚增值型 RWA：新会陈皮创岁纪元 NFT (2025)
      </p>

      <!-- Main Visual - Floating Slice -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :visibleOnce="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1000, delay: 300 }"
        class="flex flex-col md:block items-center mb-12"
      >
        <!-- Image Container -->
        <div class="relative w-64 h-64 md:w-96 md:h-96">
          <div class="absolute inset-0 rounded-full bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl"></div>
          <div class="w-full h-full relative z-10 rotating-image">
            <ImageWithFallback
              :src="chenpiImg"
              alt="Aged Tangerine Peel"
              class="w-full h-full object-cover rounded-full mask-radial-faded opacity-90 shadow-2xl border border-white/40"
              :style="{
                maskImage: 'radial-gradient(black 60%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(black 60%, transparent 100%)'
              }"
            />
          </div>
          
          <!-- Floating Data Points - PC端保持原样 -->
          <div class="pc-data-point absolute top-0 right-0 md:-right-20 bg-white/80 backdrop-blur border border-stone-200 p-4 rounded-xl text-left shadow-xl z-20">
            <div class="text-xs text-stone-500 mb-1 uppercase tracking-wider">APIC</div>
            <div class="text-2xl font-bold text-amber-600">15-25%</div>
            <div class="text-xs text-stone-400">自然复利</div>
          </div>

          <div class="pc-data-point absolute bottom-0 left-0 md:-left-20 bg-white/80 backdrop-blur border border-stone-200 p-4 rounded-xl text-left shadow-xl z-20">
            <div class="text-xs text-stone-500 mb-1 uppercase tracking-wider">RWA锚定</div>
            <div class="text-2xl font-bold text-stone-900">100%实物资产</div>
          </div>
        </div>
        
        <!-- Mobile端描述框 - 图片下方水平排列 -->
        <div class="flex md:hidden gap-4 mt-6 justify-center w-full">
          <div class="bg-white/80 backdrop-blur border border-stone-200 p-4 rounded-xl text-left shadow-xl">
            <div class="text-xs text-stone-500 mb-1 uppercase tracking-wider">APIC</div>
            <div class="text-2xl font-bold text-amber-600">15-25%</div>
            <div class="text-xs text-stone-400">自然复利</div>
          </div>

          <div class="bg-white/80 backdrop-blur border border-stone-200 p-4 rounded-xl text-left shadow-xl">
            <div class="text-xs text-stone-500 mb-1 uppercase tracking-wider">RWA锚定</div>
            <div class="text-2xl font-bold text-stone-900">100%实物资产</div>
          </div>
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 400 }"
        class="flex flex-col items-center space-y-6"
      >
        <h2 class="text-3xl md:text-5xl font-bold text-stone-800 mb-2">把时间装进钱包</h2>
        <p class="text-stone-500 max-w-xl">
          1 枚 NFT = 1 斤 2025 年新会核心产区新皮<br/>
          <span class="text-amber-600/90 font-medium">限量 66,660 枚（永不再增发）</span>
        </p>

        <button class="orange-button group relative px-10 py-5 text-white font-bold rounded-full transition-all flex items-center space-x-3">
          <Wallet :size="20" />
          <span>立即购买</span>
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Wallet } from 'lucide-vue-next';
import ImageWithFallback from './figma/ImageWithFallback.vue';
import chenpiImg from '../assets/chenpi.png';
</script>

<style scoped>
.rotating-image {
  animation: rotate 60s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.orange-button {
  background-color: #E17100;
}

.orange-button:hover {
  background-color: #C96100;
  box-shadow: 0 0 30px rgba(225, 113, 0, 0.3);
}

/* PC端描述框在移动端隐藏 */
.pc-data-point {
  display: none;
}

@media (min-width: 768px) {
  .pc-data-point {
    display: block;
  }
}
</style>
