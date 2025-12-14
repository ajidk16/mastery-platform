<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="topics-page">
    <div class="d-flex align-center justify-space-between mb-6">
      <div>
        <h1 class="text-h4 font-weight-bold">Topic Library</h1>
        <p class="text-body-2 text-medium-emphasis">
          Browse and choose your next practice session
        </p>
      </div>
      <v-btn
        color="primary"
        prepend-icon="mdi-shuffle-variant"
        rounded="lg"
        variant="tonal"
      >
        Random Topic
      </v-btn>
    </div>

    <!-- Filters -->
    <v-card class="mb-6 pa-4" elevation="0" rounded="xl">
      <v-row align="center" dense>
        <!-- Search -->
        <v-col cols="12" md="4">
          <v-text-field
            v-model="searchQuery"
            clearable
            density="compact"
            hide-details
            placeholder="Search topics..."
            prepend-inner-icon="mdi-magnify"
            rounded="lg"
            variant="outlined"
          />
        </v-col>

        <!-- Level Filter -->
        <v-col cols="12" md="4">
          <v-chip-group v-model="selectedLevel" mandatory selected-class="text-primary">
            <v-chip
              v-for="level in levels"
              :key="level.value"
              filter
              :value="level.value"
              variant="outlined"
            >
              {{ level.label }}
            </v-chip>
          </v-chip-group>
        </v-col>

        <!-- Goal Filter -->
        <v-col cols="12" md="4">
          <v-select
            v-model="selectedGoal"
            clearable
            density="compact"
            hide-details
            item-title="label"
            item-value="value"
            :items="goals"
            label="Filter by Goal"
            prepend-inner-icon="mdi-target"
            rounded="lg"
            variant="outlined"
          />
        </v-col>
      </v-row>
    </v-card>

    <!-- Topic Grid -->
    <v-row>
      <v-col
        v-for="topic in filteredTopics"
        :key="topic.id"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="fill-height transition-all duration-300"
            :elevation="isHovering ? 8 : 1"
            rounded="xl"
          >
            <div
              class="pa-4 rounded-t-[16px]"
              :style="{ background: `linear-gradient(135deg, ${topic.color}20, ${topic.color}40)` }"
            >
              <v-icon :color="topic.color" :icon="topic.icon" size="32" />
            </div>
            <v-card-text class="pa-4">
              <div class="d-flex align-center mb-2">
                <v-chip
                  class="mr-2"
                  :color="getLevelColor(topic.level)"
                  size="x-small"
                  variant="tonal"
                >
                  {{ topic.level }}
                </v-chip>
                <v-chip color="grey" size="x-small" variant="tonal">
                  {{ topic.goal }}
                </v-chip>
              </div>
              <h3 class="text-subtitle-1 font-weight-bold mb-1">
                {{ topic.title }}
              </h3>
              <p class="text-caption text-medium-emphasis mb-3 line-clamp-2">
                {{ topic.description }}
              </p>
              <div class="d-flex align-center justify-space-between">
                <span class="text-caption text-medium-emphasis">
                  <v-icon icon="mdi-clock-outline" size="small" />
                  {{ topic.duration }} min
                </span>
                <v-btn
                  color="primary"
                  density="compact"
                  rounded="lg"
                  size="small"
                  variant="tonal"
                >
                  Start
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- Empty State -->
    <v-card
      v-if="filteredTopics.length === 0"
      class="pa-12 text-center"
      color="grey-lighten-4"
      elevation="0"
      rounded="xl"
    >
      <v-icon class="mb-4 text-disabled" icon="mdi-magnify-remove-outline" size="64" />
      <h3 class="text-h6 text-disabled mb-2">No Topics Found</h3>
      <p class="text-body-2 text-disabled">
        Try adjusting your filters or search query.
      </p>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  const searchQuery = ref('')
  const selectedLevel = ref('all')
  const selectedGoal = ref<string | null>(null)

  const levels = [
    { label: 'All', value: 'all' },
    { label: 'Beginner', value: 'Beginner' },
    { label: 'Intermediate', value: 'Intermediate' },
    { label: 'Advanced', value: 'Advanced' },
  ]

  const goals = [
    { label: 'Work', value: 'Work' },
    { label: 'Study', value: 'Study' },
    { label: 'Travel', value: 'Travel' },
    { label: 'General', value: 'General' },
  ]

  const topics = [
    { id: 1, title: 'Introduce Yourself', description: 'Practice professional self-introductions for meetings and interviews.', level: 'Beginner', goal: 'Work', duration: 10, icon: 'mdi-account-tie', color: '#6366f1' },
    { id: 2, title: 'Order at a Restaurant', description: 'Learn common phrases for dining out and talking to servers.', level: 'Beginner', goal: 'Travel', duration: 8, icon: 'mdi-silverware-fork-knife', color: '#10b981' },
    { id: 3, title: 'Ask for Directions', description: 'Navigate unfamiliar places with confidence.', level: 'Beginner', goal: 'Travel', duration: 7, icon: 'mdi-map-marker-question', color: '#f59e0b' },
    { id: 4, title: 'IELTS Speaking Part 1', description: 'Practice answering personal questions fluently.', level: 'Intermediate', goal: 'Study', duration: 15, icon: 'mdi-school', color: '#8b5cf6' },
    { id: 5, title: 'Negotiate a Deal', description: 'Learn persuasive language for business negotiations.', level: 'Advanced', goal: 'Work', duration: 20, icon: 'mdi-handshake', color: '#ef4444' },
    { id: 6, title: 'Describe Your Hobby', description: 'Talk about your interests in detail.', level: 'Beginner', goal: 'General', duration: 10, icon: 'mdi-palette', color: '#ec4899' },
    { id: 7, title: 'Give a Presentation', description: 'Structure and deliver a compelling talk.', level: 'Advanced', goal: 'Work', duration: 25, icon: 'mdi-presentation', color: '#0ea5e9' },
    { id: 8, title: 'Discuss Current Events', description: 'Share opinions on news and global issues.', level: 'Intermediate', goal: 'General', duration: 15, icon: 'mdi-newspaper', color: '#14b8a6' },
  ]

  const filteredTopics = computed(() => {
    return topics.filter(topic => {
      const matchesSearch = !searchQuery.value
        || topic.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        || topic.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      const matchesLevel = selectedLevel.value === 'all' || topic.level === selectedLevel.value
      const matchesGoal = !selectedGoal.value || topic.goal === selectedGoal.value
      return matchesSearch && matchesLevel && matchesGoal
    })
  })

  function getLevelColor (level: string) {
    switch (level) {
      case 'Beginner': { return 'success'
      }
      case 'Intermediate': { return 'warning'
      }
      case 'Advanced': { return 'error'
      }
      default: { return 'grey'
      }
    }
  }
</script>
