<template>
    <form @submit.prevent="handleTransfer">
        <label>
            Transfer amount :
            <input min="0" v-model="amount" type="number">
        </label>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            amount: 0
        }
    },
    methods: {
        handleTransfer() {
            this.$emit('transfer', this.amount)
        }
    }

}
</script>

<style>

</style>