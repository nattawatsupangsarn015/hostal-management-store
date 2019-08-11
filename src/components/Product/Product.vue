<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <ProductL style="min-height: calc(100vh - 80px - 4rem);" />
        <ProductM style="min-height: calc(100vh - 80px - 4rem);" />
        <ProductS style="min-height: calc(100vh - 80px - 2rem);" />
        <Footer />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../Header/Header.vue'
import ProductL from './ProductL.vue'
import ProductM from './ProductM.vue'
import ProductS from './ProductS.vue'
import Footer from '../Footer/Footer'

export default {
    mounted() {
        if(!this.$route.params.id){
            this.$router.push('/')
        }
        else {
            this.$store.commit('FETCH_SINGLE_PRODUCT',{id: this.$route.params.id})
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    },
    components: {
        Header,
        ProductL,
        ProductM,
        ProductS,
        Footer
    },
    computed: {
        ...mapState(['showLoader'])
    }

}
</script>