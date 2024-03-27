import { addBookmark } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticatedUser } from "../../redux/userSlice";

const Bookmark = (props) => {
  const authenticatedUser = useSelector(selectAuthenticatedUser);
    const dispatch = useDispatch();

    return ( <>                <button onClick={() => {
        dispatch(addBookmark(props.sneet.id))
      }}><div className="control-icon"><img className="svg" src={authenticatedUser.bookmarked.includes(props.sneet.id) ? "./public/icons/bookmark-solid.svg" : "./public/icons/bookmark-regular.svg"}/></div></button></> );
      
}
 
export default Bookmark;