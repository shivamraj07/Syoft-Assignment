import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.name || !input.email || !input.password) {
      alert("All fields are required");
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
    }
  };
  return (
    <div className="signup-page-bg-container">
      <div className="signup-page-card">
        <h2 className="signup-page-heading">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-bg-form">
            <div>
              <input
                name="name"
                value={input.name}
                onChange={(event) =>
                  setInput({
                    ...input,
                    [event.target.name]: event.target.value,
                  })
                }
                type="text"
                id="form3Example1cg"
                placeholder="Enter your name"
                className="signup-input-box form-control"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="form3Example1cg">
                Your Name
              </label>
            </div>
          </div>
          <div className="signup-bg-form">
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
                id="form3Example3cg"
                placeholder="Enter your email"
                className="signup-input-box form-control"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="form3Example3cg">
                Your Email
              </label>
            </div>
          </div>
          <div className="signup-bg-form">
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
                placeholder="Enter your password"
                className="signup-input-box form-control"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="form3Example4cg">
                Password
              </label>
            </div>
          </div>
          <div>
            <button type="submit" className="signup-button">
              Create your account
            </button>
          </div>
          <p className="form-label">
            Already have an account?
            <Link to="/login" className="form-label">
              <u> Login here</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
