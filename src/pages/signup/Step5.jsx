import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Select, Option, Button1, Button2, Textarea } from '../../components/Input';
import { useSelector } from 'react-redux';

function Step5(){


    const [input, setInput] = useState({physicalDetails:'', weight:'50', height:'50', blood:'B+', bodyType:'Average', complexion:'Fair'});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const height = useSelector((state)=>state.filter.height);
    const weight = useSelector((state)=>state.filter.weight);


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.weight === '' || input.height === '' || input.bodyType === '' || input.complexion === '' ){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            const data = JSON.parse(localStorage.getItem("userInfo"));
            localStorage.setItem("userInfo", JSON.stringify({ ...data, ...input,}));
            navigate('/signup/step_6');
        }
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userInfo"));
        if(data.physicalDetails !== undefined || data.weight !== undefined || data.height !== undefined || data.blood !== undefined || data.bodyType !== undefined || data.complexion !== undefined ){
            setInput({physicalDetails:data.physicalDetails, weight:data.weight, height:data.height, blood:data.blood, complexion:data.complexion, bodyType:data.bodyType});
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
                <Form title="Physical Attribute">
                    <h1 className=" text-green-600 font-bold text-right">70% Complete</h1 >
                    <Select onChange={(e)=> set(e)} name="height" value={input.height} id="height" label="Height:">
                        {
                            height.map((data, index)=>{
                                return(<Option key={index} value={data} >{`${data.toString()[0]}' ${data.toString()[1]}"`}</Option>);
                            })
                        }
                    </Select>

                    <Select onChange={(e)=> set(e)} name="weight" value={input.weight} id="weight" label="Weight:">
                        {
                            weight.map((data, index)=>{
                                return(<Option key={index} value={data} >{`${data} Kg`}</Option>);
                            })
                        }
                    </Select>

                    <Select onChange={(e)=> set(e)} name="bodyType" value={input.bodyType} id="bodyType" label="Body Type:">
                        <Option value="Average" > Average</Option>
                        <Option value="Slim" > Slim</Option>
                        <Option value="Athletic" > Athletic</Option>
                        <Option value="Heavy" > Heavy</Option>
                    </Select>

                    <Select onChange={(e)=> set(e)} name="complexion" value={input.complexion} id="complexion" label="Complexion:">
                        <Option value="Very Fair" > Very Fair</Option>
                        <Option value="Fair" > Fair</Option>
                        <Option value="Wheatish" > Wheatish</Option>
                        <Option value="Dark" > Dark</Option>
                    </Select>

                    <Select onChange={(e)=> set(e)} name="blood" value={input.blood} id="blood" label="Blood Group:">
                        <Option value="A+" > A+</Option>
                        <Option value="A-" > A-</Option>
                        <Option value="B+" >B+</Option>
                        <Option value="B-" > B-</Option>
                        <Option value="O+" > O+</Option>
                        <Option value="O-" > O-</Option>
                        <Option value="AB+" > AB+</Option>
                        <Option value="AB-" > AB-</Option>
                    </Select>

                    <Textarea onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.physicalDetails} type="text" name="physicalDetails" id="physicalDetails" placeholder="Enter your physical details:" label="physical Details:" />

                    <div className=" flex gap-5">
                        <Button2 onClick={()=> navigate('/signup/step_4')} name="Back" />
                        <Button1 onClick={save} name="Continue" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Step5;