<template>
    <section>
        <Loader v-if="this.showLoader" />
        <RegisterL />
        <RegisterM />
        <RegisterS />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../Loader'
import RegisterL from './RegisterL.vue'
import RegisterM from './RegisterM.vue'
import RegisterS from './RegisterS.vue'

export default {
    mounted() {
        this.$store.commit('SHOW_MENU')
    },
    components: {
        Loader,
        RegisterL,
        RegisterM,
        RegisterS
    },
    computed: {
        ...mapState(['showLoader'])
    }

}
</script>