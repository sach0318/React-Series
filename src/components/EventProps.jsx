const EventProps = () => {
  const Handle = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey, hover detected!`);
  };

  const handleGreeting = () => {
    alert(`Hello there!`);
  };

  return (
    <>
      <Welcome 
        onClick={() => Handle("sachin")} 
        
        onMouseEnter={handleHover}
        onGreeting={handleGreeting}
      />
    </>
  );
};

const Welcome = (props) => {
  return (
    <>
      <div className="text-center">
        <button
        
          onClick={props.onClick} 
          className="rounded-4xl border-2 bg-pink-500 cursor-pointer h-10 w-20 shadow-2xl mx-2"
        >
          Click
        </button>
        <button 
          onMouseEnter={props.onMouseEnter}  
          className="mx-2 rounded-4xl border-2 bg-green-300 cursor-pointer h-10 w-25 shadow-2xl"
        >
          Hover ME
        </button>
        <button 
          onClick={props.onGreeting} 
          className="mx-2 rounded-4xl border-2 bg-red-400 cursor-pointer h-10 w-20 shadow-2xl"
        >
          Greeting
        </button>
      </div>
    </>
  );
};

export default EventProps;