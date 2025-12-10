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
          {{ $t('comparison.title') }}<br/><span class="text-amber-600">{{ $t('comparison.titleHighlight') }}</span>
        </h2>
        <p class="text-stone-500 max-w-2xl mx-auto text-lg">
          {{ $t('comparison.subtitle') }}<br/>
          <span class="block">{{ $t('comparison.subtitleSource') }}</span>
          <span class="text-stone-400 text-sm mt-2 block">{{ $t('comparison.tagline') }}</span>
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
          <h3 class="text-2xl font-bold text-stone-400 mb-8 text-center">{{ $t('comparison.traditional.title') }}</h3>
          <div class="space-y-6">
            <ComparisonItem 
              v-for="(item, index) in traditionalItems" 
              :key="index"
              :positive="false" 
              :text="item" 
            />
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
            {{ $t('comparison.rwa.badge') }}
          </div>
          <h3 class="text-3xl font-bold text-stone-900 mb-10 text-center">{{ $t('comparison.rwa.title') }}</h3>
          <div class="space-y-8">
            <ComparisonItem 
              v-for="(item, index) in rwaItems" 
              :key="index"
              :positive="true" 
              :text="item" 
            />
          </div>
        </div>

        <!-- Digital Asset -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 400 }"
          class="comparison-card bg-white p-8 rounded-3xl lg:rounded-l-none lg:pl-12 border border-stone-200 shadow-sm transition-all duration-300"
        >
          <h3 class="text-2xl font-bold text-stone-400 mb-8 text-center">{{ $t('comparison.digital.title') }}</h3>
          <div class="space-y-6">
            <ComparisonItem 
              v-for="(item, index) in digitalItems" 
              :key="index"
              :positive="true" 
              :text="item" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '../i18n';
import ComparisonItem from './ComparisonItem.vue';

const { locale } = useI18n();

// 直接从i18n实例获取数组，避免t()函数的问题
const traditionalItems = computed(() => {
  const messages = (i18n.global.messages.value as any)[locale.value] as any;
  const items = messages?.comparison?.traditional?.items;
  return Array.isArray(items) ? items : [];
});

const rwaItems = computed(() => {
  const messages = (i18n.global.messages.value as any)[locale.value] as any;
  const items = messages?.comparison?.rwa?.items;
  return Array.isArray(items) ? items : [];
});

const digitalItems = computed(() => {
  const messages = (i18n.global.messages.value as any)[locale.value] as any;
  const items = messages?.comparison?.digital?.items;
  return Array.isArray(items) ? items : [];
});
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
