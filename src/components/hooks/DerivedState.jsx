import { useState } from "react";

const DerivedState = () => {

    const [users,] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Sean", age: 60 },
        { name: "Brandy", age: 80 },
      ])

      const len = users.length;
      const avg = (users.reduce((acc,curr)=> acc+curr.age,0))/len;
      
  return (
    <>
      <div className=" container mx-auto text-center bg-gray-500 text-white py-50  ">
        <h1>Users List</h1>
        <ul className=" my-2 " >
          {users.map((cur, ind) => {
            return (
              <>
                <li className=" my-2 " key={ind}>
                  {cur.name} - {cur.age} years old
                </li>
              </>
            );
          })}
        </ul>
        <h2>count of users : {len} </h2>
        <h2>Avg age of users : {avg} </h2>
      </div>
    </>
  );
};

export default DerivedState;
