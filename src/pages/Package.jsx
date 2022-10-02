import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import url from '../url';


function Package(){

    const [data, setData] = useState([{name:'', price:0, days:0},{name:'', price:0, days:0},{name:'', price:0, days:0}]);


    useEffect(()=>{
        fetch(`${url}/package/`,{
          method:"GET",
          credentials: 'include'
        }).then((data)=>data.json()).then((data)=>{
          if(data.status === true){
            setData(data.result.data);
          }
      });
    },[])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])




    return(
        <>
            <Nav />
            <div className=' w-full mt-[64px] '></div>
            <div className=" w-full h-full bg-p1 py-10 ">
                <div className=' md:w-[700px] lg:w-[1000px] xl:w-[1250px] h-full mx-auto flex items-center justify-center '>
                    <div className=' w-max h-[760px] m-2 -mt-4 bg-slate-100 border border-slate-300 flex'>
                        <div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[80px] bg-red-600 text-white text-sm sm:text-lg md:text-xl font-bold flex items-center border border-slate-300 p-4'><span>Packages</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Amount</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Create Profile</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Search Profiles</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>View Profiles</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>See Profile Photo</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>See contact Info</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Live Chat</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Get Customer Support</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Validity</span></div>
                            <div className=' w-auto sm:w-[150px] md:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center border border-slate-300 p-1 md:p-4'></div>
                        </div>
                        <div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[80px] bg-red-600 text-white text-sm sm:text-lg md:text-xl font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>Free</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><span>0 TK</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-xmark"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-xmark"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-xmark"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-xmark"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><Link to="/signup" className=" py-[2px] px-2 text-white bg-red-600 text-xs sm:text-sm md:text-lg font-bold rounded-md">Register Free</Link></div>
                        </div>
                        <div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[80px] bg-red-600 text-white text-sm sm:text-lg md:text-xl font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>{data[2].name}</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><span>{data[2].price} Tk</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'>{data[2].days} Days</div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><Link to="/order/bronze" className=" py-[2px] px-2 text-white bg-red-600 text-xs sm:text-sm md:text-lg font-bold rounded-md ">Order Now</Link></div>
                        </div>
                        <div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[80px] bg-red-600 text-white text-sm sm:text-lg md:text-xl font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>{data[1].name}</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><span>{data[1].price} Tk</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'>{data[1].days} days</div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><Link to="/order/gold" className=" py-[2px] px-2 text-white bg-red-600 text-xs sm:text-sm md:text-lg font-bold rounded-md ">Order Now</Link></div>
                        </div>
                        <div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[80px] bg-red-600 text-white text-sm sm:text-lg md:text-xl font-bold flex items-center border border-slate-300 p-1 md:p-4'><span>{data[0].name}</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><span>{data[0].price} Tk</span></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><i className="fa-solid fa-check"></i></div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[60px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'>{data[0].days} Days</div>
                            <div className=' md:w-[112px] lg:w-[187px] xl:w-[250px] h-[100px] text-red-600 text-xs sm:text-sm md:text-lg  font-bold flex items-center justify-center border border-slate-300 p-1 md:p-4'><Link to="/order/diamond" className=" py-[2px] px-2 text-white bg-red-600 text-xs sm:text-sm md:text-lg font-bold rounded-md ">Order Now</Link></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Package;