import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUserData, setLoginStatus } from "../../redux/userSlice";
import Joi from "joi";
import Errors from "./Errors";
import axios  from "axios";

const Signup = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();

  const dispatch = useDispatch();

  const schema = {
    name: Joi.string().min(3).max(30).required(),
    username:  Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().alphanum().min(8).required()
  };

  const onInput =  (e) => {
    setUserInput({ ...userInput, [e.target.id]: e.target.value  });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUserInput = { ...userInput };
    const _joiInstance = Joi.object(schema);

    if(newUserInput.username) {
    try {
      await _joiInstance.validateAsync(newUserInput);
      setErrors(undefined);

      //send it to the store - now obsolete
      // dispatch(setNewUserData(newUserInput));

      //send it to api instead

const {data} = await axios.post("http://localhost:6001/user", userInput);
console.log(data);


      dispatch(setLoginStatus(1))
    } catch (e) {
        setErrors({message: e.message})
    }
  }
    else {
      setErrors({message: "You can't sign up without giving your details!"})
    }
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
      {errors ? <Errors error={errors} /> : ""}
    </div>
  );
};

export default Signup;
