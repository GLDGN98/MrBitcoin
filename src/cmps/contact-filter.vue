<template>
    <div class="contact-filter">
        <span class="material-symbols-outlined">
            search
        </span>
        <input @input="onFilter" v-model="filterBy.txt" type="text">
    </div>
</template>

<script>

export default {
    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },
    methods: {
        onFilter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">

</style>
