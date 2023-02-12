<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
        <h1 v-if="contact._id">Edit</h1>
        <h1 v-if="!contact._id">New</h1>
        <label for="name">
            Name
            <input id="name" type="text" v-model="contact.name">
        </label>
        <label for="email">
            Email
            <input id="email" type="email" v-model.number="contact.email">
        </label>
        <label for="number">
            Number
            <input id="number" type="text" v-model.number="contact.number">
        </label>
        <button>Save</button>
    </form>
</template>

<script>
import { contactService } from '../services/contact-service'
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created(){
        const contactId = this.$route.params._id
        if(contactId) {
            this.contact = await contactService.getContactById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    methods: {
        async save() {
            await contactService.saveContact(this.contact)
            this.$router.push('/contact')
        }
    }
}
</script>

<style lang="scss">

</style>
