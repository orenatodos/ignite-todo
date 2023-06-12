import { ChangeEvent, FormEvent, useState } from 'react'

type Todo = {
  id: number
  title: string
  isCompleted: boolean
}

export function useHome(){
  const [todoTitle, setTodoTitle] = useState('')
  const [error, setError] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const todoListIsEmpty = !todos.length
  const todosCreated = todos.length
  const todosCompleted = todos.filter((todo) => todo.isCompleted).length

  function handleTodoTitleChange(event: ChangeEvent<HTMLInputElement>){
    setError('')

    setTodoTitle(event.target.value)
  }

  function handleAddNewTodo(event: FormEvent){
    event.preventDefault()

    const todoTitleIsEmpty = !todoTitle.trim()

    if(todoTitleIsEmpty){
      return setError('Descrição da tarefa é obrigatória')
    }

    const todo = {
      title: todoTitle,
      isCompleted: false,
      id: Date.now()
    }

    setTodos((prevState) => [...prevState, todo])

    setTodoTitle('')
  }

  function handleCompleteTodo(todoId: number){
    setTodos((prevState) => prevState.map((todo) => {
      if(todo.id === todoId){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }

      return todo
    }))
  }

  function handleRemoveTodo(todoId: number){
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId))
  }

  return {
    error,
    handleAddNewTodo,
    handleCompleteTodo,
    handleRemoveTodo,
    handleTodoTitleChange,
    todoListIsEmpty,
    todoTitle,
    todos,
    todosCompleted,
    todosCreated,
  }
}
