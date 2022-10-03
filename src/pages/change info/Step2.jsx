import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Input, Select, Option, Button1, Button2 } from '../../components/Input';
import url from '../../url';
import useAuth from '../../hooks/useAuth';

function Step2(){


    const [input, setInput] = useState({candidateName:'', birthDate:'', profileFor:'Self', religion:'Muslim', maritalStatus:'UnMarried', nationality:'bangladashi', gender:'Male'});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();

    const { id } = useAuth();

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if(input.candidateName === '' || input.birthDate === '' || input.profileFor === '' || input.religion === '' || input.maritalStatus === '' || input.nationality === '' || input.gender === '' ){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            const data = JSON.parse(localStorage.getItem("userInfo"));
            localStorage.setItem("userInfo", JSON.stringify({ ...data, ...input,}));
            navigate('/info/step_3');
        }
    }

    // useEffect(()=>{
    //     const data = JSON.parse(localStorage.getItem("userInfo"));
    //     if(data.candidateName !== undefined || data.birthDate !== undefined || data.profileFor !== undefined || data.religion !== undefined || data.maritalStatus !== undefined || data.nationality !== undefined || data.gender !== undefined ){
    //         setInput({candidateName:data.candidateName, birthDate:data.birthDate, profileFor:data.profileFor, religion:data.religion, nationality:data.nationality, maritalStatus:data.maritalStatus, gender:data.gender});
    //     }
    // },[]);


    useEffect(()=>{
        fetch(`${url}/user/${id}`,{
            method:"GET",
            mode:"cors"
        }).then((data)=>data.json()).then((d)=>{
            if(d.status === true){
                localStorage.setItem("userInfo", JSON.stringify(d.data));
                //--------------------------------------------
                    const data = JSON.parse(localStorage.getItem("userInfo"));
                    if(data.candidateName !== undefined || data.birthDate !== undefined || data.profileFor !== undefined || data.religion !== undefined || data.maritalStatus !== undefined || data.nationality !== undefined || data.gender !== undefined ){
                        setInput({candidateName:data.candidateName, birthDate:data.birthDate, profileFor:data.profileFor, religion:data.religion, nationality:data.nationality, maritalStatus:data.maritalStatus, gender:data.gender});
                    }
                //---------------------------------------------------

            }else{
                setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message={d.message} />]);
            }
        })
    },[]);


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
                <Form title="Basic Info">
                    <h1 className=" text-green-600 font-bold text-right">10% Complete</h1 >
                    <Select onChange={(e)=> set(e)} name="profileFor" value={input.profileFor} id="profileFor" label="Profile Create For:">
                        <Option value="Self" >Self</Option>
                        <Option value="Brother" >Brother</Option>
                        <Option value="Sister" >Sister</Option>
                        <Option value="Son" >Son</Option>
                        <Option value="Daughter" >Daughter</Option>
                        <Option value="Relative" >Relative</Option>
                    </Select>

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.candidateName} type="text" name="candidateName" id="candidateName" placeholder="Enter your candidate name:" label="Candidate Name:" />

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.birthDate} type="date" name="birthDate" id="birthDate" label="Candidate date of Birth:" />
                    <label htmlFor=" ">Gender:</label>
                    <div className=" flex gap-4 pb-4">
                        <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value="Male" checked={(input.gender ==="Male")? true:false} type="radio" name="gender" id="male" label="Male" />
                        <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value="Female" checked={(input.gender ==="Female")? true:false} type="radio" name="gender" id="female" label="Female" />
                    </div>


                    <Select onChange={(e)=> set(e)} name="maritalStatus" value={input.maritalStatus} id="maritalStatus" label="Marital status:">
                        <Option value="UnMarried" >UnMarried</Option>
                        <Option value="Married" >Married</Option>
                        <Option value="Divorced" >Divorced</Option>
                        <Option value="Separated" >Separated </Option>
                    </Select>
                    
                    <Select onChange={(e)=> set(e)} name="religion" value={input.religion} id="religion" label="Religion:">
                        <Option value="Muslim" >Muslim</Option>
                        <Option value="Hindu" >Hindu</Option>
                        <Option value="Buddish" >Buddish</Option>
                        <Option value="Christian" >Christian </Option>
                        <Option value="Jewish " >Jewish</Option>
                        <Option value="Other " >Other </Option>
                    </Select>

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.nationality} type="tex" name="nationality" id="nationality" placeholder="Enter your nationality:" label="Nationality:" />

                    <div className=" flex gap-5">
                        <Button2 onClick={()=>navigate(-1)} name="Back" />
                        <Button1 onClick={save} name="Continue" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Step2;