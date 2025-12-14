<template>
  <v-app>
    <!-- Navigation Drawer (Fixed, Full Height) -->
    <v-navigation-drawer
      v-model="drawer"
      class="border-r! border-[rgba(var(--v-border-color),0.08)]! transition-[width] duration-300 ease-in-out"
      color="surface"
      :rail="rail"
      :temporary="isMobile"
      width="260"
    >
      <!-- Logo -->
      <div class="h-16 px-4 flex items-center">
        <v-img
          alt="Mastery Platform"
          class="transition-transform duration-300 hover:scale-105"
          height="36"
          src="@/assets/logo.svg"
          width="36"
        />
        <transition
          enter-active-class="transition-opacity duration-200 ease-out"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-200 ease-out"
          leave-to-class="opacity-0"
        >
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
          class="mb-1 transition-all duration-200 hover:bg-[rgba(99,102,241,0.08)]"
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
            class="pa-4 bg-linear-to-br from-[#eef2ff] to-[#e0e7ff] border border-[rgba(99,102,241,0.2)]"
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
            class="transition-all duration-200 hover:bg-[rgba(99,102,241,0.08)]"
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
            class="transition-all duration-200 hover:bg-[rgba(99,102,241,0.08)]"
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
    <v-app-bar
      class="border-b border-[rgba(var(--v-border-color),0.08)] backdrop-blur-md"
      color="background"
      elevation="0"
      height="64"
    >
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
              class="cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_12px_rgba(99,102,241,0.3)] mr-4 md:mr-6"
              color="primary"
              size="36"
              v-bind="props"
            >
              <span class="text-body-1 font-weight-bold text-white">DK</span>
            </v-avatar>
          </template>
          <v-card min-width="220" rounded="xl">
            <div class="pa-4 text-center border-b border-[rgba(0,0,0,0.06)]">
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
    <v-main class="bg-linear-to-b from-[#f9fafb] to-[#f3f4f6] h-screen overflow-auto">
      <div class="max-w-350 mx-auto pa-4 md:pa-6 p-4! md:p-6!">
        <router-view v-slot="{ Component }">
          <transition
            enter-active-class="transition-all duration-250 ease-out"
            enter-from-class="opacity-0 translate-y-[10px]"
            leave-active-class="transition-all duration-250 ease-out"
            leave-to-class="opacity-0 -translate-y-[10px]"
            mode="out-in"
          >
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
