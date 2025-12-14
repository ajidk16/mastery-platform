<template>
  <v-app-bar
    class="border-b border-black/5 backdrop-blur-[10px]"
    color="background"
    elevation="0"
    height="70"
  >
    <template #prepend>
      <router-link
        class="text-decoration-none d-flex align-center group transition-opacity duration-200 hover:opacity-80"
        to="/"
      >
        <v-img
          alt="Logo"
          class="me-2 transition-transform duration-300 group-hover:scale-105"
          height="36"
          src="@/assets/logo.svg"
          width="36"
        />
        <span class="text-h6 font-weight-bold text-primary d-none d-sm-block">Mastery Platform</span>
      </router-link>
    </template>

    <v-spacer />

    <!-- Desktop Navigation -->
    <nav class="d-none d-md-flex align-center">
      <router-link
        v-for="link in navLinks"
        :key="link.to"
        class="mx-3 relative text-medium-emphasis/70 no-underline text-[15px] font-medium py-2 px-1 transition-all duration-200 hover:text-primary after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-200 after:rounded-[2px] hover:after:w-full"
        :class="{ 'text-primary after:w-full': isActive(link.to) }"
        :to="link.to"
      >
        {{ link.label }}
      </router-link>

      <v-btn
        class="ml-4 text-none transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(99,102,241,0.3)]!"
        color="primary"
        elevation="2"
        rounded="lg"
        to="/signup"
      >
        <v-icon class="mr-2" icon="mdi-rocket-launch" size="18" />
        Mulai Gratis
      </v-btn>
    </nav>

    <!-- Mobile Menu Button -->
    <v-btn
      class="d-md-none"
      icon="mdi-menu"
      variant="text"
      @click="drawer = !drawer"
    />
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    class="rounded-l-[16px]!"
    location="right"
    temporary
    width="280"
  >
    <div class="pa-4 d-flex align-center">
      <v-img alt="Logo" height="32" src="@/assets/logo.svg" width="32" />
      <span class="text-subtitle-1 font-weight-bold text-primary ml-3">Mastery Platform</span>
    </div>

    <v-divider />

    <v-list class="py-4" nav>
      <v-list-item
        v-for="link in navLinks"
        :key="link.to"
        class="mb-1"
        :prepend-icon="link.icon"
        rounded="lg"
        :title="link.label"
        :to="link.to"
        @click="drawer = false"
      />
    </v-list>

    <div class="pa-4">
      <v-btn
        block
        class="text-none"
        color="primary"
        rounded="lg"
        size="large"
        to="/signup"
        @click="drawer = false"
      >
        <v-icon class="mr-2" icon="mdi-rocket-launch" />
        Mulai Latihan Gratis
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const drawer = ref(false)
  const route = useRoute()

  const navLinks = [
    { label: 'Home', to: '/', icon: 'mdi-home-outline' },
    { label: 'Harga', to: '/pricing', icon: 'mdi-tag-outline' },
    { label: 'Tentang', to: '/about', icon: 'mdi-information-outline' },
  ]

  function isActive (path: string) {
    return route.path === path
  }
</script>
