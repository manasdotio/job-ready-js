import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [text, setText] = useState("");
  const [fruits, setFruits] = useState(["apple", "banana", "mango", "grape"]);
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      </div>
      <button onClick={() => setIsOn((perv) => !perv)}>
        {isOn == true ? "On" : "Off"}
      </button>
      <input
        type="text "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {fruit}
            <button
              onClick={() => setFruits(fruits.filter((f) => f !== fruit))}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Counter;
