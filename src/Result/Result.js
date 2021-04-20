import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard/VideoCard';
import axios from '../axios';
import FlipMove from 'react-flip-move';
import './Result.css';

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    // run this code when result component loads
    // if not a dependancy array is passed every time it rerenders when result component loads
    async function fetchData() {
      const request = await axios.get(selectedOption);
      console.log('data from api', request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
