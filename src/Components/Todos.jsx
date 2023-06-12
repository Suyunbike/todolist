import React, { useContext, useEffect } from 'react'
import { TodosContext } from '../App'


const Todos = () => {
    const { data, dispatch } = useContext(TodosContext)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'FETCH_TODOS', payload: data })
            })
    }, [])

    return (
      <div
        className='w-[80%] mx-auto h-screen mt-[150px]'>
      <h1
      className='flex justify-center items-center flex-col gap-4 font-extrabold text-4xl'>
        All Todos
        {data.length}
      </h1>
      <div
       className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-[150px] mb-[50px]'>
        {
          data.todos.map((todo) => (
            <div
            className='bg-slate-400 h-[200px] rounded-md p-4 text-white font-bold'
             key={todo.id}>
              <h1 className='h-[120px]'>{todo.title}</h1>
              <button
               className='bg-slate-900 text-white rounded-md px-4 py-2 cursor-pointer'>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
    )
}

export default Todos