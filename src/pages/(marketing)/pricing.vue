<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      <!-- Background Decorations -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-3xl" />
        <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-primary/20 to-purple-200/40 rounded-full blur-3xl" />
      </div>

      <v-container class="relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <v-chip class="mb-6" color="orange" size="small" variant="tonal">
            <v-icon class="mr-1" icon="mdi-tag-heart" size="14" />
            HARGA SPESIAL LAUNCHING
          </v-chip>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
            Investasi <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Terbaik</span> untuk Speaking-mu
          </h1>
          <p class="text-lg md:text-xl text-medium-emphasis">
            Lebih murah dari secangkir kopi per hari. Hasil? Percaya diri speaking English seumur hidup.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Pricing Toggle (Monthly/Yearly) -->
    <section class="py-8 bg-white sticky top-[70px] z-20 border-b">
      <v-container>
        <div class="flex items-center justify-center gap-4">
          <span :class="{ 'font-bold text-primary': !isYearly, 'text-medium-emphasis': isYearly }">Bulanan</span>
          <v-switch
            v-model="isYearly"
            class="mx-2"
            color="primary"
            density="compact"
            hide-details
          />
          <span :class="{ 'font-bold text-primary': isYearly, 'text-medium-emphasis': !isYearly }">
            Tahunan
            <v-chip class="ml-2" color="success" size="x-small" variant="flat">
              Hemat 40%
            </v-chip>
          </span>
        </div>
      </v-container>
    </section>

    <!-- Pricing Cards -->
    <section class="py-16 md:py-24 bg-grey-50">
      <v-container>
        <v-row justify="center">
          <!-- Free Plan -->
          <v-col cols="12" md="4">
            <v-card
              class="h-full pa-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              elevation="4"
              rounded="2xl"
            >
              <div class="text-center mb-6">
                <v-avatar class="mb-4" color="grey-lighten-3" size="64">
                  <v-icon color="grey-darken-1" icon="mdi-gift-outline" size="32" />
                </v-avatar>
                <h3 class="text-2xl font-bold mb-2">Free</h3>
                <p class="text-medium-emphasis">Cocok untuk mencoba</p>
              </div>

              <div class="text-center mb-8">
                <span class="text-5xl font-extrabold">GRATIS</span>
                <p class="text-sm text-medium-emphasis mt-2">Selamanya gratis</p>
              </div>

              <v-divider class="mb-6" />

              <v-list class="bg-transparent" density="compact">
                <v-list-item
                  v-for="(feature, index) in freePlanFeatures"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon
                      :color="feature.included ? 'success' : 'grey-lighten-1'"
                      :icon="feature.included ? 'mdi-check-circle' : 'mdi-close-circle'"
                      size="20"
                    />
                  </template>
                  <v-list-item-title
                    class="text-sm"
                    :class="{ 'text-medium-emphasis line-through': !feature.included }"
                  >
                    {{ feature.text }}
                    <v-chip
                      v-if="feature.limit"
                      class="ml-2"
                      color="grey"
                      size="x-small"
                      variant="tonal"
                    >
                      {{ feature.limit }}
                    </v-chip>
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-btn
                block
                class="mt-8 text-none"
                color="grey-darken-3"
                rounded="xl"
                size="large"
                to="/signup"
                variant="outlined"
              >
                Mulai Gratis
              </v-btn>
            </v-card>
          </v-col>

          <!-- Pro Plan -->
          <v-col cols="12" md="4">
            <v-card
              class="h-full pa-8 border-2 border-primary relative overflow-visible transition-all duration-300 hover:-translate-y-2"
              elevation="12"
              rounded="2xl"
            >
              <!-- Popular Badge -->
              <v-chip
                class="absolute -top-3 left-1/2 -translate-x-1/2"
                color="primary"
                size="small"
              >
                <v-icon class="mr-1" icon="mdi-star" size="14" />
                PALING POPULER
              </v-chip>

              <div class="text-center mb-6">
                <v-avatar class="mb-4" color="primary" size="64">
                  <v-icon color="white" icon="mdi-crown" size="32" />
                </v-avatar>
                <h3 class="text-2xl font-bold mb-2">Pro</h3>
                <p class="text-medium-emphasis">Untuk hasil maksimal</p>
              </div>

              <div class="text-center mb-8">
                <div v-if="!isYearly">
                  <span class="text-lg text-medium-emphasis line-through">Rp 149.000</span>
                  <div class="flex items-baseline justify-center gap-1">
                    <span class="text-lg text-primary">Rp</span>
                    <span class="text-5xl font-extrabold text-primary">79.000</span>
                  </div>
                  <p class="text-sm text-medium-emphasis mt-2">per bulan</p>
                </div>
                <div v-else>
                  <span class="text-lg text-medium-emphasis line-through">Rp 948.000</span>
                  <div class="flex items-baseline justify-center gap-1">
                    <span class="text-lg text-primary">Rp</span>
                    <span class="text-5xl font-extrabold text-primary">569.000</span>
                  </div>
                  <p class="text-sm text-medium-emphasis mt-2">per tahun (Rp 47.000/bulan)</p>
                </div>
              </div>

              <v-divider class="mb-6" />

              <v-list class="bg-transparent" density="compact">
                <v-list-item
                  v-for="(feature, index) in proPlanFeatures"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon color="success" icon="mdi-check-circle" size="20" />
                  </template>
                  <v-list-item-title class="text-sm">
                    {{ feature.text }}
                    <v-chip
                      v-if="feature.highlight"
                      class="ml-2"
                      color="primary"
                      size="x-small"
                      variant="tonal"
                    >
                      {{ feature.highlight }}
                    </v-chip>
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-btn
                block
                class="mt-8 text-none transition-all duration-300 hover:shadow-[0_8px_30px_rgba(99,102,241,0.4)]!"
                color="primary"
                elevation="8"
                rounded="xl"
                size="large"
                to="/signup"
              >
                <v-icon class="mr-2" icon="mdi-rocket-launch" />
                Upgrade ke Pro
              </v-btn>

              <p class="text-center text-xs text-medium-emphasis mt-4">
                30 hari garansi uang kembali
              </p>
            </v-card>
          </v-col>

          <!-- Lifetime Plan -->
          <v-col cols="12" md="4">
            <v-card
              class="h-full pa-8 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              elevation="4"
              rounded="2xl"
            >
              <div class="text-center mb-6">
                <v-avatar class="mb-4" color="purple" size="64">
                  <v-icon color="white" icon="mdi-infinity" size="32" />
                </v-avatar>
                <h3 class="text-2xl font-bold mb-2">Lifetime</h3>
                <p class="text-medium-emphasis">Bayar sekali, akses selamanya</p>
              </div>

              <div class="text-center mb-8">
                <span class="text-lg text-medium-emphasis line-through">Rp 2.999.000</span>
                <div class="flex items-baseline justify-center gap-1">
                  <span class="text-lg text-purple-600">Rp</span>
                  <span class="text-5xl font-extrabold text-purple-600">999.000</span>
                </div>
                <p class="text-sm text-medium-emphasis mt-2">sekali bayar</p>
                <v-chip class="mt-2" color="purple" size="small" variant="tonal">
                  Early Adopter Price
                </v-chip>
              </div>

              <v-divider class="mb-6" />

              <v-list class="bg-transparent" density="compact">
                <v-list-item
                  v-for="(feature, index) in lifetimePlanFeatures"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon color="purple" icon="mdi-check-circle" size="20" />
                  </template>
                  <v-list-item-title class="text-sm">
                    {{ feature.text }}
                    <v-chip
                      v-if="feature.highlight"
                      class="ml-2"
                      color="purple"
                      size="x-small"
                      variant="tonal"
                    >
                      {{ feature.highlight }}
                    </v-chip>
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <v-btn
                block
                class="mt-8 text-none"
                color="purple"
                rounded="xl"
                size="large"
                to="/signup"
                variant="outlined"
              >
                <v-icon class="mr-2" icon="mdi-diamond" />
                Dapatkan Lifetime
              </v-btn>

              <p class="text-center text-xs text-medium-emphasis mt-4">
                Hanya tersedia untuk 100 orang pertama
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Feature Comparison Table -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Perbandingan <span class="text-primary">Fitur Lengkap</span>
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            Lihat apa saja yang kamu dapatkan di setiap paket
          </p>
        </div>

        <v-card class="overflow-hidden" elevation="4" rounded="2xl">
          <v-table class="comparison-table">
            <thead>
              <tr class="bg-grey-100">
                <th class="text-left py-4 px-6 font-bold text-lg">Fitur</th>
                <th class="text-center py-4 px-4 font-bold">Free</th>
                <th class="text-center py-4 px-4 font-bold text-primary bg-primary-lighten-5">Pro</th>
                <th class="text-center py-4 px-4 font-bold text-purple-600">Lifetime</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in comparisonTable" :key="index" class="hover:bg-grey-50 transition-colors">
                <td class="py-4 px-6">
                  <div class="flex items-center gap-2">
                    <v-icon :color="row.iconColor" :icon="row.icon" size="20" />
                    <span class="font-medium">{{ row.feature }}</span>
                    <v-tooltip v-if="row.tooltip" location="top" :text="row.tooltip">
                      <template #activator="{ props: tooltipProps }">
                        <v-icon
                          v-bind="tooltipProps"
                          class="cursor-help opacity-50"
                          icon="mdi-help-circle-outline"
                          size="16"
                        />
                      </template>
                    </v-tooltip>
                  </div>
                </td>
                <td class="text-center py-4 px-4">
                  <span v-if="typeof row.free === 'boolean'">
                    <v-icon
                      :color="row.free ? 'success' : 'grey-lighten-1'"
                      :icon="row.free ? 'mdi-check-circle' : 'mdi-close-circle'"
                      size="24"
                    />
                  </span>
                  <span v-else class="text-sm font-medium">{{ row.free }}</span>
                </td>
                <td class="text-center py-4 px-4 bg-primary-lighten-5">
                  <span v-if="typeof row.pro === 'boolean'">
                    <v-icon
                      :color="row.pro ? 'success' : 'grey-lighten-1'"
                      :icon="row.pro ? 'mdi-check-circle' : 'mdi-close-circle'"
                      size="24"
                    />
                  </span>
                  <span v-else class="text-sm font-medium text-primary">{{ row.pro }}</span>
                </td>
                <td class="text-center py-4 px-4">
                  <span v-if="typeof row.lifetime === 'boolean'">
                    <v-icon
                      :color="row.lifetime ? 'purple' : 'grey-lighten-1'"
                      :icon="row.lifetime ? 'mdi-check-circle' : 'mdi-close-circle'"
                      size="24"
                    />
                  </span>
                  <span v-else class="text-sm font-medium text-purple-600">{{ row.lifetime }}</span>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-container>
    </section>

    <!-- Killer Feature Highlight -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-purple-600 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 right-10 w-40 h-40 border-2 border-white rounded-full" />
        <div class="absolute bottom-10 left-10 w-60 h-60 border-2 border-white rounded-full" />
      </div>

      <v-container class="relative z-10">
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-chip class="mb-4" color="white" size="small" variant="flat">
              <span class="text-primary font-bold">🔥 KILLER FEATURE</span>
            </v-chip>
            <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
              AI Shadowing Coach
            </h2>
            <p class="text-xl opacity-90 mb-6">
              Fitur eksklusif yang membedakan kami dari aplikasi lain. Belajar berbicara seperti native speaker dengan teknologi AI terdepan.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="(item, index) in killerFeatures" :key="index" class="flex items-start gap-3">
                <v-icon color="amber" icon="mdi-star" size="24" />
                <span class="text-lg">{{ item }}</span>
              </li>
            </ul>
            <v-btn
              class="text-none px-8"
              color="white"
              rounded="xl"
              size="large"
              to="/signup"
            >
              <span class="text-primary font-bold">
                <v-icon class="mr-2" icon="mdi-rocket-launch" />
                Coba AI Shadowing Coach
              </span>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="24" rounded="2xl">
              <div class="space-y-4">
                <div class="bg-blue-50 rounded-xl p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <v-icon color="blue" icon="mdi-volume-high" size="20" />
                    <span class="font-medium text-blue-700">Native Speaker:</span>
                  </div>
                  <p class="text-blue-700 italic">"I've been thinking about taking a vacation next month."</p>
                </div>
                <div class="bg-orange-50 rounded-xl p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <v-icon color="orange" icon="mdi-microphone" size="20" />
                    <span class="font-medium text-orange-700">Kamu:</span>
                  </div>
                  <p class="text-orange-700">"I thinking about take vacation next month."</p>
                </div>
                <div class="bg-green-50 rounded-xl p-4">
                  <div class="flex items-center gap-2 mb-2">
                    <v-icon color="success" icon="mdi-check-decagram" size="20" />
                    <span class="font-medium text-green-700">AI Feedback:</span>
                  </div>
                  <div class="text-green-700 text-sm space-y-2">
                    <div class="flex items-center gap-2">
                      <v-icon color="error" icon="mdi-close" size="16" />
                      <span class="line-through">"I thinking"</span>
                      <v-icon color="success" icon="mdi-arrow-right" size="16" />
                      <span class="font-bold">"I've been thinking"</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <v-icon color="error" icon="mdi-close" size="16" />
                      <span class="line-through">"take vacation"</span>
                      <v-icon color="success" icon="mdi-arrow-right" size="16" />
                      <span class="font-bold">"taking a vacation"</span>
                    </div>
                    <p class="text-xs mt-2 text-green-600">
                      💡 Gunakan present perfect continuous untuk menunjukkan aktivitas yang masih berlangsung
                    </p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Guarantee & Trust Section -->
    <section class="py-16 md:py-24 bg-grey-50">
      <v-container>
        <v-row align="center">
          <v-col class="text-center" cols="12" md="4">
            <v-avatar class="mb-4" color="success-lighten-4" size="80">
              <v-icon color="success" icon="mdi-shield-check" size="40" />
            </v-avatar>
            <h3 class="text-xl font-bold mb-2">30 Hari Jaminan</h3>
            <p class="text-medium-emphasis">Tidak puas? Uang kembali 100%. Tanpa pertanyaan.</p>
          </v-col>
          <v-col class="text-center" cols="12" md="4">
            <v-avatar class="mb-4" color="primary-lighten-4" size="80">
              <v-icon color="primary" icon="mdi-lock" size="40" />
            </v-avatar>
            <h3 class="text-xl font-bold mb-2">Pembayaran Aman</h3>
            <p class="text-medium-emphasis">Diproses melalui payment gateway terpercaya.</p>
          </v-col>
          <v-col class="text-center" cols="12" md="4">
            <v-avatar class="mb-4" color="orange-lighten-4" size="80">
              <v-icon color="orange" icon="mdi-headset" size="40" />
            </v-avatar>
            <h3 class="text-xl font-bold mb-2">Support 24/7</h3>
            <p class="text-medium-emphasis">Tim support siap membantu kapan saja.</p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan Seputar <span class="text-primary">Harga</span>
          </h2>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="(faq, index) in pricingFaqs"
                :key="index"
                class="mb-3"
                elevation="2"
                rounded="xl"
              >
                <v-expansion-panel-title class="font-medium text-lg py-5">
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="text-medium-emphasis py-4">
                  {{ faq.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Final CTA -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
      <v-container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
            Siap Memulai Perjalanan Speaking-mu?
          </h2>
          <p class="text-xl opacity-90 mb-8">
            Mulai gratis hari ini. Upgrade kapan saja ketika kamu siap untuk hasil maksimal.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <v-btn
              class="text-none px-10 transition-all duration-300 hover:-translate-y-1"
              color="white"
              elevation="8"
              rounded="xl"
              size="x-large"
              to="/signup"
            >
              <span class="text-orange-600 font-bold">
                <v-icon class="mr-2" icon="mdi-rocket-launch" />
                Mulai Gratis Sekarang
              </span>
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isYearly = ref(false)

  const freePlanFeatures = [
    { text: 'Latihan speaking dengan AI', included: true, limit: '10 menit/hari' },
    { text: 'Koreksi grammar dasar', included: true },
    { text: 'Akses 5 topik dasar', included: true },
    { text: 'Progress tracker sederhana', included: true },
    { text: 'AI Shadowing Coach', included: false },
    { text: 'Saran native speaker', included: false },
    { text: 'Unlimited speaking', included: false },
    { text: 'Analytics mendalam', included: false },
  ]

  const proPlanFeatures = [
    { text: 'Unlimited speaking setiap hari', highlight: 'UNLIMITED' },
    { text: 'Koreksi grammar + penjelasan detail' },
    { text: 'Akses semua topik (50+)' },
    { text: 'Progress & analytics lengkap' },
    { text: 'AI Shadowing Coach', highlight: 'EKSKLUSIF' },
    { text: 'Saran ngomong ala native speaker' },
    { text: 'Adaptive learning path' },
    { text: 'Priority support' },
  ]

  const lifetimePlanFeatures = [
    { text: 'Semua fitur Pro selamanya' },
    { text: 'Akses fitur baru di masa depan', highlight: 'BONUS' },
    { text: 'Tidak ada biaya bulanan' },
    { text: 'Priority support seumur hidup' },
    { text: 'Early access fitur beta' },
    { text: 'Exclusive community access', highlight: 'BONUS' },
  ]

  const comparisonTable = [
    { feature: 'Durasi Speaking', icon: 'mdi-clock-outline', iconColor: 'blue', free: '10 menit/hari', pro: 'Unlimited', lifetime: 'Unlimited' },
    { feature: 'Koreksi Grammar', icon: 'mdi-spellcheck', iconColor: 'green', free: 'Dasar', pro: 'Lengkap + Penjelasan', lifetime: 'Lengkap + Penjelasan' },
    { feature: 'Topik Tersedia', icon: 'mdi-book-open-variant', iconColor: 'orange', free: '5 topik', pro: '50+ topik', lifetime: '50+ topik' },
    { feature: 'AI Shadowing Coach', icon: 'mdi-record-rec', iconColor: 'purple', free: false, pro: true, lifetime: true, tooltip: 'Fitur untuk belajar berbicara seperti native speaker' },
    { feature: 'Saran Native Speaker', icon: 'mdi-star-face', iconColor: 'amber', free: false, pro: true, lifetime: true },
    { feature: 'Progress Analytics', icon: 'mdi-chart-line', iconColor: 'teal', free: 'Sederhana', pro: 'Mendalam', lifetime: 'Mendalam' },
    { feature: 'Adaptive Learning', icon: 'mdi-brain', iconColor: 'pink', free: false, pro: true, lifetime: true },
    { feature: 'Priority Support', icon: 'mdi-headset', iconColor: 'indigo', free: false, pro: true, lifetime: true },
    { feature: 'Fitur Baru Masa Depan', icon: 'mdi-rocket', iconColor: 'red', free: false, pro: false, lifetime: true },
  ]

  const killerFeatures = [
    'Dengar native speaker berbicara dengan intonasi natural',
    'Rekam dirimu meniru (shadowing) kalimat tersebut',
    'AI membandingkan dan memberikan feedback detail',
    'Lihat perbandingan langsung: versimu vs native version',
  ]

  const pricingFaqs = [
    {
      question: 'Apa metode pembayaran yang tersedia?',
      answer: 'Kami menerima berbagai metode pembayaran termasuk kartu kredit/debit, transfer bank, e-wallet (GoPay, OVO, DANA), dan virtual account.',
    },
    {
      question: 'Bisakah saya upgrade dari Free ke Pro?',
      answer: 'Tentu! Kamu bisa upgrade kapan saja. Progress dan data latihanmu akan tetap tersimpan saat upgrade.',
    },
    {
      question: 'Bagaimana cara kerja jaminan uang kembali?',
      answer: 'Dalam 30 hari pertama, jika kamu tidak puas dengan layanan Pro atau Lifetime, cukup hubungi support dan kami akan mengembalikan 100% pembayaranmu tanpa pertanyaan.',
    },
    {
      question: 'Apakah paket Lifetime benar-benar selamanya?',
      answer: 'Ya! Kamu bayar sekali dan mendapatkan akses selamanya, termasuk semua update fitur di masa depan. Tidak ada biaya tambahan.',
    },
    {
      question: 'Bisakah saya membatalkan langganan Pro?',
      answer: 'Ya, kamu bisa membatalkan langganan kapan saja. Aksesmu akan tetap aktif sampai akhir periode berlangganan yang sudah dibayar.',
    },
    {
      question: 'Apakah ada diskon untuk pelajar/mahasiswa?',
      answer: 'Ya! Kami menawarkan diskon khusus untuk pelajar dan mahasiswa. Hubungi tim support dengan bukti status pelajarmu untuk mendapatkan kode diskon.',
    },
  ]
</script>

<style scoped>
.comparison-table :deep(th),
.comparison-table :deep(td) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.comparison-table :deep(tbody tr:last-child td) {
  border-bottom: none;
}

.bg-primary-lighten-5 {
  background-color: rgba(99, 102, 241, 0.05);
}
</style>
