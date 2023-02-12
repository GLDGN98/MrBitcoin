<template>
    <article class="contact-preview">
        <h3>{{ contact.name }}</h3>
        <img class="robot" :src="'https://robohash.org/' + contact.name + '?set=set5'" alt="">
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>

    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">

</style>