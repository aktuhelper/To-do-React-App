import Task2 from "./components/task2";

function Todoitems({todoitems,onDeleteClick}){
      return(
        <div className="item-container">
           {todoitems.map(item=> <Task2 todoDate={item.duedate} todoName={item.name} onDeleteClick={onDeleteClick}/>)}
        </div>
      )
}
export default Todoitems