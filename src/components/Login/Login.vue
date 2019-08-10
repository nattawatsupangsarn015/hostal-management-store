<template>
    <section>
        <Loader v-if="this.showLoader" />
        <LoginL />
        <LoginM />
        <LoginS />
    </section>
</template>

<script>
import { mapState } from 'vuex';
import Loader from '../Loader.vue';
import LoginL from './LoginL.vue';
import LoginM from './LoginM.vue';
import LoginS from './LoginS.vue';

export default {
    mounted() {
        const auth =  this.$cookie.get('auth')
        this.$store.dispatch('setAuth', auth)
    },
    components: {
        Loader,
        LoginL,
        LoginM,
        LoginS
    },
    computed: {
        ...mapState(['showLoader'])
    },
    middleware: 'notAuthenticated'
}
</script>