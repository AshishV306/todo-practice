import "..App";
 
export default function CreateTodo() {
  return (
    <div>
        <h1 className='heading'>Todo App</h1>
        <input className='title' type="text" placeholder='title'/><br />
        <input className='description' type="text" placeholder='description' /><br />

        <button className='button'>Add a todo</button>
    </div>
  )
}
