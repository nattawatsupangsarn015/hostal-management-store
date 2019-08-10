<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <RegisterL />
        <RegisterM />
        <RegisterS />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../Header/Header.vue'
import RegisterL from './RegisterL.vue'
import RegisterM from './RegisterM.vue'
import RegisterS from './RegisterS.vue'

export default {
    components: {
        Header,
        RegisterL,
        RegisterM,
        RegisterS
    },
    computed: {
        ...mapState(['showLoader'])
    }

}
</script>