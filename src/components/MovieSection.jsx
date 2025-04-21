import React from 'react';
import MovieCard from './MovieCard';
import Spinner from './Spinner';

const MovieSection = ({ movies, isLoading, errorMessage }) => {
    return (
        <section className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
                <Spinner />
            ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
            ) : (
                <ul className="movie-list">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </ul>
            )}
        </section>
    );
};

export default MovieSection; 