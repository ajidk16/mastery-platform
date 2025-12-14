<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="dashboard">
    <!-- Welcome & Streak Section -->
    <v-row align="center" class="mb-6">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-1">Selamat Pagi, David! 👋</h1>
        <p class="text-body-1 text-medium-emphasis">
          Hari ini adalah hari yang sempurna untuk latihan speaking.
        </p>
      </v-col>
      <v-col class="d-flex justify-end" cols="12" md="4">
        <!-- Streak Badge -->
        <v-card class="pa-4 d-flex align-center bg-[linear-gradient(135deg,#fef3c7,#fde68a)] border border-[#fcd34d]" elevation="0" rounded="xl">
          <div class="streak-ring mr-3">
            <v-progress-circular
              color="warning"
              :model-value="streakProgress"
              :size="56"
              :width="5"
            >
              <v-icon color="warning" icon="mdi-fire" size="24" />
            </v-progress-circular>
          </div>
          <div>
            <div class="text-h5 font-weight-bold">{{ streak }} Hari</div>
            <div class="text-caption text-medium-emphasis">Streak aktif 🔥</div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Primary CTA: Start Speaking -->
    <v-card
      class="mb-6 overflow-hidden relative bg-[linear-gradient(135deg,#6366f1,#4f46e5)]"
      color="primary"
      elevation="8"
      rounded="xl"
    >
      <div class="d-flex flex-column flex-md-row align-center pa-6 pa-md-8">
        <div class="flex-grow-1 text-center text-md-start mb-4 mb-md-0">
          <v-chip class="mb-3" color="white" size="small" variant="flat">
            <v-icon icon="mdi-calendar-today" size="small" start />
            Tugas Harian
          </v-chip>
          <h2 class="text-h4 text-md-h3 font-weight-bold text-white mb-2">
            Latihan Speaking Hari Ini
          </h2>
          <p class="text-body-1 text-white-darken-1 mb-0">
            Bicara dengan AI tutor selama 10 menit untuk menjaga streak Anda.
          </p>
        </div>
        <div class="text-center">
          <v-btn
            class="px-8 transition-all duration-300 !text-[#4f46e5] font-semibold hover:-translate-y-[2px] hover:!shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
            color="white"
            elevation="4"
            rounded="lg"
            size="x-large"
            to="/speaking"
          >
            <v-icon class="mr-2" icon="mdi-microphone" />
            Mulai Sekarang
          </v-btn>
          <div class="text-caption text-white-darken-2 mt-2">
            <v-icon icon="mdi-clock-outline" size="small" />
            ~10 menit
          </div>
        </div>
      </div>
      <!-- Decorative elements -->
      <div class="absolute rounded-full bg-white/10 w-[200px] h-[200px] -top-[50px] -right-[50px]" />
      <div class="absolute rounded-full bg-white/10 w-[150px] h-[150px] -bottom-[30px] left-[10%]" />
    </v-card>

    <!-- Progress & Quick Actions -->
    <v-row class="mb-6">
      <!-- Daily Progress -->
      <v-col cols="12" md="4">
        <v-card class="fill-height pa-5" elevation="1" rounded="xl">
          <div class="d-flex align-center mb-4">
            <v-avatar color="primary" rounded="lg" size="40" variant="tonal">
              <v-icon icon="mdi-target" />
            </v-avatar>
            <div class="ml-3">
              <div class="text-subtitle-1 font-weight-bold">Progress Harian</div>
              <div class="text-caption text-medium-emphasis">Target: 10 menit</div>
            </div>
          </div>
          <v-progress-linear
            class="mb-2"
            color="primary"
            height="12"
            :model-value="dailyProgress"
            rounded
          />
          <div class="d-flex justify-space-between text-caption">
            <span>{{ dailyMinutes }} menit selesai</span>
            <span class="font-weight-bold text-primary">{{ dailyProgress }}%</span>
          </div>
        </v-card>
      </v-col>

      <!-- Level & XP -->
      <v-col cols="12" md="4">
        <v-card class="fill-height pa-5" elevation="1" rounded="xl">
          <div class="d-flex align-center mb-4">
            <v-avatar color="secondary" rounded="lg" size="40" variant="tonal">
              <v-icon icon="mdi-trophy" />
            </v-avatar>
            <div class="ml-3">
              <div class="text-subtitle-1 font-weight-bold">Level {{ level }}</div>
              <div class="text-caption text-medium-emphasis">{{ levelTitle }}</div>
            </div>
          </div>
          <v-progress-linear
            class="mb-2"
            color="secondary"
            height="12"
            :model-value="xpProgress"
            rounded
          />
          <div class="d-flex justify-space-between text-caption">
            <span>{{ currentXP }} / {{ nextLevelXP }} XP</span>
            <span class="font-weight-bold text-secondary">{{ xpProgress }}%</span>
          </div>
        </v-card>
      </v-col>

      <!-- Quick Stats -->
      <v-col cols="12" md="4">
        <v-card class="fill-height pa-5" elevation="1" rounded="xl">
          <div class="text-subtitle-1 font-weight-bold mb-4">Statistik Minggu Ini</div>
          <div class="d-flex justify-space-around text-center">
            <div>
              <div class="text-h5 font-weight-bold text-primary">{{ weeklyMinutes }}</div>
              <div class="text-caption text-medium-emphasis">Menit</div>
            </div>
            <v-divider vertical />
            <div>
              <div class="text-h5 font-weight-bold text-success">{{ weeklyWords }}</div>
              <div class="text-caption text-medium-emphasis">Kata Baru</div>
            </div>
            <v-divider vertical />
            <div>
              <div class="text-h5 font-weight-bold text-warning">{{ weeklyScore }}</div>
              <div class="text-caption text-medium-emphasis">Avg Score</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Last Session Resume & Writing Practice -->
    <v-row>
      <!-- Resume Last Session -->
      <v-col cols="12" md="6">
        <v-card class="fill-height" elevation="1" rounded="xl">
          <v-card-title class="d-flex align-center py-4 px-5">
            <v-icon class="mr-2" color="primary" icon="mdi-history" />
            Lanjutkan Sesi Terakhir
          </v-card-title>
          <v-divider />
          <div class="pa-5">
            <div class="d-flex align-center mb-4">
              <v-avatar color="primary" rounded="lg" size="48" variant="tonal">
                <v-icon icon="mdi-message-text" />
              </v-avatar>
              <div class="ml-4 flex-grow-1">
                <div class="text-subtitle-1 font-weight-bold">{{ lastSession.topic }}</div>
                <div class="text-caption text-medium-emphasis">
                  {{ lastSession.date }} • {{ lastSession.duration }}
                </div>
              </div>
              <v-chip color="success" size="small" variant="tonal">
                {{ lastSession.score }}
              </v-chip>
            </div>
            <v-btn
              block
              class="text-none"
              color="primary"
              rounded="lg"
              variant="tonal"
            >
              <v-icon class="mr-2" icon="mdi-play" />
              Lanjutkan Topik Ini
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Writing Practice -->
      <v-col cols="12" md="6">
        <v-card class="fill-height bg-[linear-gradient(135deg,#fefce8,#fef9c3)]" elevation="1" rounded="xl">
          <v-card-title class="d-flex align-center py-4 px-5">
            <v-icon class="mr-2" color="accent" icon="mdi-pencil" />
            Latihan Writing
          </v-card-title>
          <v-divider />
          <div class="pa-5">
            <p class="text-body-2 text-medium-emphasis mb-4">
              Tingkatkan kemampuan menulis Anda dengan feedback AI instan.
            </p>
            <v-btn
              block
              class="text-none"
              color="accent"
              rounded="lg"
              to="/writing"
              variant="tonal"
            >
              <v-icon class="mr-2" icon="mdi-pencil-outline" />
              Mulai Writing Practice
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  // Streak data
  const streak = ref(12)
  const streakProgress = computed(() => Math.min((streak.value / 30) * 100, 100))

  // Daily progress
  const dailyMinutes = ref(6)
  const dailyTarget = 10
  const dailyProgress = computed(() => Math.round((dailyMinutes.value / dailyTarget) * 100))

  // Level & XP
  const level = ref(5)
  const levelTitle = 'Intermediate Speaker'
  const currentXP = ref(720)
  const nextLevelXP = 1000
  const xpProgress = computed(() => Math.round((currentXP.value / nextLevelXP) * 100))

  // Weekly stats
  const weeklyMinutes = ref(48)
  const weeklyWords = ref(156)
  const weeklyScore = ref(8.2)

  // Last session
  const lastSession = {
    topic: 'Business Meeting Introduction',
    date: 'Kemarin',
    duration: '8 menit',
    score: '8.5/10',
  }
</script>
