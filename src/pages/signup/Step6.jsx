import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Select, Option, Button1, Button2 } from '../../components/Input';

function Step6(){


    const [input, setInput] = useState({ smoke:'Non Smoker', religiousValue:"Religious", familyValue:'Traditional', diet:'No Matter'});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.smoke === '' || input.religiousValue === '' || input.familyValue === '' || input.diet === '' ){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            const data = JSON.parse(localStorage.getItem("userInfo"));
            localStorage.setItem("userInfo", JSON.stringify({ ...data, ...input,}));
            navigate('/signup/step_7');
        }
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userInfo"));
        if( data.smoke !== undefined || data.religiousValue !== undefined || data.familyValue !== undefined || data.diet !== undefined ){
            setInput({ smoke:data.smoke, religiousValue:data.religiousValue, diet:data.diet, familyValue:data.familyValue});
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
                <Form title="Life Style">

                    <Select onChange={(e)=> set(e)} name="religiousValue" value={input.religiousValue} id="religiousValue" label="Religious Value:">
                        <Option value="Very Religious" >Very Religious</Option>
                        <Option value="Religious" > Religious</Option>
                        <Option value="Average Religious" > Average Religious</Option>
                        <Option value="Not Religious" > Not Religious</Option>
                    </Select>

                    <Select onChange={(e)=> set(e)} name="smoke" value={input.smoke} id="smoke" label="Smoke:">
                    <Option value="Smoker" > Smoker</Option>
                        <Option value="Light Smoker" > Light Smoker</Option>
                        <Option value="Non Smoker" > Non Smoker</Option>
                    </Select>

                    <Select onChange={(e)=> set(e)} name="familyValue" value={input.familyValue} id="familyValue" label="Family Value:">
                        <Option value="Average" > Traditional</Option>
                        <Option value="Moderate" > Moderate</Option>
                        <Option value="Liberal" > Liberal</Option>
                    </Select>

                    <Select onChange={(e)=> set(e)} name="diet" value={input.diet} id="diet" label="Diet:">
                        <Option value="Vegetarian" > Vegetarian</Option>
                        <Option value= " Non Vegetarian" > Non Vegetarian</Option>
                        <Option value="No Matter" > No Matter</Option>
                    </Select>

                    <div className=" flex gap-5">
                        <Button2 onClick={()=> navigate('/signup/step_5')} name="Back" />
                        <Button1 onClick={save} name="Continue" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Step6;