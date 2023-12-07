import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ userData }) => {
  const { id } = useParams();

  // Find the user data based on the id parameter
  const user = userData.find((user) => user.id.toString() === id);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <img src={user.avatar} alt={`Avatar of ${user.first_name}`} />
      {/* Additional user details */}
    </div>
  );
};

export default UserDetails;
