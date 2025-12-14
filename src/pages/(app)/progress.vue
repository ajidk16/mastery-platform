<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="max-w-[1200px] mx-auto">
    <h1 class="text-h4 font-weight-bold mb-6">My Progress</h1>

    <!-- Top Stats Row -->
    <v-row class="mb-6">
      <!-- Fluency Score -->
      <v-col cols="12" md="4">
        <v-card class="fill-height pa-6 text-center" elevation="1" rounded="xl">
          <h3 class="text-h6 font-weight-bold mb-4">Fluency Score</h3>
          <div class="d-flex justify-center mb-4">
            <v-progress-circular
              :bg-color="theme.current.value.colors.background"
              color="primary"
              :model-value="fluencyScore"
              :size="160"
              :width="15"
            >
              <div class="text-center">
                <div class="text-h3 font-weight-black">{{ fluencyScore }}</div>
                <div class="text-caption text-medium-emphasis">/ 100</div>
              </div>
            </v-progress-circular>
          </div>
          <p class="text-body-2 text-medium-emphasis">
            Top 15% of learners this week! 🚀
          </p>
        </v-card>
      </v-col>

      <!-- Vocabulary Growth -->
      <v-col cols="12" md="4">
        <v-card class="fill-height pa-6" elevation="1" rounded="xl">
          <h3 class="text-h6 font-weight-bold mb-4">Vocabulary Growth</h3>
          <div class="text-center py-4">
            <div class="text-h2 font-weight-bold text-success mb-1">
              {{ wordsLearned }}
            </div>
            <div class="text-subtitle-1 text-medium-emphasis mb-6">
              Words Mastered
            </div>
          </div>
          <v-divider class="mb-4" />
          <div class="d-flex justify-space-between text-body-2 mb-1">
            <span>Weekly Goal</span>
            <span class="font-weight-bold">{{ wordsThisWeek }} / 50</span>
          </div>
          <v-progress-linear
            color="success"
            height="8"
            :model-value="(wordsThisWeek / 50) * 100"
            rounded
          />
        </v-card>
      </v-col>

      <!-- Total Stats -->
      <v-col cols="12" md="4">
        <v-card class="fill-height pa-6" elevation="1" rounded="xl">
          <h3 class="text-h6 font-weight-bold mb-6">Total Stats</h3>
          <div class="d-flex flex-column gap-4">
            <div class="d-flex align-center">
              <v-avatar class="mr-4" color="primary" rounded="lg" variant="tonal">
                <v-icon icon="mdi-clock-outline" />
              </v-avatar>
              <div>
                <div class="text-h5 font-weight-bold">{{ totalHours }}h</div>
                <div class="text-caption text-medium-emphasis">Speaking Time</div>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-avatar class="mr-4" color="secondary" rounded="lg" variant="tonal">
                <v-icon icon="mdi-forum-outline" />
              </v-avatar>
              <div>
                <div class="text-h5 font-weight-bold">{{ totalSessions }}</div>
                <div class="text-caption text-medium-emphasis">Sessions Completed</div>
              </div>
            </div>
            <div class="d-flex align-center">
              <v-avatar class="mr-4" color="accent" rounded="lg" variant="tonal">
                <v-icon icon="mdi-star-outline" />
              </v-avatar>
              <div>
                <div class="text-h5 font-weight-bold">{{ avgScore }}</div>
                <div class="text-caption text-medium-emphasis">Average Score</div>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Weekly Activity Graph -->
    <v-card class="mb-8 pa-6" elevation="1" rounded="xl">
      <div class="d-flex align-center justify-space-between mb-6">
        <div>
          <h3 class="text-h6 font-weight-bold">Weekly Speaking Activity</h3>
          <p class="text-body-2 text-medium-emphasis">Minutes spoken per day</p>
        </div>
        <v-chip color="success" variant="tonal">
          <v-icon icon="mdi-trending-up" start />
          +12% vs last week
        </v-chip>
      </div>

      <div class="h-[250px] border-b-2 border-black/5 d-flex align-end justify-space-between px-4 pb-2">
        <div
          v-for="(day, index) in weeklyData"
          :key="index"
          class="flex-1 flex flex-col justify-end items-center"
        >
          <v-tooltip location="top" :text="`${day.minutes} min`">
            <template #activator="{ props }">
              <div
                v-bind="props"
                class="w-[40%] bg-indigo-100 transition-all duration-300 min-h-[4px] mb-3 rounded-t-lg hover:bg-indigo-400 hover:scale-y-105"
                :class="{ 'bg-indigo-500!': index === 6 }"
                :style="{ height: `${(day.minutes / 60) * 200}px` }"
              />
            </template>
          </v-tooltip>
          <div class="text-caption font-weight-bold text-medium-emphasis">
            {{ day.label }}
          </div>
        </div>
      </div>
    </v-card>

    <!-- Gamification Section -->
    <h2 class="text-h5 font-weight-bold mb-4">Achievements & Streaks</h2>
    <v-row>
      <!-- Streak Center -->
      <v-col cols="12" md="4">
        <v-card
          class="fill-height pa-6 streak-overview text-center text-white"
          elevation="4"
          rounded="xl"
          style="background: linear-gradient(135deg, #FF9966, #FF5E62)"
        >
          <div class="mb-4">
            <v-icon class="animate-pulse-flame drop-shadow-[0_0_10px_rgba(255,230,200,0.5)]" icon="mdi-fire" size="64" />
          </div>
          <div class="text-h2 font-weight-black mb-1">{{ currentStreak }}</div>
          <div class="text-h6 font-weight-medium opacity-90 mb-6">Day Streak</div>
          <p class="text-body-2 opacity-80 mb-6">
            You're on fire! 🔥 Keep practicing daily to maintain your streak.
          </p>
          <div class="d-flex justify-center gap-2 streak-dots">
            <v-icon
              v-for="n in 7"
              :key="n"
              :color="n <= 5 ? 'white' : 'white'"
              :icon="n <= 5 ? 'mdi-check-circle' : 'mdi-circle-outline'"
              :size="n <= 5 ? 'small' : 'x-small'"
              :style="{ opacity: n <= 5 ? 1 : 0.5 }"
            />
          </div>
        </v-card>
      </v-col>

      <!-- Milestones Badges -->
      <v-col cols="12" md="8">
        <v-row>
          <v-col
            v-for="badge in badges"
            :key="badge.title"
            cols="6"
            sm="4"
          >
            <v-card
              class="fill-height pa-4 text-center"
              :class="{ '!bg-gray-50 opacity-80': !badge.unlocked }"
              elevation="1"
              rounded="xl"
            >
              <div
                class="w-16 h-16 rounded-full mb-3 mx-auto flex items-center justify-center"
                :class="badge.unlocked ? 'bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]' : 'bg-black/3'"
              >
                <v-icon
                  :class="{ 'grayscale opacity-50': !badge.unlocked }"
                  :color="badge.unlocked ? badge.color : 'grey'"
                  :icon="badge.icon"
                  size="40"
                />
              </div>
              <div class="text-subtitle-2 font-weight-bold mb-1">
                {{ badge.title }}
              </div>
              <div class="text-caption text-medium-emphasis line-clamp-2">
                {{ badge.desc }}
              </div>
              <div v-if="!badge.unlocked" class="mt-3">
                <v-progress-linear
                  color="grey"
                  height="4"
                  :model-value="badge.progress"
                  rounded
                />
                <div class="text-caption text-medium-emphasis mt-1">
                  {{ badge.progress }}%
                </div>
              </div>
              <div v-else class="mt-3">
                <v-chip
                  class="text-caption"
                  color="success"
                  size="x-small"
                  variant="flat"
                >
                  Earned
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  // Stats
  const fluencyScore = ref(78)
  const wordsLearned = ref(1240)
  const wordsThisWeek = ref(32)
  const totalHours = ref(24.5)
  const totalSessions = ref(142)
  const avgScore = ref(8.5)
  const currentStreak = ref(12)

  // Weekly Graph Data
  const weeklyData = [
    { label: 'Mon', minutes: 15 },
    { label: 'Tue', minutes: 30 },
    { label: 'Wed', minutes: 45 },
    { label: 'Thu', minutes: 20 },
    { label: 'Fri', minutes: 40 },
    { label: 'Sat', minutes: 60 },
    { label: 'Sun', minutes: 10 },
  ]

  // Badges
  const badges = [
    {
      title: '7 Day Streak',
      desc: 'Practice for 7 days in a row',
      icon: 'mdi-fire',
      color: 'deep-orange',
      unlocked: true,
      progress: 100,
    },
    {
      title: 'Early Bird',
      desc: 'Complete 5 sessions before 8 AM',
      icon: 'mdi-weather-sunset',
      color: 'amber',
      unlocked: true,
      progress: 100,
    },
    {
      title: 'Vocab Master',
      desc: 'Learn 1000 new words',
      icon: 'mdi-book-open-page-variant',
      color: 'blue',
      unlocked: true,
      progress: 100,
    },
    {
      title: 'Conversation Pro',
      desc: 'Complete 50 speaking sessions',
      icon: 'mdi-account-voice',
      color: 'purple',
      unlocked: false,
      progress: 65,
    },
    {
      title: 'Perfect Score',
      desc: 'Get 100% on a pronunciation test',
      icon: 'mdi-bullseye-arrow',
      color: 'red',
      unlocked: false,
      progress: 0,
    },
    {
      title: 'Social Butterfly',
      desc: 'Share your progress with friends',
      icon: 'mdi-share-variant',
      color: 'pink',
      unlocked: false,
      progress: 0,
    },
  ]
</script>
