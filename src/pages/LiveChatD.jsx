import React from 'react';
import BgContainer from '../components/BgContainer';
import NavHome from '../components/NavHome';
import female from '../assets/images/female.png';
import url from '../url';
function LiveChatD(){


    function send(){
        fetch(`${url}/chat`,{
            method:"POST",
            mode:"cors",
            credentials:'include',
            body:JSON.stringify({message:"hi"}),
        }).then((data)=>data.json()).then((data)=>{

        });
    }


    return(
        <>
          <NavHome /> 
          <BgContainer>
            <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] h-[85vh] -mt-10 -mb-28 mx-auto flex justify-between">
                <div className=" w-[320px] h-full border-[10px] border-l-2 border-r-2 border-slate-500 rounded-md shrink-0 p-2 flex flex-col gap-4 overflow-auto">
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sadia Aktar Mitu</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                </div>
                <div className=" w-full h-full rounded-md ml-4 border-[10px] border-slate-500 relative">
                    <div className=" w-full h-14 z-10 box-content px-1 pr-1 absolute -mt-1 top-0 left-0 bg-slate-500 flex items-center gap-4">
                    </div>
                        <div className=" w-full h-full bg-[url('../images/chat.png')] bg-no-repeat bg-center bg-auto"></div>
                    <div className=" w-full h-20 -mb-1 box-content pr-[1px] absolute bottom-0 left-0 bg-slate-500 flex items-center gap-4">
                        <textarea className=" w-[450px] rounded-md resize-none mt-2 p-2 border-none outline-blue-100" name="message" placeholder="Message..."  id="" cols="30" rows="2"></textarea>
                        <button onClick={send} className=" px-3 py-1 bg-blue-800 text-white rounded-md font-bold mt-10 ">Send</button>
                    </div>
                </div>
            </div>
          </BgContainer>

        </>
    )
}

export default LiveChatD;