<route lang="yaml">
meta:
  layout: marketing
</route>

<template>
  <v-container class="py-12 py-md-16">
    <!-- Header -->
    <div class="text-center mb-12 mb-md-16 animate-fade-in-up">
      <v-chip class="mb-4" color="primary" label variant="tonal">
        <v-icon icon="mdi-tag" start />
        Harga Transparan
      </v-chip>
      <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">
        Pilih Paket Latihan Anda
      </h1>
      <p class="text-body-1 text-md-h5 text-medium-emphasis">
        Investasi untuk kemampuan komunikasi seumur hidup
      </p>
    </div>

    <!-- Toggle Monthly/Yearly -->
    <div
      class="d-flex justify-center align-center mb-10 animate-fade-in-up delay-100 opacity-0"
    >
      <span
        class="mr-3 font-weight-medium"
        :class="{ 'text-medium-emphasis': isYearly }"
      >Bulanan</span>
      <v-switch
        v-model="isYearly"
        class="flex-none"
        color="primary"
        hide-details
        inset
      />
      <span
        class="ml-1 font-weight-medium"
        :class="{ 'text-medium-emphasis': !isYearly }"
      >Tahunan</span>
      <v-chip
        class="ml-2"
        color="success"
        size="small"
        variant="tonal"
      >Hemat 20%</v-chip>
    </div>

    <v-row align="stretch" justify="center">
      <!-- Free Plan -->
      <v-col cols="12" lg="4" md="5">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="pa-6 pa-md-8 h-100 d-flex flex-column transition-all duration-300 relative animate-fade-in-up delay-100 opacity-0"
            :class="{ '-translate-y-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]!': isHovering }"
            rounded="xl"
            variant="outlined"
          >
            <div class="mb-6">
              <v-icon
                class="mb-3"
                color="grey"
                icon="mdi-account-outline"
                size="40"
              />
              <div class="text-h5 font-weight-bold mb-2">Free</div>
              <div class="flex flex-col md:flex-row items-start md:items-baseline gap-0 md:gap-1">
                <span class="text-h3 font-weight-bold">Rp 0</span>
                <span class="text-body-2 text-medium-emphasis">/bulan</span>
              </div>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-6">
              Untuk Anda yang baru ingin mencoba.
            </p>

            <v-btn
              block
              class="mb-6 text-none"
              color="primary"
              rounded="lg"
              size="large"
              to="/signup"
              variant="outlined"
            >
              Mulai Sekarang
            </v-btn>

            <v-divider class="mb-4" />

            <div
              class="text-caption font-weight-bold text-medium-emphasis mb-3"
            >
              TERMASUK:
            </div>
            <v-list class="grow" density="compact">
              <v-list-item
                v-for="feature in freeFeatures"
                :key="feature"
                class="px-0 min-h-9"
              >
                <template #prepend>
                  <v-icon
                    class="mr-3"
                    color="success"
                    icon="mdi-check-circle"
                    size="20"
                  />
                </template>
                <v-list-item-title class="text-body-2">{{
                  feature
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-hover>
      </v-col>

      <!-- Pro Plan -->
      <v-col cols="12" lg="4" md="5">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="pa-6 pa-md-8 h-100 d-flex flex-column transition-all duration-300 relative bg-[linear-gradient(135deg,#eef2ff,#e0e7ff)] border-2 border-primary animate-fade-in-up delay-200 opacity-0"
            :class="{ '-translate-y-3 shadow-[0_20px_60px_rgba(99,102,241,0.3)]!': isHovering }"
            elevation="12"
            rounded="xl"
          >
            <v-chip class="absolute -top-3 right-5" color="primary" label size="small">
              <v-icon icon="mdi-star" size="small" start />
              POPULER
            </v-chip>

            <div class="mb-6">
              <v-icon
                class="mb-3"
                color="primary"
                icon="mdi-crown-outline"
                size="40"
              />
              <div class="text-h5 font-weight-bold text-primary mb-2">Pro</div>
              <div class="flex flex-col md:flex-row items-start md:items-baseline gap-0 md:gap-1">
                <span class="text-h3 font-weight-bold text-primary">
                  {{ isYearly ? "Rp 79rb" : "Rp 99rb" }}
                </span>
                <span class="text-body-2 text-medium-emphasis">/bulan</span>
              </div>
              <div v-if="isYearly" class="text-caption text-success mt-1">
                <v-icon icon="mdi-tag" size="x-small" /> Ditagih Rp 948rb/tahun
              </div>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-6">
              Untuk akselerasi kemampuan speaking Anda.
            </p>

            <v-btn
              block
              class="mb-6 text-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.4)]!"
              color="primary"
              elevation="4"
              rounded="lg"
              size="large"
            >
              <v-icon class="mr-2" icon="mdi-rocket-launch" />
              Upgrade ke Pro
            </v-btn>

            <v-divider class="mb-4" />

            <div
              class="text-caption font-weight-bold text-medium-emphasis mb-3"
            >
              SEMUA DI FREE, PLUS:
            </div>
            <v-list
              bg-color="transparent"
              class="grow"
              density="compact"
            >
              <v-list-item
                v-for="feature in proFeatures"
                :key="feature.text"
                class="px-0 min-h-9"
              >
                <template #prepend>
                  <v-icon
                    class="mr-3"
                    color="primary"
                    icon="mdi-check-circle"
                    size="20"
                  />
                </template>
                <v-list-item-title class="text-body-2 d-flex align-center">
                  {{ feature.text }}
                  <v-chip
                    v-if="feature.highlight"
                    class="ml-2"
                    color="accent"
                    size="x-small"
                    variant="tonal"
                  >
                    {{ feature.highlight }}
                  </v-chip>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <!-- Comparison Table -->
    <v-sheet class="mt-16 pt-8 animate-fade-in-up delay-300 opacity-0">
      <div class="text-center mb-8">
        <v-chip class="mb-4" color="secondary" label variant="tonal">
          <v-icon icon="mdi-compare" start />
          Perbandingan
        </v-chip>
        <h2 class="text-h4 text-md-h3 font-weight-bold">
          Perbandingan Fitur Lengkap
        </h2>
      </div>

      <v-card
        class="overflow-x-auto"
        elevation="2"
        rounded="xl"
      >
        <v-table>
          <thead>
            <tr class="bg-gray-50">
              <th class="text-left py-4 px-6">
                <span class="text-subtitle-1 font-weight-bold">Fitur</span>
              </th>
              <th class="text-center py-4 px-6">
                <span class="text-subtitle-1 font-weight-bold">Free</span>
              </th>
              <th class="text-center py-4 px-6 bg-primary/5">
                <span class="text-subtitle-1 font-weight-bold text-primary">Pro</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in comparisonData"
              :key="row.feature"
              class="transition-colors duration-200 hover:bg-gray-50"
            >
              <td class="py-4 px-6 font-weight-medium">{{ row.feature }}</td>
              <td class="text-center py-4 px-6">
                <template v-if="row.free === true">
                  <v-icon color="success" icon="mdi-check-circle" />
                </template>
                <template v-else-if="row.free === false">
                  <v-icon color="grey-lighten-1" icon="mdi-close-circle" />
                </template>
                <template v-else>
                  <span class="text-body-2">{{ row.free }}</span>
                </template>
              </td>
              <td class="text-center py-4 px-6 bg-primary/5">
                <template v-if="row.pro === true">
                  <v-icon color="primary" icon="mdi-check-circle" />
                </template>
                <template v-else>
                  <span class="text-body-2 font-weight-bold text-primary">{{
                    row.pro
                  }}</span>
                </template>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-sheet>

    <!-- CTA Section -->
    <v-sheet
      class="text-center mt-16 py-12 animate-fade-in-up delay-300 opacity-0"
      color="grey-lighten-4"
      rounded="xl"
    >
      <v-icon class="mb-4" color="primary" icon="mdi-headphones" size="48" />
      <h3 class="text-h5 font-weight-bold mb-3">Masih Ragu?</h3>
      <p class="text-body-1 text-medium-emphasis mb-6">
        Coba gratis dulu, upgrade kapan saja.
      </p>
      <v-btn
        class="text-none"
        color="primary"
        rounded="lg"
        size="large"
        to="/signup"
      >
        <v-icon class="mr-2" icon="mdi-play" />
        Mulai Gratis Sekarang
      </v-btn>
    </v-sheet>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isYearly = ref(false)

  const freeFeatures = [
    'Akses Module Dasar',
    'Latihan Harian (10 menit)',
    'Feedback Pronunciation Dasar',
    'Progress Tracking',
  ]

  const proFeatures = [
    { text: 'Unlimited AI Speaking Practice', highlight: 'UNGGULAN' },
    { text: 'Akses Semua Module (Bisnis, IELTS, Travel)', highlight: '' },
    { text: 'Feedback Grammar & Vocabulary Detail', highlight: '' },
    { text: 'Personalized Learning Path', highlight: '' },
    { text: 'Voice Clone Tutor', highlight: 'SEGERA' },
    { text: 'Priority Support', highlight: '' },
  ]

  const comparisonData = [
    { feature: 'Jam Latihan per Hari', free: '10 Menit', pro: 'Unlimited' },
    { feature: 'Topik Percakapan', free: 'Dasar', pro: 'Lengkap' },
    {
      feature: 'Analisis Pronunciation',
      free: 'Basic',
      pro: 'Advanced (Phoneme)',
    },
    { feature: 'Saran Perbaikan Grammar', free: false, pro: true },
    { feature: 'Personalized Learning Path', free: false, pro: true },
    { feature: 'Priority Support', free: false, pro: true },
  ]
</script>
