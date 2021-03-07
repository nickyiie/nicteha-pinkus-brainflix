import React, { Component } from 'react';
import './Main.scss'
import data from '../../data/video-details.json';
import MainVideo from '../../components/MainVideo/MainVideo';
import Intro from '../../components/Intro/Intro';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments'
import Aside from '../../components/Aside/Aside'
import axios from 'axios';

let API_KEY = 'nicky'
let API_URL = 'https://project-2-api.herokuapp.com/videos'


class Main extends Component {
  state = { video: [],
            currentVideo: data[0]
            }

  getVideos = () => {
    axios.get (`${API_URL}?api_key=${API_KEY}`)
    .then ((response) => {
      console.log(response.data);
      this.setState({
        video: response.data,
      })
    })
  }
  
  getVideosDetails = (movieID) => 
    axios.get(`${API_URL}/${movieID}?api_key=${API_KEY}`)
    .then(response => {
      console.log(response)
    })

  componentDidMount() {
    this.getVideos();
    console.log(this.state.currentVideo)
  }

  componentDidUpdate() {
    this.getVideosDetails();
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
      video: updatedVideos, currentVideo: this.state[videoIndex] 
    })
  }
          
  render() {
      if (this.state.currentVideo === null) {
          return <main>Loading recipe...</main>;
      }
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