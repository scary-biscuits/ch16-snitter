import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNewUserData, setLoginStatus } from "../../redux/userSlice";
import Joi from "joi";
import Errors from "./Errors";

const Signup = () => {
  const [userInput, setUserInput] = useState({});
  const [errors, setErrors] = useState();

  const dispatch = useDispatch();

  const schema = {
    name: Joi.string().min(3).max(30),
    username: Joi.string().alphanum().min(3).max(30).allow("-", "_"),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().alphanum().min(8)
  };
  
  const onInput = async (e) => {
   
    const newUserInput = { [e.target.id]: e.target.value };
    const _joiInstance = Joi.object(schema);

    try {
      await _joiInstance.validateAsync(newUserInput);
      setErrors(undefined);
      setUserInput({ ...userInput, ...newUserInput });
    } catch (e) {
      const errorsMod = {};
      setTimeout(() => {
        e.details.forEach((error) => {
          errorsMod[error.context.key] = error.message;
        });
        console.log(errors);
        setErrors(errorsMod);
      }, 3000);
    }

  };

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(undefined);
    if(userInput.name){
    dispatch(setNewUserData(userInput));
    dispatch(setLoginStatus(1))
    }
    else {
      setErrors({name: "You can't sign up without giving your details!"})
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
