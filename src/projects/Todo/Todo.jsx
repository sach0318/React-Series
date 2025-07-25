import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

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

  return ( 
    <>
      <div className="container mx-auto text-center my-20 bg-gray-500 ">
        <div>Todo List</div>
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
        </div>
      </div>
    </>
  );
};

export default Todo;
