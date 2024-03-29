import { isMySneet } from "../../utils"
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticatedUser, followUser } from "../../redux/userSlice";
import LoginStatus from "../account/LoginStatus";

const Follow = (props) => {
    const authenticatedUser = useSelector(selectAuthenticatedUser);

    const dispatch = useDispatch()

  if (authenticatedUser && !isMySneet(props.user, authenticatedUser.id)) {
    return (
        <button onClick={() => {
            dispatch(followUser(props.user))
          }}>{authenticatedUser.following.includes(props.user) ? "Unfollow" : "Follow"}</button>
    )
  }

}
 
export default Follow;