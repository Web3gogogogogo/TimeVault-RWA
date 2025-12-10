<template>
  <section class="py-32 bg-[#FDFCF9] text-stone-900 border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          class="lg:col-span-4"
        >
          <h2 class="text-4xl font-bold sticky top-32 text-stone-900">{{ $t('roadmap.title') }}</h2>
        </div>
        
        <div class="lg:col-span-8 relative border-l border-stone-200 pl-8 md:pl-16 space-y-20">
          <div
            v-for="(step, index) in steps"
            :key="index"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :transition="{ delay: index * 100 }"
            class="relative roadmap-item transition-all duration-300 hover:pl-4"
          >
            <div class="absolute -left-[39px] md:-left-[71px] top-2 w-5 h-5 rounded-full bg-[#FDFCF9] border-4 border-amber-600 transition-all duration-300 roadmap-dot"></div>
            <div class="text-amber-600 font-mono text-lg mb-2">{{ step.year }}</div>
            <h3 class="text-2xl font-bold text-stone-900 mb-2">{{ step.title }}</h3>
            <p class="text-stone-500">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const steps = computed(() => [
  { 
    year: '2025', 
    title: t('roadmap.steps.2025.title'), 
    desc: t('roadmap.steps.2025.desc') 
  },
  { 
    year: '2026', 
    title: t('roadmap.steps.2026.title'), 
    desc: t('roadmap.steps.2026.desc') 
  },
  { 
    year: '2027', 
    title: t('roadmap.steps.2027.title'), 
    desc: t('roadmap.steps.2027.desc') 
  },
  { 
    year: '2028+', 
    title: t('roadmap.steps.2028+.title'), 
    desc: t('roadmap.steps.2028+.desc') 
  },
]);
</script>

<style scoped>
.roadmap-item:hover .roadmap-dot {
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(217, 119, 6, 0.5);
}

.roadmap-item:hover h3 {
  color: #D97706;
}
</style>
