<template>
  <section class="py-32 bg-[#FDFCF9] text-stone-900 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
         
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
        >
          <h2 class="text-5xl md:text-7xl font-bold mb-8 text-stone-900">
            时间，<br/>就是收益率
          </h2>
          <p class="text-xl text-stone-500 font-light leading-relaxed mb-12">
            陈皮的价值不靠炒作，靠分子结构随时间自我优化。<br/>
            <span class="text-sm mt-4 block text-stone-400">（挥发油、黄酮含量逐年提升，香气与药效更醇）</span>
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visibleOnce="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 200 }"
            class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-600/30"
          >
            <div class="text-4xl font-bold text-amber-600 mb-2">18.7%</div>
            <div class="text-stone-500 text-sm">过去 15 年平均年化增长</div>
            <div class="mt-4 text-xs text-stone-400">
              且越老越稀缺，曲线只会更陡
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 300 }"
          class="relative h-[400px] lg:h-auto"
        >
          <v-chart
            class="chart"
            :option="chartOption"
            autoresize
          />
          
          <!-- Overlay Stats -->
          <div class="absolute top-10 right-10 text-right hidden sm:block">
            <div class="text-amber-600 font-mono text-sm">1987 VINTAGE</div>
            <div class="text-stone-900 font-bold text-xl">¥3,760,000 / 50g</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
]);

const chartData = [
  { name: '2025 (新皮)', price: 600, label: '600' },
  { name: '2019 (5年)', price: 3900, label: '3.9k' },
  { name: '2015 (10年)', price: 5500, label: '5.5k' },
  { name: '2010 (15年)', price: 20000, label: '20k' },
  { name: '1987 (38年)', price: 3760000, label: '3.76M' },
];

const chartOption = {
  xAxis: {
    type: 'category',
    data: chartData.map(item => item.name),
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: '#78716C',
      fontSize: 12,
    },
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E5E4',
    borderRadius: 8,
    textStyle: {
      color: '#D97706',
    },
  },
  series: [
    {
      data: chartData.map(item => item.price),
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#D97706',
        width: 3,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0.05, color: 'rgba(217, 119, 6, 0.2)' },
            { offset: 0.95, color: 'rgba(217, 119, 6, 0)' },
          ],
        },
      },
    },
  ],
  grid: {
    left: 0,
    right: 0,
    top: 20,
    bottom: 20,
  },
};
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
