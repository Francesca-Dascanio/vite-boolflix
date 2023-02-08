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
        getFlag: function (movie) {

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
        }
    }
}

</script>

<template>

    <div id="prova">

    </div>

    <div id="card" class="card-movie" v-for="movie, index in store.movies">
        <!-- Qui ci andaranno le informazioni per ogni film -->
        MOVIE - Informazioni
        <ul>
            <li>
                Titolo: {{ movie.title }}
            </li>
            <li>
                Titolo originale: {{ movie.original_title }}
            </li>
            <li>
                Lingua: 
                <span class="fi" :class=" getFlag (movie)"> 
                </span>
            </li>
            <li>
                Voto: {{ movie.vote_average }}
            </li>
        </ul>
    </div>

</template>

<style lang="scss" scoped>

    .card-movie {
        margin: 1rem;
        padding: 1rem;
        width: 50%;
        height: 150px;
        border: 1px dashed black;

        .flag-neutral {
            background-image: url('https://via.placeholder.com/200x150');
        }
    }

</style>
