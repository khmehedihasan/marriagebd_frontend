import { combineReducers } from "redux";
import filter from "./filter";
import home_division from "./home_division";
import education from "./education";
import working_sector from "./working_sector";
import professional_area from "./professional_area";
import living_country from "./living_country";
import heightMin from "./heightMin";
import heightMax from "./heightMax";
import ageMin from "./ageMin";
import ageMax from "./ageMax";

const rootReducer = combineReducers({
    filter,
    home_division,
    education,
    working_sector,
    professional_area,
    living_country,
    heightMin,
    heightMax,
    ageMin,
    ageMax
});

export default rootReducer;