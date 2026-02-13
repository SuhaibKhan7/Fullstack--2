import React from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");

  // function heavyCalculation() {
  //   console.log("❌ Heavy calculation running...");
  //   let sum = 0;
  //   for (let i = 0; i < 1_000_000_000; i++) {
  //     sum += i;
  //   }
  //   console.log("❌ Heavy calculation finished");
  //   return sum;
  // }

  // const result = heavyCalculation(); // 🔥 runs on EVERY render

const result = React.useMemo(() => {
    console.log("✅ Heavy calculation running...");
    let sum = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      sum += i;
    }
    console.log("✅ Heavy calculation finished");
    return sum;
  }, [count]);


  return (
    <>
      {/* <h2>Result: {result}</h2> */}

      <button onClick={() => setCount(count + 1)}>
        Increase Count: {count}
      </button>

      <br /><br />

      <input
        placeholder="Type here..."
        onChange={(e) => setText(e.target.value)}
      />

      <Child result={ result} />
    </>
  );
}

export default App;