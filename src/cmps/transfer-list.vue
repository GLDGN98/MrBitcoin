<template>
    <ul>
        <li v-for="trsc in transactions" v-bind:key="trsc.at">
            <span>To : {{ trsc.to }}</span>
            <span>At : {{(trsc.at) }}</span>
            <span>Amount : {{ trsc.amount }}</span>
        </li>
    </ul>
</template>

<script>
import { userService } from '../services/user-service';
import {utilService} from '../services/util-service';

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
    if (this.contact) {
     this.transactions = user.transactions.filter(trsc => trsc.toId === this.contact._id)
    } else {
         this.transactions = user.transactions.slice(-3)
    }
  },

}
</script>

<style lang="scss">
ul {
    list-style: none;
    padding: 0;
    // display: flex;
    // flex-direction: column;
    // gap: 0.5em;

    li {
        // display: flex;
        // gap: 1em;
    }
}
</style>
