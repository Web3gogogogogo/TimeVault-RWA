<template>
  <section class="py-32 bg-[#F2EFE9] text-stone-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="text-center mb-20"
      >
        <h2 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-stone-900">
          新会陈皮，是东方最硬的<br/><span class="text-amber-600">「软黄金」</span>
        </h2>
        <p class="text-stone-500 max-w-2xl mx-auto text-lg">
          2010 年新会陈皮现价 2 万/斤 · 市场价格以泓达堂这个为准，老皮可以以政府组织的拍卖活动为准。<br/>
          <span class="text-stone-400 text-sm mt-2 block">—— 历史证明，时间从不辜负新会陈皮</span>
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center">
        <!-- Traditional -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 200 }"
          class="comparison-card bg-white p-8 rounded-3xl lg:rounded-r-none lg:pr-12 border border-stone-200 shadow-sm transition-all duration-300"
        >
          <h3 class="text-2xl font-bold text-stone-400 mb-8 text-center">传统资产</h3>
          <div class="space-y-6">
            <ComparisonItem :positive="false" text="流动性差" />
            <ComparisonItem :positive="false" text="真假难辨" />
            <ComparisonItem :positive="false" text="动辄几十万起" />
            <ComparisonItem :positive="false" text="价值靠情绪" />
            <ComparisonItem :positive="false" text="只能自己存" />
          </div>
        </div>

        <!-- RWA -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1 }"
          :transition="{ delay: 300 }"
          class="comparison-card-rwa bg-[#FAF9F6] p-10 rounded-3xl border-2 border-amber-500/20 shadow-[0_0_40px_rgba(217,119,6,0.08)] z-10 relative -my-4 lg:my-0 transition-all duration-300"
        >
          <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            New Era
          </div>
          <h3 class="text-3xl font-bold text-stone-900 mb-10 text-center">新会陈皮 RWA</h3>
          <div class="space-y-8">
            <ComparisonItem :positive="true" text="7×24 小时全球交易" />
            <ComparisonItem :positive="true" text="全链溯源 + 蚂蚁链数据产权证书" />
            <ComparisonItem :positive="true" text="88 USD拥有1斤实物资产" />
            <ComparisonItem :positive="true" text="时间越久，价值越高（自然复利）" />
            <ComparisonItem :positive="true" text="五年供销国企陈化仓 + 平安承保" />
          </div>
        </div>

        <div class="hidden lg:block bg-white p-8 h-[80%] rounded-r-3xl border-r border-y border-stone-200 shadow-sm opacity-60 pointer-events-none">
          <!-- Visual balance filler -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ComparisonItem from './ComparisonItem.vue';
</script>

<style scoped>
.comparison-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.comparison-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.comparison-card-rwa {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.comparison-card-rwa:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: #D97706;
  box-shadow: 0 0 60px rgba(217, 119, 6, 0.15);
}
</style>
