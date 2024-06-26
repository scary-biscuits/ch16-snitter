import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserData,
  setAuthenticatedUser,
  setLoginStatus,
} from "../../redux/userSlice";
import sha256 from "sha256";
import Errors from "./Errors";

const Login = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const onInput = (e) => {
    setErrors(undefined)
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    userData.forEach((item) => {
if (item.username && item.username.toLowerCase() === userInput.username.toLowerCase()) {
  console.log("user exists!")
  const hashedPassword = sha256(userInput.password + `something-random`);
  if (item.password === hashedPassword) {
    setErrors(undefined)
    dispatch(setLoginStatus(2));
    dispatch(setAuthenticatedUser(item));
   
    console.log("passwords match!")
  } else {
    setErrors({name: "Invalid username or password"});
  }
} else {
  setErrors({name: "Invalid username or password"})
}

})
  };
  return (
    <div className="login-form" onSubmit={onSubmit}>
      <form onInput={onInput}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Login</button>
      </form>
      {errors ? <Errors error={errors} /> : ""}
    </div>
  );
};

export default Login;
