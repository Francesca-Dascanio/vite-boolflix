<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data () {
        return {
            store,
            navList: [
                {
                    label: 'Home'
                },
                {
                    label: 'Tv Series'
                },
                {
                    label: 'Movies'
                },
                {
                    label: 'BoolFlix Original'
                },
                {
                    label: 'Recently Added'
                },
                {
                    label: 'My list'
                }
            ]
        }
    }
}

</script>

<template>

    <header>

        <nav>
            <div class="container flex justify-content-btw align-items-center">
                <div class="nav-1">
                    <ul class="not-list-style flex align-items-center" >
                        <li>
                            <img src="../assets/netflix_logo.png" alt="logo">
                        </li>
                        <li v-for="label, i in navList">
                            <a href="#">
                                {{ navList[i].label }}
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div class="nav-2">
                    <!-- Searchbar -->
                    <!-- Chiamata dal figlio AppHeader (form - searchbar) al padre App -->
                    <form action="" @submit.prevent="$emit('search')">
                        <input type="text" placeholder="Search.." name="search" v-model="store.inputSearch">
                        <button type="submit">
                            Go
                        </button>
                    </form>
                </div>
            </div>
        </nav>


    </header>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header {
    width: 100%;
    height: 100px;

    nav {
        > div {
            height: 100%;

            .nav-1 {
                width: 70%;
                height: 100%;

                li:first-child {
                    padding: 0;
                    width: 20%;

                        img {
                            width: 100%;
                        }
                }

                li {
                    padding: 2rem 1rem;

                        a {
                            font-size: 0.8rem;
                        }
                }
            }

            .nav-2 {

            width: 30%;
            height: 100%;

                form {
                    padding: 1rem 0 1rem 1rem;

                    input {
                        @include input
                    }

                    button {
                        @include button
                    }
                }
            }

        }
    }
}


</style>
