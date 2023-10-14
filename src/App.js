import { useEffect, useState } from "react";
import {Todo} from "./components/todo"
import { addtodo, getalltodo, updatetodo, deletetodo } from "./utils/handleapi";

function App() {

  const [todo, settodo] = useState([])
  const[text, settext] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoid, settodoid]= useState("")

  useEffect(() => {
  getalltodo(settodo)}, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    settext(text)
    settodoid(_id)
  }



  return (
    <div className="App">
<div className="container">

<h1>ToDoApp</h1>

<div className="top">
  <input type="text" 
  placeholder="Add ToDos..."
  value={text}
  onChange={(e) =>settext(e.target.value)} />


  <div
   className="add" 
   onClick={isUpdating ? 
    () => updatetodo (todoid, text, settodo, settext, setIsUpdating) 
   : () => addtodo (text, settext, settodo)}>Add</div>
  {isUpdating ? "update" : "add"}
</div>

<div className="list">

{todo.map((item) => 
<Todo key={item._id} 
text={item.text}
updateMode={() => updateMode(item._id, item.text)} 
deletetodo= {() => deletetodo(item._id, settodo)} /> )}



</div>
</div>
    </div>
  );
}

export default App;
