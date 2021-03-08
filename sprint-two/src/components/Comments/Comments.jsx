import './Comments.scss'

function Comments (props) {
  return(
    props.comments.comments.map(comment => {
      let time = new Date (props.comments.timestamp)
      let cDate = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
      return (
        <div className='comments__display' key={comment.id}>
          <img className='comments__image' src='http://placekitten.com/200/300' alt='user photo'/>
          <div className='comments__old'>
            <div className='comments__heading'>
              <h3 className='comments__username'>{comment.name}</h3>
              <p className='comments__date'>{cDate}</p>
            </div>
            <p className='comments__comment'>{comment.comment}</p>      
          </div> 
        </div>
      )
    })
     
  )
}

export default Comments; 