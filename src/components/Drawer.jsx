import React from 'react';
import { useState } from 'react';

function Drawer({height, children, title}){
    const [style, setStyle] = useState({container:`${height}`, content:'rotate-0'});

    function toggleStyle(){
        console.log(style)
        if(style.container === `${height}`){
            setStyle({container:'0px', content:'rotate-90'});
        }else{
            setStyle({container:`${height}`, content:'rotate-0'});
        }
    }

    return(
        <div className=' w-full h-auto bg-slate-200 shadow-2xl rounded-md'>
            <div onClick={toggleStyle} className=" w-full flex items-center justify-between px-2 py-1 cursor-pointer text-lg text-red-600 font-bold  shadow-lg ">
                <span>{title}</span>
                <i className={`fa-solid fa-angle-right ${style.content} transition-all ease-in-out duration-700`}></i>
            </div>
            <div style={{height: style.container}} className={` w-full bg-slate-50  transition-all ease-in-out duration-700 overflow-hidden rounded-bl-md rounded-br-md`}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Drawer;