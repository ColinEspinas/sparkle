<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

withDefaults(defineProps<{
  text?: string
  afterIcon?: string
  beforeIcon?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'accent'
  align?: 'left' | 'center' | 'right'
  to?: string
  target?: '_blank' | '_self'
  external?: boolean
}>(), {
  type: 'button',
  disabled: false,
  variant: 'primary',
  align: 'left',
  external: false,
})

const emits = defineEmits<{
  click: []
}>()

const variantClasses = {
  primary: 'bg-base-content text-base ring-0 border-1 border-transparent ring-base-content/20 hover:ring-3 transition-all',
  secondary: 'bg-base text-base-content border-1 border-base-content/20 ring-0 ring-base-content/10 hover:ring-3 transition-all',
  accent: 'bg-accent text-accent-content ring-0 ring-accent/25 hover:ring-3 border-1 border-accent/25 transition-all bg-radial-(--gradient-position) from-base/20 to-transparent to-50%',
}

const alignClasses = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
}

const buttonRef = useTemplateRef<HTMLDivElement>('button')
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(buttonRef)

const gradientPosition = computed(() => {
  // if (isOutside.value) return 'circle at 50% 100%'
  // const positionX = Math.min(Math.max(elementX.value, 0), elementWidth.value)
  // const positionY = Math.min(Math.max(elementY.value, 0), elementHeight.value)
  const positionX = elementX.value
  const positionY = elementY.value
  return `circle at ${positionX}px ${positionY}px`
})
</script>

<template>
  <NuxtLink
    ref="button"
    v-if="to"
    :to="to"
    class="py-2 px-3 flex gap-2 rounded-lg items-center outline-none font-medium active:scale-95"
    :class="[variantClasses[variant], alignClasses[align]]"
    :style="{ '--gradient-position': gradientPosition }"
    :target="target"
    :external
  >
    <Icon v-if="beforeIcon" class="my-1" :name="beforeIcon" />
    <span v-if="text">{{ text }}</span>
    <Icon v-if="afterIcon" class="my-1" :name="afterIcon" />
  </NuxtLink>
  <button
    v-else
    ref="button"
    class="py-2 px-3 flex gap-2 rounded-lg items-center outline-none font-medium active:scale-95"
    :style="{ '--gradient-position': gradientPosition }"
    :disabled="disabled"
    :class="[variantClasses[variant], alignClasses[align]]"
    :type="type"
    @click="emits('click')"
  >
    <Icon v-if="beforeIcon" class="my-1" :name="beforeIcon" />
    <span v-if="text">{{ text }}</span>
    <Icon v-if="afterIcon" class="my-1" :name="afterIcon" />
  </button>
</template>
