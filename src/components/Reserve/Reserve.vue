<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <ReserveL style="min-height: calc(100vh - 80px - 4rem);" />
        <ReserveM style="min-height: calc(100vh - 80px - 4rem);" />
        <ReserveS style="min-height: calc(100vh - 80px - 2rem);" />
        <Footer />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../Loader'
import Header from '../Header/Header.vue'
import ReserveL from './ReserveL.vue'
import ReserveM from './ReserveM.vue'
import ReserveS from './ReserveS.vue'
import Footer from '../Footer/Footer'

export default {
    mounted() {
        if(!this.$route.params.id){
            this.$router.push('/')
        }
        else if(!this.auth){
            alert('Please login for continue your booking.')
            this.$router.push('/login')
        }
        else {
            this.$store.commit('FETCH_SINGLE_PRODUCT',{id: this.$route.params.id})
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    },
    components: {
        Loader,
        Header,
        ReserveL,
        ReserveM,
        ReserveS,
        Footer
    },
    computed: {
        ...mapState(['showLoader']),
        ...mapState(['auth'])
    }

}
</script>