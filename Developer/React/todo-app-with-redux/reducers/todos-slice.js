import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    createTodo: {
      reducer: (state, action) => (state = [action.payload, ...state]),
      prepare: (title, complete) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content: "",
            complete,
            pinned: false,
            comments: []
          },
        };
      },
    },

    modifyContent: {
      reducer: (state, action) => (state.map(item => {
        if (item.id === action.payload.id)
          return { ...item, content: action.payload.content }
        return item
      })),
      prepare: (id, content) => {
        return {
          payload: {
            id,
            content
          }
        }
      }
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    },

    completeTodo: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload)
          return {...todo, complete: !todo.complete}
        return todo
      })
    },

    pinTodo: (state, action) => {
      return state.map(todo => {
        if (todo.id === action.payload)
          return {...todo, pinned: !todo.pinned}
        return todo
      })
    },

    createComment: {
      reducer: (state, action) => {
        return state.map(todo => {
          if (todo.id === action.payload.todoId)
            return {...todo, comments: [...todo.comments, action.payload]}
          return todo
        })
      },
      prepare: (id, comment) => {
        return {
          payload: {
            id: nanoid(),
            todoId: id,
            comment
          }
        }
      }
    }
  },
});

export const {
  createTodo,
  modifyContent,
  deleteTodo,
  completeTodo,
  pinTodo,
  createComment
} = todosSlice.actions;
export default todosSlice.reducer;
