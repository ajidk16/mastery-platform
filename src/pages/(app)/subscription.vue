<route lang="yaml">
meta:
  layout: app
</route>

<template>
  <div class="subscription-page">
    <h1 class="text-h4 font-weight-bold mb-6">Subscription & Billing</h1>

    <v-row>
      <!-- Current Plan -->
      <v-col cols="12" md="5">
        <v-card
          class="current-plan-card pa-6"
          elevation="4"
          rounded="xl"
        >
          <div class="d-flex align-center justify-space-between mb-4">
            <v-chip color="white" size="small" variant="flat">
              <v-icon icon="mdi-crown" size="small" start />
              CURRENT PLAN
            </v-chip>
            <v-chip color="success" size="small" variant="flat">Active</v-chip>
          </div>

          <h2 class="text-h3 font-weight-black text-white mb-2">Pro</h2>
          <p class="text-body-1 text-white-darken-1 mb-6">
            Unlimited speaking practice with advanced features.
          </p>

          <div class="d-flex align-baseline text-white mb-6">
            <span class="text-h4 font-weight-bold">Rp 79.000</span>
            <span class="text-body-2 ml-1">/bulan</span>
          </div>

          <v-divider class="mb-4 opacity-30" />

          <div class="text-body-2 text-white-darken-1">
            <div class="mb-2">
              <v-icon icon="mdi-calendar" size="small" />
              Renews on: <strong>Dec 12, 2025</strong>
            </div>
            <div>
              <v-icon icon="mdi-credit-card" size="small" />
              Payment: <strong>•••• 4242</strong>
            </div>
          </div>

          <v-btn
            block
            class="mt-6"
            color="white"
            rounded="lg"
            variant="outlined"
          >
            Manage Payment Method
          </v-btn>
        </v-card>
      </v-col>

      <!-- Plan Options -->
      <v-col cols="12" md="7">
        <v-card class="pa-6" elevation="1" rounded="xl">
          <h3 class="text-h6 font-weight-bold mb-4">Change Plan</h3>

          <v-row>
            <v-col
              v-for="plan in plans"
              :key="plan.name"
              cols="12"
              sm="6"
            >
              <v-card
                class="plan-option pa-5"
                :class="{
                  'selected-plan': currentPlan === plan.name,
                  'recommended': plan.recommended
                }"
                :elevation="currentPlan === plan.name ? 4 : 0"
                rounded="xl"
                :variant="currentPlan === plan.name ? 'elevated' : 'outlined'"
                @click="currentPlan = plan.name"
              >
                <div v-if="plan.recommended" class="recommended-badge">
                  Popular
                </div>
                <div class="d-flex align-center mb-3">
                  <v-icon :color="plan.color" :icon="plan.icon" size="24" />
                  <span class="text-subtitle-1 font-weight-bold ml-2">{{ plan.name }}</span>
                </div>
                <div class="text-h5 font-weight-bold mb-2">{{ plan.price }}</div>
                <p class="text-caption text-medium-emphasis mb-3">{{ plan.description }}</p>
                <ul class="text-caption pl-4">
                  <li v-for="feature in plan.features" :key="feature" class="mb-1">
                    {{ feature }}
                  </li>
                </ul>
              </v-card>
            </v-col>
          </v-row>

          <v-btn
            block
            class="mt-6"
            color="primary"
            :disabled="currentPlan === 'Pro'"
            rounded="lg"
            size="large"
          >
            {{ currentPlan === 'Pro' ? 'Current Plan' : 'Switch to ' + currentPlan }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Payment History -->
    <v-card class="mt-6 pa-6" elevation="1" rounded="xl">
      <h3 class="text-h6 font-weight-bold mb-4">Payment History</h3>
      <v-table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th class="text-right">Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="payment in paymentHistory" :key="payment.id">
            <td>{{ payment.date }}</td>
            <td>{{ payment.description }}</td>
            <td>{{ payment.amount }}</td>
            <td>
              <v-chip :color="payment.status === 'Paid' ? 'success' : 'warning'" size="small" variant="tonal">
                {{ payment.status }}
              </v-chip>
            </td>
            <td class="text-right">
              <v-btn icon="mdi-download" size="small" variant="text" />
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const currentPlan = ref('Pro')

  const plans = [
    {
      name: 'Free',
      price: 'Rp 0',
      description: 'Basic access for casual learners.',
      icon: 'mdi-account-outline',
      color: 'grey',
      recommended: false,
      features: ['10 min/day', 'Basic topics', 'Limited feedback'],
    },
    {
      name: 'Pro',
      price: 'Rp 79.000/mo',
      description: 'Unlimited practice for serious learners.',
      icon: 'mdi-crown',
      color: 'primary',
      recommended: true,
      features: ['Unlimited practice', 'All topics', 'Advanced feedback', 'Priority support'],
    },
  ]

  const paymentHistory = [
    { id: 1, date: 'Dec 12, 2024', description: 'Pro Plan - Monthly', amount: 'Rp 79.000', status: 'Paid' },
    { id: 2, date: 'Nov 12, 2024', description: 'Pro Plan - Monthly', amount: 'Rp 79.000', status: 'Paid' },
    { id: 3, date: 'Oct 12, 2024', description: 'Pro Plan - Monthly', amount: 'Rp 79.000', status: 'Paid' },
  ]
</script>

<style scoped>
.subscription-page {
  max-width: 1100px;
  margin: 0 auto;
}

.current-plan-card {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
}

.plan-option {
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: visible;
}

.plan-option:hover {
  transform: translateY(-2px);
}

.selected-plan {
  border: 2px solid rgb(var(--v-theme-primary));
}

.recommended-badge {
  position: absolute;
  top: -10px;
  right: 12px;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
