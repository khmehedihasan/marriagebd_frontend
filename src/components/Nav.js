import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import useAuth from '../hooks/useAuth';

function Nav(){
    const [style, setStyle] = useState("bg-none");
    const [bar, setBar] = useState("-ml-[400px]");
    const { status } = useAuth();


    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 280){
            setStyle("bg-slate-100");
        }else{
            setStyle("bg-none");
        }
    });

    function toggle(){
        if(bar === "-ml-[400px]"){
            setBar("-ml-[0px]")
        }else{
            setBar("-ml-[400px]")
        }
    }

    console.log("nav")
    

    return(
        <>
            <nav className={` w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-center shadow-md transition ease-in-out duration-700 ${style}`}>
                <div className=' w-[1200px] h-full px-4 flex items-center justify-between'>
                    <Link to='/'><img src={logo} alt=" " /></Link>
                    <div className=" hidden sm:flex items-center justify-center gap-5">
                        <NavLink className={ ({isActive})=>isActive?' text-red-600 border-b border-red-600 transition ease-linear':` hover:text-red-600 border-b border-transparent hover:border-red-600 transition ease-linear `} to='/'>Home</NavLink>
                        <NavLink className={ ({isActive})=>isActive?' text-red-600 border-b border-red-600 transition ease-linear':` hover:text-red-600 border-b border-transparent hover:border-red-600 transition ease-linear `} to='/about'>About Us</NavLink>
                        <NavLink className={ ({isActive})=>isActive?' text-red-600 border-b border-red-600 transition ease-linear':` hover:text-red-600 border-b border-transparent hover:border-red-600 transition ease-linear `} to='/contact'>Contact Us</NavLink>
                        {
                            status?<NavLink className={ ({isActive})=>isActive?' text-red-600 border-b border-red-600 transition ease-linear':` hover:text-red-600 border-b border-transparent hover:border-red-600 transition ease-linear `} to='/profile'>Profile</NavLink>
                            :
                            <NavLink className={ ({isActive})=>isActive?' text-red-600 border-b border-red-600 transition ease-linear':` hover:text-red-600 border-b border-transparent hover:border-red-600 transition ease-linear `} to='/login'>Log In</NavLink>
                        }
                    </div>
                    <button onClick={()=>toggle()} className=" sm:hidden text-3xl text-red-600"><i className="fa-solid fa-bars"></i></button>
                </div>
            </nav>
            <div className={`${bar} w-[320px] h-full p-4 bg-slate-100 z-50 fixed top-16 left-0 flex flex-col gap-5 shadow-md transition-all ease-in-out duration-500`}>
                <NavLink className={ ({isActive})=>isActive?' text-white bg-red-600 px-4 rounded-[4px] transition ease-linear':` hover:text-white hover:bg-red-600 px-4 rounded-[4px] transition ease-linear `} to='/'>Home</NavLink>
                <NavLink className={ ({isActive})=>isActive?' text-white bg-red-600 px-4 rounded-[4px] transition ease-linear':` hover:text-white hover:bg-red-600 px-4 rounded-[4px] transition ease-linear `} to='/about'>About Us</NavLink>
                <NavLink className={ ({isActive})=>isActive?' text-white bg-red-600 px-4 rounded-[4px] transition ease-linear':` hover:text-white hover:bg-red-600 px-4 rounded-[4px] transition ease-linear `} to='/contact'>Contact Us</NavLink>
                {
                    status? <NavLink className={ ({isActive})=>isActive?' text-white bg-red-600 px-4 rounded-[4px] transition ease-linear':` hover:text-white hover:bg-red-600 px-4 rounded-[4px] transition ease-linear `} to='/profile'>Profile</NavLink>
                    :
                    <NavLink className={ ({isActive})=>isActive?' text-white bg-red-600 px-4 rounded-[4px] transition ease-linear':` hover:text-white hover:bg-red-600 px-4 rounded-[4px] transition ease-linear `} to='/login'>Log In</NavLink>  
                }
            </div>
        </>
        
    )
}

export default Nav;