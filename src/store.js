import { reactive } from 'vue';

export const store = reactive ({
    apiKey: '29ab9f66293ac69d30701ab20d25cec2',
    inputSearch: '',
    movies: [],
    series: [],
    urlFirst: 'https://image.tmdb.org/t/p/w342/',
    moviesDetail: [],
    seriesDetail: []
});