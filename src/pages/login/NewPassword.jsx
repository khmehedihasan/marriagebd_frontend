import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert1, Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Button1, Input } from '../../components/Input';
import url from '../../url';

function NewPassword(){


    const [input, setInput] = useState({password:'', rpassword:''});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const {token, id} = useParams();

    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.password !== input.rpassword && input.password !== ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='Password not matched!' />]);
        }else{


            fetch(`${url}/login/resetpassword/${id}`,{
                method:"POST",
                mode:"cors",
                credentials:'include',
                body:JSON.stringify({...input,token}),
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message="Your password is changed successfully." />]);
                    setTimeout(() => {
                        navigate('/login');
                    }, 6000);
                  

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
                <Form title="Reset Password">
                    <Input onChange={(e)=> set(e)}  value={input.password} type="password" name="password" id="password" placeholder="Enter your password:" label="password:" />
                    <Input onChange={(e)=> set(e)}  value={input.rpassword} type="password" name="rpassword" id="rpassword" placeholder="Enter retype your password:" label="Retype password:" />

                    <div className=" flex gap-5">
                        <Button1 onClick={save} name="Submit" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default NewPassword;