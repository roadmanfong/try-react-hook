import React from 'react'
import TodoItem from './TodoItem';
import useTodos from './useTodos';

const Example = () => {

  const [
    todos,
    addTodo,
    removeTodo,
    toggleCompleteTodo
  ] = useTodos([])

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={() => {
        const result = window.prompt('what do you want to do?')
        if (result) {
          addTodo({ content: result, isCompleted: false })
        }
      }}>
        Add Todo
      </button>

      <ul style={{ maxWidth: 400, margin: '0 auto' }}>
        {
          todos.map((item, index) => (
            <TodoItem
              key={index}
              onRemove={()=>{
                removeTodo(index)
              }}
              onToggleComplete={()=> {
                toggleCompleteTodo(index)
              }}
              {...item}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Example
