import Preview from '../../assets/Images/Upload-video-preview.jpg';
import '../../'

import './UploadForm.scss'

function UploadForm () {
  return (
    <div>
      <form className='upload-form'>
        <div className='upload-form__preview'>
          <label className='upload-form__label'>VIDEO THUMBNAIL
            <video className='upload-form__thumbnail-poster' poster={Preview}></video>
          </label>
        </div>
        <div className='upload-form__interactive'>
          <label className='upload-form__label'>TITLE YOUR VIDEO</label>
          <input className='upload-form__input upload-form__titlebox' type='text' name='titlebox' placeholder='Add a title to your video'></input>
          <label className='upload-form__label'>ADD A VIDEO DESCRIPTION</label>
          <input className='upload-form__input upload-form__description' type='text' name='description' placeholder='Add a description of your video'></input>
        </div>
        <button className='upload-form__button'>PUBLISH</button> 
      </form>
    </div>
  )
}

export default UploadForm;