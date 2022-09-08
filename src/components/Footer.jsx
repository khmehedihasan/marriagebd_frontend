import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){

    const date = new Date();


    return(
        <footer className=" w-full pt-12 bg-slate-200 ">
            <div className=" w-full md:w-[700px] lg:w-[1000px] xl:w-[1200px] h-auto md:h-[300px] mx-auto flex justify-between items-center flex-col md:flex-row">
                <div  className=" text-center md:text-start mt-10">
                    <h1 className=" text-2xl font-bold mb-6">Marriage <span className=" text-red-600"> BD</span></h1>
                    {/* <Link to="/about">About Us</Link> */}
                    <h3 className=" pb-10">Connect with our social media</h3>
                    <a className=" text-4xl text-red-600 mr-4" href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
                    <a className=" text-4xl text-red-600 mr-4" href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    <a className=" text-4xl text-red-600 mr-4" href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a className=" text-4xl text-red-600 mr-4" href=" " target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className=" text-center md:text-start mt-10">
                    <h1 className=" text-2xl font-bold mb-6">Help & Support</h1>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>Get Free Registration</Link>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>Membership Plans</Link>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>Contact us</Link>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>FAQ</Link>
                </div>
                <div  className=" text-center md:text-start mt-10">
                    <h1 className=" text-2xl font-bold mb-6">Corporate</h1>
                    <Link className=" mt-2 hover:text-red-600 block" to='/about'>About Us</Link>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>Mission & Vision</Link>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>VIP Service</Link>
                    <Link className=" mt-2 hover:text-red-600 block" to=' '>LifeStyle Blogs</Link>
                </div>
                <div  className=" text-center md:text-start mt-10">
                    <h1 className=" text-2xl font-bold mb-6">Contact Us</h1>
                    {/* <div className=" flex items-center"> */}
                        <a href="tel:+017464641664"> <span className="text-red-600 text-2xl"><i className="fa-solid fa-phone-flip pr-2"></i> </span> 017464641664</a> <br />
                        <a href="tel:+017464641664"> <span className="text-red-600 text-2xl"><i className="fa-solid fa-phone-flip pr-2"></i> </span> 019464565485</a> <br />
                        <a href="mailto:demo@gmail.com"><span className="text-red-600 text-2xl"><i className="fa-solid fa-envelope  pr-2"></i></span> demo@gmail.com</a>
                    {/* </div> */}
                </div>
            </div>
            <div className=" w-full p-5 bg-slate-500 text-center text-white">Copyright © {date.getFullYear()} Marriage BD | All rights reserved.</div>
        </footer>
    )
}

export default Footer;