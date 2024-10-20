import Appname from "./components/heading";
import Task from './components/task.jsx';
import Todoitems from "./todoitems";
import { useState } from "react";
import Welcome from "./welcome";
function App() {
    const todoitems=[
  
];
const [todoitem,settoditem]=useState(todoitems)
const handlenewitem=(itemName,itemDueDate)=>{

    const newtodoitem=[
        ...todoitem,{name:itemName,duedate:itemDueDate},
    ];
    settoditem(newtodoitem)
}
    const handledelete=(todoitemName)=>{
    const newtodoItem= todoitem.filter(item=>item.name !== todoitemName)
    settoditem(newtodoItem);
}
    return (
        <div>
            <center className="todo-container">
                <Appname />
                <Task onnewitem={handlenewitem} />
                {todoitem.length===0 && <Welcome/>}
                <Todoitems todoitems={todoitem} onDeleteClick={handledelete}/>
          
            </center>
        </div>
    );
}

export default App;
