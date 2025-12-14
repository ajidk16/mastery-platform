<route lang="yaml">
meta:
  layout: marketing
</route>

<template>
  <v-container class="pa-0" fluid>
    <!-- Hero Section -->
    <v-sheet class="hero-section py-16 py-md-20" color="surface">
      <v-container>
        <v-row align="center">
          <v-col class="text-center text-md-start" cols="12" md="6">
            <div class="hero-content">
              <h1
                class="text-h3 text-md-h2 font-weight-bold mb-4 text-primary animate-fade-in-up"
              >
                Bicara Dengan Percaya Diri
              </h1>
              <p
                class="text-body-1 text-md-h5 text-medium-emphasis mb-6 animate-fade-in-up delay-1"
              >
                Platform latihan speaking AI yang fokus pada praktek, bukan
                sekadar teori. Tingkatkan kelancaran bicara Anda dalam hitungan
                minggu.
              </p>
              <v-btn
                class="text-none px-8 animate-fade-in-up delay-2 hero-cta"
                color="primary"
                elevation="8"
                rounded="lg"
                size="x-large"
                to="/signup"
              >
                <v-icon class="mr-2" icon="mdi-rocket-launch" />
                Mulai Latihan Gratis
              </v-btn>
              <div
                class="mt-4 text-caption text-disabled animate-fade-in-up delay-3"
              >
                <v-icon icon="mdi-check-circle" size="small" /> Tidak perlu
                kartu kredit
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="hero-image-wrapper animate-fade-in-up delay-2">
              <v-img
                alt="Speaking AI Demo"
                class="mx-auto hero-image"
                cover
                rounded="xl"
                src="https://placehold.co/600x400/6366F1/ffffff?text=🎤+AI+Speaking"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- How It Works Section -->
    <v-sheet class="py-16" color="grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="secondary" label variant="tonal">
            <v-icon icon="mdi-lightbulb-on" start />
            Cara Kerja
          </v-chip>
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-2">
            3 Langkah Mudah
          </h2>
          <p class="text-subtitle-1 text-medium-emphasis">
            Mulai lancar berbicara dalam hitungan minggu
          </p>
        </div>

        <v-row>
          <v-col
            v-for="(step, index) in steps"
            :key="step.title"
            class="text-center"
            cols="12"
            md="4"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="py-8 px-6 h-100 step-card"
                :class="{ 'card-hover': isHovering }"
                flat
              >
                <div class="step-number mb-4">{{ index + 1 }}</div>
                <v-icon
                  class="mb-4 step-icon"
                  color="secondary"
                  :icon="step.icon"
                  size="56"
                />
                <h3 class="text-h6 font-weight-bold mb-3">{{ step.title }}</h3>
                <p class="text-body-2 text-medium-emphasis">
                  {{ step.description }}
                </p>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Demo Preview Section -->
    <v-sheet class="py-16">
      <v-container>
        <v-row align="center">
          <v-col class="text-center mb-8" cols="12">
            <v-chip class="mb-4" color="primary" label variant="tonal">
              <v-icon icon="mdi-play-circle" start />
              Demo
            </v-chip>
            <h2 class="text-h4 text-md-h3 font-weight-bold">
              Rasakan Pengalamannya
            </h2>
          </v-col>
          <v-col cols="12" md="10" offset-md="1">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="overflow-hidden demo-card"
                :elevation="isHovering ? 16 : 8"
                rounded="xl"
              >
                <v-img
                  cover
                  height="450"
                  src="https://placehold.co/900x500/1a1a2e/ffffff?text=🤖+Interactive+AI+Chat"
                >
                  <div
                    class="d-flex fill-height align-center justify-center demo-overlay"
                  >
                    <v-btn
                      class="play-btn"
                      :class="{ 'play-btn-hover': isHovering }"
                      color="white"
                      icon="mdi-play"
                      size="x-large"
                      variant="elevated"
                    />
                  </div>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Testimonials Section -->
    <v-sheet class="py-16 testimonial-section" color="primary">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="white" label variant="elevated">
            <v-icon icon="mdi-star" start />
            Testimonial
          </v-chip>
          <h2 class="text-h4 text-md-h3 font-weight-bold text-white">
            Kata Mereka
          </h2>
        </div>
        <v-row justify="center">
          <v-col
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            cols="12"
            md="6"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                class="pa-6 testimonial-card"
                :elevation="isHovering ? 12 : 4"
                rounded="xl"
              >
                <v-icon
                  class="quote-icon"
                  color="primary"
                  icon="mdi-format-quote-open"
                  size="32"
                />
                <p class="text-body-1 font-weight-medium mb-6 font-italic">
                  "{{ testimonial.text }}"
                </p>
                <div class="d-flex align-center">
                  <v-avatar class="mr-3" color="primary" size="48">
                    <span class="text-body-1 font-weight-bold text-white">{{
                      testimonial.initials
                    }}</span>
                  </v-avatar>
                  <div>
                    <div class="text-subtitle-2 font-weight-bold">
                      {{ testimonial.name }}
                    </div>
                    <div class="text-caption text-medium-emphasis">
                      {{ testimonial.role }}
                    </div>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Pricing Preview -->
    <v-sheet class="py-16 text-center">
      <v-container>
        <v-chip class="mb-4" color="accent" label variant="tonal">
          <v-icon icon="mdi-tag" start />
          Harga
        </v-chip>
        <h2 class="text-h4 text-md-h3 font-weight-bold mb-4">
          Investasi Terbaik Untuk Karir Anda
        </h2>
        <p class="text-body-1 text-md-h6 text-medium-emphasis mb-8">
          Mulai gratis, upgrade saat Anda siap berkomitmen lebih.
        </p>
        <v-btn
          class="px-8 text-none pricing-btn"
          color="primary"
          rounded="lg"
          size="x-large"
          to="/pricing"
          variant="outlined"
        >
          <v-icon class="mr-2" icon="mdi-arrow-right" />
          Lihat Pilihan Paket
        </v-btn>
      </v-container>
    </v-sheet>

    <!-- FAQ Section -->
    <v-sheet class="py-16" color="grey-lighten-4">
      <v-container>
        <div class="text-center mb-12">
          <v-chip class="mb-4" color="secondary" label variant="tonal">
            <v-icon icon="mdi-help-circle" start />
            FAQ
          </v-chip>
          <h2 class="text-h4 text-md-h3 font-weight-bold">Sering Ditanyakan</h2>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-expansion-panels class="faq-panels" variant="accordion">
              <v-expansion-panel
                v-for="faq in faqs"
                :key="faq.question"
                class="mb-3"
                elevation="0"
                rounded="lg"
              >
                <v-expansion-panel-title class="font-weight-medium">
                  <v-icon
                    class="mr-3"
                    color="primary"
                    icon="mdi-help-circle-outline"
                    size="small"
                  />
                  {{ faq.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="text-medium-emphasis">
                  {{ faq.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Final CTA -->
    <v-sheet class="py-16 text-center final-cta" color="surface">
      <v-container>
        <v-icon
          class="mb-4"
          color="primary"
          icon="mdi-rocket-launch"
          size="64"
        />
        <h2 class="text-h4 text-md-h3 font-weight-bold mb-4">
          Siap Untuk Mulai?
        </h2>
        <p class="text-body-1 text-medium-emphasis mb-6">
          Bergabung dengan ribuan pelajar yang sudah meningkatkan kemampuan
          speaking mereka
        </p>
        <v-btn
          class="px-10 text-none final-cta-btn"
          color="primary"
          elevation="8"
          rounded="lg"
          size="x-large"
          to="/signup"
        >
          <v-icon class="mr-2" icon="mdi-account-plus" />
          Gabung Sekarang Gratis
        </v-btn>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
  const steps = [
    {
      icon: 'mdi-account-plus-outline',
      title: 'Daftar Gratis',
      description:
        'Buat akun dalam hitungan detik dan dapatkan akses langsung ke module dasar.',
    },
    {
      icon: 'mdi-microphone-outline',
      title: 'Mulai Latihan',
      description:
        'Pilih topik dan mulai percakapan suara dengan AI tutor kami yang sabar.',
    },
    {
      icon: 'mdi-chart-line',
      title: 'Lihat Progress',
      description:
        'Dapatkan feedback instan pada pronunciation dan grammar Anda.',
    },
  ]

  const testimonials = [
    {
      text: 'Sangat membantu! Saya dulu takut bicara bahasa Inggris, tapi latihan rutin membuat saya jauh lebih percaya diri saat meeting.',
      name: 'Budi Santoso',
      role: 'Software Engineer',
      initials: 'BS',
    },
    {
      text: 'AI tutornya sangat sabar dan feedback-nya detail. Pronunciation saya membaik drastis dalam 2 minggu!',
      name: 'Sari Dewi',
      role: 'Marketing Manager',
      initials: 'SD',
    },
  ]

  const faqs = [
    {
      question: 'Apakah benar-benar gratis?',
      answer:
        'Ya, Anda bisa memulai dengan paket Free kami yang mencakup akses ke module dasar dan latihan harian terbatas.',
    },
    {
      question: 'Bagaimana AI menilai speaking saya?',
      answer:
        'Kami menggunakan teknologi speech recognition canggih untuk menganalisis pronunciation, intonasi, dan kefasihan Anda secara real-time.',
    },
    {
      question: 'Apakah cocok untuk pemula?',
      answer:
        'Tentu saja! Materi kami disusun mulai dari level pemula hingga mahir. AI akan menyesuaikan dengan kemampuan Anda.',
    },
    {
      question: 'Bisa diakses dari mobile?',
      answer:
        'Ya! Platform kami fully responsive dan bisa diakses dari browser manapun di smartphone, tablet, atau desktop.',
    },
  ]
</script>

<style scoped>
/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.1s;
  opacity: 0;
}

.delay-2 {
  animation-delay: 0.2s;
  opacity: 0;
}

.delay-3 {
  animation-delay: 0.3s;
  opacity: 0;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-cta {
  transition: all 0.3s ease;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4) !important;
}

.hero-image-wrapper {
  position: relative;
}

.hero-image {
  transition: all 0.4s ease;
  box-shadow: 0 20px 60px rgba(99, 102, 241, 0.3);
}

.hero-image:hover {
  transform: scale(1.02);
}

/* Step Cards */
.step-card {
  transition: all 0.3s ease;
  border-radius: 16px !important;
}

.card-hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12) !important;
}

.step-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: white;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}

.step-icon {
  transition: transform 0.3s ease;
}

.card-hover .step-icon {
  transform: scale(1.1);
}

/* Demo Card */
.demo-card {
  transition: all 0.4s ease;
}

.demo-overlay {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.3),
    rgba(16, 185, 129, 0.3)
  );
  backdrop-filter: blur(2px);
  transition: all 0.3s ease;
}

.play-btn {
  transition: all 0.3s ease;
}

.play-btn-hover {
  transform: scale(1.2);
}

/* Testimonial Section */
.testimonial-section {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
}

.testimonial-card {
  transition: all 0.3s ease;
}

.quote-icon {
  opacity: 0.3;
  position: absolute;
  top: 16px;
  right: 16px;
}

/* FAQ */
.faq-panels .v-expansion-panel {
  background: white;
  transition: all 0.3s ease;
}

.faq-panels .v-expansion-panel:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* CTA Buttons */
.pricing-btn,
.final-cta-btn {
  transition: all 0.3s ease;
}

.pricing-btn:hover,
.final-cta-btn:hover {
  transform: translateY(-2px);
}

/* Final CTA */
.final-cta {
  background: linear-gradient(180deg, #f9fafb, #f3f4f6);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .hero-section {
    min-height: auto;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }
}
</style>
