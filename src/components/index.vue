<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <Home />
        <Footer />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from './Loader.vue'
import Header from './Header/Header.vue'
import Home from './Home/Home.vue'
import Footer from './Footer/Footer.vue'
import {store} from '../store'

export default {
    components: {
        Loader,
        Header,
        Home,
        Footer
    },
    computed: {
        ...mapState(['showLoader'])
    }
}
</script>