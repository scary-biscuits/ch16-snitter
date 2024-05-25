import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthenticatedUser,
  setAuthenticatedUser,
  setLoginStatus,
} from "../../redux/userSlice";
import Signup from "./Signup";
import axios from "axios";
import LoginStatus from "./LoginStatus";

const logout = async () => {
  const {data} = await axios.delete(`http://localhost:6001/authenticate`, {headers: {token: localStorage.getItem("token")}});
  if (data.status) {
    localStorage.removeItem("token");
    dispatch(setLoginStatus(1));
    //query obsolete
              dispatch(setLoginStatus(false));
          dispatch(setAuthenticatedUser(undefined));
  }
}

const UserDetails = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  if (token) {
  return (
    <div className="logged-in-user-panel">
      <div className="logged-in-user-details"><div className="icon-username"><div className="user-icon"><img className="svg" src="./public/icons/user-solid.svg"/></div><span className="large-screen-only"><h2>{user.name}</h2></span></div><span className="large-screen-only"><p>@{user.username}</p></span></div>
      <div className="logout-button"><button
        onClick={logout}
      >
        Logout
      </button></div>
    </div>
  );}
  {
    return <LoginStatus/>
  }
};

export default UserDetails;
