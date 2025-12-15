<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="max-w-200 mx-auto">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-4">
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
    <v-card class="mb-4 bg-[#f9fafb] border border-gray-200" elevation="0" rounded="xl">
      <div ref="chatArea" class="pa-4 h-[calc(100vh-320px)] min-h-100 overflow-y-auto">
        <!-- Messages -->
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message-wrapper"
        >
          <!-- AI Message -->
          <div v-if="message.role === 'ai'" class="d-flex mb-4">
            <v-avatar class="mr-3" color="primary" size="36">
              <v-icon color="white" icon="mdi-robot" size="20" />
            </v-avatar>
            <div class="pa-4 rounded-lg bg-white border border-gray-200 max-w-[85%]">
              <p class="mb-0">{{ message.text }}</p>
            </div>
          </div>

          <!-- User Message -->
          <div v-else class="d-flex justify-end mb-4">
            <div class="pa-4 rounded-lg bg-[linear-gradient(135deg,#6366f1,#4f46e5)] max-w-[85%]">
              <p class="mb-0 text-white">{{ message.text }}</p>
            </div>
          </div>

          <!-- Inline Feedback (after user message) -->
          <div v-if="message.role === 'user' && message.feedback" class="ml-12 mb-4">
            <v-card class="pa-4" color="grey-lighten-4" elevation="0" rounded="lg">
              <div class="text-caption font-weight-bold text-medium-emphasis mb-3">
                <v-icon class="mr-1" icon="mdi-lightbulb" size="small" />
                Feedback
              </div>

              <!-- Grammar Error -->
              <div v-if="message.feedback.error" class="mb-3">
                <div class="d-flex align-center mb-1">
                  <v-icon class="mr-2" color="error" icon="mdi-close-circle" size="18" />
                  <span class="text-caption font-weight-bold text-error">Koreksi</span>
                </div>
                <div class="text-body-2 pl-6 text-red-600 line-through">
                  {{ message.feedback.error }}
                </div>
              </div>

              <!-- Correct Version -->
              <div v-if="message.feedback.correct" class="mb-3">
                <div class="d-flex align-center mb-1">
                  <v-icon class="mr-2" color="success" icon="mdi-check-circle" size="18" />
                  <span class="text-caption font-weight-bold text-success">Versi Benar</span>
                </div>
                <div class="text-body-2 pl-6 text-green-600 font-medium">
                  {{ message.feedback.correct }}
                </div>
              </div>

              <!-- Native Version -->
              <div v-if="message.feedback.native" class="mb-3">
                <div class="d-flex align-center mb-1">
                  <v-icon class="mr-2" color="warning" icon="mdi-star" size="18" />
                  <span class="text-caption font-weight-bold text-warning">Versi Lebih Natural</span>
                </div>
                <div class="text-body-2 pl-6 text-amber-600 italic">
                  {{ message.feedback.native }}
                </div>
              </div>

              <!-- Explanation -->
              <div v-if="message.feedback.explanation">
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
          <div class="pa-4 rounded-lg bg-white border border-gray-200 flex gap-1 items-center">
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-typing" />
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-typing [animation-delay:0.2s]" />
            <span class="w-2 h-2 bg-gray-400 rounded-full animate-typing [animation-delay:0.4s]" />
          </div>
        </div>
      </div>
    </v-card>

    <!-- Input Area -->
    <v-card class="pa-4 sticky bottom-0 bg-white" elevation="2" rounded="xl">
      <div class="d-flex align-center">
        <!-- Voice Input Button -->
        <v-btn
          class="mr-3"
          :class="{ 'animate-pulse-recording': isRecording }"
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
          class="grow"
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
      <div v-if="isRecording" class="mt-3 text-center">
        <v-chip color="error" variant="tonal">
          <v-icon class="mr-1 animate-pulse-dot" icon="mdi-circle" size="small" />
          Merekam... Bicara sekarang
        </v-chip>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { type Feedback, sendMessageToAI } from '@/services/openai'

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
  const recognition = ref<any>(null)

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
    if (!userInput.value.trim() || isTyping.value) return

    const userText = userInput.value.trim()
    userInput.value = ''

    // Add user message immediately
    messages.value.push({
      role: 'user',
      text: userText,
      // Feedback will be populated after AI response if we want it "async",
      // but typically we get feedback WITH the response.
      // For UX, we might want to show the message first, then the feedback later.
      // But the current UI structure attaches feedback to the user message.
      // We will update this message later.
    })

    await scrollToBottom()

    isTyping.value = true

    try {
      // Prepare history for context (excluding the just added message to avoid duplication in logic if handled differently,
      // but my service takes history + new message separately or together.
      // My service definition: sendMessageToAI(userMessage, history)
      // So I should pass the history BEFORE the current message.
      const history = messages.value.slice(0, -1).map(m => ({
        role: m.role,
        text: m.text,
      }))

      const response = await sendMessageToAI(userText, history)

      // Update the user's message with the received feedback
      if (response.feedback && messages.value.length > 0) {
        const lastIndex = messages.value.length - 1
        messages.value[lastIndex]!.feedback = response.feedback
      }

      // Add AI response
      messages.value.push({
        role: 'ai',
        text: response.reply,
      })
    } catch (error) {
      console.error('Failed to get AI response', error)
      messages.value.push({
        role: 'ai',
        text: 'Sorry, I encountered an error. Please try again.',
      })
    } finally {
      isTyping.value = false
      await scrollToBottom()
    }
  }

  function toggleRecording () {
    if (isRecording.value) {
      // Stop recording
      if (recognition.value) {
        recognition.value.stop()
      }
      isRecording.value = false
    } else {
      // Start recording
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (!SpeechRecognition) {
        alert('Browser Anda tidak mendukung fitur Voice Recognition. Gunakan Chrome, Edge, atau Safari.')
        return
      }

      recognition.value = new SpeechRecognition()
      recognition.value.lang = 'en-US'
      recognition.value.continuous = true
      recognition.value.interimResults = true

      recognition.value.addEventListener('result', (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('')

        userInput.value = transcript
      })

      recognition.value.addEventListener('end', () => {
        isRecording.value = false
        recognition.value = null
      })

      recognition.value.addEventListener('error', (event: any) => {
        console.error('Speech recognition error', event.error)
        isRecording.value = false
        recognition.value = null

        switch (event.error) {
          case 'network': {
            alert('Gangguan jaringan: Tidak dapat terhubung ke layanan speech recognition. Pastikan koneksi internet Anda stabil.')
            break
          }
          case 'not-allowed': {
            alert('Akses mikrofon ditolak. Mohon izinkan akses mikrofon untuk menggunakan fitur ini.')
            break
          }
          case 'no-speech': {
            // Ignore no-speech errors
            break
          }
          default: {
            console.warn(`Speech recognition error: ${event.error}`)
            break
          }
        }
      })

      try {
        recognition.value.start()
        isRecording.value = true
      } catch (error) {
        console.error('Failed to start recording', error)
        isRecording.value = false
      }
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
