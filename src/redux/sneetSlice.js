import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getStoredSneets, storeSneets } from "./diskutils";

const initialState = {  };
const storedData = getStoredSneets();


export const sneetSlice = createSlice({
  name: "sneet",
  initialState: storedData ? storedData : initialState,
  reducers: {
    setSneetData: (state, { payload }) => {
      state.sneetData = payload;
      storeSneets(state);
    },
    postNewSneet: (state, {payload}) => {
      const createdAt = new Date(Date.now());
      payload.created_at = createdAt.toUTCString();
  state.sneetData.push(payload);
  storeSneets(state);
    },
    deleteSneet: (state, {payload}) => {
state.sneetData.splice(state.sneetData.indexOf(payload) , 1)
    },

    incrementFavoriteCount: (state, {payload}) => {
      state.sneetData.forEach((sneet) => {
        if (sneet.id===payload) {
          sneet.favorite_count++;
          storeSneets(state);
        }
      })
    },
    decrementFavoriteCount: (state, {payload}) => {
      state.sneetData.forEach((sneet) => {
        if (sneet.id===payload) {
          sneet.favorite_count--;
          storeSneets(state);
        }
      })
    },
    repostSneet: (state, {payload}) => {
      const createdAt = new Date(Date.now());
      payload.id = nanoid();
      payload.retweeted =  true;
      payload.created_at = createdAt.toUTCString();
      state.sneetData.push(payload);
      storeSneets(state);
    },
    incrementRepostCount: (state, {payload}) => {
      state.sneetData.forEach((sneet) => {
        if (sneet.id===payload) {
          sneet.retweet_count++;
          storeSneets(state);
        }
      })
    },
    decrementRepostCount: (state, {payload}) => {
      state.sneetData.forEach((sneet) => {
        if (sneet.id===payload) {
          sneet.retweet_count--;
          storeSneets(state);
        }
      })
    },
  },
});

export const { setSneetData, postNewSneet, deleteSneet, incrementFavoriteCount, decrementFavoriteCount, repostSneet, incrementRepostCount, decrementRepostCount } = sneetSlice.actions;

export const selectSneetData = (state) => state.sneet.sneetData;

export default sneetSlice.reducer;
