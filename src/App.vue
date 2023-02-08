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
        getMovies: function () {

            // Chiamata all'API da App
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=29ab9f66293ac69d30701ab20d25cec2', {
                    params: {
                        query: this.store.inputSearch,
                    }
                })
                .then((response) => {
                    this.store.movies = response.data.results;
                    console.log(this.store.movies);
                });
        }
    },
    created () {
        
        // Qui per me ci dovrà andare un set di dati --> ora non ho endpoint per questo
    }
}

</script>

<template>

    <AppHeader @search="getMovies()" />

    <AppMain />

</template>

<style lang="scss">

</style>
