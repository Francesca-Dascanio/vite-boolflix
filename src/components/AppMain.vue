<script>
import { store } from '../store';

export default {
    name: 'AppMain',
    data () {
        return {
            store,
            stars: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        getFlag: function (object) {

            if (object.original_language == 'en') {
                return 'fi-gb'
            }
            else if (object.original_language == 'it') {
                return 'fi-it'
            }
            else if (object.original_language == 'es') {
                return 'fi-es'
            }
            else if (object.original_language == 'ja') {
                return 'fi-jp'
            }
            else if (object.original_language == 'fr') {
                return 'fi-fr'
            }
            else {
                return 'flag-neutral'
            }

        },
        getPoster: function (obj) {
            if (obj.poster_path == obj.poster_path + 'null') {
                // Non funziona perchè null è dentro obj.poster_path --> da sistemare
                return 'https://via.placeholder.com/342x513';
                
            }
            else {
                return this.store.urlFirst + obj.poster_path;
            }
        },
        getStars: function (item, obj) {

            if (item <= Math.ceil((obj.vote_average + 1)/ 2)) {

                return 'fa-solid fa-star';

            }
            else {
                return 'fa-regular fa-star';
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
            <!-- <img :src="store.urlFirst + movie.poster_path" :alt="movie.title"> -->
            <img :src="getPoster(movie)" :alt="movie.title">
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
                <span class="fi" :class="getFlag (movie)"> 
                </span>
            </li>
            <li>
                Voto: 
                <span v-for="item in stars">
                    <font-awesome-icon :icon="getStars(item, movie)" /> 
                </span>
            </li>
        </ul>
    </div>

    <div class="card-series" v-for="serie, index in store.series">
        <!-- Qui ci andaranno le informazioni per ogni film -->
        <div>
            TV SERIES - Informazioni
        </div>
        <div>
            <img :src="store.urlFirst + serie.poster_path" :alt="serie.title">
        </div>
        <ul>
            <li>
                Titolo: {{ serie.name }}
            </li>
            <li>
                Titolo originale: {{ serie.original_name }}
            </li>
            <li>
                Lingua: 
                <span class="fi" :class=" getFlag (serie)"> 
                </span>
            </li>
            <li>
                Voto: {{ Math.ceil((serie.vote_average + 1)/ 2) }}
            </li>
            <li>
                Voto: 
                <span v-for="item in stars">
                    <font-awesome-icon :icon="getStars(item, serie)" /> 
                </span>
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
