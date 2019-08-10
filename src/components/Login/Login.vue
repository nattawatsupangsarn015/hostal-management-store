<template>
    <section>
        <LoginL />
        <LoginM />
        <LoginS />
    </section>
</template>

<script>
import LoginL from './LoginL.vue';
import LoginM from './LoginM.vue';
import LoginS from './LoginS.vue';

export default {
    components: {
        LoginL,
        LoginM,
        LoginS
    }
}
</script>