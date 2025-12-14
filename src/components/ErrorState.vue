<template>
  <div class="min-h-[350px] flex flex-col items-center justify-center text-center pa-8">
    <div
      class="mb-4 mx-auto d-flex align-center justify-center w-[100px] h-[100px] rounded-full"
      :class="variantBgColor"
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

    <div class="d-flex justify-center gap-[12px]">
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
  import { computed } from 'vue'

  const props = withDefaults(
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

  const variantBgColor = computed(() => {
    switch (props.variant) {
      case 'warning': { return 'bg-[#fffbeb]'
      }
      case 'info': { return 'bg-[#eff6ff]'
      }
      case 'error': { return 'bg-[#fef2f2]'
      }
      default: { return 'bg-[#fef2f2]'
      }
    }
  })
</script>
