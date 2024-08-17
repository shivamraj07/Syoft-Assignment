import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (!input.email || !input.password) {
      alert("All feild are required");
    } else if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };
  return (
    <div className="login-page-bg-container">
      <div className="login-page-card">
        <h2 className="login-page-heading">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="bg-form">
            <div>
              <input
                name="email"
                value={input.email}
                onChange={(event) =>
                  setInput({
                    ...input,
                    [event.target.name]: event.target.value,
                  })
                }
                type="email"
                placeholder="Enter your Email"
                id="form3Example3cg"
                className="input-box form-control"
              />
            </div>
            <div>
              <lable className="form-label" htmlFor="form3Example3cg">
                Email
              </lable>
            </div>
          </div>
          <div className="bg-form">
            <div>
              <input
                name="password"
                value={input.password}
                onChange={(event) =>
                  setInput({
                    ...input,
                    [event.target.name]: event.target.value,
                  })
                }
                type="password"
                id="form3Example4cg"
                placeholder="Enter your Password"
                className="input-box form-control"
              />
            </div>
            <div>
              <lable className="form-label" htmlFor="form3Example4cg">
                Password
              </lable>
            </div>
          </div>

          <div>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <p className="form-label">
            Don't have an account?
            <Link to="/signup" className="form-label">
              <u> Sign up</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
