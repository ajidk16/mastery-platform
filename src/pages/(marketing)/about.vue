<route lang="yaml">
meta:
  layout: marketing
</route>

<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 md:py-24 bg-linear-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-20 -right-20 w-60 h-60 bg-linear-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl" />
        <div class="absolute -bottom-20 -left-20 w-60 h-60 bg-linear-to-tr from-primary/20 to-teal-200/40 rounded-full blur-3xl" />
      </div>

      <v-container class="relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <v-chip class="mb-6" color="teal" size="small" variant="tonal">
            <v-icon class="mr-1" icon="mdi-heart" size="14" />
            TENTANG KAMI
          </v-chip>
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6">
            Kami Percaya Semua Orang Bisa
            <span class="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-cyan-500">Jago Speaking</span>
          </h1>
          <p class="text-lg md:text-xl text-medium-emphasis">
            Misi kami sederhana: bantu kamu percaya diri berbicara bahasa Inggris, tanpa rasa takut.
          </p>
        </div>
      </v-container>
    </section>

    <!-- Vision & Mission Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <div class="pr-md-8">
              <v-chip class="mb-4" color="primary" size="small" variant="tonal">
                VISI & MISI
              </v-chip>
              <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Mengubah Cara Indonesia Belajar <span class="text-primary">Bahasa Inggris</span>
              </h2>

              <div class="space-y-8">
                <!-- Vision -->
                <div class="flex gap-4">
                  <v-avatar color="primary" size="56">
                    <v-icon color="white" icon="mdi-eye" size="28" />
                  </v-avatar>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Visi</h3>
                    <p class="text-medium-emphasis leading-relaxed">
                      Menjadi platform #1 di Indonesia yang membantu siapa saja berbicara bahasa Inggris dengan percaya diri, terlepas dari latar belakang atau kemampuan finansial.
                    </p>
                  </div>
                </div>

                <!-- Mission -->
                <div class="flex gap-4">
                  <v-avatar color="teal" size="56">
                    <v-icon color="white" icon="mdi-target" size="28" />
                  </v-avatar>
                  <div>
                    <h3 class="text-xl font-bold mb-2">Misi</h3>
                    <ul class="text-medium-emphasis space-y-2 leading-relaxed">
                      <li class="flex items-start gap-2">
                        <v-icon class="mt-1 shrink-0" color="success" icon="mdi-check" size="18" />
                        <span>Menyediakan latihan speaking berkualitas dengan harga terjangkau</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <v-icon class="mt-1 shrink-0" color="success" icon="mdi-check" size="18" />
                        <span>Memberikan feedback personal dan real-time menggunakan AI</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <v-icon class="mt-1 shrink-0" color="success" icon="mdi-check" size="18" />
                        <span>Membangun kepercayaan diri melalui latihan konsisten yang menyenangkan</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <v-icon class="mt-1 shrink-0" color="success" icon="mdi-check" size="18" />
                        <span>Fokus pada OUTPUT (speaking), bukan hanya teori dan grammar</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="pa-8 bg-linear-to-br from-primary/5 to-teal-50" elevation="0" rounded="2xl">
              <div class="text-center mb-6">
                <v-icon color="primary" icon="mdi-format-quote-open" opacity="0.3" size="48" />
              </div>
              <blockquote class="text-xl md:text-2xl font-medium text-center italic text-grey-darken-2 mb-6">
                "Jangan bikin Duolingo AI. Bikin Private Tutor AI yang fokus SPEAKING."
              </blockquote>
              <p class="text-center text-medium-emphasis">
                — Filosofi kami sejak hari pertama
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- The Problem We Solve Section -->
    <section class="py-16 md:py-24 bg-grey-50">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="error" size="small" variant="tonal">
            MASALAH
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Kenapa Belajar Bahasa Inggris <span class="text-error">Selalu Gagal?</span>
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            Kami memahami frustrasimu karena kami juga pernah mengalaminya.
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(problem, index) in problems"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card
              class="h-full pa-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              elevation="2"
              rounded="2xl"
            >
              <v-avatar class="mb-4" :color="problem.color" size="64">
                <v-icon color="white" :icon="problem.icon" size="32" />
              </v-avatar>
              <h3 class="text-lg font-bold mb-3">{{ problem.title }}</h3>
              <p class="text-medium-emphasis">{{ problem.description }}</p>
            </v-card>
          </v-col>
        </v-row>

        <!-- Solution Arrow -->
        <div class="text-center my-12">
          <v-icon color="success" icon="mdi-arrow-down-bold" size="48" />
        </div>

        <!-- Our Solution -->
        <v-card class="overflow-hidden" elevation="0" rounded="2xl">
          <div class="relative bg-linear-to-br from-primary via-teal-600 to-cyan-600 text-white">
            <!-- Decorative elements -->
            <div class="absolute inset-0 overflow-hidden opacity-10">
              <div class="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div class="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <v-row align="center" class="relative z-10 pa-8 md:pa-12">
              <v-col cols="12" md="7">
                <div class="flex items-center gap-3 mb-4">
                  <div class="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl">
                    <v-icon color="white" icon="mdi-lightbulb" size="24" />
                  </div>
                  <span class="text-sm font-semibold uppercase tracking-wider opacity-90">Solusi Kami</span>
                </div>

                <h3 class="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                  AI Speaking Partner<br>
                  <span class="text-teal-100">Tersedia 24/7 untuk Kamu</span>
                </h3>

                <p class="text-base md:text-lg opacity-90 mb-8 leading-relaxed">
                  Private tutor AI yang sabar, tidak menghakimi, dan memberikan feedback personal secara real-time. Fokus pada SPEAKING, bukan teori.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    <div class="shrink-0 w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                      <v-icon color="white" icon="mdi-check-bold" size="20" />
                    </div>
                    <span class="text-sm font-semibold">Feedback Instan</span>
                  </div>

                  <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    <div class="shrink-0 w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                      <v-icon color="white" icon="mdi-check-bold" size="20" />
                    </div>
                    <span class="text-sm font-semibold">Tanpa Takut Salah</span>
                  </div>

                  <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    <div class="shrink-0 w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                      <v-icon color="white" icon="mdi-check-bold" size="20" />
                    </div>
                    <span class="text-sm font-semibold">Harga Terjangkau</span>
                  </div>
                </div>

                <div class="mt-8">
                  <v-btn
                    class="text-none font-bold px-8 hover:-translate-y-1 transition-all duration-300"
                    color="white"
                    elevation="8"
                    rounded="xl"
                    size="large"
                    to="/signup"
                  >
                    <span class="text-primary">
                      <v-icon class="mr-2" icon="mdi-rocket-launch" />
                      Coba Sekarang Gratis
                    </span>
                  </v-btn>
                </div>
              </v-col>

              <v-col class="text-center" cols="12" md="5">
                <div class="relative inline-block">
                  <!-- Animated rings -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-48 h-48 border-4 border-white/20 rounded-full animate-ping" style="animation-duration: 3s;" />
                  </div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-40 h-40 border-4 border-white/30 rounded-full animate-ping" style="animation-duration: 2s;" />
                  </div>

                  <!-- Main avatar -->
                  <v-avatar
                    class="relative shadow-2xl border-4 border-white/30"
                    color="white"
                    size="160"
                  >
                    <v-icon color="primary" icon="mdi-robot-happy-outline" size="80" />
                  </v-avatar>

                  <!-- Floating badges -->
                  <div class="absolute -top-4 -right-4 bg-success px-4 py-2 rounded-full shadow-xl animate-bounce" style="animation-duration: 2s;">
                    <span class="text-white text-xs font-bold flex items-center gap-1">
                      <v-icon icon="mdi-star" size="14" />
                      4.9/5
                    </span>
                  </div>

                  <div class="absolute -bottom-4 -left-4 bg-orange px-4 py-2 rounded-full shadow-xl" style="animation: bounce 2s infinite; animation-delay: 1s;">
                    <span class="text-white text-xs font-bold flex items-center gap-1">
                      <v-icon icon="mdi-fire" size="14" />
                      100K+ Sesi
                    </span>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-container>
    </section>

    <!-- Our Values Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="purple" size="small" variant="tonal">
            NILAI-NILAI KAMI
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Prinsip yang <span class="text-purple-600">Kami Pegang</span>
          </h2>
        </div>

        <v-row>
          <v-col
            v-for="(value, index) in values"
            :key="index"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <v-avatar class="mb-4" :color="value.color" size="72">
                <v-icon color="white" :icon="value.icon" size="36" />
              </v-avatar>
              <h3 class="text-lg font-bold mb-2">{{ value.title }}</h3>
              <p class="text-medium-emphasis text-sm">{{ value.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Team / Founder Section -->
    <section class="py-16 md:py-24 bg-grey-50">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="indigo" size="small" variant="tonal">
            TIM KAMI
          </v-chip>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Dibangun oleh <span class="text-indigo-600">Praktisi & Learner</span>
          </h2>
          <p class="text-lg text-medium-emphasis max-w-2xl mx-auto">
            Kami bukan hanya developer — kami juga learner yang memahami perjuangan belajar bahasa Inggris.
          </p>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="4">
            <v-card class="pa-8 text-center h-full" elevation="4" rounded="2xl">
              <v-avatar class="mb-6 border-4 border-primary" color="primary-lighten-4" size="120">
                <v-icon color="primary" icon="mdi-account" size="64" />
              </v-avatar>
              <h3 class="text-xl font-bold mb-2">Founder</h3>
              <p class="text-medium-emphasis mb-4">Product & Technology Lead</p>
              <p class="text-sm text-medium-emphasis mb-6">
                Seorang praktisi teknologi yang passionate tentang edtech dan AI. Percaya bahwa teknologi harus membuat pendidikan lebih accessible untuk semua orang.
              </p>
              <div class="flex justify-center gap-2">
                <v-btn color="grey-lighten-3" icon size="small" variant="flat">
                  <v-icon icon="mdi-linkedin" size="20" />
                </v-btn>
                <v-btn color="grey-lighten-3" icon size="small" variant="flat">
                  <v-icon icon="mdi-twitter" size="20" />
                </v-btn>
                <v-btn color="grey-lighten-3" icon size="small" variant="flat">
                  <v-icon icon="mdi-github" size="20" />
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Stats Section -->
    <section class="py-16 md:py-24 bg-linear-to-r from-primary to-teal-600 text-white">
      <v-container>
        <v-row>
          <v-col
            v-for="(stat, index) in stats"
            :key="index"
            cols="6"
            md="3"
          >
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-extrabold mb-2">{{ stat.value }}</div>
              <div class="text-sm md:text-base opacity-80">{{ stat.label }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Section -->
    <section class="py-16 md:py-24 bg-white">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <v-chip class="mb-4" color="orange" size="small" variant="tonal">
              HUBUNGI KAMI
            </v-chip>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              Punya Pertanyaan atau <span class="text-orange-600">Saran?</span>
            </h2>
            <p class="text-lg text-medium-emphasis mb-8">
              Kami selalu senang mendengar dari pengguna kami. Jangan ragu untuk menghubungi kami.
            </p>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <v-avatar color="primary-lighten-4" size="56">
                  <v-icon color="primary" icon="mdi-email" size="28" />
                </v-avatar>
                <div>
                  <div class="font-bold">Email</div>
                  <a class="text-primary text-decoration-none" href="mailto:hello@mastery.id">
                    hello@mastery.id
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <v-avatar color="teal-lighten-4" size="56">
                  <v-icon color="teal" icon="mdi-message-text" size="28" />
                </v-avatar>
                <div>
                  <div class="font-bold">WhatsApp</div>
                  <a class="text-teal text-decoration-none" href="#">
                    +62 812-XXXX-XXXX
                  </a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <v-avatar color="orange-lighten-4" size="56">
                  <v-icon color="orange" icon="mdi-map-marker" size="28" />
                </v-avatar>
                <div>
                  <div class="font-bold">Lokasi</div>
                  <span class="text-medium-emphasis">Jakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
              <div class="font-bold mb-3">Ikuti Kami</div>
              <div class="flex gap-3">
                <v-btn
                  v-for="social in socials"
                  :key="social.name"
                  class="transition-all duration-200 hover:bg-primary! hover:text-white!"
                  color="grey-lighten-3"
                  icon
                  size="large"
                  variant="flat"
                >
                  <v-icon :icon="social.icon" size="24" />
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="pa-8" elevation="8" rounded="2xl">
              <h3 class="text-xl font-bold mb-6">Kirim Pesan</h3>
              <v-form>
                <v-text-field
                  class="mb-4"
                  label="Nama Lengkap"
                  rounded="lg"
                  variant="outlined"
                />
                <v-text-field
                  class="mb-4"
                  label="Email"
                  rounded="lg"
                  type="email"
                  variant="outlined"
                />
                <v-select
                  class="mb-4"
                  :items="['Pertanyaan Umum', 'Feedback Produk', 'Kerjasama', 'Lainnya']"
                  label="Kategori"
                  rounded="lg"
                  variant="outlined"
                />
                <v-textarea
                  class="mb-4"
                  label="Pesan"
                  rounded="lg"
                  rows="4"
                  variant="outlined"
                />
                <v-btn
                  block
                  class="text-none"
                  color="primary"
                  rounded="lg"
                  size="large"
                >
                  <v-icon class="mr-2" icon="mdi-send" />
                  Kirim Pesan
                </v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-linear-to-r from-teal-500 to-cyan-500 text-white">
      <v-container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-6">
            Bergabung dengan Misi Kami
          </h2>
          <p class="text-xl opacity-90 mb-8">
            Mari bersama-sama mengubah cara Indonesia belajar bahasa Inggris. Mulai perjalanan speaking-mu hari ini.
          </p>
          <v-btn
            class="text-none px-10 transition-all duration-300 hover:-translate-y-1"
            color="white"
            elevation="8"
            rounded="xl"
            size="x-large"
            to="/signup"
          >
            <span class="text-teal-600 font-bold">
              <v-icon class="mr-2" icon="mdi-rocket-launch" />
              Mulai Latihan Gratis
            </span>
          </v-btn>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
  const problems = [
    {
      icon: 'mdi-book-open-page-variant',
      title: 'Terlalu Banyak Teori',
      description: 'Belajar grammar dan vocab terus, tapi tidak pernah praktek speaking. Hasilnya? Paham tapi tidak bisa ngomong.',
      color: 'red-lighten-1',
    },
    {
      icon: 'mdi-account-cancel',
      title: 'Takut Salah & Malu',
      description: 'Tidak ada partner latihan yang sabar. Takut dihakimi kalau salah. Akhirnya tidak pernah praktek.',
      color: 'orange',
    },
    {
      icon: 'mdi-currency-usd-off',
      title: 'Biaya Kursus Mahal',
      description: 'Les private bahasa Inggris mahal. Tidak semua orang mampu bayar ratusan ribu per jam.',
      color: 'purple',
    },
  ]

  const values = [
    {
      icon: 'mdi-microphone',
      title: 'Speaking First',
      description: 'Fokus pada output dan praktek berbicara, bukan hanya teori.',
      color: 'primary',
    },
    {
      icon: 'mdi-shield-check',
      title: 'Safe to Fail',
      description: 'Lingkungan yang aman untuk salah dan belajar tanpa rasa malu.',
      color: 'teal',
    },
    {
      icon: 'mdi-hand-heart',
      title: 'Accessible',
      description: 'Pendidikan berkualitas harus bisa diakses semua orang.',
      color: 'orange',
    },
    {
      icon: 'mdi-lightbulb',
      title: 'Smart Feedback',
      description: 'Feedback yang actionable dan membantu, bukan yang menakutkan.',
      color: 'purple',
    },
  ]

  const stats = [
    { value: '5,000+', label: 'Pengguna Aktif' },
    { value: '100K+', label: 'Sesi Speaking' },
    { value: '95%', label: 'Lebih Percaya Diri' },
    { value: '4.9/5', label: 'Rating Pengguna' },
  ]

  const socials = [
    { name: 'Instagram', icon: 'mdi-instagram' },
    { name: 'Twitter', icon: 'mdi-twitter' },
    { name: 'LinkedIn', icon: 'mdi-linkedin' },
    { name: 'YouTube', icon: 'mdi-youtube' },
  ]
</script>
