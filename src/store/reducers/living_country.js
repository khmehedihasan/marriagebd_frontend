const initialState = [
    'Bangladesh',
    'Australia',
    'Canada',
    'China',
    'Cyprus',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'India',
    'Indonesia',
    'Ireland',
    'Italy',
    'Japan',
    'Korea',
    'Kuwait',
    'Malaysia',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Oman',
    'Pakistan',
    'Qatar',
    'Russia',
    'Saudi Arabia',
    'Singapore',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sweden',
    'Switzerland',
    'Thailand',
    'United Arab Emirates',
    ' United Kingdom',
    'USA',
    'Other Countries'
  ];

function search(state = initialState, action){
switch(action.type){
    case "GET_LC":
        if(action.data.checked === true){
            const living_country = [...state, action.data.value];
            if(living_country.length === 39){
            
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

    case "GET_LC_ALL":

        state = action.data;
        return state;

    default:
        return state;
}

}

export default search;