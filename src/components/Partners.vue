<template>
  <section class="py-24 bg-[#F2EFE9] border-y border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60"
      >
        <div
          v-for="(partner, index) in partners"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visibleOnce="{ opacity: 1, scale: 1 }"
          :transition="{ delay: index * 50 }"
          class="partner-item text-xl font-bold text-stone-400 transition-all duration-300 cursor-default uppercase tracking-widest"
        >
          {{ partner }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  '中国供销合作社',
  '江门新会陈皮产业园',
  '蚂蚁链 (AntChain)',
  '中国平安 (Ping An)',
  'Ethereum',
  'Polygon'
];
</script>

<style scoped>
.partner-item:hover {
  color: #D97706;
  transform: scale(1.1);
  opacity: 1;
}
</style>
