<template>
    <ul>
        <li v-for="trsc in transactions" v-bind:key="trsc.at">
            <span>{{ trsc.to }}</span>
        </li>
    </ul>
</template>

<script>
import { userService } from '../services/user-service';

export default {
  props: {
    contact: Object,
    required: true
  },
  data() {
    return {
      transactions: []
    }
  },
  async created() {
    const user = await userService.getById(userService.getLoggedinUser()._id)
    this.transactions = user.transactions.filter(trsc => trsc.toId === this.contact._id)
    console.log(this.transactions);
  }

}
</script>

<style>

</style>
