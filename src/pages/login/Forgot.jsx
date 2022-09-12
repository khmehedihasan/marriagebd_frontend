import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert1, Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Button1, Input } from '../../components/Input';
import url from '../../url';

function Forgot(){


    const [input, setInput] = useState({email:''});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.email === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
;

            fetch(`${url}/login/forgotPassword/`,{
                method:"POST",
                mode:"cors",
                credentials:'include',
                body:JSON.stringify(input),
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    // setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message="Your email varification is successful." />]);

                }else{
                    setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message={data.message} />]);
                }
            })
        }
    }

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
                <Form title="Verify Email">
                    <Input onChange={(e)=> set(e)}  value={input.email} type="email" name="email" id="email" placeholder="Enter your email:" label="Email:" />

                    <div className=" flex gap-5">
                        <Button1 onClick={save} name="Submit" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Forgot;