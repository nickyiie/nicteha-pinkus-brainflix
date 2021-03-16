import Preview from '../../assets/Images/Upload-video-preview.jpg';
import React, { Component } from 'react';
import './UploadForm.scss';
import { withRouter} from 'react-router-dom';



class UploadForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Your video has been uploaded!');
    this.props.history.push('/');
  }

  render() {
  return (
    <div>
      <form className='upload-form'  onSubmit={this.handleSubmit}>
        <div className='upload-form__manifest'>
          <div className='upload-form__preview'>
            <label className='upload-form__label' for='video'>VIDEO THUMBNAIL</label>
            <video className='upload-form__thumbnail-poster' poster={Preview}></video>
          </div>
          <div className='upload-form__interactive'>
            <label className='upload-form__label'>TITLE YOUR VIDEO</label>
            <textarea className='upload-form__input upload-form__titlebox' type='text' name='titlebox' placeholder='Add a title to your video'></textarea>
            <label className='upload-form__label'>ADD A VIDEO DESCRIPTION</label>
            <textarea className='upload-form__input upload-form__description' type='text' name='description' placeholder='Add a description of your video'></textarea>
          </div>
        </div>
        <hr className='upload-form__divider'></hr>
        <button type='submit' className='upload-form__button'>PUBLISH</button> 
      </form>
    </div>
  )}
}

export default withRouter(UploadForm);