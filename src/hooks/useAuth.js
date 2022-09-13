import { useCookies } from 'react-cookie';

function useAuth(){
    const [cookies] = useCookies(['user']);
		

    if(cookies.user === undefined){
        return({status:false});
    }else{
        return({status:true, id:cookies.user});
    }
}

export default useAuth;