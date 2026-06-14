import { HttpClientBase } from "./httpClientBase";
import type { Movie, MovieDetails } from "../types/Movie";
import type { Paginated } from "../types/PaginatedType";

// Movie
export const getPopularMovies = () => HttpClientBase<Paginated<Movie>>("/movie/popular");
export const getNowPlayingMovies = () => HttpClientBase<Paginated<Movie>>("/movie/now_playing");
export const getTopRatedMovies = () => HttpClientBase<Paginated<Movie>>("/movie/top_rated");
export const getUpcomingMovies = () => HttpClientBase<Paginated<Movie>>("/movie/upcoming");

// MovieDetails
export const getMovieDetails = (id: number) => HttpClientBase<MovieDetails>(`/movie/${id}`);