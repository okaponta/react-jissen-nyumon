import { useContext } from "react";
import { MyAppContext } from "./HookContext";

export function HookContextChild() {
  return (
    <div id="c_child">
      <HookContextGrandchild />
    </div>
  );
}

export function HookContextGrandchild() {
  const { title, lang } = useContext(MyAppContext);
  return (
    <div id="c_grandchild">
      {title} ({lang})
    </div>
  );
}
