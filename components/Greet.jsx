import React from "react";
const Greet = () => {
  const nname = "omar";
const date = new Date();
  return (
    <div>
      <h1> hello {nname}</h1>
      <p>todays date is {date.getDate()}</p>
    </div>
  );
};
export default Greet;
