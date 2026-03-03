<script setup lang="ts">
const authStore = useUserStore()

const handleLogout = () => {
  authStore.LOGOUT()
}
</script>

<template>
  <div class="w-full flex justify-between px-2 py-4 bg-white shadow-md">
    <div class="text-2xl">
      帳號管理系統
      <div class="text-xl">
        管理您的所有帳號
      </div>
    </div>
    <div class="p-3 hover:bg-gray-200 cursor-pointer" @click="handleLogout">
      登出
    </div>
  </div>
</template>
