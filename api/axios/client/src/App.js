import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const SERVER_URL = "http://localhost:4000/api/todo";
  const axiosData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);

    // axios
    //   .get("http://localhost:4000/api/todo")
    //   .then((data) => setTodoList(data));
  };

  useEffect(() => {
    axiosData();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;
    axios.post(SERVER_URL, { text, done });
    axiosData();
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="text" />
        <input name="done" type="checkbox" />
        <input type="submit" value="추가" />
      </form>
      {todoList.map((todo) => (
        <div key={todo.id} style={{ display: "flex" }}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? "Y" : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
