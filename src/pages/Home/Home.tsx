
import igniteTodoLogoImg from '../../assets/images/ignite-todo-logo.svg'

import { EmptyList } from '../../components/EmptyList'
import { TodoCard } from '../../components/TodoCard'

import { useHome } from './useHome'

import styles from './Home.module.css'

export function Home(){
  const {
    error,
    handleAddNewTodo,
    handleCompleteTodo,
    handleRemoveTodo,
    handleTodoTitleChange,
    todoListIsEmpty,
    todoTitle,
    todos,
    todosCompleted,
    todosCreated
  } = useHome()

  return (
    <>
      <header className={styles.header}>
        <img src={igniteTodoLogoImg} alt="Ignite Todo" />
      </header>

      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleAddNewTodo}>
          <div>
            <input
              type="text"
              placeholder='Adicione uma nova tarefa'
              className={`${styles.input} ${error && styles.isError}`}
              value={todoTitle}
              onChange={handleTodoTitleChange}
            />
            <button type="submit" className={styles.button}>
              <span>Criar</span>
              <i className="ph-bold ph-plus-circle"></i>
            </button>
          </div>

          {error && (
            <span className={styles.formErrorMessage}>
              <i className="ph ph-warning-circle"></i>
              {error}
            </span>)}
        </form>

        <div className={styles.headerList}>
          <strong>Tarefas criadas <span>{todosCreated}</span></strong>

          <strong>Concluídas <span>{todosCompleted}</span></strong>
        </div>

        {todoListIsEmpty ? (
          <EmptyList />
        ) : (
          <>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              isCompleted={todo.isCompleted}
              title={todo.title}
              onRemove={handleRemoveTodo}
              onComplete={handleCompleteTodo}
            />
          ))}
          </>
        )}
      </main>
    </>
  )
}
