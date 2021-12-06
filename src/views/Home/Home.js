import "./Home.scss";
import { useState } from "react";
import deleteBin from "../../Assets/Img/delete.png";
import { useStoreState, useStoreActions, action } from "easy-peasy";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useStoreState((state) => state.todo);

  const addTodo = useStoreActions((action) => action.addTodo);
  const removeTodo = useStoreActions((action) => action.removeTodo);
  const toggleTodo = useStoreActions((action) => action.toggleTodo);

  const handleSubmit = (e) => {};

  const handleCompletion = (id) => {};

  const handleRemoval = (id) => {};

  return (
    <div className="App">
      <header className="App__header">
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTodo({
                id: Math.ceil(Math.random() * 100),
                text: newTodo,
                completed: false,
              });
              document.querySelector(".App__input").value = "";
            }
          }}
          className="App__input"
          placeholder="Add todo"
          type="text"
        />
        {todos.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleTodo(item.id)}
            className={`App__todoItem ${
              item.completed ? "App__todoItem--completed" : ""
            }`}
          >
            {item.text}
            <img
              onClick={() => removeTodo(item.id)}
              alt="Delete Item"
              src={deleteBin}
            />
          </div>
        ))}
      </header>
    </div>
  );
}
