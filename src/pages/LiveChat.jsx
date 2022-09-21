import React from 'react';
import BgContainer from '../components/BgContainer';
import NavHome from '../components/NavHome';
import female from '../assets/images/female.png';
function LiveChat(){
    return(
        <>
          <NavHome /> 
          <BgContainer>
            <div className=" md:w-[700px] lg:w-[1000px] xl:w-[1200px] h-[85vh] -mt-10 mx-auto flex justify-between">
                <div className=" w-[320px] h-full border-[10px] border-l-2 border-r-2 border-slate-500 rounded-md shrink-0 p-2 flex flex-col gap-4 overflow-auto">
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sadia Aktar Mitu</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                    <div className=" w-full h-12 bg-slate-400 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-10 h-10 rounded-full" src={female} alt="" /> <span>Sangida Jahan Riea</span></div>
                </div>
                <div className=" w-full h-full rounded-md ml-4 border-[10px]  border-l-2 border-r-2  border-slate-500 relative">
                    <div className=" w-full h-14 absolute top-0 left-0 bg-slate-500 px-4 flex items-center gap-4">
                        <div className=" text-3xl cursor-pointer"><i className="fa-solid fa-arrow-left"></i></div>
                        <div className=" w-max h-12 p-1 rounded-md flex items-center gap-4 cursor-pointer"> <img className=" w-12 h-12 rounded-full" src={female} alt="" /> <span>Sadia Aktar Mitu</span></div>
                        <div></div>
                    </div>
                    
                </div>
            </div>
          </BgContainer>

        </>
    )
}

export default LiveChat;