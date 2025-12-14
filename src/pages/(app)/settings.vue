<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="max-w-[1000px] mx-auto">
    <h1 class="text-h4 font-weight-bold mb-6">Settings</h1>

    <v-row>
      <v-col cols="12" md="8">
        <!-- Language -->
        <v-card class="pa-6 mb-4" elevation="1" rounded="xl">
          <div class="d-flex align-center mb-4">
            <v-avatar color="primary" rounded="lg" size="40" variant="tonal">
              <v-icon icon="mdi-translate" />
            </v-avatar>
            <div class="ml-4">
              <h3 class="text-subtitle-1 font-weight-bold">Language</h3>
              <p class="text-caption text-medium-emphasis mb-0">
                Change the app interface language
              </p>
            </div>
          </div>
          <v-select
            v-model="selectedLanguage"
            item-title="name"
            item-value="code"
            :items="languages"
            rounded="lg"
            variant="outlined"
          >
            <template #selection="{ item }">
              <span class="d-flex align-center">
                <span class="mr-2">{{ item.raw.flag }}</span>
                {{ item.raw.name }}
              </span>
            </template>
            <template #item="{ props: itemProps, item }">
              <v-list-item v-bind="itemProps">
                <template #prepend>
                  <span class="mr-2">{{ item.raw.flag }}</span>
                </template>
              </v-list-item>
            </template>
          </v-select>
        </v-card>

        <!-- Reminders -->
        <v-card class="pa-6 mb-4" elevation="1" rounded="xl">
          <div class="d-flex align-center mb-4">
            <v-avatar color="warning" rounded="lg" size="40" variant="tonal">
              <v-icon icon="mdi-bell-ring-outline" />
            </v-avatar>
            <div class="ml-4 flex-grow-1">
              <h3 class="text-subtitle-1 font-weight-bold">Daily Reminder</h3>
              <p class="text-caption text-medium-emphasis mb-0">
                Get notified to practice every day
              </p>
            </div>
            <v-switch v-model="reminderEnabled" color="primary" hide-details />
          </div>

          <v-expand-transition>
            <div v-if="reminderEnabled">
              <v-divider class="mb-4" />
              <div class="text-subtitle-2 font-weight-bold mb-2">Reminder Time</div>
              <v-text-field
                v-model="reminderTime"
                prepend-inner-icon="mdi-clock-outline"
                rounded="lg"
                type="time"
                variant="outlined"
              />
            </div>
          </v-expand-transition>
        </v-card>

        <!-- Notifications -->
        <v-card class="pa-6 mb-4" elevation="1" rounded="xl">
          <div class="d-flex align-center mb-4">
            <v-avatar color="secondary" rounded="lg" size="40" variant="tonal">
              <v-icon icon="mdi-bell-outline" />
            </v-avatar>
            <div class="ml-4">
              <h3 class="text-subtitle-1 font-weight-bold">Notifications</h3>
              <p class="text-caption text-medium-emphasis mb-0">
                Manage notification preferences
              </p>
            </div>
          </div>

          <v-list class="pa-0">
            <v-list-item
              v-for="notif in notifications"
              :key="notif.key"
              class="px-0"
            >
              <template #prepend>
                <v-icon :icon="notif.icon" size="small" />
              </template>
              <v-list-item-title>{{ notif.label }}</v-list-item-title>
              <v-list-item-subtitle>{{ notif.description }}</v-list-item-subtitle>
              <template #append>
                <v-switch
                  v-model="notif.enabled"
                  color="primary"
                  hide-details
                />
              </template>
            </v-list-item>
          </v-list>
        </v-card>

        <!-- Danger Zone -->
        <v-card class="pa-6" color="error-lighten-5" elevation="0" rounded="xl">
          <div class="d-flex align-center mb-4">
            <v-avatar color="error" rounded="lg" size="40" variant="tonal">
              <v-icon icon="mdi-alert-outline" />
            </v-avatar>
            <div class="ml-4">
              <h3 class="text-subtitle-1 font-weight-bold text-error">Danger Zone</h3>
              <p class="text-caption text-medium-emphasis mb-0">
                Irreversible actions
              </p>
            </div>
          </div>
          <v-btn
            class="mr-2"
            color="error"
            rounded="lg"
            variant="outlined"
          >
            Delete All Data
          </v-btn>
          <v-btn
            color="error"
            rounded="lg"
            variant="outlined"
          >
            Close Account
          </v-btn>
        </v-card>
      </v-col>

      <!-- Quick Links -->
      <v-col cols="12" md="4">
        <v-card class="pa-5" elevation="1" rounded="xl">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">Quick Links</h3>
          <v-list class="pa-0" density="compact" nav>
            <v-list-item
              v-for="link in quickLinks"
              :key="link.to"
              :prepend-icon="link.icon"
              rounded="lg"
              :title="link.title"
              :to="link.to"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const selectedLanguage = ref('id')
  const reminderEnabled = ref(true)
  const reminderTime = ref('08:00')

  const languages = [
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ]

  const notifications = ref([
    {
      key: 'streak',
      label: 'Streak Reminders',
      description: 'Get reminded before losing your streak',
      icon: 'mdi-fire',
      enabled: true,
    },
    {
      key: 'updates',
      label: 'New Content',
      description: 'Be notified of new topics and features',
      icon: 'mdi-sparkles',
      enabled: true,
    },
    {
      key: 'promo',
      label: 'Promotions',
      description: 'Receive special offers and discounts',
      icon: 'mdi-tag-outline',
      enabled: false,
    },
  ])

  const quickLinks = [
    { title: 'My Profile', icon: 'mdi-account-outline', to: '/profile' },
    { title: 'Subscription', icon: 'mdi-credit-card-outline', to: '/subscription' },
    { title: 'Help Center', icon: 'mdi-help-circle-outline', to: '#' },
    { title: 'Privacy Policy', icon: 'mdi-shield-lock-outline', to: '#' },
  ]
</script>
