import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import '../scss/Form.scss'

function Form () {
  return (
    <div className='comments'>
      <p className='comments__counter'>3 Comments</p>
      <div className='comments__interactive'>
        <img className='comments__image' src={Avatar} alt='user photo'/>
        <form className='comments__form'>
          <label className='comments__label'>JOIN THE CONVERSATION</label>
          <input className='comments__textbox' type='type' name='comment' placeholder='That was easily the most spectacular BMX moment ever.'></input>
          <button className='comments__button'>COMMENT</button>
        </form>  
      </div>
    </div>
  )
}

export default Form;