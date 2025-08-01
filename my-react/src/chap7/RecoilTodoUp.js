import { useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import "../chap4/StateTodo.css";
import { todoLastIdSelector, todoListSelector } from "../store/atomUp";

export default function RecoilTodoUp() {
  const [title, setTitle] = useState("初期値");
  const [todo, setTodo] = useRecoilState(todoListSelector);
  const maxId = useRecoilValue(todoLastIdSelector);
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleAdd = () => {
    setTodo({
      type: "add",
      newItem: {
        id: maxId + 1,
        title,
        isDone: false,
      },
    });
  };
  const handleDone = (e) => {
    setTodo({
      type: "done",
      id: Number(e.target.dataset.id),
    });
  };
  const handleRemove = (e) => {
    setTodo({
      type: "remove",
      id: Number(e.target.dataset.id),
    });
  };
  return (
    <div>
      <label>
        やること：
        <input
          type="text"
          name="todo"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleAdd}>
        追加
      </button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              済
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
