import { useState } from 'react'

import styles from './TodoCard.module.css'

type TodoCardProps = {
  id: number
  title: string
  isCompleted: boolean
  onRemove(id: number): void
  onComplete(id: number): void
}

export function TodoCard({
  id,
  title,
  isCompleted,
  onComplete,
  onRemove
}: TodoCardProps){
  const [todoIsCompleted, setTodoIsCompleted] = useState(isCompleted)

  function handleCompleteTodoChange(){
    setTodoIsCompleted((prevState) => !prevState)

    onComplete(id)
  }

  return (
    <div className={`${styles.todoCard} ${todoIsCompleted && styles.isCompleted}`}>
      <input
        type="checkbox"
        checked={todoIsCompleted}
        onChange={handleCompleteTodoChange}
      />
      <p>{title}</p>
      <button
        type="button"
        aria-label="Excluir tarefa"
        onClick={() => onRemove(id)}
      >
        <i className="ph ph-trash"></i>
      </button>
    </div>
  )
}
