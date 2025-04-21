import { API_BASE_URL, API_OPTIONS } from '../config/api';
import { updateSearchCount, getTrendingMovies } from '../lib/appwriteConfig';

export const fetchMovies = async (query = '') => {
    try {
        const endpoint = query
            ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
            : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }

        const data = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error || 'Failed to fetch movies');
        }

        // Update search count if it's a search query and we got results
        if (query && data.results.length > 0) {
            await updateSearchCount(query, data.results[0]);
        }

        return {
            movies: data.results || [],
            error: null
        };
    } catch (error) {
        console.error(`Error fetching movies: ${error}`);
        return {
            movies: [],
            error: 'Error fetching movies. Please try again later.'
        };
    }
};

export const loadTrendingMovies = async () => {
    try {
        const movies = await getTrendingMovies();
        return {
            movies,
            error: null
        };
    } catch (error) {
        console.error(`Error fetching trending movies: ${error}`);
        return {
            movies: [],
            error: 'Error fetching trending movies.'
        };
    }
}; 