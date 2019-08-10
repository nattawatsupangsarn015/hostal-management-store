<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <Home />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from './Loader.vue'
import Header from './Header/Header.vue'
import Home from './Home/Home.vue'
import {store} from '../store'

export default {
    components: {
        Loader,
        Header,
        Home
    },
    computed: {
        ...mapState(['showLoader'])
    }
}
</script>