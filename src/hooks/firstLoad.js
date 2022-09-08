import { useEffect } from 'react';
import url from '../url';
import { useDispatch } from 'react-redux';
import { GET_FILTER_DATA } from '../store/actions/filter';

function FirstLoad(){
    const dispatch = useDispatch();

    useEffect(()=>{

        fetch(`${url}/filter`,{ method:'GET', mode:'cors', credentials:'include'}).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                dispatch(GET_FILTER_DATA(data.data));
            }
        });
        
    },[dispatch]);
}

export default FirstLoad;