import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import NavHome from '../components/NavHome';
import url from '../url';
import female from '../assets/images/female.png';
import male from '../assets/images/male.png';
import { useParams } from 'react-router-dom';

function VewProfile(){
    const [user, setUser] = useState({birthDate:"0000-00-00T00:00:00.000Z", height:"00"});
    const { id } = useParams();

    useEffect(()=>{

        fetch(`${url}/user/${id}`,{
            method:"GET",
            mode:"cors",
            credentials:'include',
        }).then((data)=>data.json()).then((data)=>{
            
            setUser(data.data);
        });
    },[id]);


    const bdate = new Date(user.birthDate);

    const getAge = (date)=>{

        var today = new Date();

        const datesplit = date.split('-');

        const year = parseInt(datesplit[0]);
        const month = parseInt(datesplit[1]);
        const day = parseInt(datesplit[2]);

        let age = today.getFullYear() - year;

        if (today.getMonth()+1 < month || (today.getMonth()+1 === month && today.getDate() < day)) {
            age--;
        }

        return age;
    }



    return(
        <>
            <NavHome />
                <div className=" w-full h-auto mt-20 bg-white"></div>
                <div className=" w-full md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto h-auto p-2 lg:p-4 bg-slate-100 shadow-md rounded-md">
                    <div className=" w-full mx-auto flex flex-col items-center justify-center">
                        {
                            (user.img === undefined)?
                            <img className=" w-[240px] md:w-[300px] h-[240px] md:h-[300px] mt-8 border-4 border-slate-600 rounded-full" src={(user.gender === "Female")?female:male} alt="" />:
                            <img className=" w-[240px] md:w-[300px] h-[240px] md:h-[300px] mt-8 border-4 border-slate-600 rounded-full" src={user.img} alt="" />
                        }
                        
                        <h1 className=' text-center text-lg md:text-2xl font-bold'>{user.candidateName}</h1>
                    </div>
                    <div className="  lg:p-4 my-10">
                        <h1 className=" text-lg md:text-2xl font-bold text-red-600 text-center py-4">Personal Info</h1>
                        <div className=" md:w-[600px] lg:w-[700px] text-sm md:text-base mx-auto flex justify-between ">
                            <div className=" w-1/2 relative">
                                <div>
                                    <span className=" font-bold text-xs sm:text-sm md:text-base">User ID: </span><span className=" text-red-600 font-bold text-xs sm:text-sm md:text-base">{user.uid}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Name: </span><span>{user.candidateName}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Birth Date: </span><span>{bdate.toDateString()}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Age: </span><span>{getAge(user.birthDate)} years</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Gender: </span><span>{user.gender}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Height: </span><span>{`${user.height.toString()[0]}' ${user.height.toString()[0]}"`}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Weigth: </span><span>{user.weight} Kg</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Education: </span><span>{user.educationQualification}</span>
                                </div>
                                <p className=" w-full text-justify pr-2">
                                    <span className=" font-bold">Education Details: </span><span className=" text-justify">{user.educationDetails}</span>
                                </p>
                                <p className=" w-full text-justify pr-2">
                                    <span className=" font-bold">About Self: </span><span className=" text-justify">{user.aboutSelf}</span>
                                </p>
                            </div>
                            <div className=" w-1/2 pl-4 border-l-2 relative">
                                <div>
                                    <span className=" font-bold">Marital Status: </span><span>{user.maritalStatus}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Religion: </span><span>{user.religion}</span>
                                </div> 
                                <div>
                                    <span className=" font-bold">Religious Value: </span><span>{user.religiousValue}</span>
                                </div> 
                                <div>
                                    <span className=" font-bold">Smoke: </span><span>{user.smoke}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Complexion: </span><span>{user.complexion}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Body Type: </span><span>{user.bodyType}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Blood: </span><span>{user.blood}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Diet: </span><span>{user.diet}</span>
                                </div>
                                <p className=" w-full h-auto text-justify pr-2">
                                    <span className=" font-bold">Physical Details: </span><span>{user.physicalDetails}</span>
                                </p>
                                <div>
                                    <span className=" font-bold">Working Sector: </span><span>{user.workingSector}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">profession: </span><span>{user.profession}</span>
                                </div>
                                <div className=" w-full text-justify">
                                    <span className=" font-bold">Profession Details: </span><span>{user.professionDetails}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className=" lg:p-4 my-10">
                        <h1 className=" text-lg md:text-2xl font-bold text-red-600 text-center py-4">Family Info</h1>
                        <div className=" md:w-[600px] lg:w-[700px] text-sm md:text-base mx-auto flex justify-between ">
                            <div className=" w-1/2">
                                <div>
                                    <span className=" font-bold">Father Status: </span><span>{user.fatherStatus}</span>
                                </div>
                                <div className=" w-full text-justify">
                                    <span className=" font-bold">Father Occupation: </span><span>{user.fatherOccupation}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Mother Status: </span><span>{user.motherStatus}</span>
                                </div>
                                <div className=" w-full text-justify">
                                    <span className=" font-bold">Mother Occupation: </span><span>{user.motherOccupation}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Married Brother: </span><span>{user.marriedBrother}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Unmarried Brother: </span><span>{user.unMarriedBrother}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Married Sister: </span><span>{user.marriedSister}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Unmarried Sister: </span><span>{user.unMarriedSister}</span>
                                </div>
                            </div>
                            <div className=" w-1/2 pl-4 border-l-2">
                                <div className=" w-full text-justify">
                                    <span className=" font-bold">Family Details: </span><span>{user.familyDetails}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="  lg:p-4 my-10">
                        <h1 className=" text-lg md:text-2xl font-bold text-red-600 text-center py-4">Contact & Location Info</h1>
                        <div className=" md:w-[600px] lg:w-[700px] text-sm md:text-base mx-auto flex justify-between ">
                            <div className=" w-1/2">
                                <div>
                                    <span className=" font-bold text-xs sm:text-sm md:text-base ">Email: </span><span>{user.email}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Phone: </span><span>{user.phone}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Living City: </span><span>{user.livingCity}</span>
                                </div>

                            </div>
                            <div className=" w-1/2 pl-4 border-l-2">
                                <div>
                                    <span className=" font-bold">Home Division: </span><span>{user.homeDivision}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Living In: </span><span>{user.livingIn}</span>
                                </div>
                                <div>
                                    <span className=" font-bold">Nationality: </span><span>{user.nationality}</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default VewProfile;