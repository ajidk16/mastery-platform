<route lang="yaml">
meta:
  layout: blank
</route>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="5">
        <!-- Auth Card -->
        <v-card class="auth-card pa-6 pa-md-8" elevation="8" rounded="xl">
          <!-- Logo -->
          <div class="text-center mb-6">
            <v-img
              alt="Logo"
              class="mx-auto mb-4"
              height="48"
              src="@/assets/logo.svg"
              width="48"
            />
            <h1 class="text-h5 font-weight-bold">
              {{ isLogin ? "Selamat Datang Kembali" : "Buat Akun Gratis" }}
            </h1>
            <p class="text-body-2 text-medium-emphasis mt-2">
              {{
                isLogin
                  ? "Masuk untuk melanjutkan latihan"
                  : "Mulai perjalanan speaking Anda hari ini"
              }}
            </p>
          </div>

          <!-- Google Sign In -->
          <v-btn
            block
            class="mb-4 text-none"
            color="grey-lighten-3"
            rounded="lg"
            size="large"
            variant="flat"
          >
            <v-icon class="mr-2" size="20">
              <svg height="20" viewBox="0 0 24 24" width="20">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </v-icon>
            Lanjutkan dengan Google
          </v-btn>

          <!-- Divider -->
          <div class="d-flex align-center my-5">
            <v-divider />
            <span class="mx-4 text-caption text-medium-emphasis">atau</span>
            <v-divider />
          </div>

          <!-- Form -->
          <v-form ref="formRef" @submit.prevent="handleSubmit">
            <!-- Name (only for signup) -->
            <v-text-field
              v-if="!isLogin"
              v-model="form.name"
              class="mb-3"
              density="comfortable"
              label="Nama Lengkap"
              prepend-inner-icon="mdi-account-outline"
              rounded="lg"
              :rules="[rules.required]"
              variant="outlined"
            />

            <!-- Email -->
            <v-text-field
              v-model="form.email"
              class="mb-3"
              density="comfortable"
              label="Email"
              prepend-inner-icon="mdi-email-outline"
              rounded="lg"
              :rules="[rules.required, rules.email]"
              type="email"
              variant="outlined"
            />

            <!-- Password -->
            <v-text-field
              v-model="form.password"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              class="mb-1"
              density="comfortable"
              label="Password"
              prepend-inner-icon="mdi-lock-outline"
              rounded="lg"
              :rules="[rules.required, rules.minLength]"
              :type="showPassword ? 'text' : 'password'"
              variant="outlined"
              @click:append-inner="showPassword = !showPassword"
            />

            <!-- Forgot Password (login only) -->
            <div v-if="isLogin" class="text-right mb-4">
              <a
                class="text-primary text-caption text-decoration-none"
                href="#"
              >
                Lupa password?
              </a>
            </div>

            <!-- Submit Button -->
            <v-btn
              block
              class="mt-4 text-none submit-btn"
              color="primary"
              :loading="loading"
              rounded="lg"
              size="large"
              type="submit"
            >
              {{ isLogin ? "Masuk" : "Daftar Sekarang" }}
            </v-btn>
          </v-form>

          <!-- Toggle Auth Mode -->
          <p class="text-center text-body-2 mt-6 mb-0">
            {{ isLogin ? "Belum punya akun?" : "Sudah punya akun?" }}
            <a
              class="text-primary font-weight-medium text-decoration-none cursor-pointer"
              @click="isLogin = !isLogin"
            >
              {{ isLogin ? "Daftar gratis" : "Masuk" }}
            </a>
          </p>
        </v-card>

        <!-- Terms -->
        <p class="text-center text-caption text-medium-emphasis mt-4 px-4">
          Dengan mendaftar, Anda menyetujui
          <a
            class="text-primary text-decoration-none"
            href="#"
          >Syarat & Ketentuan</a>
          dan
          <a
            class="text-primary text-decoration-none"
            href="#"
          >Kebijakan Privasi</a>
          kami.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const isLogin = ref(false)
  const showPassword = ref(false)
  const loading = ref(false)
  const formRef = ref()

  const form = reactive({
    name: '',
    email: '',
    password: '',
  })

  const rules = {
    required: (v: string) => !!v || 'Field ini wajib diisi',
    email: (v: string) => /.+@.+\..+/.test(v) || 'Email tidak valid',
    minLength: (v: string) => v.length >= 6 || 'Minimal 6 karakter',
  }

  async function handleSubmit () {
    const { valid } = await formRef.value.validate()
    if (!valid) return

    loading.value = true

    // Simulate API call
    setTimeout(() => {
      loading.value = false
      // Navigate to onboarding after signup
      if (isLogin.value) {
        router.push('/dashboard')
      } else {
        router.push('/onboarding')
      }
    }, 1500)
  }
</script>

<style scoped>
.auth-card {
  background: white;
}

.submit-btn {
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4) !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
