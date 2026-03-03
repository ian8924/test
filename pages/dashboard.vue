<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue'
import { getAccountsAPI } from '~/api/account.api'

const inputSearch = ref('')
const isOpenCreateAccount = ref(false)
const handleAdd = () => {
  isOpenCreateAccount.value = true
}

onMounted(async () => {
  const { status, data } = await getAccountsAPI()
  if (status === 200) {
    console.log('成功获取账户信息', data)
  } else {
    console.error('获取账户信息失败')
  }
})

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <!-- 主要内容 -->
  <v-main>
    <div class="p-4 flex items-center gap-4">
      <v-text-field
        v-model="inputSearch"
        placeholder="搜索账户"
      >
        <template #prepend-inner>
          <PhMagnifyingGlass :size="24" class="mr-1" />
        </template>
      </v-text-field>
      <v-btn @click="handleAdd">
        新增帳號
      </v-btn>
    </div>
  </v-main>
  <DialogCreateAccount v-model="isOpenCreateAccount" />
</template>
