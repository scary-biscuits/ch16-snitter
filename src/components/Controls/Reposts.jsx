import { isMySneet } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthenticatedUser, addReposted } from "../../redux/userSlice";
import { repostSneet, incrementRepostCount, decrementRepostCount, deleteSneet, selectSneetData } from "../../redux/sneetSlice";


const Reposts = (props) => {
    const authenticatedUser = useSelector(selectAuthenticatedUser);
    const sneetData = useSelector(selectSneetData);
    const dispatch = useDispatch();

    return (  <div className="reposts">

    <button
        style={{
            color: authenticatedUser.reposted.includes(props.sneet.id) ? "#00ff33" : "#ffffff",
            }}
        onClick={() => {if (!isMySneet(props.sneet.user.id, authenticatedUser.id)) {
    const repost = {original: props.sneet, user: {id: authenticatedUser.id, name: authenticatedUser.name, screen_name: authenticatedUser.username}};
dispatch(addReposted(props.sneet.id));
if (!authenticatedUser.reposted.includes(props.sneet.id)) {
dispatch(incrementRepostCount(props.sneet.id)) ;
dispatch(repostSneet(repost))
} 
else {
dispatch(decrementRepostCount(props.sneet.id));
dispatch(deleteSneet(sneetData[sneetData.findIndex((item) => item.original && authenticatedUser.reposted.includes(item.original.id))].id)); 
         } }}}
         
>
<div className="control-button"><div className="control-icon"><img className="svg" src={authenticatedUser.reposted.includes(props.sneet.id) ? "./public/icons/retweet-solid-green.svg" : "./public/icons/retweet-solid.svg"}/></div>{props.sneet.retweet_count > 999 ? `${Math.round(props.sneet.retweet_count/100)/10}k` : props.sneet.retweet_count}  </div> 
</button>

    
    </div>  );
}
 
export default Reposts;