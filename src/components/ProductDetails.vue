<template>
  <section class="py-32 bg-[#F9F7F2] text-stone-900 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F2EFE9] to-transparent pointer-events-none opacity-50"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
        <!-- Image Grid -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          class="grid grid-cols-2 gap-4"
        >
          <div class="space-y-4">
            <div class="h-64 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=1080" 
                alt="Storage Warehouse"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
            </div>
            <div class="h-40 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1563366061-ce2d6829f3c8?auto=format&fit=crop&q=80&w=1080" 
                alt="Tangerine Drying"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
            </div>
          </div>
          <div class="space-y-4 pt-8">
            <div class="h-40 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=1080" 
                alt="Macro Texture"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
            </div>
            <div class="h-64 rounded-2xl overflow-hidden border border-stone-200 relative bg-white flex items-center justify-center shadow-lg product-image-card">
              <div class="text-center">
                <QrCode :size="48" class="text-amber-600 mx-auto mb-2 opacity-80" />
                <div class="font-mono text-xs text-stone-400">HASH: 0x8f...3a1</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 200 }"
        >
          <div class="inline-flex items-center space-x-2 text-amber-600 mb-4">
            <ShieldCheck :size="16" />
            <span class="text-sm tracking-wider uppercase font-bold">Asset backed NFT</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight text-stone-900">
            每一枚 NFT，都对应<br/>一筐看得见的陈皮
          </h2>

          <div class="space-y-6 font-light text-stone-600 text-lg">
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>产地</span>
              <span class="text-stone-900 font-medium flex items-center">
                <MapPin :size="16" class="mr-2 text-amber-600"/>新会核心产区（国家地理标志）
              </span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>品种</span>
              <span class="text-stone-900 font-medium">茶枝柑（正宗道地）</span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>仓储</span>
              <span class="text-stone-900 font-medium text-right">
                中国供销·江门新会陈皮产业园<br/>
                <span class="text-xs text-stone-500">3.6 万㎡国资恒温仓</span>
              </span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>保险</span>
              <span class="text-stone-900 font-medium">中国平安全额财产险</span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>溯源</span>
              <span class="text-stone-900 font-medium">蚂蚁链上链 + 数据产权证书</span>
            </div>
            <div class="flex items-center justify-between pt-2 detail-item">
              <span>仓储费用</span>
              <span class="text-amber-600 font-bold">首 5 年免费</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, QrCode, ShieldCheck } from 'lucide-vue-next';
import ImageWithFallback from './figma/ImageWithFallback.vue';
</script>

<style scoped>
.product-image-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #D97706;
}

.product-image-card:hover img {
  transform: scale(1.1);
  filter: grayscale(0%);
}

.detail-item {
  transition: all 0.2s ease;
}

.detail-item:hover {
  padding-left: 8px;
  padding-right: 8px;
  background-color: rgba(217, 119, 6, 0.05);
  border-radius: 8px;
}
</style>
