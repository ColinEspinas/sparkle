<script setup lang="ts">
import { withQuery } from 'ufo'

definePageMeta({
  middleware: ['auth-logged-out'],
  layout: 'auth',
})

const {
  kindeEmailConnectionId,
  kindeLinkedinConnectionId,
  kindeGoogleConnectionId,
  kindeAppleConnectionId,
} = useRuntimeConfig().public

const { t } = useI18n()

useSeoMeta({
  title: `${t('common.app-name')} - ${t('auth.sign-up.meta.title')}`,
  description: t('home.meta.description'),
})

const localePath = useLocalePath()
const email = ref('')

const emailLoginLink = computed(() => withQuery('/api/register', { connection_id: kindeEmailConnectionId, login_hint: email.value }))
const linkedInLoginLink = withQuery('/api/register', { connection_id: kindeLinkedinConnectionId })
const googleLoginLink = withQuery('/api/register', { connection_id: kindeGoogleConnectionId })
const appleLoginLink = withQuery('/api/register', { connection_id: kindeAppleConnectionId })
</script>

<template>
<div class="flex flex-col gap-6  mb-10 max-w-[500px] w-[calc(100%_-_var(--spacing)*4)]">
  <article class="flex flex-col gap-2 p-7 sm:p-10 mx-2 items-center w-full rounded-2xl bg-linear-0 from-base to-transparent from-80%">
    <NuxtLink :to="localePath('/')" class="mb-10">
      <AppLogo />
    </NuxtLink>
    <!-- <h2 class="font-bold text-2xl text-center">
      {{ $t('auth.sign-in.title') }}
    </h2> -->

    <form class="flex flex-col gap-2 mt-2 w-full">
      <div>
        <label for="email" class="font-medium after:content-['*'] after:text-accent">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          :placeholder="$t('auth.email-placeholder')"
          class="
          transition-all
          hover:ring-3 hover:ring-base-content/10 hover:border-base-content/30
          focus-within:border-accent! focus-within:ring-3! focus-within:ring-accent/20!
          border-1 border-base-content/10 bg-base
          rounded-lg p-2 outline-none w-full flex flex-col items-end gap-2 mt-1
          "
        >
      </div>
      <UiButton
        after-icon="ph:arrow-bend-up-right-bold"
        :text="$t('common.sign-up')"
        :to="emailLoginLink"
        external
        variant="accent"
        class="min-w-max"
        align="center"
      />
    </form>

    <UiDivider />

    <div class="flex flex-col gap-2 justify-center w-full flex-wrap sm:flex-row">
      <UiButton
        text="LinkedIn"
        :to="linkedInLoginLink"
        before-icon="logos:linkedin-icon"
        align="center"
        variant="secondary"
        external
      />
      <UiButton
        text="Google"
        :to="googleLoginLink"
        before-icon="logos:google-icon"
        align="center"
        variant="secondary"
        external
      />
      <UiButton
        text="Apple"
        :to="appleLoginLink"
        before-icon="logos:apple"
        align="center"
        variant="secondary"
        external
      />
    </div>

    <p class="text-center text-sm mt-4">
      <span>{{ $t('auth.sign-up.already-have-account') }}&nbsp;</span>
      <NuxtLink :to="localePath('/auth/sign-in')" class="text-accent">
        {{ $t('common.sign-in') }}
      </NuxtLink>
    </p>
  </article>
  </div>
</template>
