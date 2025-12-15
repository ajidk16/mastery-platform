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
          <div v-if="message.role === 'ai'" class="d-flex mb-4 align-start">
            <v-avatar class="mr-3" color="primary" size="36">
              <v-icon color="white" icon="mdi-robot" size="20" />
            </v-avatar>
            <div class="max-w-[85%]">
              <div class="pa-4 rounded-lg bg-white border border-gray-200">
                <p class="mb-0">{{ message.text }}</p>
              </div>
              <div class="mt-1">
                <v-btn
                  color="medium-emphasis"
                  icon="mdi-volume-high"
                  size="x-small"
                  variant="text"
                  @click="speakText(message.text)"
                />
              </div>
            </div>
          </div>

          <!-- User Message -->
          <div v-else class="d-flex justify-end mb-4 align-start">
            <div class="d-flex flex-column align-end max-w-[85%]">
              <div class="pa-4 rounded-lg bg-[linear-gradient(135deg,#6366f1,#4f46e5)] w-100">
                <p class="mb-0 text-white">{{ message.text }}</p>
              </div>
              <div class="mt-1">
                <v-btn
                  color="medium-emphasis"
                  icon="mdi-volume-high"
                  size="x-small"
                  variant="text"
                  @click="speakText(message.text)"
                />
              </div>
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
    })

    // Auto-speak user text
    // speakText(userText)

    await scrollToBottom()
    isTyping.value = true

    try {
      // Prepare history for context
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

      // Auto-speak AI response
      // speakText(response.reply)
    } catch (error) {
      console.error('Failed to get AI response', error)
      messages.value.push({
        role: 'ai',
        text: 'Sorry, I encountered an error. Please try again.',
      })
      speakText('Sorry, I encountered an error. Please try again.')
    } finally {
      isTyping.value = false
      await scrollToBottom()
    }
  }

  // Web Speech API for Speech-to-Text
  const recognition = ref<SpeechRecognition | null>(null)
  const interimTranscript = ref('')

  function initSpeechRecognition () {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognitionAPI) {
      console.warn('Web Speech API is not supported in this browser.')
      return null
    }

    const speechRecognition = new SpeechRecognitionAPI()
    speechRecognition.continuous = true
    speechRecognition.interimResults = true
    speechRecognition.lang = 'en-US' // Set to English for speaking practice

    speechRecognition.addEventListener('result', (event: SpeechRecognitionEvent) => {
      let interim = ''
      let final = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i]?.[0]?.transcript ?? ''
        if (event.results[i]?.isFinal) {
          final += transcript
        } else {
          interim += transcript
        }
      }

      // Append final results to userInput, show interim in real-time
      if (final) {
        userInput.value = (userInput.value + ' ' + final).trim()
      }
      interimTranscript.value = interim
    })

    speechRecognition.addEventListener('error', (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error)

      switch (event.error) {
        case 'not-allowed': {
          alert('Akses mikrofon ditolak. Mohon izinkan penggunaan mikrofon di browser Anda.')
          break
        }
        case 'network': {
          alert('Gagal terhubung ke layanan Google Speech. Pastikan Anda:\n1. Terhubung ke internet\n2. Tidak menggunakan VPN yang memblokir Google\n3. Menggunakan browser Chrome/Edge')
          break
        }
        case 'no-speech': {
          // Ignore no-speech errors, just a timeout
          return
        }
        case 'aborted': {
          // Ignore aborted errors
          return
        }
        default: {
          console.warn('Unhandled speech error:', event.error)
        }
      }

      isRecording.value = false
    })

    speechRecognition.addEventListener('end', () => {
      // Only set isRecording to false if we intentionally stopped
      // If it stopped unexpectedly and we're still supposed to be recording, restart
      if (isRecording.value) {
        // Restart recognition if it stopped unexpectedly (e.g., silence timeout)
        try {
          speechRecognition.start()
        } catch {
          isRecording.value = false
        }
      }
      interimTranscript.value = ''
    })

    return speechRecognition
  }

  // Text-to-Speech (TTS)
  const speechRate = ref(1)
  const speechVolume = ref(1)
  const synth = window.speechSynthesis

  function speakText (text: string) {
    if (!text) return

    // Cancel current speech if any to avoid overlap or just queue it?
    // Requirement: "Queue speech: pesan berikutnya otomatis speak setelah pesan sebelumnya selesai"
    // speechSynthesis.speak() automatically queues.

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = speechRate.value
    utterance.volume = speechVolume.value

    // Select best audio voice
    const voices = synth.getVoices()

    // Priority list for voices:
    // 1. "Google US English" or "Google UK English" (Chrome)
    // 2. Voices with "Premium", "Enhanced", or "Natural" in name
    // 3. "Samantha" (macOS high quality)
    // 4. Any en-US or en-GB voice

    let preferredVoice = voices.find(v => v.name === 'Google US English')

    if (!preferredVoice) {
      preferredVoice = voices.find(v => v.name === 'Google UK English')
    }

    if (!preferredVoice) {
      preferredVoice = voices.find(v =>
        (v.lang.includes('en-US') || v.lang.includes('en-GB'))
        && (v.name.includes('Premium') || v.name.includes('Enhanced') || v.name.includes('Natural')),
      )
    }

    if (!preferredVoice) {
      preferredVoice = voices.find(v => v.name === 'Daniel')
    }

    if (!preferredVoice) {
      preferredVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en-GB'))
    }

    if (preferredVoice) {
      utterance.voice = preferredVoice
    }

    synth.speak(utterance)
  }

  function stopSpeaking () {
    if (synth.speaking) {
      synth.cancel()
    }
  }

  function toggleRecording () {
    if (isRecording.value) {
      // Stop/Pause recording
      if (recognition.value) {
        recognition.value.stop()
      }
      isRecording.value = false
      interimTranscript.value = ''
    } else {
      // Start recording
      // Stop any verbal output from AI when user wants to speak
      stopSpeaking()

      if (!recognition.value) {
        recognition.value = initSpeechRecognition()
      }

      if (!recognition.value) {
        alert('Browser Anda tidak mendukung Web Speech API. Gunakan Chrome atau Edge.')
        return
      }

      try {
        recognition.value.start()
        isRecording.value = true
      } catch (error) {
        console.error('Error starting speech recognition:', error)
        alert('Gagal memulai pengenalan suara. Silakan coba lagi.')
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
    stopSpeaking()
    router.push('/dashboard')
  }

  function endSession () {
    stopTimer()
    stopSpeaking()
    isSessionActive.value = false
    // Show summary modal or redirect
    router.push('/dashboard')
  }

  onMounted(() => {
    startTimer()
    // Pre-load voices
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        // Voices loaded
      }
    }
    // Speak initial message
    // if (messages.value.length > 0) {
    //   speakText(messages.value[0].text)
    // }
  })

  onUnmounted(() => {
    stopTimer()
    stopSpeaking()
  })
</script>
