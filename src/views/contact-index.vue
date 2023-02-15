<template>
    <div class="main-container">
        <div class="create-n-filter">
            <ContactFilter @filter="onSetFilterBy" />
            <RouterLink to="/contact/edit"><button class="add-contact-btn">Add a Contact</button></RouterLink>
        </div>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </div>
</template>

<script>
import ContactList from '../cmps/contact-list.vue'
import {eventBus, showSuccessMsg} from '../services/eventBus.service'
import ContactFilter from '../cmps/contact-filter.vue';

export default {
    data() {
        return {
            filterBy: {},
        }
    },
    async created() {
        this.$store.dispatch({type: 'loadContacts'})
        // this.contacts = await contactService.getContacts()
    },
    methods: {
        async removeContact(contactId) {
            this.$store.dispatch({type: 'removeContact', contactId})
            showSuccessMsg(`Contact ${contactId} deleted.`)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts() {
            return this.$store.getters.contacts
        }
    },
    components: {
        ContactList,
        ContactFilter,
    }

}
</script>

<style>

</style>