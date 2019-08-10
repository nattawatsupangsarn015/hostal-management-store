<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <BookingL />
        <BookingM />
        <BookingS />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../Loader'
import Header from '../Header/Header.vue'
import BookingL from './BookingL.vue'
import BookingM from './BookingM.vue'
import BookingS from './BookingS.vue'

export default {
    mounted() {
        if(!this.auth) {
            alert('Please login for check your booking.')
            this.$router.push('/login')
        }
    },
    components: {
        Loader,
        Header,
        BookingL,
        BookingM,
        BookingS
    },
    computed: {
        ...mapState(['showLoader']),
        ...mapState(['auth'])

    }

}
</script>