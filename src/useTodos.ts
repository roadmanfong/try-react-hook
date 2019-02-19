import { useState } from "react";
import { ITodo } from "./ITodo";

const useTodos = (initTodos: ITodo[] = []): [
  ITodo[],
  typeof addTodo,
  typeof removeTodo,
  typeof toggleCompleteTodo
] => {
  const [todos, setTodos] = useState<ITodo[]>(initTodos)

  const addTodo = (todo: ITodo) => {
    setTodos([
      todo,
      ...todos,
    ])
  }

  const removeTodo = (index: number) => {
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ])
  }

  const toggleCompleteTodo = (index: number) => {
    setTodos(todos.map((item, eachIndex) => index === eachIndex ? {
      ...item,
      isCompleted: !item.isCompleted
    } : item))
  }
  return [
    todos,
    addTodo,
    removeTodo,
    toggleCompleteTodo
  ]
}

export default useTodos
