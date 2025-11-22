import React from "react";

const Users = React.memo(({ getUsers }) => {
  const names = getUsers();

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
});

export default Users;
