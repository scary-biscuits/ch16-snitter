import React from "react";
import { useSelector } from "react-redux";
import { selectSneetData } from "../redux/sneetSlice";
import { selectAuthenticatedUser } from "../redux/userSlice"; 
import Sneet from "./Sneet";

const Bookmarks = () => {
  const sneetData = useSelector(selectSneetData);
  const authenticatedUser = useSelector(selectAuthenticatedUser)

const bookmarkedSneetData = sneetData.filter((sneet)=>authenticatedUser.bookmarked.includes(sneet.id))

  if (!bookmarkedSneetData) return <p>no bookmarks saved</p>;

  return bookmarkedSneetData.map((sneet) => {
    return <Sneet key={sneet.id} sneet={sneet} />;
  }).toReversed();
};

export default Bookmarks;
