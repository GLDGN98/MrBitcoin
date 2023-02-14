<template>
    <header class="app-header full">
        <div class="header-content">
            <div class="logo">
                <img class="bitcoin-logo" src="../assets/img/bitcoin.png" alt="bitcoin-logo">
                <span>MrBitcoin</span>
            </div>
            <div class="logged-user-header">
                <template v-if="user">
                    <div class="user-appear">
                        <span class="material-symbols-outlined">person</span>
                        <span>{{ user.username }}</span>
                    </div>
                    <div @click="handleLogout" class="logout-appear">
                        <button class="logout-btn">Logout</button>
                        <span class="material-symbols-outlined">
                            logout
                        </span>
                    </div>
                </template>
                <template class="login" v-else>
                    <router-link to="/signup">Login
                        <span class="material-symbols-outlined">
                            login
                        </span>
                    </router-link>
                </template>
            </div>
            <span class="bitcoin-rate-header">
                <span v-if="bitcoinRate">1$ = <span class="material-symbols-outlined">
                        currency_bitcoin
                    </span>{{ bitcoinRate }}</span>
            </span>
            <nav class="nav-header">
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/charts">Charts</RouterLink>
                <!-- <RouterLink to="/about">About</RouterLink> -->
            </nav>
        </div>
    </header>
</template>

<script>
import {userService} from '../services/user-service'
import {bitcoinService} from '../services/bitcoin-service'

export default {
    data() {
    return {
      user: null,
      bitcoinRate: 0
    }
  },
  async created() {
    // this.user = await userService.getLoggedinUser()
    this.bitcoinRate = await bitcoinService.getRate("USD", 1)
    this.$store.dispatch("getUser");

  },
  methods: {
    handleLogout() {
        this.$store.dispatch("logout")
    }
  },
  computed: {
    user() {
             return this.user = this.$store.state.userStore.user
        }
        
  }
}
</script>
