<template>
  


    <div class="mk_sectie" v-if="this.product">

      <div class="mk_rij mk_rij_kolom_2">
        <div class="mk_kolom mk_kolom_2 mk_kolom_1_2 start">

          <div class="mk_module mk_afbeelding mk_slideleft"><div class="mk_afbeelding_inner">
            <img v-if="this.product.image" :src="`https://localhost/app-crud/storage/app/public/${this.product.image}`" alt="">
          </div></div>

          
        </div>
        <div class="mk_kolom mk_kolom_2 mk_kolom_1_2 start">

   

          <div class="mk_module mk_titel mk_fadebottom mk_delay100"><div class="mk_titel_inner"><h1>{{ this.product.title }}</h1></div></div>

          <div class="mk_module mk_tekst sku mk_fadebottom mk_delay200"><div class="mk_tekst_inner">Sku: {{ sku }}</div></div>


          <div class="mk_module mk_tekst mk_fadebottom mk_delay300"><div class="mk_tekst_inner">{{ this.product.description }}</div></div>

          <div class="mk_module mk_tekst mk_fadebottom mk_delay400"><div class="mk_tekst_inner">

            <template v-if="saleprice">

              <div class="price sale">

                <span class="old"><span>FROM</span><div>€ {{ calculateSalePrice(price, extraoptie).replace('.', ',') }}</div></span>
                <span class="new"><span>YOUR PRICE</span><div>€ {{ calculateSalePrice(saleprice, extraoptie).replace('.', ',') }}</div></span>

              </div>

            </template>
            
            <template v-else="">

              <div class="price">

                <span class="">{{ price }}</span>

              </div>

            </template>
             
          
          </div></div>

          <div class="mk_module mk_code mk_fadebottom mk_delay500">
            <div class="mk_code_inner">


              <form @submit.prevent="handleSubmit" class="mlfroms">

                <div class="velden">

                  <div class="veld">
                    <div class="select">
                      <select name="kleur" id="kleur"  @change="handleKleurChange" v-model="selectkleur">

                        <option value="">kies een kleur</option>

                        <option v-for="kleur in kleuren" :key="kleur" :value="kleur">{{ kleur }}</option>
                        
                      </select>
                    </div>
                  </div>



                  <div class="veld">
                    <div class="select">

                      <select name="maat" id="maat" :disabled="maten.length === 0"  v-model="selectmaat" @change="checkVaraitionMatch">
                        <option value="">kies een maat</option>
                        <option v-for="maat in maten" :key="maat" :value="maat">{{ maat }}</option>
                      </select>
                      
                    </div>
                  </div>


                  <div class="veld" v-if="extraoptie_name">
                    <div class="checkbox">

                      <label for="extraoption">{{ extraoptie_name }} + €{{ extraoptie_price.replace('.', ',') }}</label>
                      <input type="checkbox" name="extraoption" id="extraoption" :value="extraoptie_price"  v-model="extraoptie">
                      
                    </div>
                  </div>

                </div>

                <button type="submit" class="mk_button">Order now</button>


              </form>
              
            </div>
          </div>


        </div>
      </div>
      
    </div>

    
  </template>
  
  <script>
  
  export default {
    name: 'SingleproductView',
    props: ['id'],
    components: {

    },
    data() {
        return {
          product: [],
          variations: [],
          kleuren: [],
          maten: [],
          price: "",
          saleprice: "",
          sku: "",
          selectkleur: "",
          selectmaat: "",
          extraoptie: "",
          extraoptie_name: "",
          extraoptie_price: "",
          selectvariationid: "",
        };
    },
    watch: {
    '$store.state.producten': {
        handler(newValue) {
          if (newValue.length > 0) {
            // Do something when the length becomes greater than 0
            console.log('Producten array has items!');
            this.product = newValue.filter(product => product.id == this.id)[0];
            this.setProductData();
          }
        },
        deep: true, // Watch changes deeply in the array
        immediate: true, // Trigger the handler immediately when the component is created
      },
    },

    methods: {
      setProductData() {
        this.sku = this.product.sku;
        this.price = this.product.price;
        this.saleprice = this.product.saleprice;
      },
      setVariationData() {
        this.sku = this.product.sku;
        this.price = this.product.price;
        this.saleprice = this.product.saleprice;
      },
      handleKleurChange(event) {

        const selectedKleur = event.target.value;
        const variationsForSelectedKleur = this.variations.filter(variation => variation.kleur === selectedKleur);
        this.maten = [...new Set(variationsForSelectedKleur.map(variation => variation.maat))];

        this.selectvariationid = this.checkVaraitionMatch();
      },
      checkVaraitionMatch()
      {
        if( !this.selectmaat || !this.selectkleur) { console.log('no selected fields'); this.selectvariationid = ""; return; }

        const selectedVariation = this.variations.filter(variation => variation.kleur === this.selectkleur && variation.maat === this.selectmaat);

        if( !selectedVariation.length ) { this.selectvariationid = ""; console.log('no variation'); return;  }
        
        console.log( selectedVariation[0] );
        this.selectvariationid = selectedVariation[0].id;

        if( !this.selectvariationid ) { console.log('no variation id'); return; }

        this.sku = selectedVariation[0].sku;
        this.price = selectedVariation[0].price;
        this.saleprice = selectedVariation[0].saleprice;
        this.extraoptie_name = selectedVariation[0].extraoption;
        this.extraoptie_price = selectedVariation[0].price_eo;
      },
      handleSubmit() {

        //disable forms! no double sending!
        // this.disableForm(true);
                    
        this.checkVaraitionMatch();

        if( !this.selectvariationid ) { console.log('no variation id'); return; }

        const addwinkelmand = [
          {
            id: this.product.id + "." + this.selectvariationid,
            productid: this.product.id,
            variationid: this.selectvariationid,
            qty: 1,
            sku: this.sku,
            price: this.price,
            saleprice: this.saleprice,
            kleur: this.selectkleur,
            maat: this.selectmaat,
            extraoptie: this.extraoptie,
            extraoptie_name: this.extraoptie_name,
            extraoptie_price: this.extraoptie_price
          }
        ];

        console.log( addwinkelmand );
        this.$store.commit('addwinkelmandData', addwinkelmand);

        this.$router.push('/winkelmand');

      },
      disableForm(bool) {
          
        var form  = document.querySelector(".mlfroms");
        var allElements = form.elements;
        for (var i = 0, l = allElements.length; i < l; ++i) {
            // allElements[i].readOnly = true;
            allElements[i].disabled=bool;
        }
      },
      calculateSalePrice(salePrice, hasExtraOptie) {
        let updatedSalePrice = parseFloat(salePrice.replace(',', '.'));

        if (hasExtraOptie && this.extraoptie_price) {
          updatedSalePrice += parseFloat(this.extraoptie_price);
        }

        return updatedSalePrice.toFixed(2); // Convert back to string with 2 decimal places
      }
    },
    mounted() {

      if( this.$store.state.producten.length > 0 ) {

        console.log('get on mounted');
        this.product = this.$store.state.producten.filter(product => product.id == this.id)[0];
        this.setProductData();
      }

      // console.log( this.$store.state.producten.find(product => product.id === this.id) );

      // Make the fetch request
      fetch("http://127.0.0.1:8000/product/getallvariations/" + this.id)
      .then(response => response.json())
      .then(data => {

        

        this.variations = data;

        // Extract unique kleur values using Set
        this.kleuren = [...new Set(this.variations.map(variation => variation.kleur))];

        console.log(this.kleuren);

        // this.$store.commit('setData', { producten: data });
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });

    }
  }
  </script>
  