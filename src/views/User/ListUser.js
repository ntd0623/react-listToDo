import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListUser.scss";
import { useNavigate } from "react-router-dom";

const ListUser = () => {
  const [listUsers, setListUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await axios.get("https://reqres.in/api/users");
        setListUsers(res?.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleViewUser = (user) => {
    navigate(`/user/${user.id}`);
  };

  return (
    <div className="list-users-container">
      <div className="title">Fetch all list users</div>
      <div className="list-users-content">
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => (
            <div
              className="child"
              key={item.id}
              onClick={() => handleViewUser(item)}
            >
              {index + 1} - {item.first_name} {item.last_name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListUser;
