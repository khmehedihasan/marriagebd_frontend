import { useCookies } from 'react-cookie';

function usePackageAuth(){
    const [cookies] = useCookies(['token2']);
		

    if(cookies.token2 === undefined){
        return({status:false});
    }else{
        return({status:true, id:cookies.token2});
    }
}

export default usePackageAuth;