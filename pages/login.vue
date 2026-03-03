<script setup lang="ts">
import { PhEnvelope, PhLock } from '@phosphor-icons/vue'

const router = useRouter()
const userStore = useUserStore()

const form = ref<any>(null)
const inputLoginParams = ref({
  email: '',
  password: ''
})

const error: Ref<string> = ref('')
const loading: Ref<boolean> = ref(false)

// 處理登入邏輯
const handleLogin = async () => {
  error.value = ''
  const { valid } = await form.value.validate()

  console.log('登入參數:', inputLoginParams.value, '驗證結果:', valid)

  if (!valid)
    return

  userStore.LOGIN()
  router.push('/dashboard')
}

definePageMeta({
  layout: 'login'
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-[#eff6ff]">
    <v-form ref="form" class=" w-[400px] mt-8 mx-auto flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md" @submit.prevent="handleLogin">
      <v-text-field
        v-model="inputLoginParams.email"
        :rules="[
          (v: string) => !!v || '必填',
          (v: string) => (v && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) || '請輸入正確的 Email',
        ]"
        required
        placeholder="電子郵件"
        variant="underlined"
        color="primary"
      >
        <template #prepend-inner>
          <PhEnvelope :size="24" class="mr-1" />
        </template>
      </v-text-field>

      <v-text-field
        v-model="inputLoginParams.password"
        :rules="[
          (v: string) => !!v || '必填',
        ]"
        placeholder="密碼"
        type="password"
        variant="underlined"
        color="primary"
        required
      >
        <template #prepend-inner>
          <PhLock :size="24" class="mr-1" />
        </template>
      </v-text-field>
      <v-btn
        class="mt-[30px]"
        type="submit"
        block
        :loading
      >
        登入
      </v-btn>
      <div v-if="error" class="flex items-center gap-1 justify-center font-medium bg-warn-10 text-warn p-4 rounded-md">
        <v-icon>mdi-close</v-icon> {{ error }}
      </div>
    </v-form>
  </div>
</template>
