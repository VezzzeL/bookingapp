import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-128">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="John"></input>
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
