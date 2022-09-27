import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BgContainer from '../components/BgContainer';
import Drawer from '../components/Drawer';
import Range from '../components/Range/Range';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_CITY, GET_CITY_ALL, GET_EDU, GET_EDU_ALL, GET_WS, GET_WS_ALL, GET_PA, GET_PA_ALL, GET_LC, GET_LC_ALL, GET_AGE, GET_HEI, GET_GEN } from '../store/actions/search';
import { useEffect } from 'react';
import url from '../url';
import male from '../assets/images/male.png';
import female from '../assets/images/female.png';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function Search(){
    const dispatch = useDispatch();
    const home_division = useSelector((state)=> state.filter.home_division);
    const sHome_division = useSelector((state)=> state.home_division);
    const [check, setCheck] = useState(true);

    const education = useSelector((state)=> state.filter.education);
    const sEducation = useSelector((state)=> state.education);
    const [checkEdu, setCheckEdu] = useState(true);

    const working_sector = useSelector((state)=> state.filter.working_sector);
    const sWorking_sector = useSelector((state)=> state.working_sector);
    const [checkWs, setCheckWs] = useState(true);

    const professional_area = useSelector((state)=> state.filter.professional_area);
    const sProfessional_area = useSelector((state)=> state.professional_area);
    const [checkPa, setCheckPa] = useState(true);

    const living_country = useSelector((state)=> state.filter.living_country);
    const sLiving_country = useSelector((state)=> state.living_country);
    const [checkLc, setCheckLc] = useState(true);

    const heightMin = useSelector((state)=> state.heightMin);
    const heightMax = useSelector((state)=> state.heightMax);

    const ageMin = useSelector((state)=> state.ageMin);
    const ageMax = useSelector((state)=> state.ageMax);
    const gender = useSelector((state)=> state.gender);

    const [page, setPage] = useState(1);
    // const [limit, setLimit] = useState(2);

    const [data, setData] = useState({data:[],next:{},previous:{}, totalPage: 0});
    const { status } = useAuth();


    useEffect(()=>{

        if(sHome_division.length === 8 || sHome_division.length === 0){
            setCheck(true);
            if(sHome_division.length === 0){
                dispatch(GET_CITY_ALL(home_division))
            }
        }else{
            setCheck(false);
        }

    },[sHome_division, home_division, dispatch]);



    useEffect(()=>{

        if(sEducation.length === 10 || sEducation.length === 0){
            setCheckEdu(true);
            if(sEducation.length === 0){
                dispatch(GET_EDU_ALL(education))
            }
        }else{
            setCheckEdu(false);
        }

    },[sEducation, education, dispatch]);

    useEffect(()=>{

        if(sWorking_sector.length === 5 || sWorking_sector.length === 0){
            setCheckWs(true);
            if(sWorking_sector.length === 0){
                dispatch(GET_WS_ALL(working_sector))
            }
        }else{
            setCheckWs(false);
        }

    },[sWorking_sector, working_sector, dispatch]);

    useEffect(()=>{

        if(sProfessional_area.length === 17 || sProfessional_area.length === 0){
            setCheckPa(true);
            if(sProfessional_area.length === 0){
                dispatch(GET_PA_ALL(professional_area))
            }
        }else{
            setCheckPa(false);
        }

    },[sProfessional_area, professional_area, dispatch]);

    useEffect(()=>{

        if(sLiving_country.length === 38 || sLiving_country.length === 0){
            setCheckLc(true);
            if(sLiving_country.length === 0){
                dispatch(GET_LC_ALL(living_country))
            }
        }else{
            setCheckLc(false);
        }

    },[sLiving_country, living_country, dispatch]);

    useEffect(()=>{

        const clear = setTimeout(() => {

            fetch(`${url}/user/search?page=${page}&limit=${12}`,{
                method:"POST",
                mode:"cors",
                credentials:'include',
                body:JSON.stringify({gender,"home_division":sHome_division, "education":sEducation, "living_country":sLiving_country, "working_sector":sWorking_sector, "professional_area":sProfessional_area, ageMin, ageMax, heightMin, heightMax}),
            }).then((data)=>data.json()).then((data)=>{
                
                if(data.status === true){
                    setData(data.result)
                }else{
                    setData({data:[],next:{limit:0, page:0},previous:{limit:0, page:0}, totalPage:0, totalData:0})
                }
            });
    
                
        }, 1000);

        return ()=>{
            clearTimeout(clear);
        }

    },[heightMin, heightMax, ageMin, ageMax, sHome_division, sEducation, sLiving_country, sWorking_sector, sProfessional_area, page, gender]);



    let buttons = [];

    for(let i = 1; i <= data.totalPage; i++){
        buttons = [...buttons, <button key={i} onClick={()=>setPage(i)} className={` ${i=== (data.previous.page+1)?' text-red-600':' text-green-600' } h-11 w-11 mr-1`}>{i}</button>]
    }

    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);



    return(
        <>
            <Nav />
                <BgContainer>
                    <div className=" w-[320px] sm:w-[430px] md:w-[760px] lg:w-[900px] xl:w-[1200px] mx-auto h-auto flex flex-col md:flex-row">
                        <div className=" w-[300px] h-auto flex flex-col gap-4">
                            <Drawer title="Gender" height="100px">
                                <div className=" flex text-lg gap-2 p-1 pt-8 pl-4">
                                    <div className=" flex items-center gap-2">
                                        <label className=" cursor-pointer" htmlFor="male"><i className="fa-solid fa-person text-2xl text-green-600"></i> </label>
                                        <input onChange={()=>{dispatch(GET_GEN("Male"))}} className=" cursor-pointer w-4 h-4 inline-block bg-red-600" type="radio" name="gender" value="Male" id="male" />
                                        <label className=" cursor-pointer" htmlFor="male"> Male</label>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <label className=" cursor-pointer" htmlFor="female"><i className="fa-solid fa-person-dress text-2xl text-pink-600"></i> </label>
                                        <input onChange={()=>{dispatch(GET_GEN("Female"))}} className=" cursor-pointer w-4 h-4 inline-block" type="radio" name="gender" defaultChecked={true} value="Female" id="female" />
                                        <label className=" cursor-pointer" htmlFor="female"> Female</label>
                                    </div>
                                </div>
                            </Drawer>
                            <Drawer title="Age" height="100px">
                                <Range min={18} max={60} value={({min, max})=>dispatch(GET_AGE({min,max}))} />
                            </Drawer>
                            <Drawer title="Height" height="100px">
                                <Range min={30} max={89} height={true} value={({min, max})=>dispatch(GET_HEI({min,max}))} />
                            </Drawer>
                            <Drawer title="Home Division" height="250px">
                                <div className=" flex flex-col w-full p-2 text-base">
                                    <div>
                                        <input onChange={()=>dispatch(GET_CITY_ALL(home_division))} checked={check} className=" accent-red-500 cursor-pointer" type="checkbox" name="All" value="All" id="All" /><label className=" cursor-pointer" htmlFor="All"> All</label>
                                    </div>
                                    {
                                        home_division.map((data,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input onChange={(e)=>dispatch(GET_CITY(e.target))} className=" accent-red-500 cursor-pointer" type="checkbox" name={data} value={data} id={data} /><label className=" cursor-pointer" htmlFor={data}> {data}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Drawer>

                            <Drawer title="Education" height="290px">
                                <div className=" flex flex-col w-full p-2 text-base">
                                    <div>
                                        <input onChange={()=>dispatch(GET_EDU_ALL(education))} checked={checkEdu} className=" accent-red-500 cursor-pointer" type="checkbox" name="All" value="All" id="All" /><label className=" cursor-pointer" htmlFor="All"> All</label>
                                    </div>
                                    {
                                        education.map((data,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input onChange={(e)=>dispatch(GET_EDU(e.target))} className=" accent-red-500 cursor-pointer" type="checkbox" name={data} value={data} id={data} /><label className=" cursor-pointer" htmlFor={data}> {data}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Drawer>
                            <Drawer title="Working Sector" height="190px">
                                <div className=" flex flex-col w-full p-2 text-base">
                                    <div>
                                        <input onChange={()=>dispatch(GET_WS_ALL(working_sector))} checked={checkWs} className=" accent-red-500 cursor-pointer" type="checkbox" name="All" value="All" id="All" /><label className=" cursor-pointer" htmlFor="All"> All</label>
                                    </div>
                                    {
                                        working_sector.map((data,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input onChange={(e)=>dispatch(GET_WS(e.target))} className=" accent-red-500 cursor-pointer" type="checkbox" name={data} value={data} id={data} /><label className=" cursor-pointer" htmlFor={data}> {data}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Drawer>
                            <Drawer title="Professional Area" height="475px">
                                <div className=" flex flex-col w-full p-2 text-base">
                                    <div>
                                        <input onChange={()=>dispatch(GET_PA_ALL(professional_area))} checked={checkPa} className=" accent-red-500 cursor-pointer" type="checkbox" name="All" value="All" id="All" /><label className=" cursor-pointer" htmlFor="All"> All</label>
                                    </div>
                                    {
                                        professional_area.map((data,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input onChange={(e)=>dispatch(GET_PA(e.target))} className=" accent-red-500 cursor-pointer" type="checkbox" name={data} value={data} id={data} /><label className=" cursor-pointer" htmlFor={data}> {data}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Drawer>
                            <Drawer title="Living Country" height="475px">
                                <div className=" flex flex-col w-full p-2 text-base">
                                    <div>
                                        <input onChange={()=>dispatch(GET_LC_ALL(living_country))} checked={checkLc} className=" accent-red-500 cursor-pointer" type="checkbox" name="All" value="All" id="All" /><label className=" cursor-pointer" htmlFor="All"> All</label>
                                    </div>
                                    {
                                        living_country.map((data,index)=>{
                                            return(
                                                <div key={index}>
                                                    <input onChange={(e)=>dispatch(GET_LC(e.target))} className=" accent-red-500 cursor-pointer" type="checkbox" name={data} value={data} id={data} /><label className=" cursor-pointer" htmlFor={data}> {data}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Drawer>
                        </div>
                        <div className=" w-full h-atuo  md:ml-4 rounded-md flex flex-col gap-4 mt-10 md:mt-0">
                            {
                                data.data.map((user,index)=>{

                                    const bdate = new Date(user.birthDate);

                                    const getAge = (date)=>{

                                        var today = new Date();

                                        const datesplit=date.split('-');

                                        const year = parseInt(datesplit[0]);
                                        const month = parseInt(datesplit[1]);
                                        const day = parseInt(datesplit[2]);

                                        let age = today.getFullYear() - year;

                                        if (today.getMonth()+1 < month || (today.getMonth()+1 === month && today.getDate() < day)) {
                                            age--;
                                        }

                                        return age;
                                    }

                                    return(
                                        <div key={index} className=" w-full h-max bg-slate-50 flex flex-col md:flex-row shadow-xl rounded-md">{
                                            status?<div style={{backgroundImage: `${(user.img === undefined)? `url(${(user.gender === "Female")?female:male})`:`url(${user.img})`}`}} className=" w-[230px] h-[230px] md:h-full mx-auto m-2 md:m-0 relative bg-center bg-no-repeat bg-cover shrink-0 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md md:rounded-tr-none md:rounded-br-none"></div>:
                                            <div style={{backgroundImage: `url(${(user.gender === "Female")?female:male})`}} className=" w-[230px] h-[230px] md:h-full mx-auto m-2 md:m-0 relative bg-center bg-no-repeat bg-cover shrink-0 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md md:rounded-tr-none md:rounded-br-none "><div className=" text-red-600 text-center">Login to see photo</div></div>
                                        }

                                            <div className=" w-full h-full flex flex-col justify-between px-4 py-1 bg-slate-50 rounded-tr-md rounded-br-md">
                                                <div className=" w-full  h-max flex justify-between items-center border-b ">
                                                    <div className=" text-xs sm:text-sm xl:text-base"><span className=" font-bold text-red-600">User Id: </span>{user.uid}</div>
                                                    <div  className=" text-xs sm:text-sm xl:text-base"><span className=" font-bold text-red-600">Birth Date: </span>{bdate.toDateString()}</div>
                                                </div>
                                                <div className=" w-full h-full mt-1 flex justify-between">
                                                    <div className=" w-full h-full">
                                                        <div className=" "><span className=" font-bold text-red-600">Age: </span>{getAge(user.birthDate)}</div>
                                                        <div className=" "><span className=" font-bold text-red-600">Height: </span>{`${user.height.toString()[0]}' ${user.height.toString()[1]}"`}</div>
                                                        <div className=" "><span className=" font-bold text-red-600">Religion: </span>{user.religion}</div>
                                                        <div className=" "><span className=" font-bold text-red-600">Education: </span>{user.educationQualification}</div>
                                                        <div className=" "><span className=" font-bold text-red-600">Working Sector: </span>{user.workingSector}</div>
                                                        <div className=" "><span className=" font-bold text-red-600">Home Division: </span>{user.homeDivision}</div>
                                                        <div>
                                                            <p  className=" w-full h-[50px] float-left overflow-hidden relative">{user.aboutSelf.slice(0,200)} <Link to="" className=" absolute bottom-0 right-0 inline-block bg-slate-50 text-red-600 pr-2">...more</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className=" w-[40px] h-full border-l flex flex-col gap-2 justify-start items-center">
                                                        <Link to={"/vewProfile/"+user._id} className=" text-2xl text-red-600" ><i className=" pl-1 fa-solid fa-address-card"></i></Link>
                                                        <Link to={"/liveChat/"+user._id} className=" text-2xl text-red-600" ><i className=" pl-1 fa-solid fa-comments"></i></Link>
                                                        <Link to="" className=" text-2xl text-red-600" ><i className=" pl-1 fa-solid fa-envelope"></i></Link>
                                                        <Link to="" className=" text-2xl text-red-600" ><i className=" pl-1 fa-solid fa-heart"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    )
                                })
                            }
                            <div className={` w-full h-max bg-slate-50 shadow-xl rounded-md mb-10 text-red-600 flex flex-col sm:flex-row`}>
                                <div className=' w-max flex flex-wrap'>
                                {
                                    (data.previous.page === 0)? <button className=' h-11 px-2 mr-1 text-gray-400 cursor-not-allowed'>Previous</button>:<button onClick={()=>setPage(data.previous.setPage)} className=' h-11 px-2 mr-1'>Previous</button>
                                }
                                    <div  className=' flex flex-wrap'>
                                        {
                                            buttons
                                        }
                                    </div>
                                    {
                                    (data.next.page === 0)?  <button className='h-11 px-2 text-gray-400 cursor-not-allowed'>Next</button>: <button onClick={()=>setPage(data.next.page)} className='h-11 px-2'>Next</button>
                                    }
                                
                                </div>
                                <div className=' pl-2 sm:pl-8 py-2 mt-0.5'>Showing {(data.previous.page*data.previous.limit)+1} to { (data.next.page === 0)? data.totalData : (data.previous.page+1)*data.previous.limit} of {data.totalData} entries</div>
                            </div>
                        </div>
                    </div>
                </BgContainer>
            <Footer />
        </>
    )
}

export default Search;