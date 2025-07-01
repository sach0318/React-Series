import { useState } from "react";

const LiftStateUp = () => {
    const [input, setInput] = useState("");
  return (
    <>
      <InputComponent input={input} setInput={setInput} />
      <DisplayComponent input={input} />
    </>
  );
};

const InputComponent = ({input,setInput}) => {
 
  return (
    <>
      <input type="text" placeholder="Enter Your Name" value={input} className="border-2"
      onChange={(e)=>setInput(e.target.value)}
      
      />
    </>
  );
};

const DisplayComponent = ({input}) => {
  return <p>hello sir fuck you {input} </p>;
};

export default LiftStateUp;