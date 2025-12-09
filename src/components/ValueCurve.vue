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

// 主体数据（2025-2010年）
const mainData = [
  { name: '2025 (新皮)', price: 600, label: '600' },
  { name: '2019 (5年)', price: 3144, label: '3.9k' },
  { name: '2015 (10年)', price: 6811, label: '5.5k' },
  { name: '2010 (15年)', price: 18043, label: '20k' },
];

// 早期数据（1987年）
const earlyData = [
  { name: '1987 (39年)', price: 2560000, label: '3.76M' },
];

const chartOption = {
  // 主坐标系（显示2025-2010年）
  grid: [
    {
      left: '5%',
      right: '35%',
      top: '10%',
      bottom: '15%',
      containLabel: false,
    },
    // 右上角独立坐标系（显示1987年）
    {
      left: '65%',
      right: '8%',
      top: '5%',
      bottom: '60%',
      containLabel: false,
    },
  ],
  xAxis: [
    // 主X轴（2025-2010年）
    {
      type: 'category',
      gridIndex: 0,
      data: [...mainData.map(item => item.name), '...'], // 添加断裂标记
      axisLine: { 
        show: true,
        lineStyle: { color: '#E7E5E4', width: 1 },
        onZero: false,
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#78716C',
        fontSize: 12,
        formatter: (value: string) => {
          if (value === '...') return '⋯';
          return value;
        },
        margin: 18,
      },
      boundaryGap: false,
      // 主X轴正下方备注，样式与副X轴备注一致
      name: '*数据参考新会陈皮某品牌官网零售价，2025年的新皮刚刚启动销售，尚未得出准确市场数据*',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        color: '#D97706',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
    // 副X轴（1987年，右上角）
    {
      type: 'category',
      gridIndex: 1,
      data: ['', '1987 (39年)', ''],
      axisLine: { 
        show: true,
        lineStyle: { color: '#D97706', width: 1 },
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#78716C',
        fontSize: 11,
        showMinLabel: false,
        showMaxLabel: false,
      },
      boundaryGap: false,
      // 添加副X轴备注
      name: '数据来源于2024年助力乡村振兴慈善活动',
      nameLocation: 'middle',
      nameGap: 35,
      nameTextStyle: {
        color: '#D97706',
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
  ],
  yAxis: [
    // 主Y轴（2025-2010年）
    {
      type: 'value',
      gridIndex: 0,
      show: false,
      scale: true,
    },
    // 副Y轴（1987年，右上角）
    {
      type: 'value',
      gridIndex: 1,
      show: true,
      position: 'right',
      axisLine: { 
        show: true,
        lineStyle: { color: '#D97706', width: 1 },
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#78716C',
        fontSize: 10,
        margin: 8,
        formatter: (value: number) => {
          if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
          if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
          return value.toString();
        },
      },
      splitLine: {
        show: true,
        lineStyle: { color: '#E7E5E4', type: 'dashed', width: 1 },
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
  graphic: [
    // 绘制从2010到1987的虚线连接（从主坐标系右侧指向右上角坐标系）
    {
      type: 'group',
      left: '60%',  // 主坐标系右侧边缘（grid[0]的right是35%，所以60%是主坐标系右边缘）
      top: '50%',   // 主坐标系中2010年数据点的Y位置（根据数据值计算）
      children: [
        {
          type: 'line',
          shape: {
            x1: 0,
            y1: 0,
            x2: 35,  // 向右上方延伸，指向右上角坐标系
            y2: -200, // 向上延伸
          },
          style: {
            stroke: '#D97706',
            lineDash: [10, 5],
            lineWidth: 2,
            opacity: 0.5,
          },
        },
        // 添加一个小箭头指向右上角
        {
          type: 'polygon',
          shape: {
            points: [
              [35, -200],
              [30, -195],
              [30, -205],
            ],
          },
          style: {
            fill: '#D97706',
            opacity: 0.5,
          },
        },
      ],
    },
  ],
  series: [
    // 主体数据系列（2025-2010年）
    {
      name: '主体数据',
      type: 'line',
      xAxisIndex: 0,
      yAxisIndex: 0,
      data: [...mainData.map(item => item.price), null], // 添加null表示断裂
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
            coord: ['2010 (15年)', 20000],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#D97706',
            },
          },
        ],
      },
    },
    // 早期数据系列（1987年，右上角）
    {
      name: '早期数据',
      type: 'line',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: [null, earlyData[0].price, null],
      smooth: false,
      lineStyle: {
        color: '#D97706',
        width: 2,
      },
      symbol: 'circle',
      symbolSize: 10,
      itemStyle: {
        color: '#D97706',
      },
      markPoint: {
        data: [
          {
            name: '1987',
            coord: [1, earlyData[0].price],
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
              color: '#D97706',
            },
            label: {
              show: true,
              formatter: '3.76M',
              color: '#D97706',
              fontSize: 12,
              fontWeight: 'bold',
            },
          },
        ],
      },
    },
  ],
};
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
