import { configureStore } from '@reduxjs/toolkit'
import TodosReducer from '../reducers/todos-slice'
import InitialsReducer from '../reducers/initials-slice'

export const store = configureStore({
  reducer: {
    todos: TodosReducer,
    initials: InitialsReducer
  }
})