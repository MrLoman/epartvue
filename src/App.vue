<template>

  <HeaderModule />

  <router-view/>

</template>


<script>
import HeaderModule from '@/components/theme/HeaderView.vue'


export default {
  name: 'App',
  components: {
    HeaderModule,
  },
  mounted() {

    if( this.$store.state.producten.length != 0 ) { console.log( this.$store.state.producten.length); return; }

    // Make the fetch request
    fetch("http://127.0.0.1:8000/product/getallproducts")
    .then(response => response.json())
    .then(data => {

      this.$store.commit('setData', { producten: data });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

  }
}

</script>