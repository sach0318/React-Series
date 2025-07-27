import React, { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoForm = ({add}) => {
  const [input, setInput] = useState({});
  const handleInput = (value) => {
    setInput({id:value, content:value , checked:false });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    add(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input.content}
        onChange={(e) => handleInput(e.target.value)}
        className="border-2"
      />
      <div className="my-2">
        <button className="border-2" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
