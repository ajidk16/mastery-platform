<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="learning-path-page">
    <div class="d-flex align-center justify-space-between mb-8">
      <div>
        <h1 class="text-h4 font-weight-bold">Learning Path</h1>
        <p class="text-body-2 text-medium-emphasis">
          Your personalized roadmap to fluency
        </p>
      </div>
      <v-chip color="primary" variant="flat">
        <v-icon icon="mdi-trophy" size="small" start />
        Level {{ currentLevel }}
      </v-chip>
    </div>

    <!-- Level Progress -->
    <v-card class="mb-8 pa-6" elevation="1" rounded="xl">
      <div class="d-flex align-center justify-space-between mb-3">
        <span class="text-subtitle-1 font-weight-bold">Overall Progress</span>
        <span class="text-body-2 text-primary font-weight-bold">{{ overallProgress }}%</span>
      </div>
      <v-progress-linear
        color="primary"
        height="12"
        :model-value="overallProgress"
        rounded
      />
      <div class="d-flex justify-space-between mt-3 text-caption text-medium-emphasis">
        <span>Beginner</span>
        <span>Intermediate</span>
        <span>Advanced</span>
      </div>
    </v-card>

    <!-- Timeline -->
    <div class="timeline-container">
      <div
        v-for="(section, sectionIndex) in pathSections"
        :key="section.level"
        class="level-section mb-8"
      >
        <!-- Level Header -->
        <div class="d-flex align-center mb-6">
          <v-avatar
            class="mr-3"
            :color="getLevelColor(section.level)"
            size="40"
            variant="tonal"
          >
            <v-icon :icon="section.icon" />
          </v-avatar>
          <div>
            <h2 class="text-h6 font-weight-bold">{{ section.level }}</h2>
            <p class="text-caption text-medium-emphasis mb-0">
              {{ section.description }}
            </p>
          </div>
          <v-spacer />
          <v-chip
            :color="getSectionStatusColor(section)"
            size="small"
            variant="tonal"
          >
            {{ getSectionProgress(section) }}
          </v-chip>
        </div>

        <!-- Lessons Timeline -->
        <div class="lessons-timeline pl-5">
          <div
            v-for="(lesson, lessonIndex) in section.lessons"
            :key="lesson.id"
            class="timeline-item d-flex mb-4"
          >
            <!-- Timeline Node -->
            <div class="timeline-node-wrapper">
              <div
                class="timeline-node d-flex align-center justify-center"
                :class="getNodeClass(lesson.status)"
              >
                <v-icon
                  v-if="lesson.status === 'completed'"
                  color="white"
                  icon="mdi-check"
                  size="16"
                />
                <v-icon
                  v-else-if="lesson.status === 'current'"
                  color="white"
                  icon="mdi-play"
                  size="16"
                />
                <v-icon
                  v-else
                  color="grey-lighten-1"
                  icon="mdi-lock"
                  size="14"
                />
              </div>
              <!-- Connector Line -->
              <div
                v-if="lessonIndex < section.lessons.length - 1 || sectionIndex < pathSections.length - 1"
                class="timeline-connector"
                :class="{ 'completed-connector': lesson.status === 'completed' }"
              />
            </div>

            <!-- Lesson Card -->
            <v-card
              class="lesson-card flex-grow-1 ml-4 pa-4"
              :class="{
                'current-lesson': lesson.status === 'current',
                'locked-lesson': lesson.status === 'locked'
              }"
              :disabled="lesson.status === 'locked'"
              :elevation="lesson.status === 'current' ? 4 : 1"
              rounded="xl"
            >
              <div class="d-flex align-center">
                <v-avatar
                  class="mr-4"
                  :color="lesson.status === 'locked' ? 'grey-lighten-2' : 'primary'"
                  rounded="lg"
                  size="48"
                  variant="tonal"
                >
                  <v-icon :icon="lesson.icon" />
                </v-avatar>
                <div class="flex-grow-1">
                  <h3 class="text-subtitle-1 font-weight-bold mb-1">
                    {{ lesson.title }}
                  </h3>
                  <div class="d-flex align-center text-caption text-medium-emphasis">
                    <v-icon class="mr-1" icon="mdi-clock-outline" size="small" />
                    {{ lesson.duration }} min
                    <span v-if="lesson.xp" class="ml-3">
                      <v-icon class="mr-1" icon="mdi-star" size="small" />
                      +{{ lesson.xp }} XP
                    </span>
                  </div>
                </div>
                <v-btn
                  v-if="lesson.status === 'current'"
                  color="primary"
                  rounded="lg"
                >
                  Continue
                </v-btn>
                <v-btn
                  v-else-if="lesson.status === 'completed'"
                  color="success"
                  icon="mdi-refresh"
                  size="small"
                  variant="text"
                />
              </div>

              <!-- Progress for current lesson -->
              <div v-if="lesson.status === 'current' && lesson.progress" class="mt-4">
                <v-progress-linear
                  color="primary"
                  height="6"
                  :model-value="lesson.progress"
                  rounded
                />
                <div class="text-caption text-medium-emphasis mt-1">
                  {{ lesson.progress }}% completed
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'

  type LessonStatus = 'completed' | 'current' | 'locked'

  interface Lesson {
    id: number
    title: string
    icon: string
    duration: number
    xp: number
    status: LessonStatus
    progress?: number
  }

  interface PathSection {
    level: string
    description: string
    icon: string
    lessons: Lesson[]
  }

  const currentLevel = ref(2)
  const overallProgress = ref(35)

  const pathSections = ref<PathSection[]>([
    {
      level: 'Beginner',
      description: 'Build your foundation',
      icon: 'mdi-sprout',
      lessons: [
        { id: 1, title: 'Self Introduction', icon: 'mdi-account', duration: 10, xp: 50, status: 'completed' },
        { id: 2, title: 'Greetings & Small Talk', icon: 'mdi-hand-wave', duration: 8, xp: 40, status: 'completed' },
        { id: 3, title: 'Numbers & Dates', icon: 'mdi-calendar', duration: 12, xp: 60, status: 'completed' },
        { id: 4, title: 'Daily Routines', icon: 'mdi-clock-outline', duration: 10, xp: 50, status: 'completed' },
      ],
    },
    {
      level: 'Intermediate',
      description: 'Expand your fluency',
      icon: 'mdi-tree',
      lessons: [
        { id: 5, title: 'Expressing Opinions', icon: 'mdi-thought-bubble', duration: 15, xp: 80, status: 'completed' },
        { id: 6, title: 'Describing Experiences', icon: 'mdi-hiking', duration: 15, xp: 80, status: 'current', progress: 60 },
        { id: 7, title: 'Making Suggestions', icon: 'mdi-lightbulb', duration: 12, xp: 70, status: 'locked' },
        { id: 8, title: 'Handling Disagreements', icon: 'mdi-account-switch', duration: 18, xp: 100, status: 'locked' },
      ],
    },
    {
      level: 'Advanced',
      description: 'Master native-like fluency',
      icon: 'mdi-crown',
      lessons: [
        { id: 9, title: 'Debate & Argumentation', icon: 'mdi-gavel', duration: 20, xp: 150, status: 'locked' },
        { id: 10, title: 'Storytelling', icon: 'mdi-book-open-page-variant', duration: 25, xp: 180, status: 'locked' },
        { id: 11, title: 'Humor & Idioms', icon: 'mdi-emoticon-happy', duration: 15, xp: 120, status: 'locked' },
        { id: 12, title: 'Professional Presentations', icon: 'mdi-presentation', duration: 30, xp: 200, status: 'locked' },
      ],
    },
  ])

  function getLevelColor (level: string) {
    switch (level) {
      case 'Beginner': { return 'success'
      }
      case 'Intermediate': { return 'warning'
      }
      case 'Advanced': { return 'error'
      }
      default: { return 'primary'
      }
    }
  }

  function getNodeClass (status: LessonStatus) {
    switch (status) {
      case 'completed': { return 'node-completed'
      }
      case 'current': { return 'node-current'
      }
      default: { return 'node-locked'
      }
    }
  }

  function getSectionProgress (section: PathSection) {
    const completed = section.lessons.filter(l => l.status === 'completed').length
    return `${completed}/${section.lessons.length} done`
  }

  function getSectionStatusColor (section: PathSection) {
    const allCompleted = section.lessons.every(l => l.status === 'completed')
    const hasProgress = section.lessons.some(l => l.status === 'completed' || l.status === 'current')
    if (allCompleted) return 'success'
    if (hasProgress) return 'warning'
    return 'grey'
  }
</script>

<style scoped>
.learning-path-page {
  max-width: 900px;
  margin: 0 auto;
}

/* Timeline Styles */
.timeline-node-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-node {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  z-index: 1;
}

.node-completed {
  background: linear-gradient(135deg, #22c55e, #16a34a);
}

.node-current {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

.node-locked {
  background: #e5e7eb;
  border: 2px dashed #d1d5db;
}

.timeline-connector {
  width: 3px;
  height: 100%;
  background: #e5e7eb;
  min-height: 40px;
  margin-top: 4px;
}

.completed-connector {
  background: linear-gradient(180deg, #22c55e, #22c55e);
}

/* Lesson Cards */
.lesson-card {
  transition: all 0.3s ease;
}

.current-lesson {
  border: 2px solid rgb(var(--v-theme-primary));
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
}

.locked-lesson {
  opacity: 0.6;
  background: #f9fafb;
}

.lesson-card:not(.locked-lesson):hover {
  transform: translateX(8px);
}
</style>
