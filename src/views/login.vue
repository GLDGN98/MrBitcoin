<template>
    <div class="login">
        <form @submit.prevent="handleUser">
            <div class="logo">
                <img class="bitcoin-logo" src="../assets/img/bitcoin.png" alt="bitcoin-logo">
                <h3>MrBitcoin</h3>
            </div>
            <h1>Login</h1>
            <label>
                Username <span style="color: #bcbcbc">|</span>
                <input v-model="username" type="text">
            </label>
            <button>Login</button>
            <span>Dont have an account? you can also signup through here</span>

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
         console.log("look", user)
         this.$store.dispatch('login', user)
         this.$router.push('/home')
        }
    }

}
</script>

<style lang="scss">
.login {
    form {

        .logo {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1em;
        border: 1px solid #bcbabc;
        margin: 200px auto;
        width: 500px;
        padding: 2em;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

        label {
            border: 1px solid #bcbabc;
            padding: 0.3em;
            border-radius: 3px;

            input {
                border: none;
                outline: none;
                height: 20px;
                padding-left: 0.3em;
            }
        }

        img {
            width: 50px
        }

        h1 {
            color: #1C1F30;

        }

        button {
            width: 250px;
            height: 30px;
            border: none;
            background: #004B8D;
            color: white;
            border-radius: 3px;
            font-family: 'Quicksand';
            font-size: 16px;
            cursor: pointer;


        }
    }
}
</style>