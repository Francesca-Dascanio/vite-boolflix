<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data () {
        return {
            store
        }
    }
}

</script>

<template>

    <!-- Searchbar -->
    <!-- Chiamata dal figlio AppHeader (form - searchbar) al padre App -->
    <form action="" @submit.prevent="$emit('search')">
      <input type="text" placeholder="Search.." name="search" v-model="store.inputSearch">
      <button type="submit">
        Click
    </button>
    </form>

</template>

<style lang="scss" scoped>
    form {
        margin: 1rem;
    }
</style>
