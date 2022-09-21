const initialState = "Female";

function gender(state = initialState, action){

    switch(action.type){
        case "GET_GEN":
        state = action.data;
        return state;
        
        default:
            return state;
    }
}

export default gender;