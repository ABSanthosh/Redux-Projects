const initState = {
  todo: [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Learn Redux", completed: false },
    { id: 3, text: "Learn React-Redux", completed: false },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
      };
    case "TOGGLE":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export { rootReducer };
