import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserData,
  setAuthenticatedUser,
  setLoginStatus,
} from "../../redux/userSlice";
import sha256 from "sha256";

const Login = () => {
  const [userInput, setUserInput] = useState({});

  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    userData.forEach((item) => {
if (item.username.toLowerCase() === userInput.username.toLowerCase()) {
  const hashedPassword = sha256(userInput.password + `something-random`);
  if (item.password === hashedPassword) {
   
    dispatch(setLoginStatus(2));
    dispatch(setAuthenticatedUser(item));
    console.log("passwords match", item);
  } else {
    console.log("incorrect password");
  }
} else {
  console.log("user not found")
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
    </div>
  );
};

export default Login;
