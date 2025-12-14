<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="max-w-[1000px] mx-auto">
    <h1 class="text-h4 font-weight-bold mb-6">My Profile</h1>

    <v-row>
      <!-- Profile Info -->
      <v-col cols="12" md="4">
        <v-card class="pa-6 text-center" elevation="1" rounded="xl">
          <v-avatar class="mb-4" color="primary" size="100">
            <span class="text-h3 text-white">{{ userInitials }}</span>
          </v-avatar>
          <h2 class="text-h6 font-weight-bold mb-1">{{ userName }}</h2>
          <p class="text-body-2 text-medium-emphasis mb-4">{{ userEmail }}</p>
          <v-btn
            block
            color="primary"
            prepend-icon="mdi-pencil"
            rounded="lg"
            variant="tonal"
          >
            Edit Profile
          </v-btn>
        </v-card>

        <!-- Account Stats -->
        <v-card class="pa-5 mt-4" elevation="1" rounded="xl">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">Account Stats</h3>
          <div class="flex flex-col gap-[12px]">
            <div class="d-flex justify-space-between">
              <span class="text-body-2 text-medium-emphasis">Member Since</span>
              <span class="text-body-2 font-weight-medium">{{ memberSince }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-body-2 text-medium-emphasis">Total Sessions</span>
              <span class="text-body-2 font-weight-medium">{{ totalSessions }}</span>
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-body-2 text-medium-emphasis">Speaking Time</span>
              <span class="text-body-2 font-weight-medium">{{ totalHours }}h</span>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Learning Preferences -->
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="1" rounded="xl">
          <h3 class="text-h6 font-weight-bold mb-6">Learning Preferences</h3>

          <!-- Learning Goal -->
          <div class="mb-8">
            <div class="text-subtitle-2 font-weight-bold mb-3">Learning Goal</div>
            <v-chip-group
              v-model="selectedGoal"
              mandatory
              selected-class="text-primary"
            >
              <v-chip
                v-for="goal in goals"
                :key="goal.value"
                color="primary"
                filter
                :prepend-icon="goal.icon"
                rounded="lg"
                size="large"
                :value="goal.value"
                variant="outlined"
              >
                {{ goal.label }}
              </v-chip>
            </v-chip-group>
          </div>

          <!-- Current Level -->
          <div class="mb-8">
            <div class="text-subtitle-2 font-weight-bold mb-3">Current Level</div>
            <v-slider
              v-model="currentLevel"
              color="secondary"
              :max="3"
              :min="1"
              show-ticks="always"
              step="1"
              thumb-label="always"
              :ticks="levelTicks"
            >
              <template #thumb-label="{ modelValue }">
                {{ getLevelLabel(modelValue) }}
              </template>
            </v-slider>
            <div class="d-flex justify-space-between text-caption text-medium-emphasis mt-n2">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Advanced</span>
            </div>
          </div>

          <!-- Daily Target -->
          <div class="mb-8">
            <div class="text-subtitle-2 font-weight-bold mb-3">Daily Target</div>
            <v-row>
              <v-col
                v-for="target in dailyTargets"
                :key="target.value"
                cols="4"
              >
                <v-card
                  class="pa-4 text-center cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
                  :class="{ 'border-2 border-primary': dailyTarget === target.value }"
                  :color="dailyTarget === target.value ? 'primary' : 'grey-lighten-4'"
                  elevation="0"
                  rounded="xl"
                  :variant="dailyTarget === target.value ? 'tonal' : 'flat'"
                  @click="dailyTarget = target.value"
                >
                  <div class="text-h4 font-weight-bold mb-1">{{ target.value }}</div>
                  <div class="text-caption">min/day</div>
                  <v-chip
                    v-if="target.label"
                    class="mt-2"
                    :color="target.color"
                    size="x-small"
                    variant="flat"
                  >
                    {{ target.label }}
                  </v-chip>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <v-divider class="mb-6" />

          <v-btn
            color="primary"
            :loading="isSaving"
            rounded="lg"
            size="large"
            @click="savePreferences"
          >
            Save Preferences
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  // User info
  const userName = ref('David Kaji')
  const userEmail = ref('david@example.com')
  const memberSince = ref('Dec 2024')
  const totalSessions = ref(142)
  const totalHours = ref(24.5)

  const userInitials = computed(() => {
    return userName.value
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  })

  // Learning preferences
  const selectedGoal = ref('work')
  const currentLevel = ref(2)
  const dailyTarget = ref(10)
  const isSaving = ref(false)

  const goals = [
    { label: 'Work', value: 'work', icon: 'mdi-briefcase-outline' },
    { label: 'Study', value: 'study', icon: 'mdi-school-outline' },
    { label: 'Travel', value: 'travel', icon: 'mdi-airplane' },
    { label: 'General', value: 'general', icon: 'mdi-chat-outline' },
  ]

  const levelTicks = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
  }

  const dailyTargets = [
    { value: 5, label: 'Casual', color: 'success' },
    { value: 10, label: 'Ideal', color: 'primary' },
    { value: 20, label: 'Intensive', color: 'warning' },
  ]

  function getLevelLabel (value: number) {
    return levelTicks[value as keyof typeof levelTicks] || ''
  }

  function savePreferences () {
    isSaving.value = true
    setTimeout(() => {
      isSaving.value = false
    }, 1500)
  }
</script>
