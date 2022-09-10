import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Button1, Form, FormContainer, Input } from '../components/Input';
import Nav from '../components/Nav';

function Login(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])



    return(
        <>
            <Nav />
            <FormContainer>
                <Form title="Log In">
                    <Input className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="email" id="email" placeholder="Enter your email:" label="Email:" />
                    <Input className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="password" name="password" id="password" placeholder="Enter your password:" label="Password:" />
                    <Button1 name="Log in" />
                    <p className=" text-right"> Not a member? <Link className=" text-red-600" to='/signup'>SignUp Now</Link></p>
                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Login;