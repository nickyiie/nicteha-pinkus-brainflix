import './Aside.scss'

function Aside ({videos, clickEvent, videoId}){
  return (
    <section className='aside'>
      <h2 className='aside__title'>NEXT VIDEO</h2>
      {videos.slice(1, -1).map((nextVideo) => {
          return (
            <div onClick={() => clickEvent(nextVideo.id)} className='aside__video-box' key={nextVideo.id} id={nextVideo.id} >
              <video className='aside__preview' poster={nextVideo.image} alt='video preview'></video>
              <div className='aside__blurb'>
                <h2 className='aside__header'>{nextVideo.title}</h2>
                <p className='aside__channel'>{nextVideo.channel}</p>
              </div> 
            </div> 
        )
        }
)}
       </section>
      
  )
}

export default Aside;