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

            console.log(movie);

            if (movie.original_language == 'en') {
                const language = document.getElementById('li');
                console.log(language);
                // language.classList.add('fi-gb');
            }
        }
    }
}

</script>

<template>

    <div class="card-movie" v-for="movie, index in store.movies">
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
                <span class="fi" :class="movie.original_language == 'en' ? 'fi-gb' : '' "> 

                </span>
                <!-- Lingua: {{ movie.original_language }} -->
                <!-- Lingua: {{ getFlag(movie) }} -->
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
        height: 100px;
        border: 1px dashed black;
    }

</style>
