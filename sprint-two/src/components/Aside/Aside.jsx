import './Aside.scss'
import { NavLink } from 'react-router-dom';

function Aside ({videos, clickEvent}){
  return (
    <section className='aside'>
      <h2 className='aside__title'>NEXT VIDEO</h2>
      {videos.slice(1).map((nextVideo) => {
          return (
            <NavLink className='aside__links' key={nextVideo.id} to={`/videos/${nextVideo.id}`}>
            <div className='aside__video-box' id={nextVideo.id} onClick={() => clickEvent(nextVideo.id)} >
              <video className='aside__preview' poster={nextVideo.image} alt='video preview'></video>
              <div className='aside__blurb'>
                <h2 className='aside__header'>{nextVideo.title}</h2>
                <p className='aside__channel'>{nextVideo.channel}</p>
              </div> 
            </div>
            </NavLink> 
        )
        }
)}
       </section>
      
  )
}

export default Aside;