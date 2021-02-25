import '../scss/Aside.scss'

function AsideVideos (){
  return (
    <section className='aside'>
      <h2 className='aside__title'>NEXT VIDEO</h2>
      <div className='aside__video-box'>
        <img className='aside__preview' src='https://via.placeholder.com/100x50' alt='video preview'></img>
        <div className='aside__blurb'>
          <h2 className='aside__header'>Become A Travel Pro In Easy Lesson</h2>
          <p className='aside__channel'>Scotty Crammer</p>
        </div> 
      </div>
    </section>
  )
}

export default AsideVideos;