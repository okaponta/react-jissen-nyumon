import { useEffect, useState } from "react";
import "./HookTimer.css";

export default function HookTimer({ init }) {
  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const [count, setCount] = useState(init);
  return <div className={count < 0 ? "warn" : ""}>現在のカウント：{count}</div>;
}
