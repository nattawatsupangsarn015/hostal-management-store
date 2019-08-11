<template>
    <section>
        <!--  -->
    </section>
</template>

<script>
export default {
    mounted() {
        if(!this.$route.params.id){
            this.$router.push('/')
        }
    }
}
</script>