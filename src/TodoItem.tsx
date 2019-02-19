import React from 'react'

interface TodoItemProps {
  content: string,
  isCompleted: boolean,
  onRemove: any,
  onToggleComplete: any,
}

const TodoItem = (props: TodoItemProps) => {
  const {
    content,
    isCompleted,
    onToggleComplete,
    onRemove
  } = props
  return (
    <li style={{
      opacity: isCompleted ? .7 : 1,

      display: 'inline-flex',
      flexDirection: 'row',
      width: '100%',
      borderBottom: '1px solid gray',
      padding: 8
    }}>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={onToggleComplete}
      />
      <span style={{
        textDecoration: isCompleted ? 'line-through': '',
      }}>
        {content}
      </span>
      <div
        style={{
          flex: 1
        }}
      />
      <div
        onClick={onRemove}
        style={{
          cursor: 'pointer'
        }}
      >
        x
      </div>
    </li>
  )
}

export default TodoItem
