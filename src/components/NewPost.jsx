import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import  {postNewSneet} from "../redux/sneetSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAuthenticatedUser } from "../redux/userSlice";
import Joi from "joi";
import Errors from "./account/Errors";

const NewPost = () => {
    const [userInput, setUserInput] = useState({});
    const dispatch = useDispatch();
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    const [errors, setErrors] = useState();

    const schema = {
      sneettext: Joi.string().min(1).max(160),
    };

    const onInput = (e) => {
      setErrors(undefined)
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      
    const joiTest = { ...userInput };
    const _joiInstance = Joi.object(schema);

    try {
      await _joiInstance.validateAsync(joiTest);
      setErrors(undefined);
      const sneet = { id: nanoid(), text: userInput.sneettext, favorite_count: 0, retweet_count: 0, user: {id: authenticatedUser.id, name: authenticatedUser.name, screen_name: authenticatedUser.username}};
dispatch(postNewSneet(sneet));
    } catch (e) {
        setErrors({name: "If you can't say it in under 160 characters it's not worth saying"});
    }

    };
  
    return (
      <div className="sneet-form" onSubmit={onSubmit}>
        <form onInput={onInput}>
          <div>
            <textarea name="sneet-text" id="sneettext" rows={3} cols={60} placeholder="What is happening?!"/>
          </div>
          <button className="post-button">Post</button>
        </form>
        {errors ? <Errors error={errors} /> : ""}
      </div> )
}
 
export default NewPost;