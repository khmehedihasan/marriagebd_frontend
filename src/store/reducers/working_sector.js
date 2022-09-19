const initialState = [
    'Private Company',
    'Government / Public Sector',
    'Defense / Civil Services',
    'Business / Self Employed',
    'Not Working'
  ];

function search(state = initialState, action){
switch(action.type){
    case "GET_WS":
        if(action.data.checked === true){
            const working_sector = [...state, action.data.value];
            if(working_sector.length === 6){
            
                state = [];
                state = [...state, action.data.value];
                
            }else{
                state = [...state, action.data.value];
            }
            return state;
        }else{
            const data = state.filter((data)=>{
                return(data !== action.data.value);
            });

            state = data;
            return state;
        }

    case "GET_WS_ALL":

        state = action.data;
        return state;

    default:
        return state;
}

}

export default search;