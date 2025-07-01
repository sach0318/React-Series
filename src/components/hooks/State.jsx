import { useState } from "react";

const State = () => {
   const [value,setValue] = useState(0);
    const increase = () =>{
        setValue(()=>value+1);
    }
  return (
    <>
      <div className=" container mx-auto text-center my-50 " >
        <h1>{value}</h1>
        <button
          onClick={increase}
          className=" rounded-4xl border-2 bg-pink-500 cursor-pointer h-10 w-20 shadow-2xl  "
        >
          click me
        </button>
      </div>
    </>
  );
}

export default State