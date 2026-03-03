import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { User } from '~/types/interface/user.interface'
// APIS

export const useUserStore = defineStore('user', () => {
  const router = useRouter()
  // TOKEN
  const TOKEN = useCookie('token')
  // USER 代表用户信息
  const USER = ref<User | null>(null)

  const IS_LOGIN = computed(() => !!TOKEN.value)

  const LOGIN = async () => {
    TOKEN.value = 'TOKEN'
    USER.value = {
      name: 'John Doe',
      email: ''
    }
  }

  const LOGOUT = () => {
    TOKEN.value = ''
    USER.value = null
    router.push('/login')
  }

  return { TOKEN, USER, IS_LOGIN, LOGIN, LOGOUT }
})
