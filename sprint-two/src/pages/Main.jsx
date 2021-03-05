import React, { Component } from 'react';
import './Main.scss'
import data from '../data/video-details.json';
import Header from '../components/Header/Header';
import MainVideo from '../components/MainVideo/MainVideo';
import Intro from '../components/Intro/Intro';
import Form from '../components/Form/Form';
import Comments from '../components/Comments/Comments'
import Aside from '../components/Aside/Aside'




class Main extends Component {
  state = { video: data,
            currentVideo: data[0]
            }

  eventHandler = (videoId) => {
    let copyData= [...this.state.video]
    let videoIndex= copyData.findIndex(videos => {
     return videos.id === videoId 
    })
    let clickedVideo = copyData[videoIndex]
    console.log(clickedVideo);
    let updatedVideos = copyData.filter(video => {
      return video.id !== videoId
    })
    updatedVideos.unshift(clickedVideo);

    this.setState({
      video: updatedVideos, currentVideo: data[videoIndex] 
    })
  }
          
  render() {
  return (
    <div className="main">
     <MainVideo videos={this.state.currentVideo}/>
     <div className='main__body'>
        <div className='main__main-body'>
          <Intro videoInfo={this.state.currentVideo}/>
          <Form/>
          <Comments comments={this.state.currentVideo}/>
        </div>
        <Aside className='main__aside' videos={this.state.video} clickEvent={this.eventHandler}/>
    </div>
    </div>
  );
}}

export default Main;