import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Alert1, Alert2, AlertContainer } from '../components/Alert';
import { Button1, FormContainer, Input } from '../components/Input';
import url from '../url';
import useAuth from '../hooks/useAuth';

function Order(){
    const navigate = useNavigate();
    const [alert, setAlert] = useState([]);
    const [trxId, setTrxId] = useState(" ");
    const { packag } = useParams();
    const { id } = useAuth();

    function save(){
        if( trxId === " "){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='Please enter TrxID.' />]);
        }else{
            fetch(`${url}/payment/${id}`,{
                method:"POST",
                mode:'cors',
                credentials:"include",
                body:JSON.stringify({package:packag, trxId})
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message={data.message} />]);
                   setTimeout(()=>{
                    navigate('/paymentDetails')
                   },6000)
                }
            });
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
                    <div className=" md:w-[500px] lg:w-[800px] h-[400px] mx-auto bg-slate-100 rounded-md p-4">
                        <h1 className=" text-center text-red-600 text-2xl font-bold py-2 m">Payment Offline</h1>
                        <h3 className=" text-center">You can pay offline by following bKash account</h3>
                        <h2 className=" mt-10"><span className=" font-bold">Merchant Account: </span><span className=" text-red-600">17664946562</span></h2>
                        <h2 className=" pb-6"><span className=" font-bold">Personal Account: </span><span className=" text-red-600">01764945645</span></h2>
                        <Input onChange={(e)=> setTrxId(e.target.value)} type="text" name="trxId" placeholder="Enter your transaction id" /> <Button1 onClick={save} name="Send"></Button1>
                        <p className=" mt-6 text-justify">You can pay your membership amount to our above Merchant or Personal bKash account. After sending your payment, please send TrxID (Transaction ID). </p>
                    </div>
                    
            </FormContainer>
            <Footer />
        </>
    )
}

export default Order;