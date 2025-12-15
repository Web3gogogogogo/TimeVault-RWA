<template>
  <section class="py-32 bg-[#F9F7F2] text-stone-900 border-t border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="text-center mb-20"
      >
        <h2 class="text-4xl md:text-6xl font-bold mb-6 text-stone-900">
          {{ $t('compliance.title') }}
        </h2>
        <p class="text-stone-500 max-w-2xl mx-auto text-lg">
          {{ $t('compliance.subtitle') }}<br/>
          <span class="text-stone-400 text-sm mt-2 block">{{ $t('compliance.tagline') }}</span>
        </p>
      </div>

      <!-- 1:1真实锚定 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ delay: 100 }"
        class="mb-20"
      >
        <div class="relative bg-gradient-to-br from-white via-amber-50/20 to-orange-50/30 p-8 md:p-12 rounded-3xl border border-amber-200/50 shadow-xl overflow-hidden web3-card">
          <!-- 背景装饰 -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div class="relative z-10">
            <div class="text-center mb-12">
              <div class="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 mb-6 mx-auto shadow-lg web3-icon">
                <Link :size="40" class="text-white" />
              </div>
              <h3 class="text-4xl md:text-5xl font-black text-stone-900 mb-4 tracking-tight">
                1:1 <span class="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{{ $t('compliance.anchor.title') }}</span>
              </h3>
              <p class="text-base md:text-lg text-stone-600 max-w-2xl mx-auto font-light">
                {{ $t('compliance.anchor.description') }}
              </p>
            </div>
            
            <!-- 核心对应关系展示 - Web3风格 -->
            <div class="relative bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-amber-200/50 shadow-2xl mb-8 web3-anchor-box">
              <!-- 装饰性边框光效 -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 opacity-0 web3-border-glow"></div>
              
              <div class="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <!-- NFT 侧 -->
                <div class="text-center group">
                  <div class="inline-block bg-white p-8 rounded-2xl shadow-lg mb-4 web3-nft-badge border border-stone-200">
                    <div class="text-stone-900 font-black text-5xl md:text-6xl leading-tight">1 NFT</div>
                  </div>
                  <div class="text-stone-500 text-xs uppercase tracking-[0.2em] font-medium">{{ $t('compliance.anchor.nft') }}</div>
                </div>
                
                <!-- 等号连接 -->
                <div class="flex items-center gap-2 web3-equals">
                  <div class="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                  <div class="text-amber-600 font-black text-5xl md:text-6xl">=</div>
                  <div class="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
                </div>
                
                <!-- 实物侧 -->
                <div class="text-center group">
                  <div class="inline-block bg-white p-8 rounded-2xl shadow-lg mb-4 web3-physical-badge border border-stone-200">
                    <div class="text-stone-900 font-black text-5xl md:text-6xl leading-tight">{{ $t('compliance.anchor.physicalUnit') }}<span class="text-2xl md:text-3xl font-normal">{{ $t('compliance.anchor.initialWeight') }}</span></div>
                  </div>
                  <div class="text-stone-500 text-xs uppercase tracking-[0.2em] font-medium">{{ $t('compliance.anchor.physical') }}</div>
                  <div v-if="locale === 'en' || locale === 'zh-TW'" class="text-amber-600 text-xs mt-1 italic">*{{ $t('compliance.anchor.physicalNote') }}*</div>
                </div>
              </div>
            </div>

            <!-- 实物保障说明 - Web3风格 -->
            <div class="flex justify-center px-4">
              <div class="flex items-center gap-4 md:gap-5 text-stone-700 bg-white/60 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-full border border-amber-200/50 shadow-lg web3-badge max-w-4xl">
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden">
                  <img :src="logoImg" alt="LOGO" class="w-full h-full object-contain p-1" />
                </div>
                <span class="text-xs md:text-sm font-semibold text-center flex-1">{{ $t('compliance.anchor.guarantee') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 合规流程 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ delay: 200 }"
        class="mb-20"
      >
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{{ $t('compliance.process.title') }}</h3>
          <p class="text-stone-500">{{ $t('compliance.process.description') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center">
            <div class="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 mx-auto mb-6">
              <FileCheck :size="32" />
            </div>
            <h4 class="text-xl font-bold text-stone-900 mb-3">{{ $t('compliance.process.listing.title') }}</h4>
            <p class="text-stone-500 text-sm">
              {{ $t('compliance.process.listing.desc') }}
            </p>
          </div>
          <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center">
            <div class="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 mx-auto mb-6">
              <Shield :size="32" />
            </div>
            <h4 class="text-xl font-bold text-stone-900 mb-3">{{ $t('compliance.process.rights.title') }}</h4>
            <p class="text-stone-500 text-sm">
              {{ $t('compliance.process.rights.desc') }}
            </p>
          </div>
          <div class="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm text-center">
            <div class="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 mx-auto mb-6">
              <CheckCircle :size="32" />
            </div>
            <h4 class="text-xl font-bold text-stone-900 mb-3">{{ $t('compliance.process.regulation.title') }}</h4>
            <p class="text-stone-500 text-sm">
              {{ $t('compliance.process.regulation.desc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- 第三方审计报告与法律意见书 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <!-- 第三方审计报告 -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 300 }"
          class="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm"
        >
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 mr-4">
              <FileText :size="28" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-stone-900">{{ $t('compliance.audit.title') }}</h3>
          </div>
          <p class="text-stone-600 leading-relaxed mb-6">
            {{ $t('compliance.audit.description') }}
          </p>
          <div class="bg-[#F9F7F2] p-4 rounded-xl border border-stone-200">
            <div class="text-sm text-stone-500 mb-2">{{ $t('compliance.audit.scope') }}</div>
            <ul class="text-stone-700 text-sm space-y-2">
              <li 
                v-for="(item, index) in auditItems" 
                :key="index"
                class="flex items-start"
              >
                <Check :size="16" class="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 法律意见书 -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 400 }"
          class="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm"
        >
          <div class="flex items-center mb-6">
            <div class="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 mr-4">
              <Scale :size="28" />
            </div>
            <h3 class="text-2xl md:text-3xl font-bold text-stone-900">{{ $t('compliance.legal.title') }}</h3>
          </div>
          <p class="text-stone-600 leading-relaxed mb-6">
            {{ $t('compliance.legal.description') }}
          </p>
          <div class="bg-[#F9F7F2] p-4 rounded-xl border border-stone-200">
            <div class="text-sm text-stone-500 mb-2">{{ $t('compliance.legal.points') }}</div>
            <ul class="text-stone-700 text-sm space-y-2">
              <li 
                v-for="(item, index) in legalItems" 
                :key="index"
                class="flex items-start"
              >
                <Check :size="16" class="text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 仓储季度披露 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :transition="{ delay: 500 }"
        class="bg-white p-8 md:p-12 rounded-3xl border border-stone-200 shadow-sm"
      >
        <div class="flex items-center mb-8">
          <div class="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200 mr-4">
            <Warehouse :size="32" />
          </div>
          <h3 class="text-3xl md:text-4xl font-bold text-stone-900">{{ $t('compliance.warehouse.title') }}</h3>
        </div>
        <p class="text-xl text-stone-600 leading-relaxed mb-8">
          {{ $t('compliance.warehouse.description') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-[#F9F7F2] p-6 rounded-2xl border border-stone-200">
            <div class="text-amber-600 font-bold text-lg mb-3">{{ $t('compliance.warehouse.frequency.title') }}</div>
            <div class="text-stone-700">
              {{ $t('compliance.warehouse.frequency.desc') }}
            </div>
          </div>
          <div class="bg-[#F9F7F2] p-6 rounded-2xl border border-stone-200">
            <div class="text-amber-600 font-bold text-lg mb-3">{{ $t('compliance.warehouse.content.title') }}</div>
            <ul class="text-stone-700 text-sm space-y-2">
              <li v-for="(item, index) in warehouseContentItems" :key="index">• {{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
          <div class="flex items-start">
            <Info :size="20" class="text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
            <div class="text-stone-700 text-sm">
              <strong class="text-amber-700">{{ $t('compliance.warehouse.guarantee.title') }}</strong>{{ $t('compliance.warehouse.guarantee.text') }}
            </div>
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
import { Link, FileCheck, Shield, CheckCircle, FileText, Scale, Check, Warehouse, Info } from 'lucide-vue-next';
import logoImg from '../assets/LOGO.png';

const { locale } = useI18n();

// 直接从i18n实例获取数组，避免t()函数的问题
const auditItems = computed(() => {
  const messages = (i18n.global.messages.value as any)[locale.value] as any;
  const items = messages?.compliance?.audit?.items;
  return Array.isArray(items) ? items : [];
});

const legalItems = computed(() => {
  const messages = (i18n.global.messages.value as any)[locale.value] as any;
  const items = messages?.compliance?.legal?.items;
  return Array.isArray(items) ? items : [];
});

const warehouseContentItems = computed(() => {
  const messages = (i18n.global.messages.value as any)[locale.value] as any;
  const items = messages?.compliance?.warehouse?.content?.items;
  return Array.isArray(items) ? items : [];
});
</script>

<style scoped>
/* Web3风格动画和效果 */
.web3-card {
  position: relative;
  transition: all 0.3s ease;
}

.web3-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 50px -12px rgba(217, 119, 6, 0.25);
}

.web3-icon {
  animation: pulse-glow 3s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.web3-icon:hover {
  transform: scale(1.1) rotate(5deg);
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(217, 119, 6, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(217, 119, 6, 0.6);
  }
}

.web3-anchor-box {
  position: relative;
  transition: all 0.3s ease;
}

.web3-anchor-box:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 60px -15px rgba(217, 119, 6, 0.3);
}

.web3-border-glow {
  animation: border-pulse 2s ease-in-out infinite;
  pointer-events: none;
}

@keyframes border-pulse {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.web3-nft-badge,
.web3-physical-badge {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.web3-nft-badge::before,
.web3-physical-badge::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.web3-nft-badge:hover,
.web3-physical-badge:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 15px 35px -5px rgba(217, 119, 6, 0.4);
}

.web3-equals {
  animation: equals-pulse 2s ease-in-out infinite;
}

@keyframes equals-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.web3-badge {
  transition: all 0.3s ease;
}

.web3-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(217, 119, 6, 0.2);
  background: rgba(255, 255, 255, 0.8);
}
</style>

