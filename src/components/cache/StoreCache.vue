<template>
  
</template>
  
<script>
import { createStore } from 'vuex';

export default createStore({
    state: {
        producten: [],
        variations: [],
        winkelmand: [],
    },
    mutations: {
        setData(state, data) {

            console.log( data ); 
            console.log( Object.keys(data) ); 

            const [key] = Object.keys(data);
            console.log( data[key] ); 


            state[key] = data[key];
        },
        addwinkelmandData(state, data) {

            console.log( 'add winkelmand', data );

            // state['winkelmand'] += data;
            state['winkelmand'].push(...data);
        }
    },
    
});
</script>