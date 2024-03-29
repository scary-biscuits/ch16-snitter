import LoginStatus from "./Account/LoginStatus";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( <nav><div className="nav">
    <div className="heading">
      <div className="title-logo"><div className="logo"><img className="svg" src="./public/icons/duck-1.svg"/></div>
      <span className="large-screen-only"><h2>Snitter</h2></span></div>
      <span className="large-screen-only"><p>"So Not Twitter"</p></span><div>
    <ul>
          <li>
            <Link to="/"><div className="icon"><img className="svg" src="./public/icons/house-solid.svg"/></div><span className="large-screen-only">Home</span></Link>
          </li>
          <li>
            <Link to="/bookmarks"><div className="icon"><img className="svg" src="./public/icons/bookmark-regular.svg"/></div><span className="large-screen-only">Bookmarks</span></Link>
          </li>
          </ul>
    </div></div>
    <div className="user-account-manage">
      <LoginStatus />
    </div>
  </div> </nav>);
}
 
export default Nav;