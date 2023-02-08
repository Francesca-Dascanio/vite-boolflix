<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    data () {
        return {
            store
        }
    },
    methods: {
        getMovieFlag: function (movie) {

            console.log(movie.original_language);

            if (movie.original_language == 'en') {
                return 'fi-gb'
            }
            else if (movie.original_language == 'it') {
                return 'fi-it'
            }
            else if (movie.original_language == 'es') {
                return 'fi-es'
            }
            else if (movie.original_language == 'ja') {
                return 'fi-jp'
            }
            else if (movie.original_language == 'fr') {
                return 'fi-fr'
            }
            else {
                return 'flag-neutral'
            }
        },
        getSeriesFlag: function (serie) {

            if (serie.original_language == 'en') {
                return 'fi-gb'
            }
            else if (serie.original_language == 'it') {
                return 'fi-it'
            }
            else if (serie.original_language == 'es') {
                return 'fi-es'
            }
            else if (serie.original_language == 'ja') {
                return 'fi-jp'
            }
            else if (serie.original_language == 'fr') {
                return 'fi-fr'
            }
            else {
                return 'flag-neutral'
            }
            }
    }
}

</script>

<template>

    <div class="card-movie" v-for="movie, index in store.movies">
        <!-- Qui ci andaranno le informazioni per ogni film -->
        <div>
            MOVIE - Informazioni
        </div>
        <div>
            <img :src="store.urlFirst + movie.poster_path" :alt="movie.title">
        </div>
        <ul>
            <li>
                Titolo: {{ movie.title }}
            </li>
            <li>
                Titolo originale: {{ movie.original_title }}
            </li>
            <li>
                Lingua: 
                <span class="fi" :class=" getMovieFlag (movie)"> 
                </span>
            </li>
            <li>
                Voto: {{ movie.vote_average }}
            </li>
        </ul>
    </div>

    <div class="card-series" v-for="serie, index in store.series">
        <!-- Qui ci andaranno le informazioni per ogni film -->
        TV SERIES - Informazioni
        <ul>
            <li>
                Titolo: {{ serie.name }}
            </li>
            <li>
                Titolo originale: {{ serie.original_name }}
            </li>
            <li>
                Lingua: 
                <span class="fi" :class=" getSeriesFlag (serie)"> 
                </span>
            </li>
            <li>
                Voto: {{ serie.vote_average }}
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>

    .card-movie {
        margin: 1rem;
        padding: 1rem;
        width: 30%;
        border: 1px dashed black;

        .flag-neutral {
            background-image: url('https://via.placeholder.com/200x150');
        }
    }

    .card-series {
        margin: 1rem;
        padding: 1rem;
        width: 30%;
        border: 1px dashed black;

        .flag-neutral {
            background-image: url('https://via.placeholder.com/200x150');
        }
    }

</style>
