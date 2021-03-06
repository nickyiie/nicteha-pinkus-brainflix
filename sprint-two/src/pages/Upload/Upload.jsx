import UploadForm from '../../components/UploadForm/UploadForm';
import './Upload.scss';

function Upload () {
    return (
      <div className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <UploadForm/>
        <button className='upload__button'>CANCEL</button>
      </div>
    )
}

export default Upload;