<script setup lang="ts">
// import type { Company } from '~/server/schema/companies.sql'
import type { Offer } from '~/server/schema/offers.sql'

defineProps<{
  offer: Offer
}>()

const target = useTemplateRef<HTMLDivElement>('target')
</script>

<template>
  <div ref="target" class="flex flex-col p-4 border rounded-lg shadow-md">
    <h3>{{ offer.title }}</h3>
    <p>{{ offer.description }}</p>
  </div>
</template>
