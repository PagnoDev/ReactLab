import { useQuery } from "@tanstack/react-query";
import { getPopularMovies, getNowPlayingMovies, getTopRatedMovies, getUpcomingMovies, getMovieDetails } from "../data/movie.data";
import type { Movie, MovieDetails } from "../types/Movie";
import type { Paginated } from "../types/PaginatedType";

const STALE_TIME = 1000 * 60 * 5;

//Movie
export const usePopularMovies = () => useQuery<Paginated<Movie>>({ queryKey: ["popularMovies"], queryFn: getPopularMovies, staleTime: STALE_TIME });
export const useNowPlayingMovies = () => useQuery<Paginated<Movie>>({ queryKey: ["nowPlayingMovies"], queryFn: getNowPlayingMovies, staleTime: STALE_TIME });
export const useTopRatedMovies = () => useQuery<Paginated<Movie>>({ queryKey: ["topRatedMovies"], queryFn: getTopRatedMovies, staleTime: STALE_TIME });
export const useUpcomingMovies = () => useQuery<Paginated<Movie>>({ queryKey: ["upcomingMovies"], queryFn: getUpcomingMovies, staleTime: STALE_TIME });

//MovieDetails
export const useMovieDetails = (id: number) =>
    useQuery<MovieDetails>({ queryKey: ["movieDetails", id], queryFn: () => getMovieDetails(id), staleTime: STALE_TIME });
