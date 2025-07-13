<script setup lang="ts">
import { AvatarImage, AvatarRoot, AvatarFallback } from 'reka-ui'

const { size = 'md' } = defineProps<{
  picture: string
  placeholder?: string
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <AvatarRoot
  class="flex items-center justify-center rounded-full overflow-hidden"
    :class="{
      'size-8': size === 'sm',
      'size-10': size === 'md',
      'size-12': size === 'lg',
    }">
    <AvatarImage :src="picture" />
    <AvatarFallback class="flex items-center justify-center bg-base-content w-full h-full">
      <span class="text-base font-medium">
        {{ placeholder }}
      </span>
    </AvatarFallback>
  </AvatarRoot>
</template>
