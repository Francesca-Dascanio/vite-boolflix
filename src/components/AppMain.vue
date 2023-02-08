<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    data () {
        return {
            store
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
                Lingua: {{ movie.original_language }}
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
