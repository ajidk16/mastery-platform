<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="max-w-[1200px] mx-auto">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div class="d-flex align-center">
        <v-btn
          class="mr-3"
          icon="mdi-arrow-left"
          size="small"
          to="/dashboard"
          variant="text"
        />
        <div>
          <h1 class="text-h5 font-weight-bold">Writing Practice</h1>
          <div class="text-caption text-medium-emphasis">
            Weekly Challenge • Business Email
          </div>
        </div>
      </div>
      <v-btn
        prepend-icon="mdi-history"
        size="small"
        variant="text"
      >
        History
      </v-btn>
    </div>

    <v-row>
      <!-- Left Column: Prompt & Input -->
      <v-col cols="12" md="7">
        <!-- Prompt Card -->
        <v-card class="mb-4 !bg-[rgba(var(--v-theme-primary),0.1)]" elevation="0" rounded="xl">
          <div class="pa-5">
            <div class="d-flex align-center mb-3">
              <v-icon class="mr-2" color="primary" icon="mdi-text-box-outline" />
              <span class="text-subtitle-2 font-weight-bold text-primary">WRITING PROMPT</span>
            </div>
            <p class="text-body-1 font-weight-medium mb-0">
              {{ currentPrompt }}
            </p>
          </div>
        </v-card>

        <!-- Input Area -->
        <v-card class="pa-4" elevation="1" rounded="xl">
          <v-textarea
            v-model="userText"
            auto-grow
            bg-color="transparent"
            class="writing-input"
            counter
            flat
            label="Write your response here..."
            :readonly="isSubmitted"
            rows="10"
            variant="solo"
          />

          <v-divider class="my-3" />

          <div class="d-flex align-center justify-space-between">
            <div class="text-caption text-medium-emphasis">
              <span :class="{ 'text-error': wordCount < minWords }">
                {{ wordCount }} words
              </span>
              <span v-if="minWords > 0"> (Min: {{ minWords }})</span>
            </div>

            <div class="d-flex align-center gap-2">
              <v-btn
                v-if="!isSubmitted"
                variant="text"
                @click="clearText"
              >
                Clear
              </v-btn>
              <v-btn
                color="primary"
                :disabled="wordCount < minWords || isSubmitted"
                :loading="isAnalyzing"
                rounded="lg"
                @click="submitWriting"
              >
                {{ isSubmitted ? 'Submitted' : 'Get Feedback' }}
                <v-icon class="ml-2" icon="mdi-send" />
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- Right Column: Feedback -->
      <v-col cols="12" md="5">
        <v-fade-transition mode="out-in">
          <!-- Empty State -->
          <v-card
            v-if="!feedback"
            class="fill-height d-flex align-center justify-center pa-8 text-center"
            color="grey-lighten-4"
            elevation="0"
            min-height="400"
            rounded="xl"
          >
            <div>
              <v-icon
                class="mb-4 text-disabled"
                icon="mdi-robot-outline"
                size="64"
              />
              <h3 class="text-h6 font-weight-medium text-disabled mb-2">
                AI Feedback Assistant
              </h3>
              <p class="text-body-2 text-disabled">
                Write your response and submit to get<br>instant grammar and style corrections.
              </p>
            </div>
          </v-card>

          <!-- Feedback Result -->
          <v-card
            v-else
            class="fill-height"
            elevation="1"
            rounded="xl"
          >
            <div class="pa-5 border-b border-black/10">
              <div class="d-flex align-center justify-space-between mb-2">
                <span class="text-h6 font-weight-bold">Feedback Result</span>
                <v-chip
                  :color="getScoreColor(feedback.score)"
                  size="small"
                  variant="flat"
                >
                  Score: {{ feedback.score }}/10
                </v-chip>
              </div>
              <p class="text-body-2 text-medium-emphasis mb-0">
                {{ feedback.summary }}
              </p>
            </div>

            <div class="pa-0 max-h-[400px] overflow-y-auto">
              <v-list class="py-0">
                <!-- Corrections -->
                <v-list-subheader class="font-weight-bold text-uppercase mt-2">
                  Corrections
                </v-list-subheader>

                <v-list-item
                  v-for="(item, i) in feedback.corrections"
                  :key="i"
                  class="mb-2 px-5"
                  lines="three"
                >
                  <template #prepend>
                    <v-icon
                      class="mt-1"
                      color="error"
                      icon="mdi-alert-circle-outline"
                      size="small"
                    />
                  </template>

                  <div class="mb-1">
                    <span class="text-decoration-line-through text-error mr-2">
                      {{ item.original }}
                    </span>
                    <v-icon color="grey" icon="mdi-arrow-right" size="x-small" />
                    <span class="text-success ml-2 font-weight-medium">
                      {{ item.correction }}
                    </span>
                  </div>
                  <div class="text-caption text-medium-emphasis">
                    {{ item.explanation }}
                  </div>
                </v-list-item>

                <v-divider class="my-2" />

                <!-- Suggestions -->
                <v-list-subheader class="font-weight-bold text-uppercase">
                  Styling Suggestions
                </v-list-subheader>

                <v-list-item
                  v-for="(item, i) in feedback.suggestions"
                  :key="i"
                  class="mb-2 px-5"
                >
                  <template #prepend>
                    <v-icon
                      class="mt-1"
                      color="primary"
                      icon="mdi-magic-staff"
                      size="small"
                    />
                  </template>
                  <v-list-item-title class="text-body-2 font-weight-medium mb-1">
                    Better Phrasing
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-body-2 text-primary">
                    "{{ item }}"
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </div>

            <div class="pa-4 border-t border-black/10 bg-grey-lighten-5">
              <v-btn
                block
                color="primary"
                variant="outlined"
                @click="resetSession"
              >
                Try Another Prompt
              </v-btn>
            </div>
          </v-card>
        </v-fade-transition>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  interface Correction {
    original: string
    correction: string
    explanation: string
  }

  interface Feedback {
    score: number
    summary: string
    corrections: Correction[]
    suggestions: string[]
  }

  const currentPrompt = ref(
    'Write an email to a potential client introducing our new software service "TaskMaster". Mention key features like AI automation and team collaboration. Ask for a meeting next week.',
  )
  const minWords = 30
  const userText = ref('')
  const isAnalyzing = ref(false)
  const isSubmitted = ref(false)
  const feedback = ref<Feedback | null>(null)

  const wordCount = computed(() => {
    const text = userText.value.trim()
    return text ? text.split(/\s+/).length : 0
  })

  function getScoreColor (score: number): string {
    if (score >= 9) return 'success'
    if (score >= 7) return 'primary'
    if (score >= 5) return 'warning'
    return 'error'
  }

  function clearText () {
    userText.value = ''
  }

  function submitWriting () {
    if (wordCount.value < minWords) return

    isAnalyzing.value = true
    isSubmitted.value = true

    // Simulate AI Analysis
    setTimeout(() => {
      feedback.value = {
        score: 8.5,
        summary: 'Great email structure! Your tone is professional and persuasive. A few minor grammar adjustments will make it perfect.',
        corrections: [
          {
            original: 'We launching new service',
            correction: 'We are launching a new service',
            explanation: 'Missing auxiliary verb "are" and article "a".',
          },
          {
            original: 'I want meet you',
            correction: 'I would like to meet with you',
            explanation: 'Using "would like" is more polite in a business context.',
          },
        ],
        suggestions: [
          'Consider using "I am writing to introduce..." for a stronger opening.',
          'Instead of "It is good software", try "TaskMaster is a robust solution".',
        ],
      }
      isAnalyzing.value = false
    }, 2000)
  }

  function resetSession () {
    userText.value = ''
    feedback.value = null
    isSubmitted.value = false
    // In a real app, fetch new prompt here
  }
</script>
