  import { useSelector } from "react-redux";
  import { selectAuthenticatedUser,  } from "../../redux/userSlice";

import SneetStats from "./SneetStats";
import Reposts from "./Reposts";
import Delete from "./Delete";
import Likes from "./Likes";
import Bookmark from "./Bookmark";
  
  const SneetControls = (props) => {

    const authenticatedUser = useSelector(selectAuthenticatedUser);


    if (!authenticatedUser) return <SneetStats sneet={props.sneet}/>
    
    return ( 
    <div className="controls">
<Reposts key={props.sneet.id} sneet={props.sneet}/>
<Likes sneet={props.sneet}/>
<Bookmark sneet={props.sneet}/>
<Delete sneet={props.sneet}/>
                </div>
                 );
}
 
export default SneetControls;