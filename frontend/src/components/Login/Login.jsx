import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeText, setWelcomeText] = useState(""); // State to store the animated text

  useEffect(() => {
    const welcomeTextToType = "Welcome Back";

    let currentIndex = 0;
    const typingInterval = 250;

    const intervalId = setInterval(() => {
      if (currentIndex <= welcomeTextToType.length) {
        setWelcomeText(welcomeTextToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="emptyContainer">
        <div className="greeting">
          <Typography variant="h3">
            {welcomeText}
            <span className="blinking-dot">_</span>
          </Typography>
        </div>
        <div className="welcomen">
          <Typography>
            We missed your positive energy, and we're thrilled to have you back
          </Typography>
        </div>
      </div>
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>
            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
