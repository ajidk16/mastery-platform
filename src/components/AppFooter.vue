<template>
  <v-footer class="footer-section py-8 py-md-12">
    <v-container>
      <v-row>
        <!-- Brand Column -->
        <v-col class="mb-6 mb-md-0" cols="12" md="4">
          <div class="d-flex gap-4">
            <v-col cols="auto">
              <v-img alt="Logo" height="40" src="@/assets/logo.svg" width="40" />
              <div class="text-h6 font-weight-bold text-primary">
                Mastery Platform
              </div>
            </v-col>
          </div>
          <p
            class="text-body-2 text-medium-emphasis mb-4"
            style="max-width: 280px"
          >
            Platform latihan speaking AI #1 di Indonesia. Tingkatkan kemampuan
            berbicara Anda dengan teknologi AI terdepan.
          </p>
          <div class="d-flex gap-2">
            <v-btn
              v-for="social in socials"
              :key="social.name"
              class="social-btn"
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

        <!-- Links Columns -->
        <v-col cols="6" md="2">
          <div class="text-subtitle-2 font-weight-bold mb-4">Produk</div>
          <div class="d-flex flex-column">
            <router-link class="footer-link" to="/">Home</router-link>
            <router-link class="footer-link" to="/pricing">Harga</router-link>
            <router-link class="footer-link" to="/about">
              Tentang Kami
            </router-link>
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <div class="text-subtitle-2 font-weight-bold mb-4">Bantuan</div>
          <div class="d-flex flex-column">
            <a class="footer-link" href="#">FAQ</a>
            <a class="footer-link" href="#">Hubungi Kami</a>
            <a class="footer-link" href="#">Pusat Bantuan</a>
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <div class="text-subtitle-2 font-weight-bold mb-4">Legal</div>
          <div class="d-flex flex-column">
            <a class="footer-link" href="#">Syarat & Ketentuan</a>
            <a class="footer-link" href="#">Kebijakan Privasi</a>
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <div class="text-subtitle-2 font-weight-bold mb-4">Kontak</div>
          <div class="d-flex flex-column">
            <a class="footer-link" href="mailto:hello@mastery.id">
              <v-icon class="mr-1" icon="mdi-email-outline" size="14" />
              hello@mastery.id
            </a>
            <a class="footer-link" href="#">
              <v-icon class="mr-1" icon="mdi-map-marker-outline" size="14" />
              Jakarta, Indonesia
            </a>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <!-- Bottom Bar -->
      <div
        class="d-flex flex-column flex-sm-row justify-space-between align-center"
      >
        <div class="text-caption text-medium-emphasis mb-2 mb-sm-0">
          &copy; {{ currentYear }} Mastery Platform. All rights reserved.
        </div>
        <div class="text-caption text-medium-emphasis">
          Made with <v-icon color="error" icon="mdi-heart" size="14" /> in
          Indonesia
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const currentYear = new Date().getFullYear()

  const socials = [
    {
      name: 'Instagram',
      icon: 'mdi-instagram',
      href: '#',
    },
    {
      name: 'Twitter',
      icon: 'mdi-twitter',
      href: '#',
    },
    {
      name: 'LinkedIn',
      icon: 'mdi-linkedin',
      href: '#',
    },
    {
      name: 'YouTube',
      icon: 'mdi-youtube',
      href: '#',
    },
  ]
</script>

<style scoped>
.footer-section {
  background: linear-gradient(180deg, #f9fafb, #f3f4f6);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.gap-2 {
  gap: 8px;
}

.footer-link {
  color: rgba(var(--v-theme-on-background), 0.6);
  text-decoration: none;
  font-size: 14px;
  padding: 4px 0;
  transition: all 0.2s ease;
}

.footer-link:hover {
  color: rgb(var(--v-theme-primary));
  transform: translateX(4px);
}

.social-btn {
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
}

.social-btn:hover :deep(.v-icon) {
  color: white !important;
}
</style>
