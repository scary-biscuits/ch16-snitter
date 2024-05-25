import { useDispatch, useSelector } from "react-redux";
import Signup from "./Signup";
import Login from "./Login";
import UserDetails from "./UserDetails";
import { selectLoginStatus, setLoginStatus } from "../../redux/userSlice";

const LoginStatus = () => {
  const loginStatus = useSelector(selectLoginStatus);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")

  return (
    <> 
    <div className="user-account-panel">
      {loginStatus !== 2 ? (      
      <div className="buttons"><button
        onClick={() => {
          dispatch(setLoginStatus(0));
        }}
      >
        Sign up
      </button>
      <button
        onClick={() => {
          dispatch(setLoginStatus(1));
        }}
      >
        Login
      </button></div>) : ""}
      <div className="login-form">
      {loginStatus === 0 ? (
        <Signup />
      ) : loginStatus === 1 ? (
        <Login />
      ) : (
        <UserDetails />
      )}</div>
    </div>
    </>
  );
};

export default LoginStatus;
