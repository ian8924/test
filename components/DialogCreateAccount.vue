<script setup lang="ts">
import type { Account } from '~/types/interface/user.interface'

const emit = defineEmits(['sucess'])
const isOpen = defineModel('dialog', { type: Boolean, default: false })
const isloading = ref(false)

const roleOptions = ref([
  { label: '管理员', value: 'ADMIN' },
  { label: '普通用户', value: 'USER' }
])

const inputParams = ref<Account>({
  name: '',
  email: '',
  roleLevel: 'USER',
  status: 'OFF'
})
const form = ref('')

const handleCreate = async () => {
  // const { valid } = await form.value.()
  // if (!valid)
  //   return

  // isloading.value = true
}
</script>

<template>
  <v-dialog
    v-model="isOpen"
    min-width="420"
  >
    <v-card
      class="rounded-[20px]"
    >
      <v-form ref="form" class=" w-[400px] mt-8 mx-auto flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md" @submit.prevent="handleCreate">
        <v-text-field
          v-model="inputParams.name"
          :rules="[
            (v: string) => !!v || '必填',
          ]"
          required
          placeholder="姓名"
          variant="underlined"
          color="primary"
        >
        </v-text-field>

        <v-text-field
          v-model="inputParams.email"
          :rules="[
            (v: string) => !!v || '必填',
            (v: string) => (v && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)) || '請輸入正確的 Email',

          ]"
          placeholder="電子郵件"
          type="email"
          variant="underlined"
          color="primary"
          required
        >
        </v-text-field>
        <!--
        <v-select
          v-model="inputParams.roleLevel"
          :items="roleOptions"
          placeholder="选择角色"
          variant="underlined"
          color="primary"
        >
        </v-select> -->
        <v-btn
          class="mt-[30px]"
          type="submit"
          block
        >
          新增
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>
</template>
