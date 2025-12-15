<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50 min-h-[90vh] flex items-center">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-4! mb-40 -right-40 w-80 h-80 bg-linear-to-br from-primary/20 to-purple-300/30 rounded-full blur-3xl animate-pulse" />
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-blue-200/40 to-primary/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <v-container class="relative z-10">
        <v-row align="center" justify="center">
          <v-col class="text-center text-md-left" cols="12" md="6">
            <!-- Badge -->
            <v-chip
              class="mb-6 animate-fade-in-up"
              color="primary"
              size="small"
              variant="tonal"
            >
              <v-icon class="mr-1" icon="mdi-star" size="14" />
              #1 Platform Latihan Speaking AI Indonesia
            </v-chip>

            <!-- Headline -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.1s">
              Jago <span class="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">Speaking English</span>
              <br>
              Tanpa Takut Salah
            </h1>

            <!-- Subheadline -->
            <p class="text-lg md:text-xl text-medium-emphasis mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-up" style="animation-delay: 0.2s">
              Latihan speaking dengan AI tutor 24/7. Dapat feedback langsung, koreksi grammar, dan cara ngomong seperti native speaker.
            </p>

            <!-- CTA Button -->
            <div class="flex flex-col sm:flex-row gap-4! mb-4 justify-center md:justify-start animate-fade-in-up" style="animation-delay: 0.3s">
              <v-btn
                class="text-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)]!"
                color="primary"
                elevation="8"
                min-width="220"
                rounded="xl"
                size="x-large"
                to="/signup"
              >
                <v-icon class="mr-2" icon="mdi-rocket-launch" />
                Mulai Latihan Gratis
              </v-btn>
              <v-btn
                class="text-none"
                color="primary"
                rounded="xl"
                size="x-large"
                variant="outlined"
                @click="scrollToDemo"
              >
                <v-icon class="mr-2" icon="mdi-play-circle-outline" />
                Lihat Demo
              </v-btn>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-8 flex items-center gap-6 justify-center md:justify-start text-sm text-medium-emphasis animate-fade-in-up" style="animation-delay: 0.4s">
              <div class="flex items-center gap-2">
                <v-icon color="success" icon="mdi-check-circle" size="20" />
                <span>Gratis 10 menit/hari</span>
              </div>
              <div class="flex items-center gap-2">
                <v-icon color="success" icon="mdi-check-circle" size="20" />
                <span>Tanpa kartu kredit</span>
              </div>
            </div>
          </v-col>

          <!-- Hero Image / Demo Preview -->
          <v-col class="mt-8 md:mt-0" cols="12" md="6">
            <div class="relative animate-fade-in-up" style="animation-delay: 0.3s">
              <!-- Glassmorphism Chat Preview -->
              <v-card
                class="mx-auto overflow-hidden backdrop-blur-xl border border-white/50"
                elevation="24"
                max-width="450"
                rounded="2xl"
                style="background: rgba(255, 255, 255, 0.85)"
              >
                <!-- Chat Header -->
                <div class="px-4 py-3 bg-gradient-to-r from-primary to-purple-600 text-white flex items-center gap-3">
                  <v-avatar color="white" size="40">
                    <v-icon color="primary" icon="mdi-robot-happy" size="24" />
                  </v-avatar>
                  <div>
                    <div class="font-semibold">AI Speaking Coach</div>
                    <div class="text-xs opacity-80 flex items-center gap-1">
                      <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Siap membantu kamu
                    </div>
                  </div>
                </div>

                <!-- Chat Messages -->
                <div class="pa-4 space-y-4 min-h-[280px]">
                  <!-- AI Message -->
                  <div class="flex gap-3">
                    <v-avatar color="primary" size="36">
                      <v-icon color="white" icon="mdi-robot-happy" size="20" />
                    </v-avatar>
                    <div class="bg-grey-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[280px]">
                      <p class="text-sm mb-0">Hi! Let's practice English today. Tell me about your favorite hobby. 🎯</p>
                    </div>
                  </div>

                  <!-- User Message -->
                  <div class="flex gap-3 justify-end">
                    <div class="bg-primary rounded-2xl rounded-tr-sm px-4 py-3 max-w-[280px] text-white">
                      <p class="text-sm mb-0">I like to playing football with my friend.</p>
                    </div>
                  </div>

                  <!-- AI Feedback -->
                  <div class="flex gap-3">
                    <v-avatar color="primary" size="36">
                      <v-icon color="white" icon="mdi-robot-happy" size="20" />
                    </v-avatar>
                    <div class="bg-grey-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[280px]">
                      <p class="text-sm mb-2">Great topic! Here's a small fix:</p>
                      <div class="bg-red-50 text-red-700 px-2 py-1 rounded text-xs mb-1 line-through">
                        "I like to playing"
                      </div>
                      <div class="bg-green-50 text-green-700 px-2 py-1 rounded text-xs mb-2">
                        ✓ "I like playing" atau "I like to play"
                      </div>
                      <p class="text-xs text-medium-emphasis mb-0">Tip: Setelah "like", gunakan gerund (-ing) atau "to + verb" 👍</p>
                    </div>
                  </div>
                </div>

                <!-- Chat Input -->
                <div class="px-4 pb-4">
                  <v-text-field
                    bg-color="grey-lighten-4"
                    class="rounded-xl"
                    density="comfortable"
                    hide-details
                    placeholder="Type your response or speak..."
                    readonly
                    rounded="xl"
                  >
                    <template #append-inner>
                      <v-icon color="primary" icon="mdi-microphone" />
                    </template>
                  </v-text-field>
                </div>
              </v-card>

              <!-- Floating Elements -->
              <div class="absolute -top-4! mb-4 -left-4 bg-white shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2 animate-bounce" style="animation-duration: 3s">
                <v-icon color="orange" icon="mdi-fire" />
                <span class="font-bold text-sm">1,234+ aktif hari ini</span>
              </div>

              <div class="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-2xl px-4 py-2 flex items-center gap-2">
                <div class="flex -space-x-2">
                  <v-avatar color="primary-lighten-2" size="28">A</v-avatar>
                  <v-avatar color="purple" size="28">B</v-avatar>
                  <v-avatar color="teal" size="28">C</v-avatar>
                </div>
                <span class="text-xs text-medium-emphasis">+500 bergabung minggu ini</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- How It Works Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="primary" size="small" variant="tonal">
            CARA KERJA
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            3 Langkah Jadi <span class="text-primary">Jago Speaking</span>
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            Tidak perlu ribet. Mulai latihan speaking dalam hitungan menit.
          </p>
        </div>

        <v-row class="mt-8">
          <v-col
            v-for="(step, index) in steps"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card
              class="h-full text-center pa-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              :class="{ 'border-primary': index === 1 }"
              :elevation="index === 1 ? 8 : 2"
              rounded="2xl"
            >
              <!-- Step Number -->
              <div class="relative inline-flex">
                <v-avatar :color="step.color" size="80">
                  <v-icon color="white" :icon="step.icon" size="40" />
                </v-avatar>
                <span class="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {{ index + 1 }}
                </span>
              </div>

              <h3 class="text-xl font-bold mt-6 mb-3">{{ step.title }}</h3>
              <p class="text-medium-emphasis">{{ step.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Demo Preview Section -->
    <section id="demo" class="py-16 md:py-24 bg-gradient-to-b from-grey-50 to-white">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="purple" size="small" variant="tonal">
            DEMO
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Lihat Bagaimana <span class="text-purple-600">AI Coaching</span> Bekerja
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            AI kami tidak hanya mengoreksi — tapi mengajarkan kamu cara berbicara seperti native speaker.
          </p>
        </div>

        <v-row align="center" class="mt-12">
          <v-col cols="12" md="6">
            <div class="space-y-6">
              <div
                v-for="(feature, index) in demoFeatures"
                :key="index"
                class="flex gap-4! mb-4 items-start p-4! mb-4! mb-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer"
                :class="{ 'bg-white shadow-lg': selectedFeature === index }"
                @click="selectedFeature = index"
              >
                <v-avatar :color="feature.color" size="48">
                  <v-icon color="white" :icon="feature.icon" size="24" />
                </v-avatar>
                <div>
                  <h4 class="font-bold text-lg mb-1">{{ feature.title }}</h4>
                  <p class="text-medium-emphasis text-sm mb-0">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card
              class="overflow-hidden"
              elevation="12"
              rounded="2xl"
            >
              <div class="bg-gradient-to-r from-primary to-purple-600 px-6 py-4">
                <h4 class="text-white font-semibold">{{ demoFeatures[selectedFeature].title }}</h4>
              </div>
              <div class="pa-6">
                <div v-if="selectedFeature === 0">
                  <!-- Grammar Correction Demo -->
                  <div class="space-y-4">
                    <div class="bg-red-50 border border-red-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="error" icon="mdi-close-circle" size="20" />
                        <span class="font-medium text-error">Kalimatmu:</span>
                      </div>
                      <p class="text-red-700">"Yesterday I go to the market and buy some vegetables."</p>
                    </div>
                    <div class="bg-green-50 border border-green-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="success" icon="mdi-check-circle" size="20" />
                        <span class="font-medium text-green-700">Koreksi:</span>
                      </div>
                      <p class="text-green-700">"Yesterday I <strong>went</strong> to the market and <strong>bought</strong> some vegetables."</p>
                    </div>
                    <v-alert color="info" rounded="xl" variant="tonal">
                      <strong>Penjelasan:</strong> Untuk kejadian di masa lalu, gunakan past tense: go → went, buy → bought
                    </v-alert>
                  </div>
                </div>
                <div v-else-if="selectedFeature === 1">
                  <!-- Native Suggestion Demo -->
                  <div class="space-y-4">
                    <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="warning" icon="mdi-alert-circle" size="20" />
                        <span class="font-medium text-yellow-800">Kalimatmu (benar, tapi kaku):</span>
                      </div>
                      <p class="text-yellow-800">"I am very happy because today is my birthday."</p>
                    </div>
                    <div class="bg-purple-50 border border-purple-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="purple" icon="mdi-star" size="20" />
                        <span class="font-medium text-purple-700">Cara Native Speaker:</span>
                      </div>
                      <p class="text-purple-700">"I'm so excited — it's my birthday today!"</p>
                    </div>
                    <v-alert color="purple" rounded="xl" variant="tonal">
                      <strong>Tips:</strong> Native speaker lebih sering menggunakan contractions (I'm) dan kata-kata ekspresif seperti "excited" atau "thrilled"
                    </v-alert>
                  </div>
                </div>
                <div v-else>
                  <!-- Shadowing Demo -->
                  <div class="space-y-4">
                    <div class="bg-blue-50 border border-blue-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="blue" icon="mdi-volume-high" size="20" />
                        <span class="font-medium text-blue-700">Native Audio:</span>
                      </div>
                      <p class="text-blue-700 italic">"Could you tell me where the nearest subway station is?"</p>
                    </div>
                    <div class="bg-orange-50 border border-orange-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="orange" icon="mdi-microphone" size="20" />
                        <span class="font-medium text-orange-700">Kamu Meniru:</span>
                      </div>
                      <p class="text-orange-700">"Can you tell me where is nearest subway?"</p>
                    </div>
                    <div class="bg-green-50 border border-green-200 rounded-xl p-4! mb-4">
                      <div class="flex items-center gap-2 mb-2">
                        <v-icon color="success" icon="mdi-lightbulb" size="20" />
                        <span class="font-medium text-green-700">Feedback AI:</span>
                      </div>
                      <ul class="text-green-700 text-sm list-disc list-inside">
                        <li>"Could you" lebih sopan dari "Can you"</li>
                        <li>Tambahkan "the" sebelum "nearest"</li>
                        <li>Word order: "where the station is" bukan "where is station"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Social Proof / Testimonials Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="success" size="small" variant="tonal">
            TESTIMONI
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Mereka Sudah <span class="text-success">Jago Speaking</span>
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            Ribuan pengguna sudah merasakan peningkatan kemampuan speaking mereka.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(testimonial, index) in testimonials"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card
              class="h-full pa-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              elevation="2"
              rounded="2xl"
            >
              <!-- Quote Icon -->
              <v-icon
                class="mb-4"
                color="primary"
                icon="mdi-format-quote-open"
                opacity="0.3"
                size="40"
              />

              <!-- Quote Text -->
              <p class="text-body-1 mb-6 italic text-medium-emphasis">
                "{{ testimonial.quote }}"
              </p>

              <!-- User Info -->
              <div class="flex items-center gap-3">
                <v-avatar :color="testimonial.color" size="48">
                  <span class="text-lg font-bold text-white">{{ testimonial.avatar }}</span>
                </v-avatar>
                <div>
                  <div class="font-semibold">{{ testimonial.name }}</div>
                  <div class="text-sm text-medium-emphasis">{{ testimonial.role }}</div>
                </div>
              </div>

              <!-- Rating -->
              <div class="mt-4 flex gap-1">
                <v-icon
                  v-for="n in 5"
                  :key="n"
                  color="amber"
                  icon="mdi-star"
                  size="20"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Stats -->
        <v-row class="mt-12">
          <v-col
            v-for="(stat, index) in stats"
            :key="index"
            cols="6"
            md="3"
          >
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-extrabold text-primary mb-2">{{ stat.value }}</div>
              <div class="text-sm text-medium-emphasis">{{ stat.label }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Pricing Preview Section -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-grey-50 to-white">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="orange" size="small" variant="tonal">
            HARGA
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Investasi untuk <span class="text-orange-600">Masa Depan</span>mu
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            Lebih murah dari kursus biasa, dengan hasil yang lebih personal dan efektif.
          </p>
        </div>

        <v-row justify="center">
          <v-col
            v-for="(plan, index) in pricingPlans"
            :key="index"
            cols="12"
            md="5"
          >
            <v-card
              class="h-full pa-8 transition-all duration-300 hover:-translate-y-2"
              :class="plan.popular ? 'border-2 border-primary' : ''"
              :elevation="plan.popular ? 12 : 4"
              rounded="2xl"
            >
              <!-- Popular Badge -->
              <v-chip
                v-if="plan.popular"
                class="absolute -top-3 left-1/2 -translate-x-1/2"
                color="primary"
                size="small"
              >
                PALING POPULER
              </v-chip>

              <!-- Plan Header -->
              <div class="text-center mb-6">
                <v-icon class="mb-4" :color="plan.color" :icon="plan.icon" size="48" />
                <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
                <p class="text-medium-emphasis">{{ plan.description }}</p>
              </div>

              <!-- Price -->
              <div class="text-center mb-6">
                <span v-if="plan.price === 0" class="text-4xl font-extrabold">GRATIS</span>
                <div v-else>
                  <span class="text-lg text-medium-emphasis line-through">{{ plan.originalPrice }}</span>
                  <div class="flex items-baseline justify-center gap-1">
                    <span class="text-sm text-primary">Rp</span>
                    <span class="text-4xl font-extrabold text-primary">{{ plan.price }}</span>
                    <span class="text-medium-emphasis">/bulan</span>
                  </div>
                </div>
              </div>

              <!-- Features -->
              <v-list class="bg-transparent">
                <v-list-item
                  v-for="(feature, fIndex) in plan.features"
                  :key="fIndex"
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
                    :class="{ 'text-medium-emphasis': !feature.included }"
                  >
                    {{ feature.text }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>

              <!-- CTA -->
              <v-btn
                block
                class="mt-6 text-none"
                :color="plan.popular ? 'primary' : 'grey-darken-3'"
                rounded="xl"
                size="large"
                :to="plan.cta.to"
                :variant="plan.popular ? 'elevated' : 'outlined'"
              >
                {{ plan.cta.text }}
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <div class="text-center mt-8">
          <router-link class="text-primary font-medium text-decoration-none" to="/pricing">
            Lihat semua fitur & perbandingan
            <v-icon icon="mdi-arrow-right" size="18" />
          </router-link>
        </div>
      </v-container>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="teal" size="small" variant="tonal">
            FAQ
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang <span class="text-teal-600">Sering Ditanyakan</span>
          </h2>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                v-for="(faq, index) in faqs"
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

    <!-- Final CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
        <div class="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white rounded-full" />
      </div>

      <v-container class="relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-5xl font-extrabold mb-6">
            Siap Jago Speaking English?
          </h2>
          <p class="text-xl opacity-90 mb-8">
            Mulai sekarang. Gratis. Tanpa kartu kredit. Langsung praktek speaking dengan AI tutor.
          </p>
          <v-btn
            class="text-none px-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]!"
            color="white"
            rounded="xl"
            size="x-large"
            to="/signup"
          >
            <span class="text-primary font-bold">
              <v-icon class="mr-2" icon="mdi-rocket-launch" />
              Mulai Latihan Gratis
            </span>
          </v-btn>
          <p class="mt-6 opacity-80 text-sm">
            Bergabung dengan 5,000+ pelajar yang sudah meningkatkan speaking mereka
          </p>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const selectedFeature = ref(0)

  const steps = [
    {
      icon: 'mdi-account-plus',
      title: 'Daftar Gratis',
      description: 'Buat akun dalam 30 detik. Pilih level dan target belajarmu.',
      color: 'blue',
    },
    {
      icon: 'mdi-message-text',
      title: 'Latihan Speaking',
      description: 'Ngobrol dengan AI tutor. Topik menarik setiap hari.',
      color: 'primary',
    },
    {
      icon: 'mdi-chart-line',
      title: 'Dapat Feedback',
      description: 'Koreksi grammar, saran native speaker, dan tracking progress.',
      color: 'teal',
    },
  ]

  const demoFeatures = [
    {
      icon: 'mdi-spellcheck',
      title: 'Koreksi Grammar Real-time',
      description: 'AI langsung mengoreksi kesalahan grammar dan menjelaskan aturannya.',
      color: 'error',
    },
    {
      icon: 'mdi-star-face',
      title: 'Saran Native Speaker',
      description: 'Belajar berbicara seperti native, bukan hanya gramatikal benar.',
      color: 'purple',
    },
    {
      icon: 'mdi-record-rec',
      title: 'AI Shadowing Coach',
      description: 'Dengar, tiru, dan dapatkan perbandingan langsung dengan native.',
      color: 'blue',
    },
  ]

  const testimonials = [
    {
      quote: 'Dulu takut ngomong Inggris. Setelah 2 minggu latihan tiap hari, sekarang udah berani interview kerja pakai English!',
      name: 'Rina D.',
      role: 'Fresh Graduate',
      avatar: 'R',
      color: 'pink',
    },
    {
      quote: 'Fitur feedback-nya super helpful. Nggak cuma dikoreksi, tapi dikasih tau cara ngomong yang lebih natural.',
      name: 'Budi S.',
      role: 'Software Developer',
      avatar: 'B',
      color: 'blue',
    },
    {
      quote: 'Lebih efektif dari les private. Bisa latihan kapan aja, AI-nya sabar banget dan nggak judgmental.',
      name: 'Maya K.',
      role: 'Content Creator',
      avatar: 'M',
      color: 'teal',
    },
  ]

  const stats = [
    { value: '5,000+', label: 'Pengguna Aktif' },
    { value: '100K+', label: 'Sesi Latihan' },
    { value: '95%', label: 'Merasa Lebih PD' },
    { value: '4.9/5', label: 'Rating Pengguna' },
  ]

  const pricingPlans = [
    {
      name: 'Free',
      description: 'Cocok untuk mencoba',
      icon: 'mdi-gift-outline',
      color: 'grey',
      price: 0,
      features: [
        { text: '10 menit speaking/hari', included: true },
        { text: 'Feedback grammar dasar', included: true },
        { text: 'Akses topik terbatas', included: true },
        { text: 'AI Shadowing Coach', included: false },
        { text: 'Progress analytics', included: false },
        { text: 'Saran native speaker', included: false },
      ],
      cta: { text: 'Mulai Gratis', to: '/signup' },
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Untuk hasil maksimal',
      icon: 'mdi-crown',
      color: 'primary',
      price: '79.000',
      originalPrice: 'Rp 149.000',
      features: [
        { text: 'Unlimited speaking', included: true },
        { text: 'Feedback lengkap + penjelasan', included: true },
        { text: 'Semua topik tersedia', included: true },
        { text: 'AI Shadowing Coach', included: true },
        { text: 'Progress analytics detail', included: true },
        { text: 'Saran native speaker', included: true },
      ],
      cta: { text: 'Upgrade ke Pro', to: '/pricing' },
      popular: true,
    },
  ]

  const faqs = [
    {
      question: 'Apakah benar-benar gratis?',
      answer: 'Ya! Paket Free memberikan akses 10 menit latihan speaking setiap hari, selamanya gratis. Tidak perlu kartu kredit untuk mendaftar.',
    },
    {
      question: 'Apa bedanya dengan aplikasi belajar bahasa lain?',
      answer: 'Kami fokus pada SPEAKING dan OUTPUT, bukan teori. AI kami tidak hanya mengoreksi, tapi mengajarkan cara berbicara seperti native speaker. Plus, feedback real-time yang personal.',
    },
    {
      question: 'Apakah bisa belajar dari level pemula?',
      answer: 'Tentu! Kami memiliki sistem adaptive yang menyesuaikan tingkat kesulitan berdasarkan level kamu. Mulai dari beginner sampai advanced.',
    },
    {
      question: 'Bagaimana cara kerja AI Shadowing Coach?',
      answer: 'AI akan memberikan contoh kalimat dengan pengucapan native. Kamu meniru (shadowing), lalu AI membandingkan dan memberikan feedback detail tentang struktur kalimat dan kenatural-an.',
    },
    {
      question: 'Bisa diakses di HP?',
      answer: 'Ya, platform kami fully responsive. Bisa diakses melalui browser di HP, tablet, atau komputer.',
    },
  ]

  function scrollToDemo () {
    const el = document.querySelector('#demo')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>
