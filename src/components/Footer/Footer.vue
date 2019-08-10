<template>
    <section>
        <FooterL />
        <FooterM />
        <FooterS />
    </section>
</template>

<script>
import FooterL from './FooterL.vue';
import FooterM from './FooterM.vue';
import FooterS from './FooterS.vue';

export default {
    components: {
        FooterL,
        FooterM,
        FooterS
    }
}
</script>