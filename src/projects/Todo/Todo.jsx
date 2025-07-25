import { useEffect, useState } from "react";
import { MdCheck , MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime , setDateTime] = useState("")

  const handleInput = (value) => {
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input) return;

    if(task.includes(input)) {
      setInput("")
      return;
    }

    setTask((prev)=>[...prev,input])

    setInput("")

  };



 useEffect(()=>{
   const interval = setInterval(() => {
     const now = new Date();
     const newdate = now.toLocaleDateString();
     const time = now.toLocaleTimeString();
     setDateTime(`${newdate} - ${time} `); 
   }, 1000);

    return () => clearInterval(interval)
 },[]);

const handleDelete = (value) =>{
  // console.log(value)
  const upd = task.filter((curr)=> curr !==value )
  setTask(upd)
} 

const cleanAll = () =>{
  setTask([]);
}


  return ( 
    <>
      <div className="container mx-auto text-center my-20 bg-gray-500 ">
        <div>Todo List</div>
        <h2>Date - Time {dateTime} </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInput(e.target.value)}
              className="border-2"
            />
            <div className="my-2">
              <button className="border-2" type="submit">
                Add Task
              </button>
            </div>
          </form>
          <div>
            <ul>{
              task.map((e,i) => {
                return (
                  <li  className="border-2 "  key={i}>
                    <span >{e}</span>
                    <button ><MdCheck/></button>
                    <button onClick={()=>handleDelete(e)}  ><MdDeleteForever/></button>
                  </li>
                );
              })
            }
            </ul>
          </div>
          <div>
            <button onClick={cleanAll}  >clear all</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
