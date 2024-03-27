import React from "react";
import { useSelector } from "react-redux";
import { selectSneetData } from "../redux/sneetSlice";
import Sneet from "./Sneet";
import Resneet from "./Resneet";

const Sneets = () => {
  const sneetData = useSelector(selectSneetData).toReversed();
  
  if (!sneetData) return <p>Loading...</p>;

  return sneetData.map((sneet) => { if (!sneet.retweeted){
    return <Sneet key={sneet.id} sneet={sneet} />;
}
return <Resneet key={sneet.id} sneet={sneet} original={sneetData.find((item)=> item.id===sneet.original.id)}/>
});
};

export default Sneets;
