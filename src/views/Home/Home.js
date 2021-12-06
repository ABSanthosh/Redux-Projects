import "./Home.scss";
import { useState } from "react";
import deleteBin from "../../Assets/Img/delete.png";
import { useStore } from "../../Store/Store";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useStore.todo();

  const handleSubmit = (item) => {
    setTodoList(() => [
      ...todoList,
      { id: Math.ceil(Math.random() * 100), text: item, completed: false },
    ]);
  };

  const handleRemoval = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    let temp = todoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });

    setTodoList(temp);
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
              handleSubmit(newTodo);

              document.querySelector(".App__input").value = "";
            }
          }}
          className="App__input"
          placeholder="Add todo"
          type="text"
        />
        {todoList.map((item, index) => (
          <div
            key={index}
            className={`App__todoItem ${
              item.completed ? "App__todoItem--completed" : ""
            }`}
          >
            <p onClick={() => handleToggle(item.id)}>{item.text}</p>
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
