import React from "react";
import { Star, Clock, Calendar } from "lucide-react";

function MovieCard({
  movie: {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    
  },
}) {
  return (
    <div className="movie-card">
      <div className="group relative overflow-hidden rounded-xl bg-black text-white">
        {/* Background Image with Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-bg-black/10 z-10"></div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title} backdrop`}
            className="w-full h-full object-cover opacity-50 scale-110 group-hover:scale-125 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-row justify-end items-end h-full min-h-[400px]">
          <div className="flex-1">
            {/* Rating and Year */}
            <div className="flex items-center gap-3 mb-1">
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">
                  {vote_average ? vote_average.toFixed(1) : "N/A"}
                </span>
              </div>
              {/* Year Badge */}
              <div className="relative flex items-center">
                <div className="h-[2px] w-6 bg-white/30"></div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md">
                  <Calendar className="h-3.5 w-3.5 text-white/70" />
                  <span className="font-medium text-sm">
                    {release_date ? release_date.split("-")[0] : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Title*/}
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {title} <br />
            </h2>

            {/* Description */}
            <p className="text-sm text-white/80 line-clamp-3 mb-6">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
