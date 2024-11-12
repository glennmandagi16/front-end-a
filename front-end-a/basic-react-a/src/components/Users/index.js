import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div>
      {users.map((item) => (
        <h3 key={item.id}>{item.name}</h3>
      ))}
    </div>
  );
};

export default Users;
