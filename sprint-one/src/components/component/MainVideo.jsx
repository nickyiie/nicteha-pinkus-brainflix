//this will have to be changed into a class with state and props
import '../scss/MainVideo.scss'

function MainVideo() {
    return (
      <div className='video'>
        <video className='video__player' controls>
          <source src=''></source>
        </video>
      </div>
    )
}

export default MainVideo;