import React from "react";

import { useState, useEffect } from "react";

const Use = () => {
  const [name, setName] = useState("Yuvraj");
  const [count, setCount] = useState(600);
  console.log(count)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  });
  return (
    <div className="card w-50">
      <h1> {count}</h1>
      <> 
        <h3>
        {name}. You are  Time Remaine{count} Sec.
        </h3>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {/* <button className="w-25" onClick={() => setCount(count)}>
          {" "}
          age
        </button> */}

        <p>You {count ? "Count" : "did not count a age"} this.</p>
      </>
    </div>
  );
};

export default Use;
