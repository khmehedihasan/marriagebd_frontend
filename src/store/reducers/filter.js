const initialState = {
        education:[],
        home_division:[],
        living_country:[],
        professional_area:[],
        working_sector:[],
        height:[],
        weight:[],
}

function filter(state = initialState, action){
    switch(action.type){
        case "GET_FILTER_DATA":
            state = action.data;
            return state;
        default:
            return state;
    }

}

export default filter;