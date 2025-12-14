<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="shadowing-coach">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-8">
      <div class="d-flex align-center">
        <v-btn
          class="mr-3"
          icon="mdi-arrow-left"
          size="small"
          to="/dashboard"
          variant="text"
        />
        <div>
          <h1 class="text-h5 font-weight-bold">Shadowing Coach</h1>
          <div class="text-caption text-medium-emphasis">
            Session 1 • Intonation & Rhythm
          </div>
        </div>
      </div>
      <v-chip color="primary" variant="flat">
        <v-icon icon="mdi-fire" size="small" start />
        Streak: 12
      </v-chip>
    </div>

    <!-- Main Card -->
    <v-card class="shadowing-card mx-auto" elevation="4" max-width="800" rounded="xl">
      <div class="pa-8 text-center">
        <!-- Progress -->
        <div class="mb-8">
          <div class="text-caption text-uppercase font-weight-bold text-medium-emphasis mb-2">
            Sentence {{ currentSentenceIndex + 1 }} of {{ totalSentences }}
          </div>
          <v-progress-linear
            color="primary"
            height="6"
            :model-value="((currentSentenceIndex) / totalSentences) * 100"
            rounded
          />
        </div>

        <!-- Sentence Display -->
        <transition mode="out-in" name="fade">
          <div :key="currentStep" class="sentence-container mb-10">
            <!-- Step 1-2: Learning Mode -->
            <div v-if="currentStep !== 'result'">
              <h2 class="text-h4 font-weight-medium mb-4" :class="{ 'blur-text': hideText }">
                "{{ currentSentence.text }}"
              </h2>
              <div class="text-body-1 text-medium-emphasis">
                {{ currentSentence.translation }}
              </div>
            </div>

            <!-- Step 3: Result Mode (Heatmap) -->
            <div v-else>
              <div class="heatmap-container d-flex flex-wrap justify-center gap-2 mb-4">
                <span
                  v-for="(word, index) in currentSentence.words"
                  :key="index"
                  class="heatmap-word px-2 py-1 rounded"
                  :class="getWordClass(word.score)"
                >
                  {{ word.text }}
                </span>
              </div>
              <div class="d-flex justify-center gap-4 text-caption text-medium-emphasis">
                <span class="d-flex align-center"><v-icon class="mr-1" color="success" icon="mdi-circle" size="x-small" /> Good</span>
                <span class="d-flex align-center"><v-icon class="mr-1" color="warning" icon="mdi-circle" size="x-small" /> Accent</span>
                <span class="d-flex align-center"><v-icon class="mr-1" color="error" icon="mdi-circle" size="x-small" /> Missed</span>
              </div>
            </div>
          </div>
        </transition>

        <!-- Waveform Visualization (Mock) -->
        <div class="waveform-container mb-10 relative">
          <!-- Native Waveform -->
          <div class="d-flex align-center justify-center mb-2">
            <span class="text-caption font-weight-bold text-primary mr-3">AI Coach</span>
            <div class="waveform native-waveform d-flex align-center">
              <div
                v-for="n in 40"
                :key="n"
                class="bar"
                :class="{ 'playing': isPlayingNative && n % 3 === 0 }"
                :style="{ height: Math.random() * 24 + 8 + 'px' }"
              />
            </div>
          </div>

          <!-- User Waveform -->
          <transition name="slide-y">
            <div v-if="hasRecorded || isRecording" class="d-flex align-center justify-center">
              <span class="text-caption font-weight-bold text-success mr-3">You</span>
              <div class="waveform user-waveform d-flex align-center">
                <div
                  v-for="n in 40"
                  :key="n"
                  class="bar user-bar"
                  :class="{ 'recording': isRecording }"
                  :style="{ height: isRecording ? Math.random() * 24 + 8 + 'px' : (hasRecorded ? Math.random() * 20 + 8 + 'px' : '4px') }"
                />
              </div>
            </div>
          </transition>
        </div>

        <!-- Controls -->
        <div class="controls-area">
          <transition mode="out-in" name="scale">
            <!-- Step 1: Listen -->
            <v-btn
              v-if="currentStep === 'listen'"
              class="control-btn"
              color="primary"
              height="80"
              rounded="circle"
              variant="elevated"
              width="80"
              @click="playNativeAudio"
            >
              <v-icon icon="mdi-volume-high" size="32" />
            </v-btn>

            <!-- Step 2: Record -->
            <v-btn
              v-else-if="currentStep === 'record'"
              class="control-btn record-btn"
              :class="{ 'is-recording': isRecording }"
              :color="isRecording ? 'error' : 'error'"
              height="80"
              rounded="circle"
              variant="elevated"
              width="80"
              @click="toggleRecording"
            >
              <v-icon :icon="isRecording ? 'mdi-stop' : 'mdi-microphone'" size="32" />
            </v-btn>

            <!-- Step 3: Result Actions -->
            <div v-else class="d-flex align-center justify-center gap-4">
              <v-btn
                color="grey-lighten-2"
                icon="mdi-refresh"
                size="large"
                variant="flat"
                @click="resetStep"
              />
              <v-btn
                color="primary"
                height="64"
                rounded="pill"
                @click="nextSentence"
              >
                Next Sentence
                <v-icon class="ml-2" icon="mdi-arrow-right" />
              </v-btn>
            </div>
          </transition>

          <div class="mt-6 text-body-2 font-weight-medium text-medium-emphasis">
            {{ instructionText }}
          </div>
        </div>
      </div>
    </v-card>

    <!-- Score Overlay (Result Mode) -->
    <v-dialog v-model="showScoreOverlay" persistent width="auto">
      <v-card class="pa-8 text-center" min-width="300" rounded="xl">
        <h3 class="text-h4 font-weight-bold mb-2">Impressive! 🎉</h3>
        <div class="text-h2 font-weight-black text-primary mb-4">92%</div>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Your rhythm matched the native speaker almost perfectly.
        </p>
        <v-btn block color="primary" size="large" @click="showScoreOverlay = false">
          See Details
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  type Step = 'listen' | 'record' | 'result'

  const totalSentences = 5
  const currentSentenceIndex = ref(0)
  const currentStep = ref<Step>('listen')
  const isPlayingNative = ref(false)
  const isRecording = ref(false)
  const hasRecorded = ref(false)
  const hideText = ref(false)
  const showScoreOverlay = ref(false)

  const sentences = [
    {
      text: 'I\'d like to schedule a meeting for next Tuesday.',
      translation: 'Saya ingin menjadwalkan pertemuan untuk Selasa depan.',
      words: [
        { text: 'I\'d', score: 'good' },
        { text: 'like', score: 'good' },
        { text: 'to', score: 'good' },
        { text: 'schedule', score: 'accent' },
        { text: 'a', score: 'good' },
        { text: 'meeting', score: 'good' },
        { text: 'for', score: 'good' },
        { text: 'next', score: 'good' },
        { text: 'Tuesday', score: 'good' },
      ],
    },
    {
      text: 'Could you please send me the report by EOD?',
      translation: 'Bisakah Anda mengirimkan laporannya sebelum hari berakhir?',
      words: [
        { text: 'Could', score: 'good' },
        { text: 'you', score: 'good' },
        { text: 'please', score: 'accent' },
        { text: 'send', score: 'good' },
        { text: 'me', score: 'good' },
        { text: 'the', score: 'missed' },
        { text: 'report', score: 'good' },
        { text: 'by', score: 'good' },
        { text: 'EOD', score: 'good' },
      ],
    },
  ]

  const currentSentence = computed(() => sentences[currentSentenceIndex.value % sentences.length])

  const instructionText = computed(() => {
    switch (currentStep.value) {
      case 'listen': { return 'Tap to listen to the native speaker'
      }
      case 'record': { return isRecording.value ? 'Listening...' : 'Tap to repeat recording'
      }
      case 'result': { return 'Review your performance'
      }
      default: { return ''
      }
    }
  })

  function playNativeAudio () {
    isPlayingNative.value = true
    setTimeout(() => {
      isPlayingNative.value = false
      currentStep.value = 'record'
    }, 2500)
  }

  function toggleRecording () {
    if (isRecording.value) {
      // Stop recording
      isRecording.value = false
      hasRecorded.value = true

      // Simulate processing
      setTimeout(() => {
        showScoreOverlay.value = true
        currentStep.value = 'result'
      }, 1000)
    } else {
      // Start recording
      isRecording.value = true
    }
  }

  function resetStep () {
    currentStep.value = 'listen'
    hasRecorded.value = false
  }

  function nextSentence () {
    currentSentenceIndex.value = (currentSentenceIndex.value + 1) % totalSentences
    resetStep()
  }

  function getWordClass (score: string) {
    switch (score) {
      case 'good': { return 'text-success bg-green-lighten-5'
      }
      case 'accent': { return 'text-warning bg-orange-lighten-5'
      }
      case 'missed': { return 'text-error bg-red-lighten-5 text-decoration-line-through'
      }
      default: { return ''
      }
    }
  }
