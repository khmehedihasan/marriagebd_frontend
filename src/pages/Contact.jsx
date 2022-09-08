import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Contact(){



    useEffect(()=>{
        window.scrollTo(0,0)
    },[])



    return(
        <>
            <Nav />
            {/* <div className=' w-full mt-16'></div> */}
            <div className=" bg-p1 py-36">
                <div className=" m-4 w-[320px] sm:w-[500px] md:w-[800px] bg-slate-100 shadow-lg p-4 sm:p-10  mx-auto flex flex-col gap-2">
                    <h1 className=" text-center text-2xl font-bold"><span className=' text-red-600'>Message</span> us</h1>

                    <label htmlFor="name">Name:</label>
                    <input className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="name" id="name" placeholder="Enter your name:" />

                    <label htmlFor="email">Email:</label>
                    <input className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="email" id="email" placeholder="Enter your email:" />

                    <label htmlFor="phone">Phone:</label>
                    <input className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="phone" id="phone" placeholder="Enter your phone number:" />

                    <label htmlFor="message">Message:</label>
                    <textarea className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="text" name="message" id="message" placeholder="Type your message..." rows={5} ></textarea>
                    <button className=" w-32 mt-2 px-3 py-1 rounded-sm bg-red-600 text-white border-2 border-transparent hover:border-red-600 hover:text-red-600 hover:bg-white ">Send</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;