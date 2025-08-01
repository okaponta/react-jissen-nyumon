import { useEffect, useState } from "react";

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState("hoge");

  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={() => setHoge(Date.now())}>HOGE ({hoge})</button>
      <button onClick={handleClick}>Count ({count})</button>
      <p>{count}回カウントされました</p>
    </>
  );
}
