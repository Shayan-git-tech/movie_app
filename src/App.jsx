import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import Search from './components/Search'
import TrendingMoviesSlider from './components/TrendingMoviesSlider'
import MovieSection from './components/MovieSection'
import { fetchMovies } from './services/movieService'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Debounce the search term
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  // Fetch movies when search term changes
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const { movies, error } = await fetchMovies(debouncedSearchTerm);
      setMovieList(movies);
      setErrorMessage(error);
      setIsLoading(false);
    };

    getMovies();
  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className="pattern"/>

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <TrendingMoviesSlider />
        <MovieSection 
          movies={movieList}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </main>
  )
}

export default App