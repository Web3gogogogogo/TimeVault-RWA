<template>
  <section class="py-24 bg-[#F2EFE9] border-y border-stone-200 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <!-- 轮播容器 -->
        <div class="partners-carousel">
          <div class="partners-track">
            <!-- 第一组合作伙伴 -->
            <div
              v-for="(partner, index) in partners"
              :key="`first-${index}`"
              class="partner-item flex flex-col items-center gap-2 text-xl font-bold text-stone-400 transition-all duration-300 cursor-default uppercase tracking-widest whitespace-nowrap"
            >
              <img 
                v-if="partner.logo" 
                :src="partner.logo" 
                :alt="partner.name" 
                class="partner-logo max-w-full h-auto object-contain flex-shrink-0"
              />
              <span>{{ partner.name }}</span>
            </div>
            <!-- 第二组合作伙伴（用于无缝循环） -->
            <div
              v-for="(partner, index) in partners"
              :key="`second-${index}`"
              class="partner-item flex flex-col items-center gap-2 text-xl font-bold text-stone-400 transition-all duration-300 cursor-default uppercase tracking-widest whitespace-nowrap"
            >
              <img 
                v-if="partner.logo" 
                :src="partner.logo" 
                :alt="partner.name" 
                class="partner-logo max-w-full h-auto object-contain flex-shrink-0"
              />
              <span>{{ partner.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import logoSupplyCoop from '../assets/中国供销合作社.png';
import logoJiangmen from '../assets/江门新会陈皮产业园.png';
import logoAntChain from '../assets/蚂蚁链.png';
import logoPingAn from '../assets/中国平安.png';
import logoEthereum from '../assets/ethereum.png';
import logoPolygon from '../assets/polygon.png';

const partners = [
  { 
    name: '中国供销合作社',
    logo: logoSupplyCoop
  },
  { 
    name: '江门新会陈皮产业园',
    logo: logoJiangmen
  },
  { 
    name: '蚂蚁链 (AntChain)',
    logo: logoAntChain
  },
  { 
    name: '中国平安 (Ping An)',
    logo: logoPingAn
  },
  { 
    name: 'Ethereum',
    logo: logoEthereum
  },
  { 
    name: 'Polygon',
    logo: logoPolygon
  }
];
</script>

<style scoped>
.partners-carousel {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.partners-track {
  display: flex;
  gap: 4rem;
  animation: scroll 30s linear infinite;
  width: fit-content;
}

.partners-track:hover {
  animation-play-state: paused;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.partner-item {
  flex-shrink: 0;
  opacity: 0.6;
  padding: 0 1rem;
  width: fit-content;
}

.partner-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s ease;
  max-width: 100%;
  width: auto;
  height: auto;
  max-height: 4.5rem;
}

.partner-item:hover {
  color: #D97706;
  transform: scale(1.1);
  opacity: 1;
}

.partner-item:hover .partner-logo {
  filter: grayscale(0%);
  opacity: 1;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .partners-track {
    gap: 2rem;
  }
  
  .partner-item {
    font-size: 1rem;
  }
}
</style>
