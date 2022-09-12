import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Select, Option, Button1, Button2, Textarea, Input } from '../../components/Input';
import { useSelector } from 'react-redux';

function Step4(){


    const [input, setInput] = useState({homeDivision:'Dhaka', fatherStatus:'Employed', familyDetails:'', livingIn:'Bangladesh', fatherOccupation:'', motherStatus:'HouseWife', motherOccupation:'', livingCity:'', marriedBrother:'0' , unMarriedBrother:'0', marriedSister:'0', unMarriedSister:'0' });
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const livingIn = useSelector((state)=>state.filter.living_country);


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.homeDivision === '' || input.fatherStatus === '' || input.livingIn === '' || input.motherStatus === '' || input.livingCity === '' || input.marriedBrother === ''  || input.unMarriedBrother === '' || input.marriedSister === '' || input.unMarriedSister === '' ){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            const data = JSON.parse(localStorage.getItem("userInfo"));
            localStorage.setItem("userInfo", JSON.stringify({ ...data, ...input,}));
            navigate('/signup/step_5');
        }
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userInfo"));
        if( data.homeDivision !== undefined || data.fatherStatus !== undefined || data.familyDetails !== undefined || data.livingIn !== undefined || data.fatherOccupation !== undefined || data.motherOccupation !== undefined || data.livingCity !== undefined || data.marriedBrother !== undefined || data.unMarriedBrother !== undefined || data.marriedSister !== undefined || data.unMarriedSister !== undefined){
            setInput({ homeDivision:data.homeDivision, fatherStatus:data.fatherStatus, familyDetails:data.familyDetails, livingIn:data.livingIn, fatherOccupation:data.fatherOccupation, motherStatus:data.motherStatus, motherOccupation:data.motherOccupation, livingCity:data.livingCity, unMarriedBrother:data.unMarriedBrother, marriedBrother:data.marriedBrother, unMarriedSister:data.unMarriedSister, marriedSister:data.marriedSister});
        }
    },[])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);

    return(
        <>
            <Nav />
            <div className= " absolute top-14 right-2">
                <AlertContainer>
                    {alert}
                </AlertContainer>
            </div>
            <FormContainer>
                <Form title="Family & Location">
                    <h1 className=" text-green-600 font-bold text-right">50% Complete</h1 >
                    <Select onChange={(e)=> set(e)} name="fatherStatus" value={input.fatherStatus} id="fatherStatus" label="Father Status:">
                        <Option value="Employed" >Employed</Option>
                        <Option value="Unemployed" >Unemployed</Option>
                        <Option value="Retired" >Retired</Option>
                        <Option value="Other" >Other</Option>
                    </Select>

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.fatherOccupation} type="text" name="fatherOccupation" id="fatherOccupation" placeholder="Enter your father occupation:" label="Father Occupation:" />

                    <Select onChange={(e)=> set(e)} name="motherStatus" value={input.motherStatus} id="motherStatus" label="Mother Status:">
                        <Option value="Employed" >Employed</Option>
                        <Option value="Unemployed" >Unemployed</Option>
                        <Option value="Retired" >Retired</Option>
                        <Option value="HouseWife" >HouseWife</Option>
                        <Option value="Other" >Other</Option>
                    </Select>

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.motherOccupation} type="text" name="motherOccupation" id="motherOccupation" placeholder="Enter your Mother occupation:" label="Mother Occupation:" />

                    <label htmlFor=" ">Your Siblings:</label>
                    <div className=" flex flex-wrap gap-5">
                        <div className=" w-max border border-red-600 flex flex-col p-2 text-center">
                            <i className="fa-solid fa-person text-3xl text-red-600"></i>
                            <div className=" flex gap-2">
                                <div className="flex flex-col items-center justify-between">
                                    <label className=" cursor-pointer" htmlFor="unMarriedBrother">Un Married</label>
                                    <input onChange={(e)=> set(e)}  className="w-16 pl-2 border border-red-600 outline-blue-500" type="number" value={input.unMarriedBrother}  name="unMarriedBrother" id="unMarriedBrother" />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className=" cursor-pointer" htmlFor="MarriedBrother">Married</label>
                                    <input onChange={(e)=> set(e)}  className="w-16 pl-2 border border-red-600 outline-blue-500" type="number" value={input.marriedBrother}  name="marriedBrother" id="MarriedBrother" />
                                </div>
                            </div>
                        </div>

                        <div className=" w-max border border-red-600 flex flex-col p-2 text-center">
                        <i className="fa-solid fa-person-dress text-3xl text-pink-600 outline-blue-500"></i>
                            <div className=" flex gap-2">
                                <div className="flex flex-col items-center justify-between">
                                    <label className=" cursor-pointer" htmlFor="unMarriedSister">Un Married</label>
                                    <input onChange={(e)=> set(e)} className="w-16 pl-2 border border-red-600 outline-blue-500" type="number"  value={input.unMarriedSister} name="unMarriedSister" id="unMarriedSister" />
                                </div>

                                <div className="flex flex-col items-center">
                                    <label className=" cursor-pointer" htmlFor="MarriedSister">Married</label>
                                    <input onChange={(e)=> set(e)}  className="w-16 pl-2 border border-red-600 outline-blue-500" type="number" value={input.marriedSister}  name="marriedSister" id="MarriedSister" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <Select onChange={(e)=> set(e)} name="livingIn" value={input.livingIn} id="livingIn" label="Currently Living In:">
                        {
                            livingIn.map((data, index)=>{
                                return(<Option key={index} value={data} >{data}</Option>);
                            })
                        }
                    </Select>

                    <Select onChange={(e)=> set(e)} name="homeDivision" value={input.homeDivision} id="homeDivision" label="Home Division:">
        
                        <Option value="Barishal" >Barishal</Option>
                        <Option value="Chattogram" >Chattogram</Option>
                        <Option value="Dhaka" >Dhaka</Option>
                        <Option value="Khulna" >Khulna</Option>
                        <Option value="Mymensingh" >Mymensingh</Option>
                        <Option value="Rajshahi" >Rajshahi</Option>
                        <Option value="Rangpur" >Rangpur</Option>
                        <Option value="Sylhet" >Sylhet</Option>

                    </Select>

                    
                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.livingCity} type="text" name="livingCity" id="livingCity" placeholder="Enter your living city:" label="City Living In:" />

                    <Textarea onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.familyDetails} type="text" name="familyDetails" id="familyDetails" placeholder="Enter your livingIn details:" label="Family Details:" />

                    <div className=" flex gap-5">
                        <Button2 onClick={()=> navigate('/signup/step_2')} name="Back" />
                        <Button1 onClick={save} name="Continue" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Step4;