<template>
    <section class="hidden-md-and-up hidden-xs-only">
        <div @click="closeMenu()" class="close-button">
            x
        </div>
        <div class="menu-frame">
            <div class="menu-content">
                My Booking
            </div>
            <div class="menu-content">
                Register
            </div>
            <router-link v-if="!(this.auth)" tag="div" to="/login" class="menu-content">
                    Login
            </router-link>
            <div @click="logoutFunc()" v-else class="menu-content-logout">
                Logout
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            searchItem: ""
        }
    },
    methods: {
        closeMenu() {
            this.$store.commit('SHOW_MENU')
        },
        logoutFunc() {
            this.$store.commit("LOGOUT_USER")
            this.$cookie.delete('auth')
            this.$store.commit('setAuth', null)
        },
        searchFunc() {
            console.log('You search : ' + this.searchItem)
        }
    },
    computed: {
        ...mapState(['auth'])
    }
}
</script>

<style scoped>

.close-button {
    position: absolute;
    right: 15px;
    top: 6px;
    z-index: 2;
    font-size: 20px;
    color: #E67E22;
    font-weight: 700;
    animation: fade 0.2s ease-in;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.menu-frame {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background: #ffff;
    z-index: 1;
    animation: fade 0.2s ease-in;
}

.menu-content {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #E67E22;
    border-bottom: 1px solid;
    width: 100%;
    height: 5rem;
}

.menu-content-logout {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #E74C3C;
    border-bottom: 1px solid;
    width: 100%;
    height: 5rem;
}

</style>