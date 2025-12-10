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
            新会陈皮的价值不靠炒作，靠分子结构随时间自我优化。<br/>
            <span class="text-sm mt-4 block text-stone-400">（挥发油、黄酮含量逐年提升，香气与药效更醇）</span>
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visibleOnce="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 200 }"
            class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-600/30"
          >
            <div class="text-4xl font-bold text-amber-600 mb-2">25.5%</div>
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
          class="relative h-[600px] lg:h-[400px]"
        >
          <v-chart
            :key="`chart-${isMobile}`"
            class="chart"
            :option="chartOption"
            autoresize
          />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
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

// 初始化时立即检测（在SSR环境中需要检查window是否存在）
const isMobile = ref(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

const checkMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 1024; // lg breakpoint
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  // 确保图表在正确的时机初始化
  nextTick(() => {
    checkMobile();
  });
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', checkMobile);
  }
});

// 主体数据（2025-2010年）
const mainData = [
  { name: '2025 (新皮)', price: 600, label: '600' },
  { name: '2019 (5年)', price: 3144, label: '3.9k' },
  { name: '2015 (10年)', price: 6811, label: '5.5k' },
  { name: '2010 (15年)', price: 18043, label: '20k' },
];


const chartOption = computed(() => {
  // 移动端：上下布局；PC端：左右布局
  const grids = [
    // 主图表
    {
      left: isMobile.value ? '12%' : '10%',
      right: isMobile.value ? '5%' : '10%',
      top: isMobile.value ? '10%' : '10%',
      bottom: isMobile.value ? '25%' : '20%',
      containLabel: true,
    },
  ];

  return {
    grid: grids,
    xAxis: [
    // 主X轴（2025-2010年）
    {
      type: 'category',
      gridIndex: 0,
      data: mainData.map(item => item.name),
      axisLine: { 
        show: true,
        lineStyle: { color: '#E7E5E4', width: 1 },
        onZero: false,
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#78716C',
        fontSize: isMobile.value ? 10 : 12,
          formatter: (value: string) => value,
        margin: isMobile.value ? 12 : 18,
        align: 'center',
        interval: 0, // 强制显示所有标签
      },
      boundaryGap: false,
      axisPointer: {
        type: 'line',
        snap: true,
      },
      // 主X轴正下方备注，样式与副X轴备注一致
      name: isMobile.value 
        ? '数据参考新会陈皮某品牌官网零售价，\n2025年的新皮刚刚启动销售，尚未得出准确市场数据'
        : '数据参考新会陈皮某品牌官网零售价，\n2025年的新皮刚刚启动销售，尚未得出准确市场数据',
      nameLocation: 'middle',
      nameGap: isMobile.value ? 40 : 55,
      nameTextStyle: {
        color: '#D97706',
        fontSize: isMobile.value ? 16 : 14,
        fontWeight: 'bold',
        lineHeight: isMobile.value ? 18 : 16,
      },
    },
  ],
  yAxis: [
    // 主Y轴（2025-2010年）
    {
      type: 'value',
      gridIndex: 0,
      show: true,
      scale: true,
      position: 'left',
      axisLine: { 
        show: true,
        lineStyle: { color: '#E7E5E4', width: 1 },
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#78716C',
        fontSize: isMobile.value ? 10 : 12,
        formatter: (value: number) => {
          if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
          return value.toString();
        },
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#FFFFFF',
    borderColor: '#E7E5E4',
    borderRadius: 8,
    textStyle: {
      color: '#D97706',
    },
    formatter: (params: any) => {
      if (Array.isArray(params)) {
        const param = params[0];
        if (param.value == null) return '';
        return `${param.name}<br/>¥${param.value.toLocaleString()} / 500g`;
      }
      return '';
    },
  },
  series: [
    // 主体数据系列（2025-2010年）
    {
      name: '主体数据',
      type: 'line',
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: mainData.map(item => item.price),
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
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        color: '#D97706',
      },
      markPoint: {
        data: [
          {
            name: '2010',
            coord: ['2010 (15年)', 18043],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#D97706',
            },
          },
        ],
      },
    },
  ],
  };
});
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
  min-height: 400px;
}

@media (max-width: 1023px) {
  .chart {
    min-height: 600px;
  }
}
</style>
