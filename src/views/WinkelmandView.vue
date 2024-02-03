<template>

    <div class="mk_sectie">
      
      <div class="mk_rij mk_rij_kolom_1">
        <div class="mk_kolom mk_kolom_1_1">
          
          <div class="mk_module mk_titel"><div class="mk_titel_inner"><h1>Thank you for your order</h1></div></div>

          <div class="mk_module mk_code">
            <div class="mk_code_inner">

              <!-- {{ this.$store.state.producten.filter(product => product.id === 1)[0] }} -->
              
              <!-- {{ this.$store.state.winkelmand }}
              {{ this.$store.state.producten }} -->


              <div id="winkelmand">

                <div v-for="winkelmand in this.$store.state.winkelmand" :key="winkelmand.id" :class="['item']">

                  <div class="qty">{{ winkelmand.qty }}x</div>

                  <div class="image">
                    <img v-if="this.$store.state.producten.filter(product => product.id === winkelmand.productid)[0].image" :src="`https://localhost/app-crud/storage/app/public/${this.$store.state.producten.filter(product => product.id === 1)[0].image}`" alt="">
                  </div>

                  <div class="details">
                    <div class="titel">{{ this.$store.state.producten.filter(product => product.id === winkelmand.productid)[0].title }}</div>
                    <div class="attr">
                      <div class="sku">Sku: {{ winkelmand.sku }}</div>
                      <div class="variation">{{ winkelmand.kleur }} - {{ winkelmand.maat }}</div>
                      <div v-if="winkelmand.extraoptie">{{ winkelmand.extraoptie_name }}</div>
                    </div>
                    <div class="price">
                      <span v-if="winkelmand.saleprice">€ {{ calculateSalePrice(winkelmand.saleprice, winkelmand.extraoptie, winkelmand.extraoptie_price).replace('.', ',') }}</span>
                      <span v-else>€ {{ calculateSalePrice(winkelmand.price, winkelmand.extraoptie,  winkelmand.extraoptie_price).replace('.', ',') }}</span>
                    
                    </div>

                  </div>

                </div>

              </div>


            </div>
          </div>

        </div>
      </div>

    </div>  
    
  </template>
  
  <script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'WinkelmandView',
    components: {
      // HelloWorld
    },
    methods: {

      calculateSalePrice(salePrice, hasExtraOptie, extraoptie_price) {
        let updatedSalePrice = parseFloat(salePrice.replace(',', '.'));

        if (hasExtraOptie && extraoptie_price) {
          updatedSalePrice += parseFloat(extraoptie_price);
        }

        return updatedSalePrice.toFixed(2); // Convert back to string with 2 decimal places
      }
    },
    mounted() {


      // if( !this.$store.state.producten.length ) { return; }

      // const selectedVariation = this.$store.state.producten.filter(product => product.id === 1)[0];

      // console.log( "selectedVariation" );

      // console.log( selectedVariation.id );

    }
  }
  </script>
  