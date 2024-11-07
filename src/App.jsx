/**
 * A function component that renders a paragraph tag with a simple
 * math expression as its content.
 * @returns {React.ReactElement} A paragraph tag with a simple
 * math expression as its content.
 */

import React from "react";

const App = () => {
  return <User name="omar" age={22} />;
};
const User = (props) => {
  return (
    <section>
     <h1> Name: {props.name}</h1> <h1>Age:{props.age}</h1>
    </section>
  );
};
export default App;
