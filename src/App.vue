<script>
import axios from 'axios';
import { store } from './store';


import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain
        
    },
    data () {
        return {
            store
        }
    },
    methods: {
        getSearch: function (what) {

            // Chiamata all'API da App
            axios
                .get('https://api.themoviedb.org/3/search/'+ what + this.store.apiKey, {
                    params: {
                        query: this.store.inputSearch,
                    }
                })
                .then((response) => {
                    this.store.series = response.data.results;
                    console.log(this.store.series);
                    
                });
        }
    },
    created () {
        
        // Qui per me ci dovrà andare un set di dati --> ora non ho endpoint per questo
    }
}

</script>

<template>

    <AppHeader @search="getSearch('tv'), getSearch('movie')"/>

    <AppMain />

</template>

<style lang="scss">

</style>
