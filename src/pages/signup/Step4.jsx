import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Select, Option, Button1, Button2, Textarea } from '../../components/Input';
import { useSelector } from 'react-redux';

function Step4(){


    const [input, setInput] = useState({educationDetails:'', workingSector:'Private Company', fatherStatus:'Bachelors', professionDetails:'', profession:'IT & Software Engineering', income:'BDT 21k to 40k'});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const education = useSelector((state)=>state.filter.education);
    const workingSector = useSelector((state)=>state.filter.working_sector);
    const profession = useSelector((state)=>state.filter.professional_area);


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.workingSector === '' || input.fatherStatus === '' || input.profession === '' || input.income === '' ){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            const data = JSON.parse(localStorage.getItem("userInfo"));
            localStorage.setItem("userInfo", JSON.stringify({ ...data, ...input,}));
            navigate('/signup/step_4');
        }
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userInfo"));
        if(data.educationDetails !== undefined || data.workingSector !== undefined || data.fatherStatus !== undefined || data.professionDetails !== undefined || data.profession !== undefined || data.income !== undefined ){
            setInput({educationDetails:data.educationDetails, workingSector:data.workingSector, fatherStatus:data.fatherStatus, professionDetails:data.professionDetails, income:data.income, profession:data.profession});
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

                    <Select onChange={(e)=> set(e)} name="fatherStatus" value={input.fatherStatus} id="fatherStatus" label="Father Status:">
                        <Option value="Employed" >Employed</Option>
                        <Option value="Unemployed" >Unemployed</Option>
                        <Option value="Retired" >Retired</Option>
                        <Option value="Other" >Other</Option>
                    </Select>

                    <Textarea onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.educationDetails} type="text" name="educationDetails" id="educationDetails" placeholder="Enter your education details:" label="Education Details:" />

                    <Select onChange={(e)=> set(e)} name="workingSector" value={input.workingSector} id="workingSector" label="Working Sector:">
                        {
                            workingSector.map((data, index)=>{
                                return(<Option key={index} value={data} >{data}</Option>);
                            })
                        }
                    </Select>

                    <Select onChange={(e)=> set(e)} name="profession" value={input.profession} id="profession" label="Profession:">
                        {
                            profession.map((data, index)=>{
                                return(<Option key={index} value={data} >{data}</Option>);
                            })
                        }
                    </Select>

                    <Textarea onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.professionDetails} type="text" name="professionDetails" id="professionDetails" placeholder="Enter your profession details:" label="Profession Details:" />

                    <Select onChange={(e)=> set(e)} name="income" value={input.income} id="income" label="Monthly Income:">
                        <Option value="BDT 10k to 20k" > BDT 10k to 20k</Option>
                        <Option value="BDT 21k to 40k" > BDT 21k to 40k</Option>
                        <Option value="BDT 41k to 60k" > BDT 41k to 60k</Option>
                        <Option value="BDT 61k to 90k" > BDT 61k to 90k</Option>
                        <Option value="BDT 91k  to  above 100k" > BDT 91k  to  above 100k</Option>
                    </Select>


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