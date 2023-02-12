<script>
import { store } from '../store';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    name: 'AppCard',
    data () {
        return {
            store,
            stars: [1, 2, 3, 4, 5]
        }
    },
    props: {
        element: Object
    },
    methods: {
        // Per come ho strutturato non posso convertire stars in computed perchè ho un parametro 
        getStars: function (item) {

                if (item <= Math.ceil((this.element.vote_average + 1)/ 2)) {

                    return 'fa-solid fa-star';

                }
                else {
                    return 'fa-regular fa-star';
                } 
        }
    },
    computed: {
        flag () {
            if (this.element.original_language == 'en') {
                    return 'fi-gb'
                }
                else if (this.element.original_language == 'ja') {
                    return 'fi-jp'
                }
                else {
                    return `fi-${this.element.original_language}`;
                }
        },
        poster () {
            if (this.element.poster_path == null) {
                    return 'https://via.placeholder.com/342x513';
                    
                }
                else {
                    return this.store.urlFirst + this.element.poster_path;
                }
        },
    }
}

</script>

<template>

    <!-- Questa è già una singola card -->
    <div>
         <!-- Immagine -->
        <div id="img-container" @click="element.hovered = true"
        :class="{
            'not-visible': element.hovered == true,
            '': element.hovered == false
            }" >
            <img :src="poster" :alt="element.title">
        </div>

        <!-- Informazioni -->
        <ul id="info-container" class="not-list-style p" @click="element.hovered = false"
            :class="{
            'not-visible': element.hovered == false,
            '': element.hovered == true
            }" >
            <li>
                <strong>
                    Title: 
                </strong>
                <span>
                    {{ element.title || element.name }}
                </span>
            </li>
            <li>
                <strong>
                    Original title: 
                </strong>
                <span>
                    {{ element.original_title || element.original_name }}
                </span>
            </li>
            <li>
                <strong>
                    Overview: 
                </strong>
                <span>
                    {{ element.overview }}
                </span>
            </li>
            <li>
                <strong>
                    Language: 
                </strong> 
                <span class="fi" :class="flag"> 
                </span>
            </li>
            <li>
                <strong>
                    Vote:
                </strong>
                <span class="p-span">
                    {{ Math.ceil((element.vote_average + 1)/ 2) }}
                </span>
                <span v-for="item in stars">
                    <font-awesome-icon :icon="getStars(item, element)" /> 
                </span>
            </li>
        </ul>

        <!-- chiamata API al padre AppMain -->
        <button @click="$emit('getInfo'), person.clicked = true">
            More info
        </button>
        <div class="cast"
        :class="{
            'not-visible': person.clicked == false,
            '': person.clicked == true
        }">
            <div class="text-cast">
                Cast:
            </div>
            <ul class="not-list-style p">
                <li v-for="person, index in store.moviesDetail">
                    {{ person.name }}
                </li>
            </ul>
        </div>
    </div>
   

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

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
                    // height: 513px;

                    li {
                        padding: 0.5rem 0;

                    }
                }

#info-container {

        overflow-y: auto;
}

button {
    width: 90%;
    margin-left: 5%;
    padding: 0.2rem;
    text-align: center;

    .cast {
        width: auto;
        padding: 0.2rem;

        .text-cast {
            width: auto;
        }
    }
}
</style>
