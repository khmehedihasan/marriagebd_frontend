const initialState = 30;

function heightMin(state = initialState, action){

    switch(action.type){
        case "GET_HEI":
        state = action.data.min;
        // state[1] = action.data.max;
        return state;
        
        default:
            return state;
    }
}

export default heightMin;