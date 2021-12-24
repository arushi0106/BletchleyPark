import { combineReducers } from "redux";
// import crossword from "./crossword";
import auth from './auth';
import newsfeed from './newsfeed';
import dashboard from './dashboard';
import crossword from "./playcrossword";
import leaderboard from "./leaderboard";
export default combineReducers({
  crossword,auth,newsfeed,dashboard,leaderboard,
});
