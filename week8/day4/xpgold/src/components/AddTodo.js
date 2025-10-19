import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text) return alert("Enter a todo!");
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Add a todo" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}
