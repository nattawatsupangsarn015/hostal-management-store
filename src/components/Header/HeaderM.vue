<template>
    <section class="hidden-md-and-up hidden-xs-only">
        <MenuHeaderM v-if="this.showMenu" />
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
                <i class="material-icons" style="font-size: 3rem;" @click="activeMenu()">menu</i>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import MenuHeaderM from './Menu/MenuHeaderM.vue';

export default {
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
        activeMenu() {
            this.$store.commit('SHOW_MENU', {show: 'show'})
        }
    },
    components: {
        MenuHeaderM
    },
    computed: {
        ...mapState(['showMenu'])
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

.icon-header:active {
    filter: drop-shadow(0px 0px 1px);
}

.icon-header-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 1rem;
}

.search-input-frame {
    width: 12rem;
    border: 1px solid #E67E22;
    border-radius: 17px;
    transition: 0.4s;
    height: 3rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
}

.search-input {
    width: 80%;
    height: 100%;
    padding: 7px;
    outline: none;
    transition: 0.4s;
    color: #E67E22;
}

.search-input::placeholder {
    color: #E67E22;
}

.button-search {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E67E22;
}

.menu-header {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 3rem;
    color: #E67E22;
}

</style>