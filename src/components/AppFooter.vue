<template>
  <v-footer class="py-10 md:py-16 bg-[linear-gradient(180deg,#f9fafb,#f3f4f6)] border-t border-black/6">
    <v-container>
      <!-- Main Footer Content -->
      <v-row class="mb-8">
        <!-- Brand Column - Full width on mobile -->
        <v-col class="mb-8 md:mb-0" cols="12" md="4" sm="12">
          <div class="d-flex align-center mb-4">
            <v-img
              alt="Logo"
              class="mr-3 shrink-0"
              height="44"
              src="@/assets/logo.svg"
              width="44"
            />
            <div>
              <div class="text-h6 font-weight-bold text-primary">
                Mastery Platform
              </div>
              <div class="text-caption text-medium-emphasis">
                AI Speaking Partner
              </div>
            </div>
          </div>
          <p
            class="text-body-2 text-medium-emphasis mb-5 pr-md-8"
            style="max-width: 320px"
          >
            Platform latihan speaking AI #1 di Indonesia. Tingkatkan kemampuan berbicara bahasa Inggris dengan teknologi AI terdepan.
          </p>
          <!-- Social Links -->
          <div class="d-flex gap-2 flex-wrap">
            <v-btn
              v-for="social in socials"
              :key="social.name"
              :aria-label="social.name"
              class="transition-all duration-200 hover:bg-primary! hover:text-white! [&:hover_.v-icon]:text-white!"
              color="grey-lighten-3"
              :href="social.href"
              icon
              size="small"
              target="_blank"
              variant="flat"
            >
              <v-icon :icon="social.icon" size="18" />
            </v-btn>
          </div>
        </v-col>

        <!-- Links Grid - 2x2 on mobile, 4 columns on desktop -->
        <v-col cols="12" md="8">
          <v-row>
            <!-- Produk -->
            <v-col cols="6" sm="3">
              <div class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-2">
                Produk
              </div>
              <div class="d-flex flex-column gap-2">
                <router-link
                  v-for="link in productLinks"
                  :key="link.to"
                  class="text-medium-emphasis/70 no-underline text-sm py-1 transition-all duration-200 hover:text-primary hover:translate-x-1 d-inline-block"
                  :to="link.to"
                >
                  {{ link.label }}
                </router-link>
              </div>
            </v-col>

            <!-- Bantuan -->
            <v-col cols="6" sm="3">
              <div class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-2">
                Bantuan
              </div>
              <div class="d-flex flex-column gap-2">
                <a
                  v-for="link in helpLinks"
                  :key="link.label"
                  class="text-medium-emphasis/70 no-underline text-sm py-1 transition-all duration-200 hover:text-primary hover:translate-x-1 d-inline-block"
                  :href="link.href"
                >
                  {{ link.label }}
                </a>
              </div>
            </v-col>

            <!-- Legal -->
            <v-col cols="6" sm="3">
              <div class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-2">
                Legal
              </div>
              <div class="d-flex flex-column gap-2">
                <a
                  v-for="link in legalLinks"
                  :key="link.label"
                  class="text-medium-emphasis/70 no-underline text-sm py-1 transition-all duration-200 hover:text-primary hover:translate-x-1 d-inline-block"
                  :href="link.href"
                >
                  {{ link.label }}
                </a>
              </div>
            </v-col>

            <!-- Kontak -->
            <v-col cols="6" sm="3">
              <div class="text-subtitle-2 font-weight-bold mb-4 text-grey-darken-2">
                Kontak
              </div>
              <div class="d-flex flex-column gap-2">
                <a
                  class="text-medium-emphasis/70 no-underline text-sm py-1 transition-all duration-200 hover:text-primary d-flex align-center"
                  href="mailto:hello@mastery.id"
                >
                  <v-icon class="mr-2 shrink-0" icon="mdi-email-outline" size="16" />
                  <span class="text-truncate">hello@mastery.id</span>
                </a>
                <a
                  class="text-medium-emphasis/70 no-underline text-sm py-1 transition-all duration-200 hover:text-primary d-flex align-center"
                  href="#"
                >
                  <v-icon class="mr-2 shrink-0" icon="mdi-whatsapp" size="16" />
                  <span>WhatsApp</span>
                </a>
                <a
                  class="text-medium-emphasis/70 no-underline text-sm py-1 transition-all duration-200 hover:text-primary d-flex align-center"
                  href="#"
                >
                  <v-icon class="mr-2 shrink-0" icon="mdi-map-marker-outline" size="16" />
                  <span>Jakarta, Indonesia</span>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Newsletter Section (Mobile-friendly) -->
      <v-row class="mb-8">
        <v-col cols="12">
          <v-card
            class="pa-5 md:pa-6 bg-linear-to-r from-primary/5 to-purple-50"
            elevation="0"
            rounded="xl"
          >
            <v-row align="center">
              <v-col class="mb-4 md:mb-0" cols="12" md="6">
                <div class="d-flex align-center mb-2">
                  <v-icon class="mr-2" color="primary" icon="mdi-email-newsletter" size="24" />
                  <span class="text-subtitle-1 font-weight-bold">Dapatkan Tips Speaking Gratis</span>
                </div>
                <p class="text-body-2 text-medium-emphasis mb-0">
                  Tips, trik, dan motivasi belajar bahasa Inggris langsung ke inbox-mu.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="d-flex flex-column sm:flex-row gap-3">
                  <v-text-field
                    bg-color="white"
                    class="grow"
                    density="comfortable"
                    hide-details
                    placeholder="Masukkan email kamu"
                    rounded="lg"
                    variant="outlined"
                  />
                  <v-btn
                    class="text-none shrink-0"
                    color="primary"
                    rounded="lg"
                    size="large"
                  >
                    <v-icon class="mr-2 d-none d-sm-inline" icon="mdi-send" size="18" />
                    Subscribe
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mb-6" />

      <!-- Bottom Bar -->
      <div class="d-flex flex-column sm:flex-row justify-space-between align-center gap-4">
        <div class="text-caption text-medium-emphasis text-center sm:text-left">
          &copy; {{ currentYear }} Mastery Platform. All rights reserved.
        </div>
        <div class="d-flex align-center gap-4 flex-wrap justify-center">
          <a
            v-for="link in bottomLinks"
            :key="link.label"
            class="text-caption text-medium-emphasis no-underline hover:text-primary transition-colors"
            :href="link.href"
          >
            {{ link.label }}
          </a>
          <span class="text-caption text-medium-emphasis d-flex align-center">
            Made with <v-icon class="mx-1" color="error" icon="mdi-heart" size="14" /> in Indonesia
          </span>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: 'Instagram', icon: 'mdi-instagram', href: '#' },
    { name: 'Twitter', icon: 'mdi-twitter', href: '#' },
    { name: 'LinkedIn', icon: 'mdi-linkedin', href: '#' },
    { name: 'YouTube', icon: 'mdi-youtube', href: '#' },
    { name: 'TikTok', icon: 'mdi-music-note', href: '#' },
  ]

  const productLinks = [
    { label: 'Home', to: '/' },
    { label: 'Harga', to: '/pricing' },
    { label: 'Tentang Kami', to: '/about' },
    { label: 'Blog', to: '#' },
  ]

  const helpLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Hubungi Kami', href: '#' },
    { label: 'Pusat Bantuan', href: '#' },
    { label: 'Tutorial', href: '#' },
  ]

  const legalLinks = [
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Kebijakan Cookie', href: '#' },
  ]

  const bottomLinks = [
    { label: 'Syarat', href: '#' },
    { label: 'Privasi', href: '#' },
    { label: 'Cookie', href: '#' },
  ]
</script>
