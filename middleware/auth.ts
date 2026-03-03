export default defineNuxtRouteMiddleware(async (to) => {
  const UserStore = useUserStore()
  const { IS_LOGIN } = storeToRefs(UserStore)

  if (!IS_LOGIN.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
