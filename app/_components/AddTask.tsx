import { useState, useContext } from "react";
import { useTasksDispatch } from "../contexts/TaskContext";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
          onAddTask();
        }}
        style={{margin: '10px'}}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
