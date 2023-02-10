<script>
import { store } from '../store';
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

                <AppCard v-for="movie, index in store.movies" :element="movie" class="card" />

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
