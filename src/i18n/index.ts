import { createI18n } from 'vue-i18n';
import zhCN from './locales/zh-CN';
import zhTW from './locales/zh-TW';
import en from './locales/en';

// 从localStorage读取用户语言偏好，默认繁体中文
const getDefaultLocale = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('app-locale');
    if (saved && ['zh-CN', 'zh-TW', 'en'].includes(saved)) {
      return saved;
    }
  }
  return 'zh-TW'; // 默认繁体中文
};

const i18n = createI18n({
  legacy: false, // 使用Composition API模式
  locale: getDefaultLocale(),
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en': en,
  },
});

export default i18n;

