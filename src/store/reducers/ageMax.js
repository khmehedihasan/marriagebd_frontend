const initialState = 18

function ageMax(state = initialState, action){

    switch(action.type){
        case "GET_AGE":
        state = action.data.max;
        return state;
        
        default:
            return state;
    }
}

export default ageMax;