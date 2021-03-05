import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import './Form.scss'

function Form () {
  return (
    <div className='form'>
      <p className='form__counter'>3 Comments</p>
      <div className='form__interactive'>
        <img className='form__image' src={Avatar} alt='user photo'/>
        <form className='form__form'>
          <div className='form__heading'>
            <label className='form__label'>JOIN THE CONVERSATION</label>
            <textarea className='form__textbox' type='type' name='comment' placeholder='That was easily the most spectacular BMX moment ever.'></textarea>
          </div>
          <p className='form__button'>COMMENT</p>
        </form>  
      </div>
    </div>
  )
}

export default Form;