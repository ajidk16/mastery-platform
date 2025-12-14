<template>
  <v-app-bar
    class="header-bar px-2 px-md-4"
    color="background"
    elevation="0"
    height="70"
  >
    <template #prepend>
      <router-link
        class="text-decoration-none d-flex align-center logo-link"
        to="/"
      >
        <v-img
          alt="Logo"
          class="me-2 logo-img"
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
        class="nav-link mx-3"
        :class="{ 'nav-link-active': isActive(link.to) }"
        :to="link.to"
      >
        {{ link.label }}
      </router-link>

      <v-btn
        class="ml-4 text-none cta-btn"
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
    class="mobile-drawer"
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

<style scoped>
.header-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
}

.logo-link {
  transition: opacity 0.2s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo-img {
  transition: transform 0.3s ease;
}

.logo-link:hover .logo-img {
  transform: scale(1.05);
}

.nav-link {
  position: relative;
  color: rgba(var(--v-theme-on-background), 0.7);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 4px;
  transition: all 0.2s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: rgb(var(--v-theme-primary));
  transition: width 0.2s ease;
  border-radius: 2px;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.nav-link-active {
  color: rgb(var(--v-theme-primary));
}

.cta-btn {
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3) !important;
}

.mobile-drawer {
  border-radius: 16px 0 0 16px !important;
}
</style>
