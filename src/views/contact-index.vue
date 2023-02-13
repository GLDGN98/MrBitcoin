<template>
    <div class="main-container">
        <UserMsg />
        <div class="create-n-filter">
            <ContactFilter @filter="onSetFilterBy" />
            <RouterLink to="/contact/edit"><button>Add a Contact</button></RouterLink>
        </div>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </div>
</template>

<script>
import ContactList from '../cmps/contact-list.vue'
import {eventBus} from '../services/eventBus.service'
import ContactFilter from '../cmps/contact-filter.vue';
import UserMsg from '../cmps/user-msg.vue'
import {contactService} from '../services/contact-service'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {},
        }
    },
    async created() {
        this.$store.dispatch({type: 'loadProducts'})
        // this.contacts = await contactService.getContacts()
    },
    methods: {
        async removeContact(contactId) {
            const msg = {
                txt: `Contact ${contactId} deleted.`,
                type: 'success',
                timeout: 2500,
            }
            await contactService.deleteContact(contactId)
            this.contacts = this.contacts.filter(contact => contact._id !== contactId)
            eventBus.emit('user-msg', msg)
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
            return this.contacts = this.$store.state.contactStore.contacts
        }
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg
    }

}
</script>

<style>

</style>