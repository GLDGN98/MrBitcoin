<template>
  <h1 class="main-summary">Bitcoin is an innovative payment network and a new kind of money.</h1>
  <div class="home-view">
    <!-- <div class="user-info" v-if="user">
      <h2>{{ user.name }}</h2>
      <img class="robot" :src="'https://robohash.org/' + user.name + '?set=set5'" alt="">
      <h3>${{ user.balance }}</h3>
      <span class="bitcoin-rate-header">
        <span v-if="bitcoinRate">1$ = <span class="material-symbols-outlined">
            currency_bitcoin
          </span>{{ bitcoinRate }}</span>
      </span>
    </div> -->
    <h3 class="get-started">Get started with Bitcoin
    </h3>
    <div class="home-main-content">
      <div class="main-content-summary">
        <p>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and
          the
          issuing of bitcoins is carried out collectively by the network. <b>Bitcoin is open-source; its design is
            public,
            nobody owns or controls Bitcoin and</b> <span style="color: #3490E6"> everyone can take part</span>.
          Through many of its unique
          properties,
          Bitcoin
          allows
          exciting uses that could not be covered by any previous payment system.</p>
        <ul>

          <li>
            <span class="material-symbols-outlined">
              bolt
            </span>
            Fast peer-to-peer transactions
          </li>
          <li>
            <span class="material-symbols-outlined">
              language
            </span>
            Worldwide payments
          </li>
          <li>
            <span class="material-symbols-outlined">
              credit_score
            </span>
            Low processing fees
          </li>
        </ul>
      </div>
      <img src="https://bitcoin.org/img/home/bitcoin-img.svg?1674137323" alt="">
    </div>
  </div>
</template>

<script>
import { userService } from '../services/user-service';
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
  }


}
</script>

<style>

</style>
