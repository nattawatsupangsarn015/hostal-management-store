<template>
    <section>
        <HeaderL />
        <HeaderM />
        <HeaderS />
    </section>
</template>

<script>
import HeaderL from './HeaderL.vue';
import HeaderM from './HeaderM.vue';
import HeaderS from './HeaderS.vue';

export default {
    mounted() {
        const auth =  this.$cookie.get('auth')
        this.$store.dispatch('setAuth', auth)
    },
    components: {
        HeaderL,
        HeaderM,
        HeaderS
    }
}
</script>