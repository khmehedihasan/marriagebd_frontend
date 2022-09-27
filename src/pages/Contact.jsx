import React, { useState,useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import url from '../url';
import { Alert1, Alert2, AlertContainer } from '../components/Alert';

function Contact(){
    const [value, setValue] = useState({name:'', email:'', phone:'', description:''});
    const navigate = useNavigate();
    const [alert, setAlert] = useState([]);


    function set(e){
      setValue({...value, [e.target.name]:e.target.value});
    }
    
  function send(){
    if(value.name ==='' || value.email==='' || value.phone==='' || value.description===''){
        setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message="All fields are required!" />]);
    }else{

        fetch(`${url}/message`,{
            method:"POST",
            body: JSON.stringify(value),
            credentials: 'include'
        }).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successul" message="Message send successfully." />]);
                setTimeout(()=>{
                    navigate(-1);
                }, 6000)
            }
        });

    }

  }



    useEffect(()=>{
        window.scrollTo(0,0)
    },[])



    return(
        <>
            <Nav />
            {/* <div className=' w-full mt-16'></div> */}
            <div className= " fixed top-16 right-2 ">
                <AlertContainer>
                    {alert}
                </AlertContainer>
            </div>
            <div className=" bg-p1 py-36">
                <div className=" m-4 w-[320px] sm:w-[500px] md:w-[800px] bg-slate-100 shadow-lg p-4 sm:p-10  mx-auto flex flex-col gap-2">
                    <h1 className=" text-center text-2xl font-bold"><span className=' text-red-600'>Message</span> us</h1>

                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="name"  value={value.name} id="name" placeholder="Enter your name:" />

                    <label htmlFor="email">Email:</label>
                    <input onChange={(e)=>set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="email" name="email" value={value.email} id="email" placeholder="Enter your email:" />

                    <label htmlFor="phone">Phone:</label>
                    <input onChange={(e)=>set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="phone" value={value.phone} id="phone" placeholder="Enter your phone number:" />

                    <label htmlFor="message">Message:</label>
                    <textarea onChange={(e)=>set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="description" value={value.description} id="message" placeholder="Type your message..." rows={5} ></textarea>
                    <button onClick={send} className=" w-32 mt-2 px-3 py-1 rounded-sm bg-red-600 text-white border-2 border-transparent hover:border-red-600 hover:text-red-600 hover:bg-white ">Send</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;