import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Interface from "./components/Interface";
import { setSneetData } from "./redux/sneetSlice";
import "./css/App.css";
import { useSelector } from "react-redux";
import { selectSneetData } from "./redux/sneetSlice";
import { selectAuthenticatedUser, selectUserData } from "./redux/userSlice";
import LoginStatus from "./components/Account/LoginStatus";


export default function App() {
  const dispatch = useDispatch();
const sneetData = useSelector(selectSneetData);
const user = useSelector(selectAuthenticatedUser);


  const getSneetData = async () => {
    if (!sneetData) {
    const { data } = await axios.get(`http://localhost:3000/posts`);
    dispatch(setSneetData(data));}
  
  };

  useEffect(() => {if (!sneetData) {
    getSneetData();}
  }, []);

if (!user) return <LoginStatus/>
  return <Interface></Interface>;
}
