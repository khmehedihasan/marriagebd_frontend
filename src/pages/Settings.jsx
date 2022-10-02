import React from 'react';
import BgContainer from '../components/BgContainer';
import NavHome from '../components/NavHome';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useAuth from '../hooks/useAuth';
import url from '../url';
import { useNavigate } from 'react-router-dom';

function Settings(){
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    const {id} = useAuth();
    const navigate = useNavigate();


    function logOut(){
        removeCookie('user',[{expires: Date.now()}]);     
        removeCookie('token2',[{expires: Date.now()}]);     
        

        fetch(`${url}/logout/${id}`,{method:'DELETE',mode:'cors',credentials:'include'}).then((data)=>data.json()).then((data)=>{
            navigate('/logIn');
        });
    }
    return(
        <>
            <NavHome /> 
            <BgContainer>
                <div className=' w-max md:w-[700px]  h-full mx-auto bg-slate-100 py-10 px-2 m-2'>
                    <div className=' flex flex-col gap-5 px-6 py-10'>
                        <Link to='/paymentDetails' className=" py-[2px] bg-orange-600 border-2 border-transparent text-white text-lg md:text-2xl hover:text-orange-600 hover:border-orange-600 hover:bg-slate-100 rounded-md px-5"><i className="fa-solid fa-hand-holding-dollar"></i> Payment & Package Details</Link>
                        <Link to='/changeProfilePicture' className=" py-[2px] bg-sky-600 border-2 border-transparent text-white text-lg md:text-2xl hover:text-sky-600 hover:border-sky-600 hover:bg-slate-100 rounded-md px-5"><i className="fa-solid fa-image"></i> Change Profile Picture</Link>
                        <Link to='/info/step_2' className=" py-[2px] bg-green-600 border-2 border-transparent text-white text-lg md:text-2xl hover:text-green-600 hover:border-green-600 hover:bg-slate-100  rounded-md px-5"><i className="fa-solid fa-address-card"></i> Change Info</Link>
                        <Link to='/login/forgotPassword' className=" py-[2px] bg-teal-600 border-2 border-transparent text-white text-lg md:text-2xl hover:text-teal-600 hover:border-teal-600 hover:bg-slate-100 rounded-md px-5"><i className="fa-solid fa-lock"></i> ChangePassword</Link>
                        <button onClick={logOut} className=" py-[2px] bg-red-600 border-2 border-transparent text-white text-left text-lg md:text-2xl hover:text-red-600 hover:border-red-600 hover:bg-slate-100 rounded-md px-5"><i className="fa-solid fa-power-off"></i> Log Out</button>
                    </div>
                </div>
            </BgContainer>
            <Footer />
        </>
    )
}

export default Settings;