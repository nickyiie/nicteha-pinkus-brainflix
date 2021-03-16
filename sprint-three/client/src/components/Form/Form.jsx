import Avatar from '../../assets/Images/Mohan-muruge.jpg';
import './Form.scss'

function Form ({commentCount}) {
  return (
    <div className='form'>
      <p className='form__counter'>{`${commentCount.comments.length} Comments`}</p>
      <div className='form__interactive'>
        <img className='form__image' src={Avatar} alt='user avatar'/>
        <form className='form__form'>
          <div className='form__heading'>
            <label className='form__label'>JOIN THE CONVERSATION</label>
            <textarea className='form__textbox' type='text' name='comment' placeholder='That was easily the most spectacular BMX moment ever.'></textarea>
          </div>
          <p className='form__button'>COMMENT</p>
        </form>  
      </div>
    </div>
  )
}

export default Form;