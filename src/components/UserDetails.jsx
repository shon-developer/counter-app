import React from "react";

const UserDetails = ({ name, email, phone }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
    </div>
  );
};

export default UserDetails;
