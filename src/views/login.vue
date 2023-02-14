<template>
    <div class="login">
        <form @submit.prevent="handleUser">
            <h1>Login</h1>
            <input v-model="username" type="text">
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import { userService } from '../services/user-service'
export default {
    data() {
        return {
            user :  null,
            username: ''
        }
    },
    async created() {
const user = userService.getLoggedinUser()
if (user) this.$router.push('/home')
    },
    methods: {
       async handleUser() {
         const user = await userService.login(this.username)
         this.$store.dispatch('login', user)
         this.$router.push('/home')
        }
    }

}
</script>

<style>

</style>