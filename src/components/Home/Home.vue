<template>
    <section>
        <HomeL style="min-height: calc(100vh - 80px - 4rem);" />
        <HomeM style="min-height: calc(100vh - 80px - 4rem);" />
        <HomeS style="min-height: calc(100vh - 80px - 2rem);" />
    </section>
</template>

<script>
import HomeL from './HomeL.vue';
import HomeM from './HomeM.vue';
import HomeS from './HomeS.vue';

export default {
    mounted() {
        this.$store.commit('FETCH_PRODUCTS')
        window.scrollTo({top: 0, behavior: 'smooth'});
    },
    components: {
        HomeL,
        HomeM,
        HomeS
    }
}
</script>