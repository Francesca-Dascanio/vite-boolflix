<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data () {
        return {
            store,
            navList: [
                {
                    label: 'BOOLFLIX'
                },
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

        <nav class="bg-color">
            <div class="container flex justify-content-btw">
                <div class="nav-1">
                    <ul class="not-list-style flex" >
                        <!-- <li>
                            <a href="#">
                                <img src="../assets/logo.png" alt="Logo">
                            </a>
                        </li> -->
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
                            Click
                        </button>
                    </form>
                </div>
            </div>
        </nav>


    </header>

</template>

<style lang="scss" scoped>

.nav-1 {
    li {
        padding: 1rem 2rem 1rem 0;
    }
}

.nav-2 {
    form {
        padding: 1rem 0 1rem 1rem;
    }
}

</style>
