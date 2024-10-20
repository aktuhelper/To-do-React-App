import styles from './task2.module.css';

function Task2({ todoName, todoDate ,onDeleteClick}) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          {todoName}
        </div>
        <div className={styles.col}>
          {todoDate}
        </div>
        <div className={styles.col}>
          <button className={`${styles.button} ${styles.buttonSpacing}`} type="button" onClick={()=>onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task2;
