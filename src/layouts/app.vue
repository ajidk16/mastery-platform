<template>
  <v-app>
    <!-- Navigation Drawer (Fixed, Full Height) -->
    <v-navigation-drawer
      v-model="drawer"
      class="app-drawer"
      color="surface"
      :rail="rail"
      :temporary="isMobile"
      width="260"
    >
      <!-- Logo -->
      <div class="drawer-header pa-4 d-flex align-center">
        <v-img
          alt="Mastery Platform"
          class="logo-img"
          height="36"
          src="@/assets/logo.svg"
          width="36"
        />
        <transition name="fade">
          <div v-if="!rail" class="text-subtitle-1 font-weight-bold text-primary ml-3">
            Mastery
          </div>
        </transition>
      </div>

      <v-divider />

      <!-- Navigation -->
      <v-list class="py-3 px-2" nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          class="nav-item mb-1"
          color="primary"
          :prepend-icon="item.icon"
          rounded="lg"
          :title="rail ? '' : item.title"
          :to="item.to"
        >
          <v-tooltip v-if="rail" activator="parent" location="end">
            {{ item.title }}
          </v-tooltip>
        </v-list-item>
      </v-list>

      <!-- Footer -->
      <template #append>
        <div v-if="!rail" class="pa-3">
          <v-card
            class="pro-card pa-4"
            flat
            rounded="xl"
          >
            <div class="d-flex align-center mb-2">
              <v-icon class="mr-2" color="primary" icon="mdi-crown" size="20" />
              <span class="text-caption font-weight-bold">Pro Plan</span>
            </div>
            <div class="text-caption text-medium-emphasis mb-3">
              Expires: Dec 12, 2025
            </div>
            <v-btn
              block
              color="primary"
              density="compact"
              rounded="lg"
              size="small"
              to="/subscription"
              variant="flat"
            >
              Manage
            </v-btn>
          </v-card>
        </div>

        <v-divider />

        <div class="pa-2">
          <v-list-item
            class="nav-item"
            prepend-icon="mdi-cog-outline"
            rounded="lg"
            :title="rail ? '' : 'Settings'"
            to="/settings"
          >
            <v-tooltip v-if="rail" activator="parent" location="end">
              Settings
            </v-tooltip>
          </v-list-item>
          <v-list-item
            class="nav-item"
            prepend-icon="mdi-logout"
            rounded="lg"
            :title="rail ? '' : 'Logout'"
            to="/logout"
          >
            <v-tooltip v-if="rail" activator="parent" location="end">
              Logout
            </v-tooltip>
          </v-list-item>
        </div>

        <!-- Rail Toggle (Desktop Only) -->
        <div v-if="!isMobile" class="pa-2 text-center">
          <v-btn
            :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
            size="small"
            variant="text"
            @click="rail = !rail"
          />
        </div>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar class="app-bar" color="background" elevation="0" height="64">
      <template #prepend>
        <v-app-bar-nav-icon
          v-if="isMobile"
          @click="drawer = !drawer"
        />
      </template>

      <v-app-bar-title class="text-subtitle-1 font-weight-bold">
        {{ currentPageTitle }}
      </v-app-bar-title>

      <template #append>
        <!-- Search (Desktop) -->
        <v-btn class="d-none d-md-flex mr-2" icon variant="text">
          <v-icon icon="mdi-magnify" />
        </v-btn>

        <!-- Notifications -->
        <v-btn class="mr-2" icon variant="text">
          <v-badge
            color="error"
            content="3"
            dot
            offset-x="-2"
            offset-y="-2"
          >
            <v-icon icon="mdi-bell-outline" />
          </v-badge>
        </v-btn>

        <!-- User Menu -->
        <v-menu offset="8" transition="slide-y-transition">
          <template #activator="{ props }">
            <v-avatar
              class="user-avatar"
              color="primary"
              size="36"
              v-bind="props"
            >
              <span class="text-body-1 font-weight-bold text-white">DK</span>
            </v-avatar>
          </template>
          <v-card min-width="220" rounded="xl">
            <div class="pa-4 text-center border-bottom">
              <v-avatar class="mb-2" color="primary" size="56">
                <span class="text-h5 text-white">DK</span>
              </v-avatar>
              <div class="text-subtitle-2 font-weight-bold">David Kaji</div>
              <div class="text-caption text-medium-emphasis">david@example.com</div>
            </div>
            <v-list class="py-2" density="compact" nav>
              <v-list-item
                prepend-icon="mdi-account-outline"
                rounded="lg"
                title="My Profile"
                to="/profile"
              />
              <v-list-item
                prepend-icon="mdi-credit-card-outline"
                rounded="lg"
                title="Subscription"
                to="/subscription"
              />
              <v-list-item
                prepend-icon="mdi-cog-outline"
                rounded="lg"
                title="Settings"
                to="/settings"
              />
              <v-divider class="my-2" />
              <v-list-item
                class="text-error"
                prepend-icon="mdi-logout"
                rounded="lg"
                title="Logout"
                to="/logout"
              />
            </v-list>
          </v-card>
        </v-menu>
      </template>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="app-main overflow-auto h-screen">
      <div class="content-wrapper pa-4 pa-md-6">
        <router-view v-slot="{ Component }">
          <transition mode="out-in" name="page">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { computed, onMounted, onUnmounted, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const drawer = ref(true)
  const rail = ref(false)
  const isMobile = ref(false)
  const route = useRoute()

  const navItems = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', to: '/dashboard' },
    { title: 'Topics', icon: 'mdi-book-open-variant', to: '/topics' },
    { title: 'Learning Path', icon: 'mdi-map-marker-path', to: '/learning-path' },
    { title: 'Shadowing', icon: 'mdi-account-voice', to: '/shadowing' },
    { title: 'My Progress', icon: 'mdi-chart-line', to: '/progress' },
  ]

  const currentPageTitle = computed(() => {
    const activeItem = navItems.find(item => item.to === route.path)
    return activeItem ? activeItem.title : 'Dashboard'
  })

  function checkMobile () {
    isMobile.value = window.innerWidth < 960
    if (isMobile.value) {
      drawer.value = false
      rail.value = false
    } else {
      drawer.value = true
    }
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
  })
</script>

<style scoped>
/* Drawer Styles */
.app-drawer {
  border-right: 1px solid rgba(var(--v-border-color), 0.08) !important;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-header {
  height: 64px;
}

.logo-img {
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: scale(1.05);
}

.nav-item {
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: rgba(99, 102, 241, 0.08);
}

.pro-card {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

/* App Bar */
.app-bar {
  border-bottom: 1px solid rgba(var(--v-border-color), 0.08);
  backdrop-filter: blur(12px);
}

.user-avatar {
  cursor: pointer;
  transition: all 0.2s ease;
}

.user-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

/* Main Content */
.app-main {
  background: linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%);
  min-height: 100vh;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

/* Page Transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Fade Transition for Rail Mode */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile Optimization */
@media (max-width: 959px) {
  .content-wrapper {
    padding: 16px !important;
  }
}
</style>
