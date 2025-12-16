<template>
  <section class="py-32 bg-[#FDFCF9] text-stone-900 overflow-x-hidden overflow-y-visible">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-visible">
         
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          class="w-full min-w-0 overflow-visible"
        >
          <h2 class="text-5xl md:text-7xl font-bold mb-8 text-stone-900">
            {{ $t('valueCurve.title') }}<br/>{{ $t('valueCurve.titleLine2') }}
          </h2>
          <p class="text-xl text-stone-500 font-light leading-relaxed mb-12 break-words whitespace-normal">
            {{ $t('valueCurve.description') }}<br/>
            <span class="text-sm mt-4 block text-stone-400 break-words whitespace-normal">{{ $t('valueCurve.note') }}</span>
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visibleOnce="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 200 }"
            class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-600/30"
          >
            <div class="text-4xl font-bold text-amber-600 mb-2">25.5%</div>
            <div class="text-stone-500 text-sm">{{ $t('valueCurve.growth') }}</div>
            <div class="mt-4 text-xs text-stone-400">
              {{ $t('valueCurve.growthNote') }}
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 300 }"
          class="relative h-[600px] lg:h-[400px] w-full overflow-visible"
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
import { useI18n } from 'vue-i18n';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

const { t } = useI18n();

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
const mainData = computed(() => [
  { name: t('valueCurve.dataPoints.2025'), price: 600, label: '600' },
  { name: t('valueCurve.dataPoints.2019'), price: 3144, label: '3.9k' },
  { name: t('valueCurve.dataPoints.2015'), price: 6811, label: '5.5k' },
  { name: t('valueCurve.dataPoints.2010'), price: 18043, label: '20k' },
]);


const chartOption = computed(() => {
  // 移动端：上下布局；PC端：左右布局
  const grids = [
    // 主图表
    {
      left: isMobile.value ? '5%' : '3%',
      right: isMobile.value ? '2%' : '3%',
      top: isMobile.value ? '8%' : '8%',
      bottom: isMobile.value ? '35%' : '28%',
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
      data: mainData.value.map(item => item.name),
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
        ? t('valueCurve.chartNote').replace('\n', '\n')
        : t('valueCurve.chartNote'),
      nameLocation: 'middle',
      nameGap: isMobile.value ? 45 : 55,
      nameTextStyle: {
        color: '#D97706',
        fontSize: isMobile.value ? 12 : 18,
        fontWeight: 'bold',
        lineHeight: isMobile.value ? 15 : 20,
        rich: {},
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
      data: mainData.value.map(item => item.price),
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
            coord: [t('valueCurve.dataPoints.2010'), 18043],
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
  overflow: visible;
}

@media (max-width: 1023px) {
  .chart {
    min-height: 600px;
  }
}

/* 确保ECharts容器内的文字不被截断 */
:deep(.echarts) {
  overflow: visible !important;
}

:deep(canvas) {
  max-width: 100% !important;
}
</style>
