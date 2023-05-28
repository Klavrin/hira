import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { modifyContent, deleteTodo, completeTodo, pinTodo } from "../reducers/todos-slice"
import { BsFillTrashFill, BsPinAngleFill, BsFillChatFill} from "react-icons/bs";
import Comment from "./comment";

const Todo = ({ id, title, content, complete, inputRef, pinned }) => {
  const [editMode, setEditMode] = useState(true)
  const [commentsOpen, setCommentsOpen] = useState(false)

  const todos = useSelector(state => state.todos)
  const comments = todos.filter(todo => todo.id === id)[0].comments
  const dispatch = useDispatch()

  const handleContentChange = (e) => {
    dispatch(modifyContent(id, e.target.value))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setEditMode(!editMode)
  } 

  const handleParagraphClick = () => {
    setEditMode(!editMode)   
  }

  return (
    <div className=" bg-white p-4 rounded-md shadow-sm flex flex-col">
      {pinned && (
        <div className="flex justify-end">
          <BsPinAngleFill size={20} className="absolute opacity-60" />
        </div>
      )}
      <div className="flex gap-2 cursor-pointer">
        <div className="flex h-full">
          <input
            type="checkbox"
            checked={complete}
            className="mt-1.5 cursor-pointer"
            onChange={() => dispatch(completeTodo(id))}
          />
      </div>

        <div className="w-full" onClick={() => dispatch(completeTodo(id))}>
          <h3 className="mb-2">{title}</h3>
          {editMode
            ? (
              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  value={content}
                  className="w-full opacity-60"
                  onChange={handleContentChange}
                />
              </form>
            ) : (<p className="opacity-60" onDoubleClick={handleParagraphClick}>{content}</p>)}

        </div>
      </div>

      <div className="w-full flex justify-end gap-3 opacity-60">
        <button onClick={() => dispatch(deleteTodo(id))}>
          <BsFillTrashFill size={15} />
        </button>
        <button onClick={() => dispatch(pinTodo(id))} className="flex items-center">
          <BsPinAngleFill size={15} />
        </button>
        <button onClick={() => setCommentsOpen(!commentsOpen)} className="flex items-center gap-1 weight font-bold">
          <BsFillChatFill size={15} />
          {comments.length}
        </button>
      </div>

      {commentsOpen && (
        <Comment id={id} comments={comments} />
      )}
    </div>
  )
}

export default Todo