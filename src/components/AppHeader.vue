<template>
  <v-app-bar class="px-4" color="background" flat>
    <template #prepend>
      <router-link class="text-decoration-none d-flex align-center" to="/">
        <!-- Assuming logo.svg exists based on previous list_dir -->
        <v-img
          alt="Logo"
          class="me-2"
          height="40"
          src="@/assets/logo.svg"
          width="40"
        />
        <span class="text-h6 font-weight-bold text-primary">Mastery Platform</span>
      </router-link>
    </template>

    <v-spacer />

    <div class="d-none d-md-flex align-center gap-4">
      <router-link class="text-body-1 text-decoration-none text-medium-emphasis mx-2" to="/">Home</router-link>
      <router-link class="text-body-1 text-decoration-none text-medium-emphasis mx-2" to="/pricing">Pricing</router-link>

      <v-btn
        class="ml-4 text-none"
        color="primary"
        rounded="lg"
        to="/signup"
        variant="elevated"
      >
        Mulai Latihan Gratis
      </v-btn>
    </div>

    <!-- Mobile Menu Button -->
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item title="Home" to="/" />
      <v-list-item title="Pricing" to="/pricing" />
    </v-list>
    <div class="pa-4">
      <v-btn block class="text-none" color="primary" to="/signup">Mulai Latihan Gratis</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const drawer = ref(false)
</script>

<style scoped>
.gap-4 {
  gap: 16px;
}
</style>
