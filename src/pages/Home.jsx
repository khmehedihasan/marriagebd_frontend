import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import call from '../assets/images/call.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
function Home(){
    const age = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
    const professionas = useSelector((state)=> state.filter.professional_area);



    useEffect(()=>{
        window.scrollTo(0,0)
    },[])



    return(
        <>
            <Nav />
            <div className=" w-full h-[600px] bg-banner bg-center bg-cover bg-no-repeat  absolute top-0 left-0 z-0"></div>
            <div className=" w-full h-[900px] z-0"></div>
            <div className=" w-full  h-auto">
                <div className=' w-[320px] sm:w-[430px] md:w-[760px] lg:w-[900px] h-max lg:h-[210px] mx-auto -mt-[400px] z-20 bg-slate-50 relative rounded-md p-4 shadow-md'>
                    <h1 className=" text-center text-red-600 font-bold text-2xl">Find Your Soulmate</h1>
                    <div className=' flex justify-center gap-4 flex-col md:flex-row items-start mt-5'>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className=" w-full block">
                                <label htmlFor='lookingFor'>Looking For</label><br />
                                <select className=' w-[290px] sm:w-max block cursor-pointer px-2 py-[2px] pr-3 border-2 border-slate-300 hover:border-red-600 rounded-[3px] focus:border-red-600 outline-none ' name="lookingFor" id="lookingFor" >
                                <option value="female">Woman</option>
                                    <option value="male">Man</option>
                                </select>
                            </div>
                            <div className=" flex gap-2">
                                <div>
                                    <label htmlFor='ageStart'>Age</label><br />
                                    <select className=' w-[130px] sm:w-max cursor-pointer px-2 py-[2px] pr-3 border-2 border-slate-300 hover:border-red-600 rounded-[3px] focus:border-red-600 outline-none ' name="ageStart" id="ageStart" >
                                        {
                                            age.map((data,index)=>{
                                                return( <option key={index} value={data}>{data}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <span className=' mt-6'>To</span>
                                <div>
                                    <label htmlFor='ageEnd'></label><br />
                                    <select className=' w-[130px] sm:w-max cursor-pointer px-2 py-[2px] pr-3 border-2 border-slate-300 hover:border-red-600 rounded-[3px] focus:border-red-600 outline-none ' name="ageEnd" id="ageEnd" >
                                        {
                                            age.map((data,index)=>{
                                                return( <option key={index} value={data}>{data}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor='religion'>Religion</label><br />
                                <select className=' w-[290px] sm:w-max cursor-pointer px-2 py-[2px] pr-3 border-2 border-slate-300 hover:border-red-600 rounded-[3px] focus:border-red-600 outline-none ' name="religion" id="religion" >
                                    <option value="Muslim">Muslim</option>
                                    <option value="Hindu">Hindu</option>
                                    <option value="Buddish">Buddish</option>
                                    <option value="Christian">Christian</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className=" w-max flex flex-col sm:flex-row gap-2 items-center">
                            <div className=" block md:inline-block">
                                <label htmlFor='profession'>Professions</label><br />
                                <select className=' w-[290px] sm:w-full cursor-pointer px-2 py-[2px] pr-3 border-2 border-slate-300 hover:border-red-600 rounded-[3px] focus:border-red-600 outline-none ' name="profession" id="profession" >
                                <option value="Any Professions">Any Professions</option>
                                    {
                                        
                                        professionas.map((data,index)=>{
                                            return( <option key={index} value={data}>{data}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div> <button className="  w-[290px] sm:w-full py-[1px] px-3 bg-red-600 mt-6 rounded-[3px] text-white hover:bg-white border-2 border-transparent hover:border-2 hover:border-red-600 hover:text-red-600">Search</button></div>
                        </div>
                    </div>
                    <h1 className=" text-center text-slate-600 text-gl mt-8"><i className="fa-solid fa-shield-heart text-red-600"></i> Securely search your life partner</h1>
                </div>
            </div>
            <div className=" p-4 py-10  pt-[700px] md:pt-48 -mt-[600px] md:-mt-32 bg-stone-100">
                <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto flex md:items-center justify-between flex-col md:flex-row">
                    <div>
                        <h1 className=' text-xl md:text-3xl font-bold'> Why choose <span className=' text-red-600'>BD Marriage</span></h1>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Register for Free!</h3>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> 100% human verified profiles</h3>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Chat, Voice & Video calling</h3>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Designed with sharia values</h3>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Halal, safe and secured Matrimony site in Bangladesh</h3>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Private, personalized, and highly confidential service</h3>
                        <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Trusted service for more than 16 years</h3>
                        <button className=" py-1 mt-5 px-3 text-base md:text-lg hover:text-red-600 text-white bg-red-600 hover:bg-transparent border-2 border-transparent hover:border-red-600">Find Your Partner</button>
                    </div>
                    <div className="  w-full h-[400px] md:w-[500px] md:h-[500px] mt-10 md:mt-0 rounded-md bg-pic1 bg-no-repeat bg-contain bg-right"></div>
                </div>
            </div>
            <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto flex items-center justify-between">
                <div className=" w-full py-20 pb-52">
                    <h1 className=" text-center font-bold text-xl md:text-3xl"><span className=' text-red-600'>How bdmarriage</span> works</h1>
                    <h3 className=" text-center">Get started in bdmarriage.com in 3 easy steps</h3>
                    <div className="w-full flex flex-col md:flex-row items-center gap-16 md:gap-0 justify-between mt-20">
                        <div className=" w-[290px] flex flex-col items-center justify-center gap-4">
                            <div className=" w-20 lg:w-28 h-20 lg:h-28 rounded-full flex items-center justify-center bg-green-700 text-3xl lg:text-5xl text-white border-4 border-transparent hover:border-green-700 hover:bg-transparent hover:text-green-700"><i className="fa-solid fa-user-plus"></i></div>
                            <h1 className=" text-center font-bold text-xl lg:text-2xl text-green-700">Create Your Profile</h1>
                            <p className=" text-center text-green-700">Create your detail profile, add photos and describe your partner preference</p>
                        </div>
                        <div className=" w-[290px] flex flex-col items-center justify-center gap-4">
                            <div className=" w-20 lg:w-28 h-20 lg:h-28 rounded-full flex items-center justify-center bg-red-600 text-3xl lg:text-5xl text-white border-4 border-transparent hover:border-red-600 hover:bg-transparent hover:text-red-600"><i className="fa-solid fa-magnifying-glass"></i></div>
                            <h1 className=" text-center font-bold text-xl lg:text-2xl  text-red-700">Search Your Partner</h1>
                            <p className=" text-center  text-red-700">Search your preferred partner by location, education, interest and so on</p>
                        </div>
                        <div className=" w-[290px] flex flex-col items-center justify-center gap-4">
                            <div className=" w-20 lg:w-28 h-20 lg:h-28 rounded-full flex items-center justify-center bg-blue-600 text-3xl lg:text-5xl text-white border-4 border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600"><i className="fa-solid fa-comments"></i></div>
                            <h1 className=" text-center font-bold text-xl lg:text-2xl text-blue-700">Start Communication</h1>
                            <p className=" text-center text-blue-700">Start communication with suitable profiles by sending message & emails</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[300px] p-4 pb-80 bg-slate-100">
                <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto flex flex-col md:flex-row items-end md:items-center justify-between">
                    <div>
                        <h1 className=" text-lg md:text-2xl font-bold pb-10"> Want to know more about <span className=" text-red-600">BD Marriage services?</span></h1>
                        <Link className=" px-2 py-1 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-md" to="/contact">Contact Us</Link>
                        <a className=" ml-4 px-2 py-1 border-2 border-transparent bg-red-600 hover:text-red-600 hover:bg-white hover:border-red-600 text-white rounded-md"  href="tel:+01741645695852">017416456958</a>
                    </div>
                    <img className="  sm:-mt-20" src={call} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;