import { useState } from "react";
import "../App.css";
 
export default function CreateTodo() {

    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

  return (
    <div>
        <h1 className='heading'>Todo App</h1>

        <input onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} className='title' type="text" placeholder='title'/><br />

        <input onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }} className='description' type="text" placeholder='description' /><br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description: description
                }),
                headers:{
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                console.log(json);
                alert("todo added");
            })
        }} className='button'>Add a todo</button>
    </div>
  )
}
