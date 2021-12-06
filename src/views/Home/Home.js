import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import deleteBin from "../../Assets/Img/delete.png";

export default function Home() {
  const todo = useSelector((state) => state.todo);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch({
      type: "ADD",
      payload: {
        id: Math.ceil(Math.random() * 100),
        text: newTodo,
        completed: false,
      },
    });
  };

  const handleCompletion = (id) => {
    dispatch({
      type: "TOGGLE",
      payload: {
        id: id,
      },
    });
  };

  const handleRemoval = (id) => {
    dispatch({
      type: "REMOVE",
      payload: {
        id: id,
      },
    });
  };

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
              handleSubmit(e);
              document.querySelector(".App__input").value = "";
            }
          }}
          className="App__input"
          placeholder="Add todo"
          type="text"
        />
        {todo.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCompletion(item.id)}
            className={`App__todoItem ${
              item.completed ? "App__todoItem--completed" : ""
            }`}
          >
            {item.text}
            <img
              onClick={() => handleRemoval(item.id)}
              alt="Delete Item"
              src={deleteBin}
            />
          </div>
        ))}
      </header>
    </div>
  );
}
