const initialState = [
    'Dhaka',
    'Chittagong',
    'Sylhet',
    'Khulna',
    'Barisal',
    'Rajshahi',
    'Rangpur',
    'Mymensingh'
  ];

function search(state = initialState, action){
switch(action.type){
    case "GET_CITY":
        if(action.data.checked === true){
            const homeDivision = [...state, action.data.value];
            if(homeDivision.length === 9){
            
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
        // return state;

    case "GET_CITY_ALL":

        state = action.data;
        return state;

    default:
        return state;
}

}

export default search;