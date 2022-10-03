import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { Alert2, AlertContainer } from '../../components/Alert';
import { Form, FormContainer, Button1, Button2, Textarea } from '../../components/Input';
import url from '../../url';
import useAuth from '../../hooks/useAuth';

function Step7(){


    const [input, setInput] = useState({aboutSelf:''});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const { id } = useAuth();


    function set(e){
        setInput({...input, [e.target.name]:e.target.value});
    }


    function save(){
        if( input.aboutSelf === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='All fields are required!' />]);
        }else{
            const d = JSON.parse(localStorage.getItem("userInfo"));
            localStorage.setItem("userInfo", JSON.stringify({ ...d, ...input,}));
            
            // const data = JSON.parse(localStorage.getItem("userInfo"));

            fetch(`${url}/user/${id}`,{
                method:"PUT",
                mode:"cors",
                body:localStorage.getItem("userInfo")
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    localStorage.removeItem("userInfo");
                    navigate("/profile");
                }else{
                    setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message={data.message} />]);
                }
            })
        }
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userInfo"));
        if(data.aboutSelf !== undefined ){
            setInput({aboutSelf:data.aboutSelf});
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
                <Form title="About Yourself">
                    <h1 className=" text-green-600 font-bold text-right">100% Complete</h1 >
                    <Textarea onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={input.aboutSelf} type="text" name="aboutSelf" id="aboutSelf" placeholder="Say something about yourself:" label="About yourself:" />

                    <div className=" flex gap-5">
                        <Button2 onClick={()=> navigate('/info/step_6')} name="Back" />
                        <Button1 onClick={save} name="Submit" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Step7;