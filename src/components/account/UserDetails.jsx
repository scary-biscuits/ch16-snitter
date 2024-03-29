import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthenticatedUser,
  setAuthenticatedUser,
  setLoginStatus,
} from "../../redux/userSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthenticatedUser);
  return (
    <div className="logged-in-user-panel">
      <div className="logged-in-user-details"><div className="icon-username"><div className="user-icon"><img className="svg" src="./public/icons/user-solid.svg"/></div><span className="large-screen-only"><h2>{user.name}</h2></span></div><span className="large-screen-only"><p>@{user.username}</p></span></div>
      <div className="logout-button"><button
        onClick={() => {
          dispatch(setLoginStatus(false));
          dispatch(setAuthenticatedUser(undefined));
          dispatch(setLoginStatus(1));
        }}
      >
        Logout
      </button></div>
    </div>
  );
};

export default UserDetails;
