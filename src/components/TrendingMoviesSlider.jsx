import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { loadTrendingMovies } from '../services/movieService';
import Spinner from './Spinner';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const TrendingMoviesSlider = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setLoading(true);
                const { movies, error } = await loadTrendingMovies();
                if (error) {
                    setError(error);
                } else {
                    setTrendingMovies(movies);
                }
            } catch (err) {
                setError('Failed to load trending movies', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    // Early return for loading state
    if (loading) {
        return (
            <div className="trending-movies-slider my-12">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    Trending Movies
                </h2>
                <div className="flex justify-center items-center min-h-[450px]">
                    <Spinner />
                </div>
            </div>
        );
    }

    // Early return for error state
    if (error) {
        return (
            <div className="trending-movies-slider my-12">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    Trending Movies
                </h2>
                <div className="flex justify-center items-center min-h-[450px]">
                    <p className="text-white text-xl">{error}</p>
                </div>
            </div>
        );
    }

    // Early return if no movies
    if (!trendingMovies || trendingMovies.length === 0) {
        return (
            <div className="trending-movies-slider my-12">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    Most Searched Movies
                </h2>
                <div className="flex justify-center items-center min-h-[450px]">
                    <p className="text-white text-xl">No trending movies found</p>
                </div>
            </div>
        );
    }

    // Render slider when we have movies
    return (
        <div className="trending-movies-slider my-12">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">
                Trending Movies
            </h2>
            <Swiper
                modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ 
                    clickable: true,
                    dynamicBullets: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                navigation={true}
                className="trending-swiper"
            >
                {trendingMovies.map((movie, index) => (
                    <SwiperSlide key={movie.$id} className="max-w-[300px]">
                        <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105 mt-10">
                            <div className="absolute -top-4 -left-4 z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                                <span className="text-white text-3xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                    {index + 1}
                                </span>
                            </div>
                            
                            <img 
                                src={movie.poster_path} 
                                alt={movie.title || movie.searchTerm}
                                className="w-full h-[450px] object-cover rounded-lg shadow-xl"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TrendingMoviesSlider; 