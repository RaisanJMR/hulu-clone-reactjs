import React, { useState } from 'react';
import VideoCard from './VideoCard/VideoCard';
import './Result.css';
function Result() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard />
      ))}
    </div>
  );
}

export default Result;
