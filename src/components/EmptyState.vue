<template>
  <div class="min-h-[400px] flex flex-col items-center justify-center text-center pa-8">
    <v-icon
      class="mb-4"
      :color="iconColor"
      :icon="icon"
      size="80"
    />
    <h3 class="text-h5 font-weight-bold mb-2">{{ title }}</h3>
    <p class="text-body-1 text-medium-emphasis mb-6 mx-auto" style="max-width: 400px">
      {{ message }}
    </p>
    <slot name="action">
      <v-btn
        v-if="actionText"
        color="primary"
        rounded="lg"
        size="large"
        @click="$emit('action')"
      >
        <v-icon v-if="actionIcon" class="mr-2" :icon="actionIcon" />
        {{ actionText }}
      </v-btn>
    </slot>

    <!-- Educational tip -->
    <div v-if="tip" class="mt-8 pa-4 rounded-lg mx-auto bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.2)] max-w-[500px]">
      <v-icon class="mr-2" color="primary" icon="mdi-lightbulb-on" size="small" />
      <span class="text-body-2">{{ tip }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    icon?: string
    iconColor?: string
    title: string
    message: string
    actionText?: string
    actionIcon?: string
    tip?: string
  }>()

  defineEmits(['action'])
</script>
