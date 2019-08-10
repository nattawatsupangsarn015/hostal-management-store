<template>
    <section>
        <HeaderL />
        <HeaderM />
        <HeaderS />
    </section>
</template>

<script>
import HeaderL from './HeaderL.vue';
import HeaderM from './HeaderM.vue';
import HeaderS from './HeaderS.vue';

export default {
    components: {
        HeaderL,
        HeaderM,
        HeaderS
    }
}
</script>