import "./style.css";

import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-container">
      {listOfUser.map((user) => (
        <div className="user-card" key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
