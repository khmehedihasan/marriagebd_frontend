const initialState = [
    'Doctorate / Phd / MPhil',
    'Masters',
    'Bachelors',
    'FCPS / MD',
    'MBBS / BDS',
    'Undergraduate',
    'Diploma',
    'Professional Degree',
    'HSC / A-Label',
    'Others'
  ];

function search(state = initialState, action){
switch(action.type){
    case "GET_EDU":
        if(action.data.checked === true){
            const education = [...state, action.data.value];
            if(education.length === 11){
            
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

    case "GET_EDU_ALL":

        state = action.data;
        return state;

    default:
        return state;
}

}

export default search;