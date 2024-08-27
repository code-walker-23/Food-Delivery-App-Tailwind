import React, { useState, useEffect } from "react";
import TodosList from "./TodosList";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [searchText, setSearchText] = useState("");
  let filteredUser = userList;

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  filteredUser = userList.filter(({ name }) => {
    return name.toLowerCase().includes(searchText.toLowerCase());
    // return (name.indexOf(searchText) >= 0);
  });

  console.log("searchtext", searchText);
  return (
    <div className="text-center flex justify-center">
      <div className="">
        <h1 className="my-4 font-bold">Users List</h1>

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

        {filteredUser.map((user) => (
          <div
            key={user.id}
            className="m-2 p-2 border border-black bg-blue-200 font-semibold "
          >
            <div>Name : {user.name}</div>
            <div>Email : {user.email}</div>
          </div>
        ))}
      </div>

      <div>
        <TodosList />
      </div>
    </div>
  );
};
export default UserList;
