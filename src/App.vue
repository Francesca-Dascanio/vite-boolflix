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
                .get('https://api.themoviedb.org/3/search/'+ what, {
                    params: {
                        api_key: this.store.apiKey,
                        query: this.store.inputSearch
                    }
                })
                .then((response) => {

                    if (what == 'movie') {
                        this.store.movies = response.data.results;
                        console.log(this.store.movies);
                    }
                    else {
                        this.store.series = response.data.results;
                        console.log(this.store.series);
                    }
                    
                    
                });
        }
    },
    created () {
        
        // Qui per me ci dovrà andare un set di dati --> ora non ho endpoint per questo
        // this.getSearch();
    }
}

</script>

<template>

    <div>
        <AppHeader @search="getSearch('tv'), getSearch('movie')"/>

        <AppMain />
    </div>

</template>

<style lang="scss">
@import './styles/main.scss';

div {
    background-color: $dark-color;
}

</style>
