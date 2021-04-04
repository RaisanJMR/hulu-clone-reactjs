import React from 'react';
import './VideoCard.css'
import Img from './img1.jpg';
function VideoCard({movie}) {
  return <div className="videoCard">
      <img src={Img} alt=""/>
      <p>Lorem ipsum dolor sit.</p>
      <h2>movie title</h2>
      <p>movie overview- Lorem, ipsum dolor</p>
  </div>;
}

export default VideoCard;
