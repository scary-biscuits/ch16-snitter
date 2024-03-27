import SneetControls from "./Controls/SneetControls"

const Resneet = (props) => {

  return (
    <div className="card">
      <div className="sneet-header">
        <div className="control-icon"><img className="svg" src="./public/icons/retweet-solid-grey.svg"/></div>
      <div className="repost-status"> <h3>{props.sneet.user.name} reposted </h3></div></div>
      <div className="sneet-title">
      <div className="control-icon"><img className="svg" src="./public/icons/user-regular.svg"/></div>
        <h3>{props.original.user.name}</h3><h3>
       <span className="font-light"> 
          {" "}
          @{props.original.user.screen_name} &mdash; {props.original.created_at}
        </span></h3>
      </div>
      <div className="sneet-body">   <p>{props.original.text}</p></div>
   <SneetControls key={props.sneet.id} sneet={props.original}/>
    </div>
  );
};

export default Resneet;
