<template>
  


  <div class="mk_sectie">

    <div class="mk_rij mk_rij_kolom_1">
      <div class="mk_kolom mk_kolom_1_1">

        <div class="mk_module mk_code">
          <div class="mk_code_inner">

            <div class="mk_overzicht"> 
              
              <router-link v-for="(product, index) in this.$store.state.producten" :key="product.id" :class="['item']" :style="{ 'animation-delay': `${delay * index + 100}ms` }" :to="`/product/${product.id}`">

                <div class="afbeelding"><img v-if="product.image" :src="`https://localhost/app-crud/storage/app/public/${product.image}`" alt=""></div>
                <div class="content">
                  <div class="titel">{{ product.title }}</div>
                  <div class="price">{{ product.price }} - {{ product.saleprice }}</div>
                </div>

              </router-link>
              
            </div>

          </div>
        </div>
        
      </div>
    </div>
    
  </div>
  
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      delay: 100, // Adjust the delay value as needed
    };
  },
  mounted() {

  }
}
</script>

