<script setup lang="ts">
const { loggedIn } = useAuth()

if (!loggedIn) {
  navigateTo('/auth/sign-up')
}

const { data: offers } = useFetch('/api/offers')
</script>

<template>
  <div>
    <h1>Welcome to Sparkle</h1>
    <div>
      <AppOfferCard v-for="offer in offers" :key="offer.id" :offer="offer" />
    </div>
  </div>
</template>
