import Views from '../../assets/Images/Icons/Icon-views.svg'
import Heart from '../../assets/Images/Icons/Icon-likes.svg';
import './Intro.scss'

function Intro(props) {
  let time = new Date (props.videoInfo.timestamp)
  console.log(time)
  let cDate = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
    return (
      <section className='intro'>
        <div className='intro__heading'>
          <h1 className='intro__title'>{props.videoInfo.title}</h1>
          <h2 className='intro__author'>By {props.videoInfo.channel}</h2>
          <p className='intro__date'>{cDate}</p>
          <div className='intro__counter'>
            <img className='intro__counter-image' src={Views} alt='viewership'/>
            <p className='intro__counter-count'>{props.videoInfo.views}</p>
            <img className='intro__counter-image' src={Heart} alt='viewership'/>
            <p className='intro__counter-count'>{props.videoInfo.likes}</p>
          </div>
        </div>
        <p className='intro__blurb'>{props.videoInfo.description}</p>
       </section>
    )
}

export default Intro;