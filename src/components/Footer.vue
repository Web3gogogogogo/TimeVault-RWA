<template>
  <footer class="bg-[#F9F7F2] text-stone-900 border-t border-stone-200 pt-32 pb-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- CTA Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        class="text-center mb-32"
      >
        <h2 class="text-5xl md:text-7xl font-bold mb-8 text-stone-900">
          66,660 枚，卖完即止
        </h2>
        <p class="text-xl text-stone-500 mb-12 font-light">
          把 2025 年的时间，装进你的钱包
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button class="footer-cta-button orange-button px-12 py-5 text-white font-bold rounded-full transition-all duration-300 text-lg w-full sm:w-auto shadow-lg">
            立即购买 (88 USD)
          </button>
        </div>
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-sm text-stone-500 uppercase tracking-wider">
          <a href="#" class="footer-link hover:text-stone-900 transition-colors">查看白皮书</a>
          <span class="text-stone-300">|</span>
          <a href="#" class="footer-link hover:text-stone-900 transition-colors">加入社区</a>
          <span class="text-stone-300">|</span>
          <a href="#" class="footer-link hover:text-stone-900 transition-colors">实时仓库监控</a>
        </div>
      </div>

      <!-- Bottom -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visibleOnce="{ opacity: 1 }"
        :transition="{ delay: 200 }"
        class="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-200"
      >
        <div class="flex items-center space-x-6 mb-4 md:mb-0">
          <a href="#" class="social-icon text-stone-400 hover:text-stone-900 transition-all duration-300"><Twitter :size="20" /></a>
          <a href="#" class="social-icon text-stone-400 hover:text-stone-900 transition-all duration-300"><Github :size="20" /></a>
          <a href="#" class="social-icon text-stone-400 hover:text-stone-900 transition-all duration-300"><Send :size="20" /></a>
          <a href="#" class="social-icon text-stone-400 hover:text-stone-900 transition-all duration-300"><Mail :size="20" /></a>
        </div>
        <div class="text-center md:text-right space-y-2">
          <div class="text-stone-500 text-sm">
            © 2025 陈皮纪元. All rights reserved.
          </div>
          <div class="text-stone-400 text-xs max-w-md ml-auto">
            新会陈皮创岁纪元 NFT 并非证券，仅为真实资产数字所有权凭证<br/>
            风险提示：资产价格受市场波动影响，请理性参与
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { Twitter, Github, Send, Mail } from 'lucide-vue-next';
</script>

<style scoped>
.orange-button {
  background-color: #E17100;
}

.orange-button:hover {
  background-color: #C96100;
}

.footer-cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(225, 113, 0, 0.25);
}

.footer-link {
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #D97706;
  transition: width 0.3s ease;
}

.footer-link:hover::after {
  width: 100%;
}

.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px) scale(1.2);
  color: #D97706;
}
</style>
