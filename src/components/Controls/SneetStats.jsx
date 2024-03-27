const SneetStats = (props) => {
    return (  <div className="controls">
 
     <div className="reposts">
     <p>{props.sneet.retweet_count} Reposts</p>
     </div>  
     <div className="likes">
     <p>{props.sneet.favorite_count} Likes</p>
     </div> </div> );
}
 
export default SneetStats;