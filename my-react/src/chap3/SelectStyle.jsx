import "./SelectStyle.css";
import cn from "classnames";

export default function SelectStyle({ mode }) {
  return (
    <div
      className={cn("box", [
        `panel`,
        {
          light: mode === "light",
          dark: mode === "dark",
        },
      ])}
    >
      Hello, React!
    </div>
  );
}
