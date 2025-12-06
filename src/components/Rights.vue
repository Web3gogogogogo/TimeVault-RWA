<template>
  <section class="py-32 bg-[#F9F7F2] text-stone-900 border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="mb-20"
      >
        <h2 class="text-4xl md:text-6xl font-bold mb-6 text-stone-900">
          买的不是 NFT<br/>是<span class="text-amber-600">时间的所有权</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 实物提取 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0 }"
          class="rights-card bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all duration-300 min-h-[180px] flex flex-col"
        >
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100 shadow-sm flex-shrink-0">
            <Truck :size="24" />
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">实物提取</h3>
          <p class="text-stone-500 text-sm flex-grow">随时全球发货到家</p>
        </div>

        <!-- 自然增值 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :transition="{ delay: 100 }"
          class="rights-card bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all duration-300 min-h-[180px] flex flex-col"
        >
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100 shadow-sm flex-shrink-0">
            <TrendingUp :size="24" />
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">自然增值</h3>
          <p class="text-stone-500 text-sm flex-grow">越存越值，坐享复利</p>
        </div>

        <!-- DAO 治理 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :transition="{ delay: 200 }"
          class="rights-card bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all duration-300 min-h-[180px] flex flex-col"
        >
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100 shadow-sm flex-shrink-0">
            <Vote :size="24" />
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">DAO 治理</h3>
          <p class="text-stone-500 text-sm flex-grow">创世会员 1.5× 投票权</p>
        </div>

        <!-- 积分空投 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :transition="{ delay: 300 }"
          class="rights-card bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all duration-300 min-h-[180px] flex flex-col"
        >
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100 shadow-sm flex-shrink-0">
            <Coins :size="24" />
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">积分空投</h3>
          <p class="text-stone-500 text-sm flex-grow">每持有 1 枚每月 +6 积分</p>
        </div>

        <!-- 优先认购 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :transition="{ delay: 400 }"
          class="rights-card bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all duration-300 min-h-[180px] flex flex-col"
        >
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100 shadow-sm flex-shrink-0">
            <Star :size="24" />
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">优先认购</h3>
          <p class="text-stone-500 text-sm flex-grow">未来所有 RWA 项目白名单</p>
        </div>

        <!-- 专属优惠 -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :transition="{ delay: 500 }"
          class="rights-card bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all duration-300 min-h-[180px] flex flex-col"
        >
          <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100 shadow-sm flex-shrink-0">
            <Crown :size="24" />
          </div>
          <h3 class="text-xl font-bold text-stone-900 mb-2">专属待遇</h3>
          <p class="text-stone-500 text-sm flex-grow">新会陈皮RWA基地研学考察</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Truck, TrendingUp, Vote, Coins, Star, Crown } from 'lucide-vue-next';
</script>

<style scoped>
.rights-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.rights-card:hover {
  transform: translateY(-8px) scale(1.02);
  background-color: #FFFFFF;
  border-color: #D97706;
  box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.1), 0 10px 10px -5px rgba(217, 119, 6, 0.04);
}

.rights-card:hover h3 {
  color: #D97706;
}

.rights-card:hover .w-12 {
  background-color: #FEF3C7;
  border-color: #D97706;
}
</style>
