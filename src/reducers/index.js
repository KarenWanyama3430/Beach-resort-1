import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer";

export default combineReducers({
  roomsReducer: roomsReducer,
});
