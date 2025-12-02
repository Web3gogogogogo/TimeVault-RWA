<template>
  <section class="py-32 bg-[#F9F7F2] text-stone-900 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F2EFE9] to-transparent pointer-events-none opacity-50"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
        <!-- Image Grid -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          class="grid grid-cols-2 gap-4"
        >
          <div class="space-y-4">
            <div 
              ref="imageRef1"
              class="h-64 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card cursor-pointer"
              @click="(e) => openModal(image1, 'Storage Warehouse', e.currentTarget as HTMLElement)"
            >
              <ImageWithFallback 
                :src="image1" 
                alt="Storage Warehouse"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  点击放大
                </div>
              </div>
            </div>
            <div 
              ref="imageRef2"
              class="h-40 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card cursor-pointer relative"
              @click="(e) => openModal(image2, 'Tangerine Drying', e.currentTarget as HTMLElement)"
            >
              <ImageWithFallback 
                :src="image2" 
                alt="Tangerine Drying"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  点击放大
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-4 pt-8">
            <div 
              ref="imageRef3"
              class="h-40 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card cursor-pointer relative"
              @click="(e) => openModal(image3, 'Macro Texture', e.currentTarget as HTMLElement)"
            >
              <ImageWithFallback 
                :src="image3" 
                alt="Macro Texture"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  点击放大
                </div>
              </div>
            </div>
            <div 
              ref="imageRef4"
              class="h-64 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg product-image-card cursor-pointer relative"
              @click="(e) => openModal(image4, 'Product Image', e.currentTarget as HTMLElement)"
            >
              <ImageWithFallback 
                :src="image4" 
                alt="Product Image"
                class="w-full h-full object-cover transition-transform duration-700 grayscale-[20%]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-white text-sm font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  点击放大
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :transition="{ delay: 200 }"
        >
          <div class="inline-flex items-center space-x-2 text-amber-600 mb-4">
            <ShieldCheck :size="16" />
            <span class="text-sm tracking-wider uppercase font-bold">Asset backed NFT</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight text-stone-900">
            每一枚 NFT，都对应<br/>一筐看得见的陈皮
          </h2>

          <div class="space-y-6 font-light text-stone-600 text-lg">
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>产地</span>
              <span class="text-stone-900 font-medium flex items-center">
                <MapPin :size="16" class="mr-2 text-amber-600"/>新会核心产区（国家地理标志）
              </span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>品种</span>
              <span class="text-stone-900 font-medium">茶枝柑（正宗道地）</span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>仓储</span>
              <span class="text-stone-900 font-medium text-right">
                中国供销·江门新会陈皮产业园<br/>
                <span class="text-xs text-stone-500">3.6 万㎡国资恒温仓</span>
              </span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>保险</span>
              <span class="text-stone-900 font-medium">中国平安全额财产险</span>
            </div>
            <div class="flex items-center justify-between border-b border-stone-200 pb-4 detail-item">
              <span>溯源</span>
              <span class="text-stone-900 font-medium">蚂蚁链上链 + 数据产权证书</span>
            </div>
            <div class="flex items-center justify-between pt-2 detail-item">
              <span>仓储费用</span>
              <span class="text-amber-600 font-bold">首 5 年免费</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Image Modal with Tech Effects -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 flex items-center justify-center p-4 tech-modal-overlay"
          @click.self="closeModal"
        >
          <!-- Backdrop with blur and glow -->
          <div 
            class="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 pointer-events-auto"
            @click="closeModal"
          ></div>
          
          <!-- Animated glow rings -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="tech-glow-ring ring-1"></div>
            <div class="tech-glow-ring ring-2"></div>
            <div class="tech-glow-ring ring-3"></div>
          </div>

          <!-- Modal Content -->
          <div 
            class="relative w-full h-full flex items-center justify-center tech-modal-container"
            @click="closeModal"
          >
            <!-- Close Button -->
            <button
              @click.stop="closeModal"
              class="absolute top-4 right-4 text-white/80 hover:text-white transition-all duration-300 group z-50"
            >
              <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all">
                <X :size="20" class="group-hover:rotate-90 transition-transform duration-300" />
                <span class="text-sm font-medium">ESC</span>
              </div>
            </button>

            <!-- Image Container with Tech Border -->
            <div 
              ref="modalImageRef"
              class="relative tech-image-wrapper mx-auto"
              :style="imageTransformStyle"
              @click.stop="closeModal"
            >
              <!-- Glowing border effect -->
              <div class="tech-border-glow"></div>
              
              <!-- Image -->
              <div 
                class="relative overflow-hidden rounded-2xl bg-black/50 p-2 cursor-pointer flex items-center justify-center"
              >
                <img
                  :src="modalImage"
                  :alt="modalAlt"
                  class="max-w-[70vw] max-h-[70vh] w-auto h-auto object-contain rounded-xl tech-image-zoom pointer-events-none"
                  style="width: auto; height: auto;"
                />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { MapPin, QrCode, ShieldCheck, X } from 'lucide-vue-next';
import ImageWithFallback from './figma/ImageWithFallback.vue';
import image1 from '@/assets/1.jpg';
import image2 from '@/assets/2.jpg';
import image3 from '@/assets/3.jpg';
import image4 from '@/assets/4.jpg';

const isModalOpen = ref(false);
const modalImage = ref('');
const modalAlt = ref('');
const imageTransformStyle = ref<Record<string, string>>({});
const modalImageRef = ref<HTMLElement | null>(null);
const imageRef1 = ref<HTMLElement | null>(null);
const imageRef2 = ref<HTMLElement | null>(null);
const imageRef3 = ref<HTMLElement | null>(null);
const imageRef4 = ref<HTMLElement | null>(null);

