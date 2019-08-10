<template>
    <section>
        <HomeL />
        <HomeM />
        <HomeS />
    </section>
</template>

<script>
import HomeL from './HomeL.vue';
import HomeM from './HomeM.vue';
import HomeS from './HomeS.vue';

export default {
    components: {
        HomeL,
        HomeM,
        HomeS
    }
}
</script>