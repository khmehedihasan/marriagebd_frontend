import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BgContainer from '../components/BgContainer';
import NavHome from '../components/NavHome';
import Footer from '../components/Footer';
import url from '../url';
import useAuth from '../hooks/useAuth';
function PaymentDetails(){

    const { id } = useAuth();
    const [page, setPage] = useState(1);
    const [user, setUser] = useState({});
    const [packag, setPackag] = useState({});
    // const [limit, setLimit] = useState(2);

    const [data, setData] = useState({data:[{user:{name:""}}],next:{},previous:{}, totalPage: 0});

    let buttons = [];

    for(let i = 1; i <= data.totalPage; i++){
        buttons = [...buttons, <button key={i} onClick={()=>setPage(i)} className={` ${i=== (data.previous.page+1)?' text-red-600':' text-green-600' } h-11 w-11 mr-1`}>{i}</button>]
    }


    useEffect(()=>{
            fetch(`${url}/payment/${id}?page=${page}&limit=${10}`,{mode:'cors',credentials:"include"}).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    setUser(data.result.data[0].user);
                    setPackag({"name":data.result.data[0].packag})
                    setData(data.result);
                }
            });
    
        return () => setData({data:[],next:{},previous:{}});
    
    },[]);


    const pdate = new Date(user.packageValidity);
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[]);


    return( <>

            <NavHome /> 
            <BgContainer>
                <div className=" overflow-auto px-6">
                    <div className=" w-[430px] md:w-[760px] lg:w-[900px] xl:w-[1200px] mx-auto h-auto  bg-slate-50 rounded-lg shadow-lg p-4 mb-10">
                        <h1 className=" text-center text-red-600 text-2xl font-bold">Current Package</h1>
                        <div>
                            <h1>
                                <span className=" font-bold">Package Name: </span>
                                {
                                    (packag.name != undefined)?<span className=" text-red-600">{packag.name}</span>:<span className=" text-red-600"> No Package</span>
                                }
                                
                            </h1>
                            <h1>
                                <span className=" font-bold">Package Validity: </span>
                                {
                                    (packag.name != undefined)? <span className=" text-red-600">{`${pdate.toLocaleDateString()} ${pdate.toLocaleTimeString()}`}</span>:<span className=" text-red-600"> No Validity</span>
                                }
                                
                            </h1>
                        </div>
                    </div>
                    <div className=" w-[430px] md:w-[760px] lg:w-[900px] xl:w-[1200px] mx-auto h-auto  bg-slate-50 rounded-lg shadow-lg p-4">
                        <div>
                            <table className=" w-full text-center border border-slate-300">
                                <thead>
                                    <tr className=" border border-slate-300">
                                        <th className=" border-r border-slate-300">#</th>
                                        <th className=" border-r border-slate-300">Package</th>
                                        <th className=" border-r border-slate-300">Price</th>
                                        <th className=" border-r border-slate-300">Transaction ID</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.map((data, index)=>{

                                            const d = new Date(data.date);
                                            return(
                                                <tr key={index} className=" border border-slate-300">
                                                    <td className=" border-r border-slate-300">{index+1}</td>
                                                    <td className=" border-r border-slate-300">{data.packag}</td>
                                                    <td className=" border-r border-slate-300">{data.price}</td>
                                                    <td className=" border-r border-slate-300">{data.trxId}</td>
                                                    <td className=" border-r border-slate-300">{`${d.toDateString()}`}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className={` w-full h-max bg-slate-50 rounded-md text-red-600 flex flex-col sm:flex-row`}>
                            <div className=' w-max flex flex-wrap'>
                            {
                                (data.previous.page === 0)? <button className=' h-11 px-2 mr-1 text-gray-400 cursor-not-allowed'>Previous</button>:<button onClick={()=>setPage(data.previous.setPage)} className=' h-11 px-2 mr-1'>Previous</button>
                            }
                                <div  className=' flex flex-wrap'>
                                    {
                                        buttons
                                    }
                                </div>
                                {
                                (data.next.page === 0)?  <button className='h-11 px-2 text-gray-400 cursor-not-allowed'>Next</button>: <button onClick={()=>setPage(data.next.page)} className='h-11 px-2'>Next</button>
                                }
                            
                            </div>
                            <div className=' pl-2 sm:pl-8 py-2 mt-0.5'>Showing {(data.previous.page*data.previous.limit)+1} to { (data.next.page === 0)? data.totalData : (data.previous.page+1)*data.previous.limit} of {data.totalData} entries</div>
                        </div>
                    </div>
                </div>
            </BgContainer>
            <Footer />

    </>);
}

export default PaymentDetails;