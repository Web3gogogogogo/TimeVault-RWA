<template>
  <div class="min-h-screen bg-[#F9F7F2] text-stone-900 selection:bg-amber-500/30 selection:text-amber-900 font-sans">
    <Navigation :scrolled="scrolled" />
    
    <main>
      <Hero />
      <Comparison />
      <ProductDetails />
      <ValueCurve />
      <Rights />
      <Roadmap />
      <Partners />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Comparison from './components/Comparison.vue';
import ProductDetails from './components/ProductDetails.vue';
import ValueCurve from './components/ValueCurve.vue';
import Rights from './components/Rights.vue';
import Roadmap from './components/Roadmap.vue';
import Partners from './components/Partners.vue';
import Footer from './components/Footer.vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

