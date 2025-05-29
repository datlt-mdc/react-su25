import { useState } from "react";

export function Counter() {
  // let count = 0;
  const [count, setCount] = useState(2);

  function onIncreaseButtonClicked() {
    console.log("Increase button clicked");
    // count++;
    setCount(count + 1);
    console.log("Count after increased", count)
  }

  const onDecreaseButtonClicked = () => {
    console.log("Decrease button clicked")
    setCount(count - 1)
  }
  return (
    <div>
      <div>{count}</div>

      <div>
        <button onClick={onIncreaseButtonClicked}>Tang</button>
        <button onClick={onDecreaseButtonClicked}>Giam</button>
      </div>
    </div>
  );
}
