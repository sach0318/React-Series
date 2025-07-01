const Event = () => {
  const play = () => {
    alert("i got nerfed");
  };
  return (
    <>
      <div className="  container mx-auto text-center justify-center my-30  ">
        <button
          onClick={() => play}
          className=" rounded-4xl border-2 bg-pink-500 cursor-pointer h-10 w-20 shadow-2xl  "
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default Event;
