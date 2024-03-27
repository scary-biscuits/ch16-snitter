import { selectSneetData } from "../redux/sneetSlice";
import { selectAuthenticatedUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import Sneet from "./Sneet";
import Resneet from "./Resneet";

const Following = () => {
    const sneetData = useSelector(selectSneetData);
    const authenticatedUser = useSelector(selectAuthenticatedUser)
  
  
  const followedSneetData = sneetData.filter((sneet)=> authenticatedUser.following.includes(sneet.user.id)
      )
      console.log(followedSneetData)
  
    if (!followedSneetData) return <p>nobody followed</p>;

    return followedSneetData.map((sneet) => { if (!sneet.retweeted){
      return <Sneet key={sneet.id} sneet={sneet} />;
  }
  return <Resneet key={sneet.id} sneet={sneet} original={sneetData.find((item)=> item.id===sneet.original.id)}/>
  });
}
 
export default Following;