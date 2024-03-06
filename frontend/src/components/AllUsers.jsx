import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../Links";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
          const response = await axios.get(`${API_URL}/all-users`);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
      try {
          const response = await axios.delete(`${API_URL}/user/${id}`);
      }
      catch (e) {
          console.log(e);
      }
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div className="container mt-5">
      <h1>User List</h1>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
