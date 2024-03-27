import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUserData } from "../../redux/userSlice";

const Signup = () => {
  const [userInput, setUserInput] = useState({});

  const dispatch = useDispatch();

  const onInput = (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setNewUserData(userInput));
  };

  return (
    <div className="signup-form" onSubmit={onSubmit}>
      <form onInput={onInput}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
