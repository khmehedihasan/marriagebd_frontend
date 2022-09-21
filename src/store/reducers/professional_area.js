const initialState = [
    'Accounting & Banking',
    'Administration & HR',
    'Advertising & Media',
    'Agriculture',
    'Airline & Aviation',
    'Architecture & Design',
    'Artists & Animators',
    'Beauty & Fashion',
    'Defense',
    'Education & Training',
    'Engineering',
    'IT & Software Engineering',
    'Legal',
    'Medical & Healthcare',
    'Sales & Marketing',
    'Business & Others',
    'Not-Working'
  ];

function search(state = initialState, action){
switch(action.type){
    case "GET_PA":
        if(action.data.checked === true){
            const professional_area = [...state, action.data.value];
            if(professional_area.length === 18){
            
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

    case "GET_PA_ALL":

        state = action.data;
        return state;

    default:
        return state;
}

}

export default search;