<template>
  <v-container class="py-16">
    <div class="text-center mb-16">
      <h1 class="text-h2 font-weight-bold mb-4">Pilih Paket Latihan Anda</h1>
      <p class="text-h5 text-medium-emphasis">Investasi untuk kemampuan komunikasi seumur hidup</p>
    </div>

    <v-row align="stretch" justify="center">
      <!-- Free Plan -->
      <v-col cols="12" md="4">
        <v-card class="pa-8 h-100 d-flex flex-column" rounded="xl" variant="outlined">
          <div class="mb-4">
            <div class="text-h4 font-weight-bold mb-2">Free</div>
            <div class="text-h3 font-weight-bold">Rp 0<span class="text-body-1 text-medium-emphasis">/bulan</span></div>
          </div>
          <p class="text-body-1 text-medium-emphasis mb-8">Untuk Anda yang baru ingin mencoba.</p>

          <v-btn
            block
            class="mb-8"
            color="primary"
            rounded="lg"
            size="large"
            to="/signup"
            variant="outlined"
          >
            Mulai Sekarang
          </v-btn>

          <v-list class="flex-grow-1" density="compact">
            <v-list-item prepend-icon="mdi-check" title="Akses Module Dasar" />
            <v-list-item prepend-icon="mdi-check" title="Latihan Harian Terbatas (10 menit)" />
            <v-list-item prepend-icon="mdi-check" title="Feedback Pronunciation Dasar" />
          </v-list>
        </v-card>
      </v-col>

      <!-- Pro Plan -->
      <v-col cols="12" md="4">
        <v-card class="pa-8 h-100 d-flex flex-column border-primary" color="primary-lighten-5" elevation="10" rounded="xl">
          <div class="d-flex justify-space-between align-start">
            <div>
              <div class="text-h4 font-weight-bold mb-2 text-primary">Pro</div>
              <div class="text-h3 font-weight-bold text-primary">Rp 99rb<span class="text-body-1 text-medium-emphasis text-black">/bulan</span></div>
            </div>
            <v-chip class="font-weight-bold" color="primary" label size="small">POPULAR</v-chip>
          </div>
          <p class="text-body-1 text-medium-emphasis mb-8">Untuk akselerasi kemampuan speaking Anda.</p>

          <v-btn
            block
            class="mb-8"
            color="primary"
            elevation="4"
            rounded="lg"
            size="large"
          >
            Upgrade ke Pro
          </v-btn>

          <v-list bg-color="transparent" class="flex-grow-1" density="compact">
            <v-list-item base-color="primary" prepend-icon="mdi-check-circle" title="Akses Semua Module (Bisnis, Travel, dll)" />
            <v-list-item base-color="primary" prepend-icon="mdi-check-circle" title="Unlimited AI Speaking Practice">
              <template #append>
                <v-tooltip location="top" text="Killer Feature: Ngobrol sepuasnya kapanpun!">
                  <template #activator="{ props }">
                    <v-icon v-bind="props" color="primary" icon="mdi-information" size="small" />
                  </template>
                </v-tooltip>
              </template>
            </v-list-item>
            <v-list-item base-color="primary" prepend-icon="mdi-check-circle" title="Feedback Grammar & Vocabulary Detail" />
            <v-list-item base-color="primary" prepend-icon="mdi-check-circle" title="Personalized Learning Path" />
            <v-list-item base-color="primary" prepend-icon="mdi-check-circle" title="Voice Clone Tutor (Coming Soon)" />
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- Comparison Table -->
    <v-sheet class="mt-16 pt-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">Perbandingan Fitur Lengkap</h2>
        <v-table class="bg-transparent">
          <thead>
            <tr>
              <th class="text-left text-h6">Fitur</th>
              <th class="text-center text-h6">Free</th>
              <th class="text-center text-h6 text-primary">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jam Latihan per Hari</td>
              <td class="text-center">10 Menit</td>
              <td class="text-center font-weight-bold text-primary">Unlimited</td>
            </tr>
            <tr>
              <td>Topik Percakapan</td>
              <td class="text-center">Dasar (Sehari-hari)</td>
              <td class="text-center font-weight-bold text-primary">Lengkap (Bisnis, IELTS, dll)</td>
            </tr>
            <tr>
              <td>Analisis Pronunciation</td>
              <td class="text-center">Basic (Correct/Incorrect)</td>
              <td class="text-center font-weight-bold text-primary">Advanced (Phoneme level)</td>
            </tr>
            <tr>
              <td>Saran Perbaikan Grammar</td>
              <td class="text-center"><v-icon color="grey" icon="mdi-close" /></td>
              <td class="text-center"><v-icon color="primary" icon="mdi-check" /></td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
//
</script>

<style scoped>
.border-primary {
    border: 2px solid rgb(var(--v-theme-primary));
}
</style>
