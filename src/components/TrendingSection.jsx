import React from 'react';

const TrendingSection = ({ movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <section className="trending">
            <h2>Trending Movies</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={movie.$id}>
                        <p>{index + 1}</p>
                        <img src={movie.poster_path} alt={movie.searchTerm} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TrendingSection; 