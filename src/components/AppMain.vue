<script>
import { store } from '../store';
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
            else if (object.original_language == 'ja') {
                return 'fi-jp'
            }
            else {
                return `fi-${object.original_language}`;
            }

        },
        getPoster: function (obj) {

            if (obj.poster_path == null) {
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
        },
        getHover: function (obj) {
            
            console.log('DENTRO A MOUSEOVER')

            obj.hovered = false;
            console.log(obj);

            return obj.hovered = true;
            
        
        },
        getOut: function (obj) {
            
            console.log('DENTRO A MOUSEOUT')
            
            obj.hovered = true;
            console.log(obj);

            return obj.hovered = false;
        
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
                <!-- CARD - DATI MOVIES -->

                <div class="card" v-for="movie, index in store.movies" >
                    <div id="img-container" @click="getHover(movie)"
                    :class="{
                        'not-visible': movie.hovered == true,
                        '': movie.hovered == false
                        }" >
                        <img :src="getPoster(movie)" :alt="movie.title">
                    </div>
                    <ul id="info-container" class="not-list-style p" @click="getOut(movie)">
                        <li>
                            <strong>
                                Title: 
                            </strong>
                            <span>
                                {{ movie.title }}
                            </span>
                        </li>
                        <li>
                            <strong>
                                Original title: 
                            </strong>
                            <span>
                                {{ movie.original_title }}
                            </span>
                        </li>
                        <li>
                            <strong>
                                Overview: 
                            </strong>
                            <span>
                                {{ movie.overview }}
                            </span>
                        </li>
                        <li>
                            <strong>
                                Language: 
                            </strong> 
                            <span class="fi" :class="getFlag (movie)"> 
                            </span>
                        </li>
                        <li>
                            <strong>
                                Vote:
                            </strong>
                            <span class="p-span">
                                {{ Math.ceil((movie.vote_average + 1)/ 2) }}
                            </span>
                            <span v-for="item in stars">
                                <font-awesome-icon :icon="getStars(item, movie)" /> 
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- CARD - DATI SERIES -->
                <div class="card" v-for="serie, index in store.series">
                    <div class="img-container"  @click="getHover(serie)"
                        :class="{
                            'not-visible': serie.hovered == true,
                            '': serie.hovered == false
                        }">
                        <img :src="getPoster(serie)" :alt="serie.title">
                    </div>
                    <ul class="not-list-style p" @click="getOut(serie)">
                        <li>
                            <strong>
                                Title: 
                            </strong> 
                            <span>
                                {{ serie.name }}
                            </span>
                        </li>
                        <li>
                            <strong>
                                Original title: 
                            </strong>
                            <span>
                                {{ serie.original_name }}
                            </span>
                        </li>
                        <li>
                            <strong>
                                Overview: 
                            </strong>
                            <span>
                                {{ serie.overview }}
                            </span>
                        </li>
                        <li>
                            <strong>
                                Language: 
                            </strong>  
                            <span class="fi" :class=" getFlag (serie)"> 
                            </span>
                        </li>
                        <li>
                            <strong>
                                Vote:
                            </strong>
                            <span class="p-span">
                                {{ Math.ceil((serie.vote_average + 1)/ 2) }}
                            </span>
                            <span v-for="item in stars">
                                <font-awesome-icon :icon="getStars(item, serie)" /> 
                            </span>
                        </li>
                    </ul>
                </div>
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

                .img-container {
                    max-width: 342px;
                    min-height: 655px;

                    img {
                        max-width: 100%;
                        height: 513px;
                        object-fit: cover;
                    }
                }

                ul {
                    width: 342px;
                    height: 513px;

                    li {
                        padding: 0.5rem 0;

                    }
                }
            }

        }
    }
    
</style>
