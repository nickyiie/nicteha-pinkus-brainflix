import UploadForm from '../../components/UploadForm/UploadForm';
import './Upload.scss';
import { Link } from 'react-router-dom';

function Upload () {
    return (
      <div className='upload'>
        <h1 className='upload__title'>Upload Video</h1>
        <UploadForm/>
        <Link className='upload__button'to='/'>
          <button className='upload__button'>CANCEL</button>
        </Link>
      </div>
    )
}

export default Upload;