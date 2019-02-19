import React, { useState } from 'react'
import ThemeContext from '../constants/theme';
import TodoList from './TodoList';

const COLORS = [
  'white',
  'gray',
  'yellow'
]

const ThemeContainer = () => {

  const [todoItemBgColor, setTodoItemBgColor] = useState('white')

  return (
    <ThemeContext.Provider value={{
      backgroundColor: todoItemBgColor
    }}>
      <h1>Todos</h1>
      <label>theme{' '}</label>
      <select onChange={
        (event) => {
          setTodoItemBgColor(event.target.value)
        }
      }>
        {
          COLORS.map(item => (
            <option value={item} key={item}>{item}</option>
          ))
        }
      </select>
      <br />
      <br />
      <TodoList />

    </ThemeContext.Provider>
  )
}

export default ThemeContainer