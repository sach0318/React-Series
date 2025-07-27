import React, { useEffect, useState } from "react";

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newdate = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDateTime(`${newdate} - ${time} `);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2>Date - Time {dateTime} </h2>;
};

export default TodoDate;
