<template>
    <nav>
        <ul class="menu">
            <li v-for="menu in hoofdmenu" :key="menu" :class="['menu-item', menu.classes]">
                <router-link v-if="menu.menu_item_parent == 0" :to="generateRoute(menu)">{{ menu.title }}</router-link>
            </li>
            <li>
                <router-link to="/">Producten</router-link>
            </li>
            <li>
                <router-link to="/winkelmand">Winkelmand</router-link>
            </li>
        </ul>
    </nav>


  </template>
  
  <script>

  export default {
    name: 'Menu',
    props: {

    },
    data() {
      return {

      };
    },
    methods: {
 
    },
    mounted() {

    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  