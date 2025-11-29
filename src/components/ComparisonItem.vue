<template>
  <div class="flex items-start space-x-4">
    <div :class="['mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0', positive ? 'bg-amber-100 text-amber-600' : 'bg-stone-100 text-stone-400']">
      <Check v-if="positive" :size="12" />
      <X v-else :size="12" />
    </div>
    <span :class="['text-lg', positive ? 'text-stone-900 font-medium' : 'text-stone-400']">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { Check, X } from 'lucide-vue-next';

defineProps<{
  text: string;
  positive: boolean;
}>();
</script>

