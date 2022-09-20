const initialState = 89;

function heightMax(state = initialState, action){

    switch(action.type){
        case "GET_HEI":
        state = action.data.max;
        return state;
        
        default:
            return state;
    }
}

export default heightMax;