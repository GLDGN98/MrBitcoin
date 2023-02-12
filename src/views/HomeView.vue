<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>
    <h3>{{ user.balance }}</h3>
  </div>
  <span v-if="bitcoinRate">{{ bitcoinRate }}</span>
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
