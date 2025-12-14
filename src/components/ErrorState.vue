<template>
  <div class="error-state text-center pa-8">
    <div
      class="error-icon-wrapper mb-4 mx-auto d-flex align-center justify-center"
      :class="`bg-${variant}-lighten-5`"
    >
      <v-icon
        :color="variant"
        :icon="icon"
        size="48"
      />
    </div>
    <h3 class="text-h5 font-weight-bold mb-2">{{ title }}</h3>
    <p class="text-body-1 text-medium-emphasis mb-6 mx-auto" style="max-width: 400px">
      {{ message }}
    </p>

    <div class="d-flex justify-center gap-3">
      <v-btn
        v-if="secondaryActionText"
        rounded="lg"
        variant="outlined"
        @click="$emit('secondary')"
      >
        {{ secondaryActionText }}
      </v-btn>
      <v-btn
        v-if="primaryActionText"
        :color="variant"
        rounded="lg"
        @click="$emit('primary')"
      >
        <v-icon v-if="primaryActionIcon" class="mr-2" :icon="primaryActionIcon" />
        {{ primaryActionText }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
  withDefaults(
    defineProps<{
      variant?: 'error' | 'warning' | 'info'
      icon?: string
      title: string
      message: string
      primaryActionText?: string
      primaryActionIcon?: string
      secondaryActionText?: string
    }>(),
    {
      variant: 'error',
      icon: 'mdi-alert-circle-outline',
    },
  )

  defineEmits(['primary', 'secondary'])
</script>

<style scoped>
.error-state {
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-icon-wrapper {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.gap-3 {
  gap: 12px;
}

.bg-error-lighten-5 {
  background-color: #fef2f2;
}

.bg-warning-lighten-5 {
  background-color: #fffbeb;
}

.bg-info-lighten-5 {
  background-color: #eff6ff;
}
</style>
