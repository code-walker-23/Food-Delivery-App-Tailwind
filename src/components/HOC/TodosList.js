import React, { useState, useEffect } from "react";

const TodosList = () => {
  const [todosList, setTodosList] = useState([]);
  const [searchText, setSearchText] = useState("");
  let filteredTodos = todosList;

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodosList(data?.slice(0, 10));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  filteredTodos = todosList.filter(({ title }) => {
    return title.toLowerCase().includes(searchText.toLowerCase());
  });

  console.log("searchtext", searchText);
  return (
    <div className="text-center">
      <h1 className="my-4 font-bold">Todos List</h1>
      <div className="m-2 p-2 bg-blue-200 text-black font-semibold">
        {console.log(searchText)}
        <input
          placeholder="search here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-2"
        ></input>
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>

      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="m-2 p-2 border border-black bg-blue-200 font-semibold "
        >
          <div>{todo.title}</div>
        </div>
      ))}
    </div>
  );
};
export default TodosList;
