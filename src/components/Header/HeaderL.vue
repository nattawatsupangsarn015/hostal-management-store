<template>
    <section class="hidden-sm-and-down">
        <div class="header-frame">
            <router-link tag="div" to="/" class="icon-header">
                <div @click="refreshFunc()" class="refresh-func"/>
                <div class="icon-header-pic">
                    <i class="material-icons" style="font-size: 2rem;">hotel</i>
                </div>
                Hostel Management
            </router-link>
            <div class="menu-header">
                <div class="search-input-frame">
                    <input type="text" id="enterSearch" v-model="searchItem" placeholder="Search" class="search-input" />
                    <div @click="searchFunc()" class="button-search" id="search-button">
                        <i class="material-icons icon-search">search</i>
                    </div>
                </div>
                <router-link tag="div" to="/booking" class="menu-text">
                    My Booking
                </router-link>
                <router-link tag="div" to="/register" class="menu-text">
                    Register
                </router-link>
                <router-link v-if="!(this.auth)" tag="div" to="/login" class="menu-text">
                    Login
                </router-link>
                <div @click="logoutFunc()" v-else class="menu-text-logout">
                    Logout
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    mounted() {
        var enter = document.getElementById("enterSearch");
        enter.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("search-button").click();
            }
        });
    },
    data() {
        return {
            searchItem: ""
        }
    },
    methods: {
        searchFunc() {
            if(this.searchItem) {
                this.$store.commit('FETCH_SEARCH_PRODUCT', {id: this.searchItem})
            }
            else {
                this.$store.commit('FETCH_PRODUCTS')
            }
        },
        refreshFunc() {
            this.$store.commit('FETCH_PRODUCTS')
        },
        logoutFunc() {
            this.$store.commit("LOGOUT_USER")
            this.$cookie.delete('auth')
            this.$store.commit('setAuth', null)
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState(['auth'])
    }
}
</script>

<style scoped>

.header-frame {
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}

.menu-header {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 3rem;
    width: 45%;
}

.icon-header {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 3rem;
    color: #E67E22;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.3s;
}

.refresh-func {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}

.icon-header-pic {
    display: none;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 1rem;
}

.icon-header:hover {
    margin-left: 4rem;
}

.icon-header:hover .icon-header-pic {
    display: flex;
    transition: 0.3s;
}

.search-input-frame {
    width: 7rem;
    height: 3rem;
    display: flex;
    align-items: center;
    color: #E67E22;
}

.search-input-frame:hover {
    margin-right: 1rem;
    width: 10rem;
    border: 1px solid #E67E22;
    border-radius: 17px;
    transition: 0.4s
}

.search-input-frame:focus-within {
    margin-right: 1rem;
    width: 10rem;
    border: 1px solid #E67E22;
    border-radius: 17px;
    transition: 0.4s
}

.search-input-frame:hover .search-input {
    display: block;
    transition: 0.4s
}

.search-input-frame:focus-within .search-input {
    display: block;
    transition: 0.4s
}

.search-input-frame:hover .button-search{
    width: 20%;
    transition: 0.4s
}

.search-input-frame:focus-within .button-search{
    width: 20%;
    transition: 0.4s
}

.search-input::placeholder {
    color: #E67E22;
}

.search-input {
    display: none;
    width: 80%;
    height: 100%;
    padding: 7px;
    outline: none;
}

.button-search {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-search {
    color: #E67E22;
    user-select: none;
    cursor: pointer;
}

.menu-text {
    margin-right: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    cursor: pointer;
    color: #F39C12;
}

.menu-text:hover {
    background: #F39C12;
    color: #ffff;
    transition: 0.3s;
}

.menu-text-logout {
    margin-right: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    cursor: pointer;
    color: #E74C3C;
}

.menu-text-logout:hover {
    background: #E74C3C;
    color: #ffff;
    transition: 0.3s;
}

</style>
