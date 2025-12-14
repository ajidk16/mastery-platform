<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" color="surface" elevation="1">
      <div class="pa-4 d-flex align-center">
        <v-img
          alt="Mastery Platform"
          class="me-2"
          height="32"
          src="@/assets/logo.svg"
          width="32"
        />
        <div class="text-subtitle-1 font-weight-bold text-primary">
          Mastery Platform
        </div>
      </div>

      <v-divider />

      <v-list class="py-2" nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          color="primary"
          :prepend-icon="item.icon"
          rounded="lg"
          :title="item.title"
          :to="item.to"
        />
      </v-list>

      <template #append>
        <div class="pa-4">
          <v-card class="pa-4 bg-primary-lighten-4 rounded-lg" flat>
            <div class="text-caption font-weight-bold mb-1">
              Pro Plan Active
            </div>
            <div class="text-caption mb-3">Exp: 12 Dec 2025</div>
            <v-btn
              block
              color="primary"
              density="compact"
              size="small"
              variant="flat"
            >
              Manage
            </v-btn>
          </v-card>
        </div>
        <div class="pa-2">
          <v-list-item
            prepend-icon="mdi-logout"
            rounded="lg"
            title="Logout"
            to="/logout"
            variant="text"
          />
        </div>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar color="background" elevation="0">
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>

      <v-app-bar-title class="text-subtitle-1 font-weight-medium">
        {{ currentPageTitle }}
      </v-app-bar-title>

      <template #append>
        <!-- Notifications -->
        <v-btn class="mr-2" icon>
          <v-badge color="error" content="3" dot>
            <v-icon icon="mdi-bell-outline" />
          </v-badge>
        </v-btn>

        <!-- User Menu -->
        <v-menu>
          <template #activator="{ props }">
            <v-avatar class="cursor-pointer ml-2" color="primary" v-bind="props">
              <span class="text-h6 text-white">DK</span>
            </v-avatar>
          </template>
          <v-list min-width="200" rounded="lg">
            <v-list-item
              prepend-icon="mdi-account-outline"
              title="Profile"
              to="/profile"
            />
            <v-list-item
              prepend-icon="mdi-cog-outline"
              title="Settings"
              to="/settings"
            />
            <v-divider class="my-2" />
            <v-list-item
              prepend-icon="mdi-logout"
              title="Logout"
              to="/logout"
            />
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-5">
      <v-container class="px-6 py-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'

  const drawer = ref(true)
  const route = useRoute()

  const navItems = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', to: '/dashboard' },
    { title: 'Topics', icon: 'mdi-book-open-variant', to: '/topics' },
    { title: 'Learning Path', icon: 'mdi-map-marker-path', to: '/learning-path' },
    { title: 'My Progress', icon: 'mdi-chart-line', to: '/progress' },
    { title: 'Community', icon: 'mdi-account-group-outline', to: '/community' },
  ]

  const currentPageTitle = computed(() => {
    const activeItem = navItems.find(item => item.to === route.path)
    return activeItem ? activeItem.title : 'Dashboard'
  })
</script>

<style scoped>
.v-navigation-drawer {
  border-right: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}
</style>
