import SneetControls from "./Controls/SneetControls"
import Follow from "./Controls/Follow";

const Sneet = (props) => {

  return (
    <div className="card">
      <div className="sneet-title">     <div className="control-icon"><img className="svg" src="./public/icons/user-regular.svg"/></div>
           <h3>{props.sneet.user.name}</h3>
           <h3>
          {" "}<span className="font-light"> 
          @{props.sneet.user.screen_name} &mdash; {props.sneet.created_at}</span>
        </h3>
        <Follow user={props.sneet.user.id}/>
      </div>
      <div className="sneet-body">   <p>{props.sneet.text}</p></div>
   <SneetControls key={props.sneet.id} sneet={props.sneet}/>
    </div>
  );
};

export default Sneet;
