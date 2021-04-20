import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard/VideoCard';
import axios from '../axios';
import requests from '../requests';
import './Result.css';


function Result() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    // run this code when result component loads
    // if not a dependancy array is passed every time it rerenders when result component loads
    async function fetchData() {
      const request = await axios.get(requests.fetchSciFi);
      console.log('data from api', request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Result;
