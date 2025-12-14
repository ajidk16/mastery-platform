<route lang="yaml">
meta:
  layout: blank
</route>

<template>
  <v-container class="fill-height py-8" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="6" md="8">
        <!-- Progress Indicator -->
        <div class="mb-8">
          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-caption text-medium-emphasis">Langkah {{ currentStep }} dari {{ totalSteps }}</span>
            <span class="text-caption font-weight-medium text-primary">{{ Math.round((currentStep / totalSteps) * 100) }}%</span>
          </div>
          <v-progress-linear
            class="progress-bar"
            color="primary"
            height="8"
            :model-value="(currentStep / totalSteps) * 100"
            rounded
          />
        </div>

        <!-- Step Content -->
        <v-card class="onboarding-card pa-6 pa-md-8" elevation="4" rounded="xl">
          <!-- Step 1: Goal Selection -->
          <v-window v-model="currentStep">
            <v-window-item :value="1">
              <div class="text-center mb-8">
                <v-icon
                  class="mb-4"
                  color="primary"
                  icon="mdi-target"
                  size="48"
                />
                <h2 class="text-h5 font-weight-bold mb-2">
                  Apa tujuan Anda belajar speaking?
                </h2>
                <p class="text-body-2 text-medium-emphasis">
                  Pilih tujuan utama Anda
                </p>
              </div>

              <v-row>
                <v-col v-for="goal in goals" :key="goal.value" cols="6">
                  <v-card
                    class="goal-card pa-4 text-center h-100"
                    :class="{ 'selected-card': selectedGoal === goal.value }"
                    color="primary"
                    rounded="lg"
                    :variant="
                      selectedGoal === goal.value ? 'tonal' : 'outlined'
                    "
                    @click="selectedGoal = goal.value"
                  >
                    <v-icon class="mb-2" :icon="goal.icon" size="32" />
                    <div class="text-subtitle-2 font-weight-medium">
                      {{ goal.label }}
                    </div>
                    <div class="text-caption text-medium-emphasis">
                      {{ goal.desc }}
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-window-item>

            <!-- Step 2: Level Assessment -->
            <v-window-item :value="2">
              <div class="text-center mb-8">
                <v-icon
                  class="mb-4"
                  color="secondary"
                  icon="mdi-chart-bar"
                  size="48"
                />
                <h2 class="text-h5 font-weight-bold mb-2">
                  Seberapa lancar Anda berbicara?
                </h2>
                <p class="text-body-2 text-medium-emphasis">
                  Pilih level yang paling menggambarkan kemampuan Anda
                </p>
              </div>

              <v-radio-group v-model="selectedLevel" class="level-group">
                <v-card
                  v-for="level in levels"
                  :key="level.value"
                  class="level-card mb-3 pa-4"
                  :class="{ 'selected-level': selectedLevel === level.value }"
                  color="secondary"
                  rounded="lg"
                  :variant="
                    selectedLevel === level.value ? 'tonal' : 'outlined'
                  "
                  @click="selectedLevel = level.value"
                >
                  <div class="d-flex align-center">
                    <v-radio color="secondary" :value="level.value" />
                    <div class="ml-3">
                      <div class="text-subtitle-1 font-weight-medium">
                        {{ level.label }}
                      </div>
                      <div class="text-caption text-medium-emphasis">
                        {{ level.desc }}
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-radio-group>
            </v-window-item>

            <!-- Step 3: Daily Target -->
            <v-window-item :value="3">
              <div class="text-center mb-8">
                <v-icon
                  class="mb-4"
                  color="accent"
                  icon="mdi-clock-outline"
                  size="48"
                />
                <h2 class="text-h5 font-weight-bold mb-2">
                  Berapa lama Anda ingin berlatih?
                </h2>
                <p class="text-body-2 text-medium-emphasis">
                  Pilih target latihan harian Anda
                </p>
              </div>

              <v-row justify="center">
                <v-col
                  v-for="target in dailyTargets"
                  :key="target.value"
                  cols="4"
                >
                  <v-card
                    class="target-card pa-4 text-center"
                    :class="{
                      'selected-target': selectedTarget === target.value,
                    }"
                    color="accent"
                    rounded="lg"
                    :variant="
                      selectedTarget === target.value ? 'tonal' : 'outlined'
                    "
                    @click="selectedTarget = target.value"
                  >
                    <div class="text-h4 font-weight-bold mb-1">
                      {{ target.value }}
                    </div>
                    <div class="text-caption">menit/hari</div>
                    <v-chip
                      v-if="target.label"
                      class="mt-2"
                      :color="target.color"
                      size="x-small"
                      variant="tonal"
                    >
                      {{ target.label }}
                    </v-chip>
                  </v-card>
                </v-col>
              </v-row>

              <v-alert
                class="mt-6"
                color="primary"
                density="compact"
                icon="mdi-lightbulb"
                rounded="lg"
                variant="tonal"
              >
                <span class="text-caption">Konsistensi lebih penting dari durasi. Mulai dari target
                  kecil!</span>
              </v-alert>
            </v-window-item>

            <!-- Step 4: Ready -->
            <v-window-item :value="4">
              <div class="text-center py-8">
                <v-icon
                  class="mb-4 animate-bounce"
                  color="success"
                  icon="mdi-check-circle"
                  size="72"
                />
                <h2 class="text-h4 font-weight-bold mb-2">Anda Siap! 🎉</h2>
                <p class="text-body-1 text-medium-emphasis mb-6">
                  Profil latihan Anda sudah dibuat. Mari mulai perjalanan
                  speaking Anda!
                </p>

                <v-card
                  class="summary-card pa-4 mb-6"
                  color="grey-lighten-4"
                  flat
                  rounded="lg"
                >
                  <div class="d-flex justify-space-around text-center">
                    <div>
                      <v-icon class="mb-1" color="primary" icon="mdi-target" />
                      <div class="text-caption text-medium-emphasis">
                        Tujuan
                      </div>
                      <div class="text-subtitle-2 font-weight-medium">
                        {{ getGoalLabel }}
                      </div>
                    </div>
                    <v-divider vertical />
                    <div>
                      <v-icon
                        class="mb-1"
                        color="secondary"
                        icon="mdi-chart-bar"
                      />
                      <div class="text-caption text-medium-emphasis">Level</div>
                      <div class="text-subtitle-2 font-weight-medium">
                        {{ getLevelLabel }}
                      </div>
                    </div>
                    <v-divider vertical />
                    <div>
                      <v-icon class="mb-1" color="accent" icon="mdi-clock" />
                      <div class="text-caption text-medium-emphasis">
                        Target
                      </div>
                      <div class="text-subtitle-2 font-weight-medium">
                        {{ selectedTarget }} menit
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-window-item>
          </v-window>

          <!-- Navigation Buttons -->
          <div class="d-flex justify-space-between mt-8">
            <v-btn
              v-if="currentStep > 1"
              class="text-none"
              variant="text"
              @click="prevStep"
            >
              <v-icon icon="mdi-arrow-left" start />
              Kembali
            </v-btn>
            <v-spacer v-else />

            <v-btn
              class="text-none next-btn"
              color="primary"
              :disabled="!canProceed"
              rounded="lg"
              size="large"
              @click="nextStep"
            >
              {{ currentStep === totalSteps ? "Mulai Latihan" : "Lanjut" }}
              <v-icon
                v-if="currentStep !== totalSteps"
                end
                icon="mdi-arrow-right"
              />
              <v-icon v-else end icon="mdi-rocket-launch" />
            </v-btn>
          </div>
        </v-card>

        <!-- Skip Option -->
        <p
          v-if="currentStep < totalSteps"
          class="text-center text-caption text-medium-emphasis mt-4"
        >
          <a
            class="text-decoration-none"
            href="#"
            @click.prevent="skipOnboarding"
          >
            Lewati untuk sekarang
          </a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const currentStep = ref(1)
  const totalSteps = 4

  const selectedGoal = ref('')
  const selectedLevel = ref('')
  const selectedTarget = ref(10)

  const goals = [
    {
      value: 'work',
      label: 'Pekerjaan',
      desc: 'Meeting, presentasi',
      icon: 'mdi-briefcase-outline',
    },
    {
      value: 'study',
      label: 'Studi',
      desc: 'IELTS, TOEFL',
      icon: 'mdi-school-outline',
    },
    {
      value: 'travel',
      label: 'Travel',
      desc: 'Liburan, wisata',
      icon: 'mdi-airplane',
    },
    {
      value: 'general',
      label: 'Umum',
      desc: 'Percakapan sehari-hari',
      icon: 'mdi-chat-outline',
    },
  ]

  const levels = [
    {
      value: 'beginner',
      label: 'Pemula',
      desc: 'Baru mulai belajar, belum percaya diri berbicara',
    },
    {
      value: 'intermediate',
      label: 'Menengah',
      desc: 'Bisa berkomunikasi dasar tapi masih sering bingung',
    },
    {
      value: 'advanced',
      label: 'Mahir',
      desc: 'Sudah lancar tapi ingin lebih natural dan fluent',
    },
  ]

  const dailyTargets = [
    { value: 5, label: 'Santai', color: 'success' },
    { value: 10, label: 'Ideal', color: 'primary' },
    { value: 20, label: 'Intensif', color: 'warning' },
  ]

  const canProceed = computed(() => {
    switch (currentStep.value) {
      case 1: {
        return !!selectedGoal.value
      }
      case 2: {
        return !!selectedLevel.value
      }
      case 3: {
        return !!selectedTarget.value
      }
      default: {
        return true
      }
    }
  })

  const getGoalLabel = computed(() => {
    return goals.find(g => g.value === selectedGoal.value)?.label || ''
  })

  const getLevelLabel = computed(() => {
    return levels.find(l => l.value === selectedLevel.value)?.label || ''
  })

  function nextStep () {
    if (currentStep.value < totalSteps) {
      currentStep.value++
    } else {
      completeOnboarding()
    }
  }

  function prevStep () {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }

  function skipOnboarding () {
    router.push('/dashboard')
  }

  function completeOnboarding () {
    // Save preferences and navigate
    console.log({
      goal: selectedGoal.value,
      level: selectedLevel.value,
      dailyTarget: selectedTarget.value,
    })
    router.push('/dashboard')
  }
</script>

<style scoped>
.progress-bar {
  border-radius: 8px;
}

.onboarding-card {
  background: white;
}

.goal-card,
.level-card,
.target-card {
  cursor: pointer;
  transition: all 0.3s ease;
}

.goal-card:hover,
.level-card:hover,
.target-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.selected-card,
.selected-level,
.selected-target {
  border: 2px solid rgb(var(--v-theme-primary)) !important;
}

.selected-level {
  border-color: rgb(var(--v-theme-secondary)) !important;
}

.selected-target {
  border-color: rgb(var(--v-theme-accent)) !important;
}

.level-group {
  margin: 0;
}

.level-group :deep(.v-selection-control-group) {
  gap: 0;
}

.next-btn {
  transition: all 0.3s ease;
}

.next-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3) !important;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s ease infinite;
}

.summary-card {
  background: linear-gradient(135deg, #f9fafb, #f3f4f6);
}
</style>
