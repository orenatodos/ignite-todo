import clipboardImg from '../../assets/images/clipboard.png'

import styles from './EmptyList.module.css'

export function EmptyList(){
  return (
    <div className={styles.emptyList}>
      <img src={clipboardImg} alt="" />

      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
