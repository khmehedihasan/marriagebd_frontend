import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { Button1, Form, FormContainer, Input } from '../../components/Input';
import { Alert2, AlertContainer } from '../../components/Alert';
import Nav from '../../components/Nav';
import { useState } from 'react';

function Login(){

    const [input, setInput] = useState({ email:'', password:''});
    const [alert, setAlert] = useState([]);
    const [attempt, setAttempt] = useState(0)

    function save(){
        if( input.email === '' || input.password === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            setAttempt((count)=> count+1);
        }
    }


    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }

    return(
        <>
            <Nav />
            <div className= " absolute top-14 right-2">
                <AlertContainer>
                    {alert}
                </AlertContainer>
            </div>
            <FormContainer>
                <Form title="Log In">
                    <Input onChange={(e)=>set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="email" id="email" placeholder="Enter your email:" label="Email:" />
                    <Input onChange={(e)=>set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="password" name="password" id="password" placeholder="Enter your password:" label="Password:" />
                    <Button1 onClick={save} name="Log in" />
                    <p className=" text-right"> Not a member? <Link className=" text-red-600" to='/signup'>SignUp Now</Link></p>
                    {
                        (attempt > 1)?<Link className=" text-red-600" to='/login/forgotPassword'>Forgot Password?</Link>:<></>
                    }
                    
                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Login;