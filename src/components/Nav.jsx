import LoginStatus from "./Account/LoginStatus";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( <nav><div className="nav">
    <div className="heading">
      <div className="title-logo"><div className="logo"><img className="svg" src="./public/icons/duck-1.svg"/></div>
      <h2>Snitter</h2></div>
    <p>"So Not Twitter"</p><div>
    <ul>
          <li>
            <Link to="/"><div className="icon"><img className="svg" src="./public/icons/house-solid.svg"/></div>Home</Link>
          </li>
          <li>
            <Link to="/bookmarks"><div className="icon"><img className="svg" src="./public/icons/bookmark-regular.svg"/></div>Bookmarks</Link>
          </li>
          </ul>
    </div></div>
    <div className="user-account-manage">
      <LoginStatus />
    </div>
  </div> </nav>);
}
 
export default Nav;