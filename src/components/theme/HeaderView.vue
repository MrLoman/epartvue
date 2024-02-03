<template>


    <header id="full_header" class="sticky">
    
      <div class="full_header_inner">
    
        <div class="mk_rij">
    
          <div class="mk_rij_inner">
    
            <div id="mk_logo_holder">

              <LogoModule />
    
            </div>
            
    
            <div id="top_header">
    
    
            </div>
    
            <div id="menu_header">
    
                <div class="mk_menu">
                
                    <MenuModule menu="primary_menu" />

                </div>
        
            </div>
    
          </div>
          
        </div>
    
      </div>
    
    </header> <!-- #full-header -->

</template>

<script>

import MenuModule from '@/components/modules/menu/MenuModule.vue'
import LogoModule from '@/components/modules/theme/LogoModule.vue';

export default {
name: 'Header',
components: {
    MenuModule,
    LogoModule,
    LogoModule
},
props: {
    
},
mounted() {

    


},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>