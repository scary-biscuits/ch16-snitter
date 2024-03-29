import { createSlice, nanoid } from "@reduxjs/toolkit";
import sha256 from "sha256";
import { getStoredUsers, storeUsers } from "./diskutils";


const initialState = { loginStatus: 0, userData: []  };

const storedData = getStoredUsers();

export const userSlice = createSlice({
  name: "user",
  initialState: storedData ? storedData : initialState,
  reducers: {
    setNewUserData: (state, {payload} ) => {

  payload.id = nanoid();
  payload.bookmarked = [];
  payload.liked = [];
  payload.reposted = [];
  payload.following = [];
  payload.followers_count = 0;
  payload.password = sha256(payload.password + `something-random`);
 const user = payload;
 state.userData.push(user);
      storeUsers(state);
    },
    setLoginStatus: (state, { payload }) => {
      state.loginStatus = payload;
      storeUsers(state);
    },
    setAuthenticatedUser: (state, {payload})  => {
      state.loggedIn = true;
      state.authenticatedUser = payload;
      storeUsers(state);
    },
    addBookmark: (state, {payload}) => {
      state.userData.forEach((user) => { 
      if (user.username === state.authenticatedUser.username) {
if (!user.bookmarked.includes(payload) ) {
                user.bookmarked.push(payload);
                state.authenticatedUser.bookmarked.push(payload);}
                else {user.bookmarked.splice(user.bookmarked.indexOf(payload) , 1);
                  state.authenticatedUser.bookmarked.splice(state.authenticatedUser.bookmarked.indexOf(payload) , 1)
                }
      }
      storeUsers(state);
      })
    },
    addLikedPost: (state, {payload}) => {

      state.userData.forEach((user) => { 
 
      if (user.username === state.authenticatedUser.username) {
if (!user.liked.includes(payload) ) {
                user.liked.push(payload);
                state.authenticatedUser.liked.push(payload);}
                else {user.liked.splice(user.liked.indexOf(payload) , 1);
                  state.authenticatedUser.liked.splice(state.authenticatedUser.liked.indexOf(payload) , 1)
                }
      }
      storeUsers(state);
      })
    },
    addReposted: (state, {payload}) => {
      state.userData.forEach((user) => { 
      if (user.username === state.authenticatedUser.username) {
if (!user.reposted.includes(payload) ) {
                user.reposted.push(payload);
                state.authenticatedUser.reposted.push(payload);}
                else {user.reposted.splice(user.reposted.indexOf(payload) , 1);
                  state.authenticatedUser.reposted.splice(state.authenticatedUser.reposted.indexOf(payload) , 1)
                }
      }
      storeUsers(state);
      })
    },
    followUser: (state, {payload}) => {
      if (state.authenticatedUser.username) {
        const authenticatedUserIndex = state.userData.findIndex((element) => element.id==state.authenticatedUser.id)
        const followedUserIndex = state.userData.findIndex((element) => element.id==payload)
        if (!state.authenticatedUser.following.includes(payload) ) {
   
          console.log(authenticatedUserIndex, followedUserIndex)
          state.userData[authenticatedUserIndex].following.push(payload);
                        state.authenticatedUser.following.push(payload);
                        state.userData[followedUserIndex].followers_count++}
                        else {state.userData[authenticatedUserIndex].following.splice(state.userData[authenticatedUserIndex].following.indexOf(payload) , 1);
                          state.authenticatedUser.following.splice(state.authenticatedUser.following.indexOf(payload) , 1)
                          state.userData[followedUserIndex].followers_count--
                        }

      
    }
  },
}});

export const { setNewUserData, setLoginStatus, setAuthenticatedUser, addBookmark, addLikedPost, addReposted, followUser } =
  userSlice.actions;

export const selectUserData = (state) => state.user.userData;
export const selectLoginStatus = (state) => state.user.loginStatus;
export const selectAuthenticatedUser = (state) => state.user.authenticatedUser;

export default userSlice.reducer;
