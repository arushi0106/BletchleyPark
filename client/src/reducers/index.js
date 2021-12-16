import { combineReducers } from "redux";
import crossword from "./crossword";
import auth from './auth';
export default combineReducers({
  crossword,auth
});
