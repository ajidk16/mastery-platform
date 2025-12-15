<template>
  <v-app-bar
    class="border-b border-black/5 backdrop-blur-[10px]"
    color="background"
    elevation="0"
    :height="isMobile ? 60 : 70"
  >
    <v-container class="d-flex align-center py-0">
      <!-- Logo -->
      <router-link
        class="text-decoration-none d-flex align-center group transition-opacity duration-200 hover:opacity-80"
        to="/"
      >
        <v-img
          alt="Logo"
          class="me-2 transition-transform duration-300 group-hover:scale-105 shrink-0"
          :height="isMobile ? 32 : 36"
          src="@/assets/logo.svg"
          :width="isMobile ? 32 : 36"
        />
        <span class="text-h6 font-weight-bold text-primary d-none d-sm-block text-nowrap">
          Mastery Platform
        </span>
        <span class="text-subtitle-1 font-weight-bold text-primary d-sm-none">
          Mastery
        </span>
      </router-link>

      <v-spacer />

      <!-- Desktop Navigation -->
      <nav class="d-none d-md-flex align-center">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          class="mx-3 relative text-medium-emphasis/70 no-underline text-[15px] font-medium py-2 px-1 transition-all duration-200 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 after:rounded-xs hover:after:w-full"
          :class="{ 'text-primary after:w-full': isActive(link.to) }"
          :to="link.to"
        >
          {{ link.label }}
        </router-link>

        <v-btn
          class="ml-4 text-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(99,102,241,0.3)]!"
          color="primary"
          elevation="2"
          rounded="lg"
          to="/signup"
        >
          <v-icon class="mr-2" icon="mdi-rocket-launch" size="18" />
          Mulai Gratis
        </v-btn>
      </nav>

      <!-- Tablet Navigation (simplified) -->
      <nav class="d-none d-sm-flex d-md-none align-center">
        <v-btn
          class="text-none"
          color="primary"
          rounded="lg"
          size="small"
          to="/signup"
        >
          <v-icon class="mr-1" icon="mdi-rocket-launch" size="16" />
          Mulai
        </v-btn>
        <v-btn
          class="ml-2"
          icon="mdi-menu"
          size="small"
          variant="text"
          @click="drawer = !drawer"
        />
      </nav>

      <!-- Mobile Menu Button -->
      <v-btn
        class="d-sm-none"
        icon="mdi-menu"
        size="small"
        variant="text"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <!-- Mobile/Tablet Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    class="rounded-l-2xl!"
    location="right"
    temporary
    :width="isMobile ? 280 : 320"
  >
    <!-- Drawer Header -->
    <div class="pa-4 d-flex align-center justify-space-between bg-linear-to-r from-primary/5 to-purple-50">
      <div class="d-flex align-center">
        <v-img alt="Logo" height="32" src="@/assets/logo.svg" width="32" />
        <span class="text-subtitle-1 font-weight-bold text-primary ml-3">Mastery Platform</span>
      </div>
      <v-btn
        icon="mdi-close"
        size="small"
        variant="text"
        @click="drawer = false"
      />
    </div>

    <v-divider />

    <!-- Navigation Links -->
    <v-list class="py-4" nav>
      <v-list-item
        v-for="link in navLinks"
        :key="link.to"
        :active="isActive(link.to)"
        class="mb-1 mx-2"
        color="primary"
        :prepend-icon="link.icon"
        rounded="lg"
        :title="link.label"
        :to="link.to"
        @click="drawer = false"
      />
    </v-list>

    <v-divider class="mx-4" />

    <!-- User Stats Preview (for engagement) -->
    <div class="pa-4">
      <div class="bg-linear-to-r from-primary/10 to-purple-100/50 rounded-xl pa-4 mb-4">
        <div class="text-caption text-medium-emphasis mb-1">🔥 Sedang trending</div>
        <div class="text-body-2 font-medium">5,000+ orang belajar speaking hari ini</div>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="pa-4 pt-0">
      <v-btn
        block
        class="text-none mb-3 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(99,102,241,0.3)]!"
        color="primary"
        elevation="4"
        rounded="lg"
        size="large"
        to="/signup"
        @click="drawer = false"
      >
        <v-icon class="mr-2" icon="mdi-rocket-launch" />
        Mulai Latihan Gratis
      </v-btn>
      <v-btn
        block
        class="text-none"
        color="primary"
        rounded="lg"
        size="large"
        to="/login"
        variant="outlined"
        @click="drawer = false"
      >
        <v-icon class="mr-2" icon="mdi-login" />
        Login
      </v-btn>
    </div>

    <!-- Bottom Info -->
    <template #append>
      <v-divider />
      <div class="pa-4 text-center">
        <div class="text-caption text-medium-emphasis">
          Platform Speaking AI #1 Indonesia
        </div>
        <div class="d-flex justify-center gap-2 mt-3">
          <v-btn
            v-for="social in socials"
            :key="social.name"
            color="grey-lighten-3"
            :href="social.href"
            icon
            size="small"
            target="_blank"
            variant="flat"
          >
            <v-icon :icon="social.icon" size="16" />
          </v-btn>
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useDisplay } from 'vuetify'

  const drawer = ref(false)
  const route = useRoute()
  const display = useDisplay()

  const isMobile = computed(() => display.xs.value)

  const navLinks = [
    { label: 'Home', to: '/', icon: 'mdi-home-outline' },
    { label: 'Harga', to: '/pricing', icon: 'mdi-tag-outline' },
    { label: 'Tentang', to: '/about', icon: 'mdi-information-outline' },
  ]

  const socials = [
    { name: 'Instagram', icon: 'mdi-instagram', href: '#' },
    { name: 'Twitter', icon: 'mdi-twitter', href: '#' },
    { name: 'YouTube', icon: 'mdi-youtube', href: '#' },
  ]

  function isActive (path: string) {
    return route.path === path
  }
</script>
