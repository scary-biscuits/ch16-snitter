import { useSelector } from "react-redux";
import { selectSneetData } from "../redux/sneetSlice";
import Signup from "./Account/signup";
import Bookmarks from "./Bookmarks";
import MainFeed from "./MainFeed";
import { Link, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Following from "./Following";

const Interface = () => {
  const sneetData = useSelector(selectSneetData);
  return (
    <div className="container">
      <header>
<Nav/>
      </header>
      <main><div className="sneets-display">
        <div className="top-links">
      <Link to="/">For you</Link>
      <Link to="/following">Following</Link></div>
<Routes>
        <Route index element={
        <MainFeed/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
        <Route path="/following" element={<Following/>} />
        </Routes></div>
     </main>
      <footer></footer>
    </div>
  );
};

export default Interface;
