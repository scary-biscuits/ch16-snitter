  import { useSelector } from "react-redux";
  import { selectAuthenticatedUser,  } from "../../redux/userSlice";

import SneetStats from "./SneetStats";
import Reposts from "./Reposts";
import Delete from "./Delete";
import Likes from "./Likes";
import Bookmark from "./Bookmark";
  
  const SneetControls = (props) => {
//query obsolete
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    
    const token = localStorage.getItem("token")

    if (!token) return <SneetStats sneet={props.sneet}/>
    
    return ( 
    <div className="controls"><div className="stats">
<Reposts key={props.sneet.id} sneet={props.sneet}/>
<Likes sneet={props.sneet}/></div>
<div className="actions"><Bookmark sneet={props.sneet}/>
<Delete sneet={props.sneet}/></div>
                </div>
                 );
}
 
export default SneetControls;