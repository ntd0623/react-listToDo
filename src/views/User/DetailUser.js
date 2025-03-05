import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    const detailUser = async () => {
      //let res = await axios.get(`https://reqres.in/api/users/${params.id}`);
      let res = await axios.get(`https://reqres.in/api/users/${params.id}`);
      setUser(res.data.data);
    };
    detailUser();
  }, [params.id]);

  const handleBack = () => {
    navigate("/user");
  };

  return (
    <div>
      {user ? (
        <>
          <div>
            User'name: {user.first_name} {user.last_name}
          </div>
          <div>User's email: {user.email}</div>
          <div>
            <img src={user.avatar} />
          </div>
          <div>
            <button type="button" onClick={() => handleBack()}>
              Back
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailUser;
