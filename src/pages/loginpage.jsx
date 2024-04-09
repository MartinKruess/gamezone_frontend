import { useContext, useEffect, useState } from "react";
import { backendURL } from "../App";
import { AppContext } from "../global/useContext";
import { Navigate, useNavigate } from "react-router-dom";
import { saveInLocalStorage } from "../global/localstorage";

export const Login = () => {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    try {
      const res = await fetch(`${backendURL}/login`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      const userToken = await res.json();
      console.log("resData", userToken);
      setToken(userToken.auth);
      saveInLocalStorage("auth", userToken.auth);
      userToken.isLogedIn && navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <section className="loginPage">
      <form className="loginContainer" onSubmit={onLogin}>
        <label htmlFor="username">Login</label>
        <input name="username" type="text" id="username" />
        <label htmlFor="pw">Password</label>
        <input name="password" type="password" id="pw" />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};