// 阻止滚动事件
const preventScroll = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const openModal = (image: string, alt: string, sourceElement: HTMLElement) => {
  // 获取源元素的位置和尺寸
  const rect = sourceElement.getBoundingClientRect();
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const sourceX = rect.left + rect.width / 2;
  const sourceY = rect.top + rect.height / 2;
  
  // 计算初始变换（从原位置开始）
  const translateX = sourceX - centerX;
  const translateY = sourceY - centerY;
  const scaleX = rect.width / window.innerWidth;
  const scaleY = rect.height / window.innerHeight;
  const scale = Math.min(scaleX, scaleY) * 0.8; // 稍微小一点以便动画
  
  imageTransformStyle.value = {
    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
    transformOrigin: 'center center',
    transition: 'none'
  };
  
  modalImage.value = image;
  modalAlt.value = alt;
  isModalOpen.value = true;
  
  // 防止页面滚动，但保持滚动条可见
  const scrollY = window.scrollY;
  
  // 只使用事件阻止滚动，不改变任何样式，保持滚动条可见
  document.body.classList.add('image-modal-open');
  // 不设置 position: fixed 或 overflow，保持滚动条可见
  // 保存滚动位置
  sessionStorage.setItem('scrollY', scrollY.toString());
  
  // 添加滚动阻止事件 - 这是唯一阻止滚动的方法，不影响滚动条
  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
  document.addEventListener('scroll', preventScroll, { passive: false });
  
  // 锁定当前滚动位置
  window.scrollTo(0, scrollY);
  
  // 不修改导航栏的任何样式，让它保持原样
  // 导航栏本身就是 fixed 定位，不需要额外操作
  
  // 下一帧执行动画到中心位置
  nextTick(() => {
    requestAnimationFrame(() => {
      if (modalImageRef.value) {
        imageTransformStyle.value = {
          transform: 'translate(0, 0) scale(1)',
          transformOrigin: 'center center',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        };
      }
    });
  });
};

const closeModal = () => {
  isModalOpen.value = false;
  
  // 恢复页面滚动
  document.body.classList.remove('image-modal-open');
  
  // 移除滚动阻止事件
  document.removeEventListener('wheel', preventScroll);
  document.removeEventListener('touchmove', preventScroll);
  document.removeEventListener('scroll', preventScroll);
  
  // 不需要恢复导航栏样式，因为我们没有修改它
  
  // 恢复滚动位置（如果需要）
  const savedScrollY = sessionStorage.getItem('scrollY');
  if (savedScrollY) {
    // 使用 requestAnimationFrame 确保在事件移除后恢复滚动
    requestAnimationFrame(() => {
      window.scrollTo(0, parseInt(savedScrollY));
    });
    sessionStorage.removeItem('scrollY');
  }
  
  // 重置样式
  setTimeout(() => {
    imageTransformStyle.value = {};
  }, 500);
};

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.product-image-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.product-image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #D97706;
}

.product-image-card:hover img {
  transform: scale(1.1);
  filter: grayscale(0%);
}

/* Modal Animations */
.modal-enter-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Tech Glow Rings */
.tech-glow-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  opacity: 0;
  animation: techPulse 3s ease-in-out infinite;
}

.tech-glow-ring.ring-1 {
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(217, 119, 6, 0.3);
  animation-delay: 0s;
}

.tech-glow-ring.ring-2 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(217, 119, 6, 0.2);
  animation-delay: 1s;
}

.tech-glow-ring.ring-3 {
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: rgba(217, 119, 6, 0.1);
  animation-delay: 2s;
}

@keyframes techPulse {
  0%, 100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

/* Tech Image Wrapper */
.tech-image-wrapper {
  position: relative;
}

.tech-border-glow {
  position: absolute;
  inset: -4px;
  border-radius: 1.5rem;
  background: linear-gradient(45deg, 
    rgba(217, 119, 6, 0.5),
    rgba(251, 191, 36, 0.5),
    rgba(217, 119, 6, 0.5)
  );
  background-size: 200% 200%;
  animation: techBorderFlow 3s ease infinite;
  filter: blur(8px);
  z-index: -1;
  opacity: 0.6;
}

@keyframes techBorderFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.tech-image-zoom {
  display: block;
  max-width: 70vw !important;
  max-height: 70vh !important;
  width: auto !important;
  height: auto !important;
}

.detail-item {
  transition: all 0.2s ease;
}

.detail-item:hover {
  padding-left: 8px;
  padding-right: 8px;
  background-color: rgba(217, 119, 6, 0.05);
  border-radius: 8px;
}

/* Modal Overlay - Ensure it's on top of everything */
.tech-modal-overlay {
  z-index: 99999 !important;
  position: fixed !important;
}

.tech-modal-container {
  z-index: 100000 !important;
  position: relative !important;
}

.tech-image-wrapper {
  z-index: 100001 !important;
  position: relative !important;
}

</style>

<style>
/* 全局样式：只确保导航栏在模态框打开时保持不透明，不改变位置 */
body.image-modal-open nav[class*="fixed"] {
  /* 只设置背景和 z-index，不改变任何位置属性 */
  z-index: 100002 !important;
  background: rgba(249, 247, 242, 0.95) !important;
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
  /* 不设置 position, top, left, right, width, transform, margin, padding 等位置属性 */
}
</style>
