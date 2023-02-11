<script>
import { store } from '../store';
import axios from 'axios';
import AppCard from './AppCard.vue';


export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data () {
        return {
            store
        }
    },
    methods: {
        getCast: function () {

            console.log('Sono dentro a GETCAST');
            axios
            .get('https://api.themoviedb.org/3/movie/'+ this.element.id + '/credits?api_key=29ab9f66293ac69d30701ab20d25cec2')
            .then ((response) => {
                this.store.moviesDetail = response.data.cast;
                console.log('array store.moviesDetail', this.store.moviesDetail);
            });
}
    }
}

</script>

<template>

    <main>
        <div class="container">
            Results:
        </div>

        <div class="bg-color">
            <div class="container flex overflow">

                <AppCard v-for="movie, index in store.movies" :element="movie" class="card" @getInfo="getCast()" />

                <AppCard v-for="serie, index in store.series" :element="serie" class="card" />

            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>
@import '../styles/partials/variables.scss';

    main {
        color: $light-color;
        width: 100%;
        height: calc(100vh - 150px);

        > div:first-child {
            height: auto;
            padding: 0.5rem 1rem;
        }

        > div:last-child {
            height: auto;
    
            .card {

                border: 1px solid black;
                border-right: 0.5px;
                width: 342px;
                height: 513px;

            }

        }
    }
    
</style>
