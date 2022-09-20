import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import BgContainer from '../components/BgContainer';
import Drawer from '../components/Drawer';
import Range from '../components/Range/Range';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_CITY, GET_CITY_ALL, GET_EDU, GET_EDU_ALL, GET_WS, GET_WS_ALL, GET_PA, GET_PA_ALL, GET_LC, GET_LC_ALL, GET_AGE, GET_HEI } from '../store/actions/search'
import { useEffect } from 'react';


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
        console.log(heightMin)
        console.log(heightMax)
        console.log("------------------------")
        console.log(ageMin)
        console.log(ageMax)
    },[heightMin, heightMax, ageMin, ageMax])

    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])



    return(
        <>
            <Nav />
                <BgContainer>
                    <div className=" w-[320px] sm:w-[430px] md:w-[760px] lg:w-[900px] xl:w-[1200px] mx-auto h-auto flex">
                        <div className=" w-[300px] h-auto flex flex-col gap-4">
                            <Drawer title="Gender" height="100px">
                                <div className=" flex text-lg gap-2 p-1 pt-8 pl-4">
                                    <div className=" flex items-center gap-2">
                                        <label className=" cursor-pointer" htmlFor="male"><i className="fa-solid fa-person text-2xl text-green-600"></i> </label>
                                        <input className=" cursor-pointer w-4 h-4 inline-block bg-red-600" type="radio" name="gender" value="Male" id="male" />
                                        <label className=" cursor-pointer" htmlFor="male"> Male</label>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <label className=" cursor-pointer" htmlFor="female"><i className="fa-solid fa-person-dress text-2xl text-pink-600"></i> </label>
                                        <input className=" cursor-pointer w-4 h-4 inline-block" type="radio" name="gender" value="Female" id="female" />
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
                            <Drawer title="Professional Area" height="475px">
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
                        <div className=" w-full h-scree bg-slate-200 ml-4 rounded-md shadow-2xl">
                            oho
                        </div>
                    </div>
                </BgContainer>
            <Footer />
        </>
    )
}

export default Search;