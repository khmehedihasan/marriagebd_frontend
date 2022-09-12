import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert1, Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Button1, Input } from '../../components/Input';
import url from '../../url';

function Verify(){


    const [input, setInput] = useState({code:''});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.code === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
;

            fetch(`${url}/verify/${id}`,{
                method:"PUT",
                mode:"cors",
                credentials:'include',
                body:JSON.stringify(input),
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message="Your email varification is successful." />]);
                    setTimeout(() => {
                        localStorage.removeItem("userInfo");
                        navigate('/login');  
                    },6000);
                }else{
                    setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message={data.message} />]);
                }
            })
        }
    }

    function newCode(){

        fetch(`${url}/verify/resend/${id}`,{
            method:"GET",
            mode:"cors",
            credentials:'include',
        }).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message="New code has been sent to your email." />]);
            }else{
                setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message={data.message} />]);
            }
        })
        // setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message="New code has been sent to your email." />]);
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
                    <h1 className=" text-red-600  text-center pt-5">A five digit <b>verification code</b> sent to your email.</h1 >
                    <Input onChange={(e)=> set(e)}  value={input.code} type="text" name="code" id="code" placeholder="Enter your code:" />

                    <div className=" flex gap-5">
                        <Button1 onClick={save} name="Submit" />
                        <button onClick={newCode} className=" w-max mt-2 px-3 py-1 rounded-sm bg-blue-900 text-white border-2 border-transparent hover:border-blue-900 hover:text-blue-900 hover:bg-white " >Resend Code</button>
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Verify;