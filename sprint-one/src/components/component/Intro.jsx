import Views from '../../assets/Images/Icons/Icon-views.svg'
import Heart from '../../assets/Images/Icons/Icon-likes.svg';
import '../scss/Intro.scss'

function Intro() {
  return (
    <section className='intro'>
      <h1 className='intro__title'>BMX Rampage: 2018 Highlights</h1>
      <p className='intro__author'>By Red Cow</p>
      <p className='intro__date'>12/18/2018</p>
      <article className='intro__counter'>
        <img className='intro__counter-image' src={Views} alt='viewership'/>
        <p className='intro__counter-count'>1,001,023</p>
        <img className='intro__counter-image' src={Heart} alt='viewership'/>
        <p className='intro__counter-count'>110,985</p>
      </article>
      <p className='intro__blurb'>On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
     </section>
  )
}

export default Intro;