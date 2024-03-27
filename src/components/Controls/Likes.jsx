import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticatedUser, addLikedPost } from "../../redux/userSlice";
import { incrementFavoriteCount, decrementFavoriteCount } from "../../redux/sneetSlice";


const Likes = (props) => {
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    const dispatch = useDispatch();

    return (           <div className="likes">
    <button
  style={{
    color: authenticatedUser.liked.includes(props.sneet.id) ? "#ff6d90" : "#ffffff",
  }}
  onClick={() => {
    dispatch(addLikedPost(props.sneet.id));
    !authenticatedUser.liked.includes(props.sneet.id) ? dispatch(incrementFavoriteCount(props.sneet.id)) : dispatch(decrementFavoriteCount(props.sneet.id)) 
  }}
>
<div className="control-button"><div className="control-icon"><img className="svg" src={authenticatedUser.liked.includes(props.sneet.id) ? "./public/icons/heart-solid.svg" : "./public/icons/heart-regular.svg"}/></div> {props.sneet.favorite_count}</div> 
</button>
    </div>  );
}
 
export default Likes;