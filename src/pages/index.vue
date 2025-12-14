<template>
  <v-container class="pa-0" fluid>
    <!-- Hero Section -->
    <v-sheet class="py-16" color="surface">
      <v-container>
        <v-row align="center">
          <v-col class="text-center text-md-left" cols="12" md="6">
            <h1 class="text-h2 font-weight-bold mb-4 text-primary">
              Bicara Dengan Percaya Diri
            </h1>
            <p class="text-h5 text-medium-emphasis mb-6">
              Platform latihan speaking AI yang fokus pada praktek, bukan sekadar teori. Tingkatkan kelancaran bicara Anda dalam hitungan minggu.
            </p>
            <v-btn
              class="text-none px-8"
              color="primary"
              elevation="4"
              rounded="lg"
              size="x-large"
              to="/signup"
            >
              Mulai Latihan Gratis
            </v-btn>
            <div class="mt-4 text-caption text-disabled">
              * Tidak perlu kartu kredit
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <!-- Placeholder for Hero Image or Illustration -->
            <v-img
              alt="Speaking AI Demo"
              class="mx-auto elevation-10"
              cover
              rounded="lg"
              src="https://placehold.co/600x400/png?text=Speaking+AI+Demo"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- How It Works Section -->
    <v-sheet class="py-16" color="grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="text-h3 font-weight-bold mb-2">Cara Kerja</h2>
          <p class="text-subtitle-1 text-medium-emphasis">3 langkah mudah untuk mulai lancar berbicara</p>
        </div>

        <v-row>
          <v-col class="text-center" cols="12" md="4">
            <v-card class="py-8 px-4 h-100" flat>
              <v-icon class="mb-4" color="secondary" icon="mdi-account-plus" size="64" />
              <h3 class="text-h5 font-weight-bold mb-2">1. Daftar Gratis</h3>
              <p class="text-body-1 text-medium-emphasis">
                Buat akun dalam hitungan detik dan dapatkan akses langsung ke module dasar.
              </p>
            </v-card>
          </v-col>

          <v-col class="text-center" cols="12" md="4">
            <v-card class="py-8 px-4 h-100" flat>
              <v-icon class="mb-4" color="secondary" icon="mdi-microphone" size="64" />
              <h3 class="text-h5 font-weight-bold mb-2">2. Mulai Latihan</h3>
              <p class="text-body-1 text-medium-emphasis">
                Pilih topik dan mulai percakapan suara dengan AI tutor kami yang sabar.
              </p>
            </v-card>
          </v-col>

          <v-col class="text-center" cols="12" md="4">
            <v-card class="py-8 px-4 h-100" flat>
              <v-icon class="mb-4" color="secondary" icon="mdi-chart-line" size="64" />
              <h3 class="text-h5 font-weight-bold mb-2">3. Lihat Progress</h3>
              <p class="text-body-1 text-medium-emphasis">
                Dapatkan feedback instan pada pronunciation dan grammar Anda.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Demo Preview Section -->
    <v-sheet class="py-16">
      <v-container>
        <v-row align="center">
          <v-col class="text-center mb-8" cols="12">
            <h2 class="text-h3 font-weight-bold">Rasakan Pengalamannya</h2>
          </v-col>
          <v-col cols="12" md="8" offset-md="2">
            <v-card class="overflow-hidden" elevation="10" rounded="xl">
              <v-img
                cover
                height="400"
                src="https://placehold.co/800x500/png?text=Interactive+Chat+Interface"
              >
                <div class="d-flex fill-height align-center justify-center bg-black-opacity-50">
                  <v-btn color="white" icon="mdi-play" size="x-large" variant="outlined" />
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Testimonials Section -->
    <v-sheet class="py-16" color="primary">
      <v-container>
        <h2 class="text-h3 font-weight-bold text-center text-white mb-12">Kata Mereka</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-card class="pa-8 pb-12" rounded="xl">
              <div class="text-h5 font-weight-medium mb-6 font-italic">
                "Sangat membantu! Saya dulu takut bicara bahasa Inggris, tapi latihan rutin dengan mastery-platform membuat saya jauh lebih percaya diri saat meeting dengan klien luar negeri."
              </div>
              <div class="d-flex align-center">
                <v-avatar class="mr-4" color="grey-lighten-2" size="48">
                  <span class="text-h6">JD</span>
                </v-avatar>
                <div>
                  <div class="text-subtitle-1 font-weight-bold">Budi Santoso</div>
                  <div class="text-caption text-medium-emphasis">Software Engineer</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Pricing Preview -->
    <v-sheet class="py-16 text-center">
      <v-container>
        <h2 class="text-h3 font-weight-bold mb-6">Investasi Terbaik Untuk Karir Anda</h2>
        <p class="text-h6 text-medium-emphasis mb-8">Mulai gratis, upgrade saat Anda siap berkomitmen lebih.</p>
        <v-btn
          class="px-8 text-none"
          color="primary"
          rounded="lg"
          size="x-large"
          to="/pricing"
          variant="outlined"
        >
          Lihat Pilihan Paket
        </v-btn>
      </v-container>
    </v-sheet>

    <!-- FAQ Section -->
    <v-sheet class="py-16" color="grey-lighten-4">
      <v-container>
        <h2 class="text-h3 font-weight-bold text-center mb-12">Sering Ditanyakan</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel
                text="Ya, Anda bisa memulai dengan paket Free kami yang mencakup akses ke module dasar dan latihan harian terbatas."
                title="Apakah benar-benar gratis?"
              />
              <v-expansion-panel
                text="Kami menggunakan teknologi speech recognition canggih untuk menganalisis pronunciation, intonasi, dan kefasihan Anda secara real-time."
                title="Bagaimana AI menilai speaking saya?"
              />
              <v-expansion-panel
                text="Tentu saja! Materi kami disusun mulai dari level pemula hingga mahir. AI akan menyesuaikan dengan kemampuan Anda."
                title="Apakah cocok untuk pemula?"
              />
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet class="py-16 text-center bg-surface">
      <v-container>
        <h2 class="text-h3 font-weight-bold mb-6">Siap Untuk Mulai?</h2>
        <v-btn
          class="px-10 text-none"
          color="primary"
          elevation="6"
          rounded="lg"
          size="x-large"
          to="/signup"
        >
          Gabung Sekarang Gratis
        </v-btn>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
.bg-black-opacity-50 {
    background-color: rgba(0,0,0,0.5);
}
</style>