</script>

<style scoped>
.shadowing-coach {
  max-width: 1000px;
  margin: 0 auto;
}

.shadowing-card {
  background: white;
  min-height: 500px;
}

.blur-text {
  filter: blur(8px);
  user-select: none;
}

/* Waveform Animation */
.waveform {
  height: 60px;
  gap: 4px;
  align-items: center;
}

.bar {
  width: 6px;
  background: #e0e7ff;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.native-waveform .bar.playing {
  background: #6366f1;
  height: 48px !important;
}

.user-waveform .bar.user-bar {
  background: #dcfce7;
}

.user-waveform .bar.recording {
  background: #22c55e;
  animation: wave 0.5s infinite ease-in-out alternate;
}

@keyframes wave {
  0% { height: 10px; }
  100% { height: 50px; }
}

/* Heatmap */
.heatmap-word {
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid transparent;
}

.bg-green-lighten-5 { background-color: #f0fdf4 !important; }
.bg-orange-lighten-5 { background-color: #fffbeb !important; }
.bg-red-lighten-5 { background-color: #fef2f2 !important; }

/* Record Button Pulse */
.record-btn {
  box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
}

.is-recording {
  animation: pulse-red 1.5s infinite;
}

@keyframes pulse-red {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}

.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scale-enter-active, .scale-leave-active { transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.scale-enter-from, .scale-leave-to { opacity: 0; transform: scale(0.5); }
</style>
