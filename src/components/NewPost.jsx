import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import  {postNewSneet} from "../redux/sneetSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAuthenticatedUser } from "../redux/userSlice";

const NewPost = () => {
    const [userInput, setUserInput] = useState({});
    const dispatch = useDispatch();
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    const onInput = (e) => {
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      const sneet = { id: nanoid(), text: userInput.sneettext, favorite_count: 0, retweet_count: 0, user: {id: authenticatedUser.id, name: authenticatedUser.name, screen_name: authenticatedUser.username}};
dispatch(postNewSneet(sneet));
    };
  
    return (
      <div className="sneet-form" onSubmit={onSubmit}>
        <form onInput={onInput}>
          <div>
            <textarea name="sneet-text" id="sneettext" rows={3} cols={60} placeholder="What is happening?!"/>
          </div>
          <button className="post-button">Post</button>
        </form>
      </div> )
}
 
export default NewPost;