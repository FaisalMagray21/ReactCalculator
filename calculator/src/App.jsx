import { useState } from "react";

import Buttons from "./components/Buttons";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult("Answer=" + eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
      <Buttons input={input} result={result} onButtonClick={handleClick} />
    </>
  );
}

export default App;
