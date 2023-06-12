import React, { createContext, useReducer } from 'react'
import Todos from './Components/Todos'

export const TodosContext = createContext()

const initialState = {
  todos: [],
}

const reducer = (state, action) => {
  if (action.type === 'FETCH_TODOS') {
    return {
      ...state,
      todos: action.payload,
    }
  } else {
    return state
  }
}

const App = () => { 
  const [data, dispatch] = useReducer(reducer, initialState)
  return (
    <TodosContext.Provider value={{ data, dispatch }}>
      <Todos/>
    </TodosContext.Provider>
  )
}

export default App