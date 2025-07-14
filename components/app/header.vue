<script setup lang="ts">
const localePath = useLocalePath()
const { user } = useAuth()

const avatarPlaceholder = computed(() => {
  if (!user)
    return ''
  return user.given_name && user.family_name
    ? `${user.given_name[0]}${user.family_name[0]}`
    : user.email[0]
})
</script>

<template>
  <header class="mt-2 flex justify-between items-center p-2 rounded-xl">
    <div class="flex gap-2 items-center">
      <NuxtLink :to="localePath('/')">
        <AppLogo />
      </NuxtLink>
    </div>
    <div class="flex gap-2 items-center">
      <template v-if="$auth.loggedIn">
        <div class="flex gap-2 items-center">
          <p v-if="$auth.user.given_name && $auth.user.family_name" class="font-medium">
            {{ `${$auth.user.given_name} ${$auth.user.family_name[0]}.` }}
          </p>
          <p v-else class="font-medium">
            {{ $auth.user.email }}
          </p>
          <UiAvatar
            :picture="$auth.user.picture ?? ''"
            :placeholder="avatarPlaceholder"
          />
        </div>
        <UiButton
          to="/api/logout"
          external
          variant="secondary"
          before-icon="ph:sign-out-bold"
          :text="$t('common.sign-out')"
        />
      </template>
      <template v-else>
        <UiButton
          :text="$t('common.sign-in')"
          :to="localePath('/auth/sign-in')"
          variant="secondary"
        />
        <UiButton
          :text="$t('common.sign-up')"
          :to="localePath('/auth/sign-up')"
          variant="accent"
        />
      </template>
    </div>
  </header>
</template>
