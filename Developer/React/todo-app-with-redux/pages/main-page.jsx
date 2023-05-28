import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo } from "../reducers/todos-slice";
import Todo from "../components/todo";

const MainPage = () => {
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);
  const inputRef = useRef()

  const username = useSelector((state) => state.initials.username);
  const todos = useSelector((state) => state.todos);
  const completeTodos = todos.filter(todo => !todo.complete)
  const unpinnedTodos = todos.filter(todo => !todo.pinned)
  const pinnedTodos = todos.filter(todo => todo.pinned)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(title, complete));
    setTitle("");
    setTimeout(() => {
      inputRef.current.focus()
    }, 0)
  };

  return (
    <div className="w-[60%] mx-auto my-10 ">
      <div>
        <h1 className="font-bold text-4xl">Welcome back, {username}</h1>
        <h2 className="text-2xs opacity-80">
          You`ve got {completeTodos.length} tasks coming up in the next days.
        </h2>
      </div>

      <div className="mx-4 mt-10 flex flex-col items-center">
        <form className="w-full flex gap-2 mb-4" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            onChange={(e) => setComplete(e.target.checked)}
          />
          <input
            className="bg-[#f6f6f6] w-full text-[#a5a5a6]"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>

        <div className="flex flex-col gap-2 w-full">
          {pinnedTodos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              complete={todo.complete}
              inputRef={inputRef}
              pinned={true}
            />
          ))}
          {unpinnedTodos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
              complete={todo.complete}
              inputRef={inputRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
