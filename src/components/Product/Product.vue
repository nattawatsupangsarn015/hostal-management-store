<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <ProductL />
        <ProductM />
        <ProductS />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Header from '../Header/Header.vue'
import ProductL from './ProductL.vue'
import ProductM from './ProductM.vue'
import ProductS from './ProductS.vue'

export default {
    mounted() {
        if(!this.$route.params.id){
            this.$router.push('/')
        }
    },
    components: {
        Header,
        ProductL,
        ProductM,
        ProductS
    },
    computed: {
        ...mapState(['showLoader'])
    }

}
</script>