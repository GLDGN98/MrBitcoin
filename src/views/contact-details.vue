<template>
    <div v-if="contact" class="contact-details">
        <h2>{{contact.name}}</h2>
        <img class="robot" :src="'https://robohash.org/' + contact.name + '?set=set5'" alt="">

        <h3>{{contact.email}}</h3>
        <div>
            <TransferFunds @transfer="handleTransfer" />
        </div>
        <div>
            <TransferList :contact="contact" />
        </div>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </div>
</template>

<script>
import { contactService } from '../services/contact-service'
import TransferFunds from '../cmps/transfer-funds.vue'
import { userService } from '../services/user-service'
import TransferList from '../cmps/transfer-list.vue'
import {eventBus, showErrorMsg, showSuccessMsg} from '../services/eventBus.service'

export default {
    data() {
        return {
            contact: null,
        }
    },
    async created(){
        const contactId = this.$route.params._id
        this.contact = await contactService.getContactById(contactId)
    },
    methods: {
async handleTransfer(amount) {
    try {
        if (this.amount < 0) throw new Error('Amount is not valid')
  await userService.updateBalance(amount, this.contact)
            showSuccessMsg('Transfer successfully sent.')
    } catch (err) {
        console.log(err);
        showErrorMsg('Transfer failed, Something went wrong!')
    }

}
    },
    components: {
        TransferFunds,
        TransferList
    }
}
</script>

<style lang="scss">
img {
    width: 200px;
}
</style>
