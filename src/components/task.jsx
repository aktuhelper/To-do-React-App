import { useState } from "react";
import styles from './task.module.css'; 

function Task({ onnewitem }) {
  const [todoname, settodoname] = useState("");
  const [date, setdate] = useState("");

  const handletodoname = (event) => {
    settodoname(event.target.value);
  };

  const handletododate = (event) => {
    setdate(event.target.value);
  };

  const handleaddbutton = () => {
    if(todoname===""){
      alert("Abe chutiye task toh enter kar!!")
    }else{
    onnewitem(todoname, date);
    setdate("");
    settodoname("");}
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoname}
            onChange={handletodoname}
            className={styles.inputField}
          />
        </div>
        <div className={styles.col}>
          <input
            type="date"
            value={date}
            onChange={handletododate}
            className={styles.inputField}
          />
        </div>
        <div className={styles.col}>
          <button
            className={styles.button}
            type="button"
            onClick={handleaddbutton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;
