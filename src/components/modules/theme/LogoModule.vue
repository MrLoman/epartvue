<template>

    <div id="mk_logo_holder">
    
        <div class="mk_logo">
            <router-link :to="`/`">
                <img  src="../../../assets/logo_epartment.svg" alt="logo epartment" class="mk_logo_img">
            </router-link>
        </div>
    </div>
    
</template>
    
<script>
export default {
    name: 'LogoModule',
    props: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
