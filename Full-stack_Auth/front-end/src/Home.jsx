import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setMessage(res.data.Error);
          setAuth(false);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        setAuth(false);
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-4">
      {auth ? (
        <div>
          <h3>You are Athuthorized: {name}</h3>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>{message}</h1>
          <h3>Login Now</h3>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
