<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled || mobileMenuOpen ? 'nav-glass border-b border-stone-200/50' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 flex items-center justify-center">
            <img :src="logoImg" alt="陈皮纪元 Logo" class="w-full h-full object-contain" />
          </div>
          <div>
            <div class="text-lg font-bold text-stone-900 leading-tight">陈皮纪元</div>
            <div class="text-[10px] text-stone-500 tracking-wider uppercase">TimeVault RWA</div>
          </div>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="nav-link text-stone-600 hover:text-stone-900 transition-colors text-sm">
            白皮书
          </a>
          <a href="#" class="nav-link text-stone-600 hover:text-stone-900 transition-colors text-sm">
            审计报告
          </a>
          <a href="#" class="nav-link text-stone-600 hover:text-stone-900 transition-colors text-sm">
            社区
          </a>
          
          <div class="relative" ref="dropdownRef">
            <button
              @click="dropdownOpen = !dropdownOpen"
              class="nav-link flex items-center space-x-1.5 text-stone-600 hover:text-stone-900 transition-colors text-sm outline-none"
            >
              <Globe :size="16" />
              <span>{{ language }}</span>
            </button>
            <div
              v-if="dropdownOpen"
              class="absolute right-0 mt-2 dropdown-glass rounded-lg border border-stone-200/60 shadow-xl py-1 z-50"
            >
              <button
                @click="setLanguage('简体')"
                class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors whitespace-nowrap"
              >
                简体中文
              </button>
              <button
                @click="setLanguage('繁体')"
                class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors whitespace-nowrap"
              >
                繁體中文
              </button>
              <button
                @click="setLanguage('EN')"
                class="w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors whitespace-nowrap"
              >
                English
              </button>
            </div>
          </div>

          <button class="orange-button px-5 py-2 text-white rounded-full transition-colors text-sm font-medium flex items-center space-x-2">
            <Wallet :size="16" />
            <span>即将开始</span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-stone-900 p-2"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-6 space-y-4 border-t border-stone-200">
        <a href="#" class="block text-stone-600 hover:text-stone-900 transition-colors text-base">
          白皮书
        </a>
        <a href="#" class="block text-stone-600 hover:text-stone-900 transition-colors text-base">
          审计报告
        </a>
        <a href="#" class="block text-stone-600 hover:text-stone-900 transition-colors text-base">
          社区
        </a>
        
        <div class="flex items-center space-x-4 py-2">
          <span class="text-stone-500 text-sm">语言:</span>
          <button 
            @click="setLanguage('简体')" 
            :class="[
              'px-3 py-1 rounded text-sm transition-colors',
              language === '简体' ? 'bg-stone-200 text-stone-900' : 'text-stone-500 hover:bg-stone-50'
            ]"
          >
            简
          </button>
          <button 
            @click="setLanguage('繁体')" 
            :class="[
              'px-3 py-1 rounded text-sm transition-colors',
              language === '繁体' ? 'bg-stone-200 text-stone-900' : 'text-stone-500 hover:bg-stone-50'
            ]"
          >
            繁
          </button>
          <button 
            @click="setLanguage('EN')" 
            :class="[
              'px-3 py-1 rounded text-sm transition-colors',
              language === 'EN' ? 'bg-stone-200 text-stone-900' : 'text-stone-500 hover:bg-stone-50'
            ]"
          >
            EN
          </button>
        </div>

        <button class="orange-button w-full px-5 py-3 text-white rounded-full transition-colors font-medium flex items-center justify-center space-x-2">
          <Wallet :size="18" />
          <span>即将开始</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu, X, Wallet, Globe } from 'lucide-vue-next';
import logoImg from '../assets/LOGO.png';

defineProps<{
  scrolled: boolean;
}>();

const mobileMenuOpen = ref(false);
const language = ref('简体');
const dropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const setLanguage = (lang: string) => {
  language.value = lang;
  dropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.nav-glass {
  background: rgba(249, 247, 242, 0.75);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1) inset;
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1.5px;
  background-color: #D97706;
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.dropdown-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  min-width: 110px;
  width: auto;
}

.orange-button {
  background-color: #E17100;
}

.orange-button:hover {
  background-color: #C96100;
}
</style>
