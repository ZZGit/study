import React, { useState } from "react";
//import { render } from "react-dom";
import { render } from "./zreact-dom";

function App() {
  const [state, setState] = useState("CLICK ME");
  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}
const component = (
  <div id="root" style={{ color: "red" }}>
    <h2>Welcome</h2>
    <span id="text">Hello World!</span>
  </div>
);
console.log(component);
console.log(<App />);
render(component, document.getElementById("root"));
