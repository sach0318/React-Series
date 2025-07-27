import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({e,handleDelete}) => {
  return (
    <li className="border-2 " >
      <span>{e}</span>
      <button>
        <MdCheck />
      </button>
      <button onClick={() => handleDelete(e)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
