// UserDetails.js

import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ userData }) => {
  const { userId } = useParams();
  const user = userData.find((user) => user.id === parseInt(userId, 10));

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="userdetail">
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
    </div>
  );
};

export default UserDetails;
