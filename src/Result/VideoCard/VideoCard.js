import React from 'react';
import './VideoCard.css';
// import Img from './img1.jpg';
function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOw_Profit-with-JavaScript-new.jpg"
        alt=""
      />
      {/* <img src={Img} alt=""/> */}
      <p>Lorem ipsum dolor sit.</p>
      <h2>movie title</h2>
      <p>number of likes</p>
    </div>
  );
}

export default VideoCard;
