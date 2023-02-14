<template>
  <ul>
    <li v-for="trsc in transactions" v-bind:key="trsc.at">
      <span><b>To </b> {{ trsc.to }}</span>
      <span><b>At </b> {{formatedDate(trsc) }}</span>
      <span><b>Amount </b> ${{ trsc.amount }}</span>
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
      transactions: [],
    }
  },
  computed : {
    formatedDate() {
      return (trsc) => utilService.formatTime(trsc.at);
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
h4 {
  text-align: center;
  padding: 0.5em;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;


  li {
    display: flex;
    gap: 1em;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3em;
      min-width: 150px;
    }
  }
}
</style>
