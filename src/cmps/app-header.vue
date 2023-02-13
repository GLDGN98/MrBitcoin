<template>
    <header class="app-header full">
        <div class="header-content">
            <div class="logo">
                <img class="bitcoin-logo" src="../assets/img/bitcoin.png" alt="bitcoin-logo">
                <span>MrBitcoin</span>
            </div>
            <div class="logged-user-header" v-if="user">
                <span class="material-symbols-outlined">
                    person
                </span>
                <span>{{ user.name }}</span>
            </div>
            <span class="bitcoin-rate-header">
                <span v-if="bitcoinRate">1$ = <span class="material-symbols-outlined">
                        currency_bitcoin
                    </span>{{ bitcoinRate }}</span>
            </span>
            <nav class="nav-header">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/charts">Charts</RouterLink>
                <RouterLink to="/about">About</RouterLink>
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
    this.user = userService.getUser()
    this.bitcoinRate = await bitcoinService.getRate("USD", 1)
  },
}
</script>
