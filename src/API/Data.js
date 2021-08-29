//api key 
export const api = "4da430b97011b5061edcd46171b4911a"
//api
export const apiurl = "https://api.themoviedb.org/3";
export const imageurl = "https://image.tmdb.org/t/p/original";
//endpoints
export const netflixOriginals = `/discover/tv?api_key=${api}&with_networks=213`;
export const trendingNow = `/trending/all/week?api_key=${api}&language=en-US`;
export const TopRated = `/movie/top_rated?api_key=${api}&language=en-US`;
export const ActionMovies = `/discover/movie?api_key=${api}&with_genres=28`;
export const ComedyMovies = `/discover/movie?api_key=${api}&with_genres=35`;
export const HorrorMovies = `/discover/movie?api_key=${api}&with_genres=27`;
export const RomanticMovies = `/discover/movie?api_key=${api}&with_genres=10749`;
export const Documentries = `/discover/movie?api_key=${api}&with_genres=99`;
export const trailerQuery =  `/videos?api_key=${api}`