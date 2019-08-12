<template>
    <section>
        <Loader v-if="this.showLoader" />
        <Header />
        <CheckBookingL style="min-height: calc(100vh - 80px - 4rem);"/>
        <CheckBookingM style="min-height: calc(100vh - 80px - 4rem);"/>
        <CheckBookingS style="min-height: calc(100vh - 80px - 2rem);"/>
        <Footer />
    </section>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '../Loader'
import Header from '../Header/Header.vue'
import CheckBookingL from './CheckBookingL.vue'
import CheckBookingM from './CheckBookingM.vue'
import CheckBookingS from './CheckBookingS.vue'
import Footer from '../Footer/Footer'

var _this

export default {
    mounted() {
        _this = this

        if(!this.auth) {
            alert('Please login for check your booking.')
            this.$router.push('/login')
        }
        else{
            this.$store.commit('SHOW_MENU')
            _this.parseJwt(this.auth)
        }
    },
    data() {
        return {
            userId: ""
        }
    },
    methods: {
        async parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            this.$store.commit('FETCH_BOOKING', {id: JSON.parse(jsonPayload).userId})
        }
    },
    components: {
        Loader,
        Header,
        CheckBookingL,
        CheckBookingM,
        CheckBookingS,
        Footer
    },
    computed: {
        ...mapState(['showLoader']),
        ...mapState(['auth'])

    }

}
</script>