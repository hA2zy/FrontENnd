import { useEffect, useState } from "react";

function App() {
    const [todoList, setTodoList] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/todo")
            .then((response) => response.json())
            .then((data) => setTodoList(data));
    }, []);

    const onSubmitHandler = (e) => {
        const text = e.target.text.value;
        const done = e.target.done.value;
        fetch("htp://localhost:4000/api/todo", {
            method:"POST",
            body: JSON.stringify({
                text,
                done,
            }),
        });
    };

    return (
        <div className="App">
            <h1>TODO LIST</h1>
            <form onSubmit={onSubmitHandler}>
                <input name="text" />
                <input name="done" type="checkbox" />
                <input type="submit" value={"추가"} />
            </form>
            {todoList?.map((todo) => (
                <div key={todo.id}>
                    <div>{todo.id}</div>
                    <div>{todo.text}</div>
                    <div>{todo.done ? "Y" : "N"}</div>
                </div>
            ))}
        </div>
    );
}

export default App;
