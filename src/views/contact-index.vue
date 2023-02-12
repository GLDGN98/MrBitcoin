<template>
    <div class="main-container">
        <RouterLink to="/contact/edit"><button>Add a Contact</button></RouterLink>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
    </div>
</template>

<script>
import ContactList from '../cmps/contact-list.vue'
import {contactService} from '../services/contact-service'

export default {
    data() {
        return {
            contacts: null,
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    methods: {
        async removeContact(contactId) {
            console.log(contactId)
            // const msg = {
            //     txt: `Car ${carId} deleted.`,
            //     type: 'success',
            //     timeout: 2500,
            // }
            await contactService.deleteContact(contactId)
            this.contacts = this.contacts.filter(contact => contact._id !== contactId)
            // eventBus.emit('user-msg', msg)
        },
        // onSetFilterBy(filterBy) {
        //     this.filterBy = filterBy
        // },
    },
    components: {
        ContactList
    }

}
</script>

<style>

</style>