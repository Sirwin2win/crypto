import React from "react";
import logo from "../assets/images/bg7.jpg";
import logo1 from "../assets/images/btc3.avif";
// import MenuComp from "./MenuComp";
import Button from "./Button";
const Header = () => {
  return (
    <div className="w-50 mx-auto mt-5 container">
      <div className="mt-5">
        <img
          src={logo}
          height="90"
          width="90"
          className="rounded-circle loginLogo"
          alt="Logo"
        />
        <h1 className="loginText">Welcome Back!</h1>
      </div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-full">
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control"
            id="email"
            name="email"
            type="text"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
         focus:outline-none focus:shadow-outline form-control"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <input type="submit" className="form-control btn btn-primary" />
      </form>
      <Button />
    </div>
  );
};

export default Header;
