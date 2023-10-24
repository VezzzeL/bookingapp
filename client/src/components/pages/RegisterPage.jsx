import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function registerUser(ev) {
    ev.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-128">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            typeof="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="login primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Already have account?{" "}
            <Link to={"/login"} className="underline text">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
