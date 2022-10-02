import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import {Button1, Form, FormContainer, Input} from '../../components/Input'

function SignUp(){


    const [input, setInput] = useState({name:'', email:'', phone:'', password:'', rpassword:''});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if(input.name === '' || input.email === '' || input.password === '' || input.rpassword === '' || input.phone === '' ){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            if( input.password === input.rpassword ){
                const data = JSON.parse(localStorage.getItem("userInfo"));
                localStorage.setItem("userInfo", JSON.stringify({...data, ...input}));
                navigate('/signup/step_2');
            }else{
                setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='Password not matched!' />]);
            }
        }
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userInfo"));
        if(data !== null){
            setInput({name:data.name, email:data.email, password:data.password, rpassword:data.rpassword, phone:data.phone});
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
                <Form title="Sign Up">
                    <Input onChange={(e)=> set(e)} value={input.name} type="text" name="name" id="name" placeholder="Enter your name:" label="Name:" />

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.email} type="text" name="email" id="email" placeholder="Enter your email:" label="Email:" />

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.phone} type="text" name="phone" id="phone" placeholder="Enter your phone number:" label="Phone Number:" />

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.password} type="password" name="password" id="password" placeholder="Enter your password:" label="Password:" />
                    
                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.rpassword} type="password" name="rpassword" id="rpassword" placeholder="Re-type your password:" label="Re-type Password:" />

                    <Button1 onClick={save} name="save" />
                    <p className=" text-right"> Have an account? <Link className=" text-red-600" to='/login'>Log In</Link></p>
                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default SignUp;