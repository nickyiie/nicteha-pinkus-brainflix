//this will have to be changed into a class with state and props
import React from 'react';
import './MainVideo.scss';

function MainVideo(props) {
   
  return (
  <div className='video' key={props.videos.id}>
    <video className='video__player' poster={props.videos.image} controls>
    </video>
  </div>
)
}
 
    // this.state = {video:data} 

        // {/* <source src={this.state.data[0].video}></source> */}

   

export default MainVideo;