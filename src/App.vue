<script>
import AppHeader from '@/cmps/app-header.vue'
import AppFooter from '@/cmps/app-footer.vue'
import UserMsg from './cmps/user-msg.vue'


export default {
    components: {
        AppHeader,
        AppFooter,
        UserMsg,
    },
}
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
  <UserMsg />
</template>



<style scoped>
main {
  min-height: 90vh;

}
</style>

