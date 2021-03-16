import React from 'react';
import './MainVideo.scss';

function MainVideo(props) {
  return (
  <div className='video' key={props.videos.id}>
    <video className='video__player' poster={props.videos.image} controls>
    </video>
  </div>
)
};
 
  
export default MainVideo;