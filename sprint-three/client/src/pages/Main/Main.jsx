import React, { Component } from 'react';
import './Main.scss'
import MainVideo from '../../components/MainVideo/MainVideo';
import Intro from '../../components/Intro/Intro';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments'
import Aside from '../../components/Aside/Aside'
import axios from 'axios';

let API_KEY = 'nicky'
let API_URL = 'https://project-2-api.herokuapp.com/videos/'


class Main extends Component {  
  state = { video: [],
            mainVideo: null,
            }

  // componentDidMount() {
  //   axios.get('http:localhost:8080/videos')
  //   .then ((res) => {
  //     console.log(res)
  //     this.setState({
  //       video: res.data
  //     })
  //   })
  // }

  getVideos = () => {
    axios.get (`${API_URL}?api_key=${API_KEY}`)
    .then ((response) => {
      this.setState({
        video: response.data,
      })
    })
  }
  
  getMainVideo = () => {
    axios.get(`${API_URL}1af0jruup5gu/?api_key=${API_KEY}`)
    .then(response => {
      this.setState({
        mainVideo: response.data
      })
    })
  }

  getCurrentVideo = (videoId) => 
    axios.get(`${API_URL}${videoId}/?api_key=${API_KEY}`)
    .then(response => {
      console.log(response)
      this.setState({
        mainVideo: response.data
      })
    })

  componentDidMount() {
    this.getVideos();
    this.getMainVideo();
    }
    
    
  componentDidUpdate(prevProps) {
    let videoId = this.props.match.params.videoId;
    if (prevProps.match.params.videoId !== videoId) {
     return this.getCurrentVideo(videoId);
    }
  }


  handleClick = (videoId) => {
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
      video: updatedVideos 
    })
  }
      
  render() {
  if (this.state.mainVideo === null) {
      return <div> Loading...</div>
    }
  return (
    <div className="main">
     <MainVideo videos={this.state.mainVideo}/>
     <div className='main__body'>
        <div className='main__main-body'>
          <Intro videoInfo={this.state.mainVideo}/>
          <Form commentCount={this.state.mainVideo}/>
          <Comments comments={this.state.mainVideo}/>
        </div>
        <Aside className='main__aside' videos={this.state.video} clickEvent={this.handleClick}/>
    </div>
    </div>
  );
}}

export default Main;