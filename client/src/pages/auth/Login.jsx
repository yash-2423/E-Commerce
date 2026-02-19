import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      
      console.log(res.data);

      if (res && res.data.success) {

        toast.success(res.data.message);

        // save user
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // redirect
        navigate("/");

      } else {

        toast.error(res.data.message);

      }

    } catch (error) {

      console.log(error.response);

      toast.error(
        error.response?.data?.message || "Login failed"
      );

    }

  };

  return (
    <>
      <div className="form-container" style={{ minHeight: "90vh" }}>

        <form onSubmit={handleSubmit}>

          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>

        </form>

      </div>
    </>
  );

};

export default Login;
