import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) return;

    // if (task.includes(input)) {
    //   return;
    // }

    const contentmatch = task.find((curr) => curr.content === content);

    if(contentmatch) return;

    setTask((prev) => [...prev,{id,content,checked}]);
  };

  const handleDelete = (value) => {
    // console.log(value)
    const upd = task.filter((curr) => curr !== value);
    setTask(upd);
  };

  const cleanAll = () => {
    setTask([]);
  };

  return (
    <>
      <div className="container mx-auto text-center my-20 bg-gray-500 ">
        <div>Todo List</div>
        <TodoDate />
        <div>
          <TodoForm add={handleSubmit} />
          <div>
            <ul>
              {task.map((curr) => {
                return <TodoList e={curr.content} i={curr.id} handleDelete={handleDelete} />;
              })}
            </ul>
          </div>
          <div>
            <button onClick={cleanAll}>clear all</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
