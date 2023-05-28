import { useState } from "react"
import { useDispatch } from "react-redux"
import { createComment } from "../reducers/todos-slice"

const Comment = ({ id, comments }) => {
  const [commentContent, setCommentContent] = useState('')
  const username = localStorage.getItem('username')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createComment(id, commentContent))
    setCommentContent('')
  }

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <h1>{username}: {comment.comment}</h1>
        </div>
      ))}
      <form onSubmit={handleSubmit} >
        <input
          placeholder="Write your comment..."
          value={commentContent}
          className="opacity-40"
          onChange={(e) => setCommentContent(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Comment