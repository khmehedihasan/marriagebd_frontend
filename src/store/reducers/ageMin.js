const initialState = 18

function ageMin(state = initialState, action){

    switch(action.type){
        case "GET_AGE":
        state = action.data.min;
        return state;
        
        default:
            return state;
    }
}

export default ageMin;