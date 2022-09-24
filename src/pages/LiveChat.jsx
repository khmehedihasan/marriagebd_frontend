import React, { useRef } from 'react';
import BgContainer from '../components/BgContainer';
import NavHome from '../components/NavHome';
import female from '../assets/images/female.png';
import url from '../url';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import io from 'socket.io-client';
function LiveChat(){

    const {id} = useParams();
    const {id : uid} = useAuth();
    const [message, setMessage] = useState("");
    const [messageData, setMessageData] = useState([]);
    const [friend, setFriend] = useState([]);
    const divRef = useRef(null);
    // const [receiver, setReceiver] = useState({});
    const socket = io.connect("http://localhost:8000");


    function send(){

        // fetch(`${url}/chat`,{
        //     method:"POST",
        //     mode:"cors",
        //     credentials:'include',
        //     body:JSON.stringify({senderId:uid, receiverId:id, message}),
        // }).then((data)=>data.json()).then((data)=>{
        //     console.log(data)
        // });

        socket.emit("send_message",{senderId:uid, receiverId:id, message});
        setMessageData((mData)=> [...mData, {senderId:uid, receiverId:id, message}]);

        setMessage("")
    }

    useEffect(()=>{
        socket.emit("join_chat", uid);
    },[]);


    socket.on("receive_message",(data)=>{
        setMessageData((mData)=> [...mData, data]);
        // console.log([...messageData, data]);
        // console.log(data)
        // console.log(" /")
        // console.log(messageData)
        // console.log(socket)
        console.log("messageData")
    });

        console.log("messageData")


    console.log(messageData)




    useEffect(()=>{

        fetch(`${url}/chat?senderId=${uid}&receiverId=${id}`,{
            method:"GET",
            mode:"cors",
            credentials:'include',
        }).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setMessageData(data.data);
                // console.log(data.data)
            }
        });
    },[uid, id]);

    useEffect(()=>{

        fetch(`${url}/chat/friends?senderId=${uid}`,{
            method:"GET",
            mode:"cors",
            credentials:'include',
        }).then((data)=>data.json()).then((data)=>{
            setFriend(data.data)
        });
    },[uid]);

    useEffect(() => {
        const scroll = divRef.current.scrollHeight -divRef.current.clientHeight;
       divRef.current.scrollTo(0, scroll);
    });

    return(
        <>
          <NavHome /> 
          <BgContainer>
            <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] h-[85vh] -mt-10 -mb-28 mx-auto flex justify-between">
                <div className=" w-[320px] h-full border-[10px] border-l-2 border-r-2 border-slate-500 rounded-md shrink-0 p-2 flex flex-col gap-4 overflow-auto">
                    {
                        friend.map((data,index)=>{
                            return( <Link key={index} to={"/liveChat/"+data._id} className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>{data.name}</span></Link>)
                        })
                    }
                </div>
                <div className=" w-full h-full rounded-md ml-4 border-[10px] border-slate-500 relative">
                    <div className=" w-full h-14 z-10 box-content px-1 pr-1 absolute -mt-1 top-0 left-0 bg-slate-500 flex items-center gap-4">
                        <Link to="/liveChat" className=" text-3xl cursor-pointer"><i className="fa-solid fa-arrow-left"></i></Link>
                        <div className=" w-max h-12 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-12 h-12 rounded-full" src={female} alt="" /> <span>Sadia Aktar Mitu</span></div>
                    </div>
                    <div ref={divRef} className=" w-full h-full pt-20 pb-40 p-4 overflow-auto relative">
                        {
                            messageData.map((data,index)=>{
                                return(
                                    <div key={index}>

                                        {
                                            (data.senderId === uid)?
                                            <div className=" w-full block clear-both py-2">
                                                <div className=" w-max lg:max-w-[400px] xl:max-w-[500px] h-auto bg-slate-400 pl-2 rounded-md relative ">
                                                    <div className=" w-[32px] h-3 bg-slate-400 absolute bottom-[0px] -left-3 rounded-[100%] -rotate-45 "></div>
                                                    <div className=" h-auto p-2 ">{data.message}</div>
                                                </div>
                                            </div>:
                                            <div className=" w-full block clear-both py-2">
                                                <div className=" w-max lg:max-w-[400px] xl:max-w-[500px] h-auto bg-slate-400 pr-2 rounded-md relative float-right ">
                                                    <div className=" w-[32px] h-3 bg-slate-400 absolute top-[0px] -right-3 rounded-[100%] -rotate-45 "></div>
                                                    <div className=" h-auto p-2 ">{data.message}</div>
                                                </div>
                                            </div>
                                        }
                                        
                                    </ div>
                                )
                            })
                        }


                    </div>
                    <div className=" w-full h-20 -mb-1 box-content pr-[1px] absolute bottom-0 left-0 bg-slate-500 flex items-center gap-4">
                        <textarea onChange={(e)=> setMessage(e.target.value) } className=" w-[450px] rounded-md resize-none mt-2 p-2 border-none outline-blue-100" value={message} name="message" placeholder="Message..." id="" cols="30" rows="2"></textarea>
                        <button onClick={send} className=" px-3 py-1 bg-blue-800 text-white rounded-md font-bold mt-10 ">Send</button>
                    </div>
                </div>
            </div>
          </BgContainer>

        </>
    )
}

export default LiveChat;