import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  let data;
  const fetchRepos = async () => {
    const response = await fetch(
      "https://quiet-tundra-07981.herokuapp.com/api/users"
    ).then((res) => res.json());
    data = await response.users;
    setUsers(data);
  };
  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};
const User = ({ user }) => {
  return (
    <div>
      <h3>Name : {user.name}</h3>
    </div>
  );
};
export default Users;
