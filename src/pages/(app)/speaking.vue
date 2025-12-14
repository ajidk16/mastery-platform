<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="speaking-session">
    <!-- Header -->
    <div class="session-header d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center">
        <v-btn
          class="mr-3"
          icon="mdi-arrow-left"
          size="small"
          variant="text"
          @click="exitSession"
        />
        <div>
          <div class="text-h6 font-weight-bold">Speaking Practice</div>
          <div class="text-caption text-medium-emphasis">{{ currentTopic }}</div>
        </div>
      </div>
      <div class="d-flex align-center">
        <!-- Timer -->
        <v-chip
          v-if="isSessionActive"
          class="mr-3"
          color="primary"
          variant="tonal"
        >
          <v-icon icon="mdi-clock-outline" size="small" start />
          {{ formattedTime }}
        </v-chip>
        <v-btn
          color="error"
          rounded="lg"
          size="small"
          variant="tonal"
          @click="endSession"
        >
          Akhiri Sesi
        </v-btn>
      </div>
    </div>

    <!-- Chat Container -->
    <v-card class="chat-container mb-4" elevation="0" rounded="xl">
      <div ref="chatArea" class="chat-area pa-4">
        <!-- Messages -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['message-wrapper', message.role === 'user' ? 'user-message' : 'ai-message']"
        >
          <!-- AI Message -->
          <div v-if="message.role === 'ai'" class="d-flex mb-4">
            <v-avatar class="mr-3" color="primary" size="36">
              <v-icon color="white" icon="mdi-robot" size="20" />
            </v-avatar>
            <div class="message-content ai-bubble pa-4 rounded-lg">
              <p class="mb-0">{{ message.text }}</p>
            </div>
          </div>

          <!-- User Message -->
          <div v-else class="d-flex justify-end mb-4">
            <div class="message-content user-bubble pa-4 rounded-lg">
              <p class="mb-0 text-white">{{ message.text }}</p>
            </div>
          </div>

          <!-- Inline Feedback (after user message) -->
          <div v-if="message.role === 'user' && message.feedback" class="feedback-panel mb-4">
            <v-card class="pa-4" color="grey-lighten-4" elevation="0" rounded="lg">
              <div class="text-caption font-weight-bold text-medium-emphasis mb-3">
                <v-icon class="mr-1" icon="mdi-lightbulb" size="small" />
                Feedback
              </div>

              <!-- Grammar Error -->
              <div v-if="message.feedback.error" class="feedback-item mb-3">
                <div class="d-flex align-center mb-1">
                  <v-icon class="mr-2" color="error" icon="mdi-close-circle" size="18" />
                  <span class="text-caption font-weight-bold text-error">Koreksi</span>
                </div>
                <div class="text-body-2 error-text pl-6">
                  {{ message.feedback.error }}
                </div>
              </div>

              <!-- Correct Version -->
              <div v-if="message.feedback.correct" class="feedback-item mb-3">
                <div class="d-flex align-center mb-1">
                  <v-icon class="mr-2" color="success" icon="mdi-check-circle" size="18" />
                  <span class="text-caption font-weight-bold text-success">Versi Benar</span>
                </div>
                <div class="text-body-2 correct-text pl-6">
                  {{ message.feedback.correct }}
                </div>
              </div>

              <!-- Native Version -->
              <div v-if="message.feedback.native" class="feedback-item mb-3">
                <div class="d-flex align-center mb-1">
                  <v-icon class="mr-2" color="warning" icon="mdi-star" size="18" />
                  <span class="text-caption font-weight-bold text-warning">Versi Lebih Natural</span>
                </div>
                <div class="text-body-2 native-text pl-6">
                  {{ message.feedback.native }}
                </div>
              </div>

              <!-- Explanation -->
              <div v-if="message.feedback.explanation" class="feedback-item">
                <div class="text-caption text-medium-emphasis pl-6">
                  💡 {{ message.feedback.explanation }}
                </div>
              </div>
            </v-card>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="d-flex mb-4">
          <v-avatar class="mr-3" color="primary" size="36">
            <v-icon color="white" icon="mdi-robot" size="20" />
          </v-avatar>
          <div class="typing-indicator pa-4 rounded-lg">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </v-card>

    <!-- Input Area -->
    <v-card class="input-area pa-4" elevation="2" rounded="xl">
      <div class="d-flex align-center">
        <!-- Voice Input Button -->
        <v-btn
          class="mr-3"
          :class="{ 'recording': isRecording }"
          :color="isRecording ? 'error' : 'primary'"
          icon
          size="large"
          @click="toggleRecording"
        >
          <v-icon :icon="isRecording ? 'mdi-stop' : 'mdi-microphone'" />
        </v-btn>

        <!-- Text Input -->
        <v-text-field
          v-model="userInput"
          class="flex-grow-1"
          density="comfortable"
          hide-details
          placeholder="Ketik atau tekan mikrofon untuk bicara..."
          rounded="lg"
          variant="outlined"
          @keyup.enter="sendMessage"
        />

        <!-- Send Button -->
        <v-btn
          class="ml-3"
          color="primary"
          :disabled="!userInput.trim()"
          icon
          @click="sendMessage"
        >
          <v-icon icon="mdi-send" />
        </v-btn>
      </div>

      <!-- Recording Status -->
      <div v-if="isRecording" class="recording-status mt-3 text-center">
        <v-chip color="error" variant="tonal">
          <v-icon class="mr-1 pulse" icon="mdi-circle" size="small" />
          Merekam... Bicara sekarang
        </v-chip>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  interface Feedback {
    error?: string
    correct?: string
    native?: string
    explanation?: string
  }

  interface Message {
    role: 'ai' | 'user'
    text: string
    feedback?: Feedback
  }

  const router = useRouter()

  // Session state
  const currentTopic = ref('Business Meeting Introduction')
  const isSessionActive = ref(true)
  const sessionSeconds = ref(0)
  const isTyping = ref(false)
  const isRecording = ref(false)
  const userInput = ref('')
  const chatArea = ref<HTMLElement | null>(null)

  // Timer
  let timerInterval: ReturnType<typeof setInterval> | null = null

  const formattedTime = computed(() => {
    const minutes = Math.floor(sessionSeconds.value / 60)
    const seconds = sessionSeconds.value % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  })

  // Messages
  const messages = ref<Message[]>([
    {
      role: 'ai',
      text: 'Hello! Let\'s practice introducing yourself in a business meeting. Imagine you\'re meeting a new client for the first time. Please introduce yourself and your role.',
    },
  ])

  // Simulated AI responses with feedback
  const sampleFeedback: Feedback[] = [
    {
      error: '"I am work as..."',
      correct: '"I work as a software engineer."',
      native: '"I\'m a software engineer at XYZ Company."',
      explanation: 'Gunakan "work as" bukan "am work as". Untuk lebih natural, langsung sebut profesi Anda.',
    },
    {
      correct: 'Great sentence structure!',
      native: '"It\'s a pleasure to meet you."',
      explanation: 'Kalimat Anda sudah benar! Versi native lebih formal untuk konteks bisnis.',
    },
  ]

  function startTimer () {
    timerInterval = setInterval(() => {
      sessionSeconds.value++
    }, 1000)
  }

  function stopTimer () {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
  }

  async function sendMessage () {
    if (!userInput.value.trim()) return

    const userText = userInput.value.trim()
    userInput.value = ''

    // Add user message
    messages.value.push({
      role: 'user',
      text: userText,
      feedback: sampleFeedback[messages.value.length % 2],
    })

    await scrollToBottom()

    // Simulate AI typing
    isTyping.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    isTyping.value = false

    // Add AI response
    const aiResponses = [
      'That\'s a good start! Now, tell me about your experience in your field. What projects have you worked on recently?',
      'Excellent! You mentioned your role well. Can you also share what makes your company unique?',
      'Great job! Let\'s practice asking questions now. How would you ask about the client\'s business needs?',
    ]

    messages.value.push({
      role: 'ai',
      text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
    })

    await scrollToBottom()
  }

  function toggleRecording () {
    isRecording.value = !isRecording.value
    if (isRecording.value) {
      // Simulate voice recognition
      setTimeout(() => {
        userInput.value = 'Hello, my name is David and I am work as a software engineer.'
        isRecording.value = false
      }, 2000)
    }
  }

  async function scrollToBottom () {
    await nextTick()
    if (chatArea.value) {
      chatArea.value.scrollTop = chatArea.value.scrollHeight
    }
  }

  function exitSession () {
    router.push('/dashboard')
  }

  function endSession () {
    stopTimer()
    isSessionActive.value = false
    // Show summary modal or redirect
    router.push('/dashboard')
  }

  onMounted(() => {
    startTimer()
  })

  onUnmounted(() => {
    stopTimer()
  })
</script>

<style scoped>
.speaking-session {
  max-width: 800px;
  margin: 0 auto;
}

.chat-container {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
}

.chat-area {
  height: calc(100vh - 320px);
  min-height: 400px;
  overflow-y: auto;
}

.ai-bubble {
  background: white;
  border: 1px solid #e5e7eb;
  max-width: 85%;
}

.user-bubble {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  max-width: 85%;
}

.feedback-panel {
  margin-left: 48px;
}

.error-text {
  color: #dc2626;
  text-decoration: line-through;
}

.correct-text {
  color: #16a34a;
  font-weight: 500;
}

.native-text {
  color: #d97706;
  font-style: italic;
}

.typing-indicator {
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  gap: 4px;
  align-items: center;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: #9ca3af;
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
}

.input-area {
  position: sticky;
  bottom: 0;
  background: white;
}

.recording {
  animation: pulse-recording 1.5s infinite;
}

@keyframes pulse-recording {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(239, 68, 68, 0);
  }
}

.pulse {
  animation: pulse-dot 1s infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
</style>
