import { combineReducers } from "redux";
import filter from "./filter";
import home_division from "./home_division";
import education from "./education";
import working_sector from "./working_sector";

const rootReducer = combineReducers({
    filter,
    home_division,
    education,
    working_sector
});

export default rootReducer;