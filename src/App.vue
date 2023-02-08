<script>
import { store } from './store';

import AppHeader from './components/AppHeader.vue';
import Appmain from './components/AppMain.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain
    },
    data () {
        return 
    }
}

</script>

<template>
    
    <AppHeader />

    <AppMain />

</template>

<style>

</style>
