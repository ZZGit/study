import React, { useState } from "react";
import { render } from "react-dom";

function App() {
    const [state, setState] = useState("CLICK ME");
    return <button onClick={() => setState("CLICKED")}>{state}</button>;
}
const component = (<div id="root"><span id="text">Hello World!</span></div>);
console.log(component);
console.log(<App />);
render(component, document.getElementById("root"));