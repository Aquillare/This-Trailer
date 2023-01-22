// const urlVideo= `https://api.themoviedb.org/3/movie/${id}/videos?api_key=`;
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

//para obtener el video de youtube, usar https://www.youtube.com/watch?v= seguido del key del video.

const API_KEY = process.env.API_KEY;

const rutaApi = {
    apiKey: API_KEY,
    mainUrl: 'https://api.themoviedb.org/3/movie/',
    searchUrl: 'https://api.themoviedb.org/3/search/movie/',
    page:'?page=',
    categories: ['popular','top_rated','latest'],
    imgUrl:'https://image.tmdb.org/t/p/w500',
    lenguage: ['language=en-US','language=es-LA'],
};

export default rutaApi;