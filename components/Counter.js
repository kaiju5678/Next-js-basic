"use client";
import { useState } from "react";


export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Click</button>
      <p>Current Count: {number}</p>
    </div>
  );
}