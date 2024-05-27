import { useState } from "react";

function App() {
  const [token, setToken] = useState(0);
  const increment = () => {
    token < 10 ? setToken(token + 1) : setToken(token);
  };

  const decrement = () => {
    token > 0 ? setToken(token - 1) : setToken(token);
  };

  const reset = () => {
    setToken(0);
  };
  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col items-center justify-start px-6 py-2 text-4xl pt-24">
      <h1 className="text-7xl text-cyan-500 py-12">{token}</h1>
      <div className="flex items-center gap-6">
        <button onClick={increment} className="text-5xl text-green-300">
          +
        </button>
        <button onClick={reset} className="text-2xl">
          Reset
        </button>
        <button onClick={decrement} className="text-7xl text-red-600">
          -
        </button>
      </div>
    </div>
  );
}

export default App;
