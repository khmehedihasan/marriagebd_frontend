import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


function About(){



    useEffect(()=>{
        window.scrollTo(0,0)
    },[])




    return(
        <>
            <Nav />
            <div className=' w-full mt-[64px]'></div>
            <div className=" w-full h-full bg-p1 ">
                <div className=' md:w-[700px] lg:w-[1000px] xl:w-[1200px] h-full mx-auto '>
                    <div className=' bg-slate-50'>
                        <h1 className=' text-center text-xl md:text-3xl font-bold pt-20'>About <span className=' text-red-600'>Us</span></h1>
                        <p className=' p-4 text-justify md:text-lg py-16'>
                            There is no doubt, matchmaking is the most challenging part of life. Especially if the person is not engaged with the current relationship paradigms. <br />
                            bdmarriage.com is not just another wedding or dating site. We came to serve genuine bangladeshi single brothers and sisters to find their perfect life partner.
                            We build this digital matrimony platform to help you find the best life partner following your noble desire, attire, & dream followed by muslim sharia. We're people's trusted matrimony website in Bangladesh. 
                            Find your preferred life partner safely.
                        </p>
                    </div>
                    <div className=" p-4 py-10 bg-stone-100">
                        <div className=" flex md:items-center justify-between flex-col md:flex-row">
                            <div>
                                <h1 className=' text-xl md:text-3xl font-bold'> Why choose <span className=' text-red-600'>BD Marriage</span></h1>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Register for Free!</h3>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> 100% human verified profiles</h3>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Chat, Voice & Video calling</h3>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Designed with sharia values</h3>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Halal, safe and secured Matrimony site in Bangladesh</h3>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Private, personalized, and highly confidential service</h3>
                                <h3 className=" pt-3"><i className="fa-regular fa-circle-check text-red-600"></i> Trusted service for more than 16 years</h3>
                                <button className=" py-1 mt-5 px-3 md:text-lg hover:text-red-600 text-white bg-red-600 hover:bg-transparent border-2 border-transparent hover:border-red-600">Find Your Partner</button>
                            </div>
                            <div className=" w-full h-[400px] md:w-[500px] md:h-[500px] mt-10 md:mt-0 rounded-md bg-pic1 bg-no-repeat bg-contain bg-right"></div>
                        </div>
                    </div>
                    <div className=" p-4 py-10 bg-slate-50">
                        <h1 className=' px-4 text-xl md:text-3xl font-bold'> <span className=' text-red-600'>Our Mission </span> and Vision</h1>
                        <p className=' p-4 text-justify md:text-lg pt-10'>
                            We're providing a halal and user friendly digital platform for Bangladeshi to find his/her life partner in a safe & secure way from the whole world. <br />
                            bdmarriage.com is not just another wedding or dating site. We came to serve genuine bangladeshi single brothers and sisters to find their perfect life partner.
                            We build this digital matrimony platform to help you find the best life partner following your noble desire, attire, & dream followed by muslim sharia.
                            We're people's trusted matrimony website in Bangladesh. Find your preferred life partner safely.
                        </p>
                    </div>
                    <div className=" p-4 py-10 bg-slate-50">
                        <h1 className=' px-4 text-xl md:text-3xl font-bold'> <span className=' text-red-600'>Privacy </span> Policy</h1>
                        <p className=' p-4 text-justify md:text-lg py-10'>
                            bdmarriage.com is a leading online matrimonial portal in bangladesh which provides premium matrimonial services. 
                            Since we are strongly committed to your right to privacy, we have drawn have a privacy statement in place with regard to the information we collect from you. 
                            We use a secure server for credit card transactions to protect the credit card information of our clients and Cookies are used to store the login information.
                        </p>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> 1. What information does bdmarriage.com collect from you?</span> <br />
                           <p className=' pl-5'>
                            We gather information from members and guests who apply for the various services our site offers. It includes, but may not be limited to, email address, first name, last name, a user-specified password, e-mail Id, mailing address, zip code and mobile number. bdmarriage shall act on the basis of the information that is being provided by you, believing the same to be true and accurate. We assume the details provided are genuine and under your express consent even if they are being submitted by your family, friends, relatives or a third party on your behalf. By submitting your details, you agree to share your information with other members on bdmarriage. bdmarriage is under no obligation to verify the accuracy or genuineness of the information submitted by you. Any complaints arising in this regard will be your responsibility.
                           </p>
                        </div>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> 2. With whom the site shares the information it collects/tracks?</span> <br />
                           <p className=' pl-5'>
                                The information collected from our clients is shared only with members of JS or members of our partners. Any information you give us is held with the utmost care and security. 
                                We are also bound to cooperate fully should a situation arise where we are required by law or legal process to provide information about a customer.
                           </p>
                        </div>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> 3. Do all visitors have to pay?</span> <br />
                           <p className=' pl-5'>
                                NO, All visitors to our site may browse the site, search the ads and view any articles or features our site has to offer without entering any personal information or paying money.
                           </p>
                        </div>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> 4. How bdmarriage.com team can contact you ?</span> <br />
                           <p className=' pl-5'>
                                The bdmarriage.com team will contact you from time to time to apprise you on various features and functionalities of the website. They will contact you for either "Service" or "Sales" through a variety of mediums like Email, SMS, Mobile Calls etc.
                           </p>
                        </div>
                    </div>
                    <div className=" p-4 py-10 bg-slate-50">
                        <h1 className=' p-4 py-8 text-xl md:text-3xl font-bold'> <span className=' text-red-600'>Terms </span> & Conditions</h1>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> Criteria: </span>
                           <p className=' pl-5'>
                                Bdmarriage.com shall act on the basis of the information that may be submitted by you, believing the same to be true and accurate even if the information is provided during the registration is by your family, friends, relatives on your behalf under your consent. Bdmarriage.com is under no obligation to verify the accuracy or genuineness of the information submitted by you. The minimum age for registering in Bdmarriage.com is 18 years for women and 21 years for men and the maximum age limit is 60 years. You represent and warrant that you have the right, authority and legal capability to enter into this Agreement and that you are neither prohibited nor disabled by any law in force from entering into a contract. 
                           </p>
                        </div>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> Term: </span>
                           <p className=' pl-5'>
                                This Agreement will remain in full force and effect while you use the website and/or are a Member. You may terminate your membership at any time, for any reason by following the instructions on the contact us pages, or    upon receipt by Bdmarriage.com of your written or email notice of termination. Bdmarriage.com may terminate your membership for any reason, effective upon sending notice to you at the email address you have provided in   your application for membership. If Bdmarriage.com terminates your membership in the Bdmarriage.com because you have breached the Agreement, you will not be entitled to any refund of any unused Subscription fees. serves    its right to accept or remove your profile without any reason or intimation. 
                           </p>
                        </div>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> Privacy Policy: </span>
                           <p className=' pl-5'>
                                Please read and comprehend our Privacy Policy, which also governs your visit to Bdmarriage.com, to understand our practices. Members agree that their profile(s) may be crawled and indexed by search engines, where Bdmarriage.com and its network sites do not have any control over the search engines behavior and Bdmarriage.com shall not be responsible for such activities of other search engines. Bdmarriage.com is not responsible for any errors, omissions or representations on any of its pages or on any links or on any of the linked website pages. Bdmarriage.com does not endorse any applicant / member?s details in any manner and you are requested to verify the accuracy of all information on your own before undertaking any reliance on such information. 
                           </p>
                        </div>
                        <div className=' p-4 text-justify md:text-lg'>
                            <i className="fa-regular fa-circle-check text-red-600"></i> 
                            <span className=' font-bold'> License and Site Access: </span>
                           <p className=' pl-5'>
                                Bdmarriage.com grants you a limited license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of Bdmarriage.com. This license does not include any resale or commercial use of this site or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of this site or its contents; any downloading or copying of account information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. This site or any portion of this site may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of Bdmarriage.com. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Bdmarriage.com and our affiliates without express written consent. You may not use any Meta tags or any other "hidden text" utilizing Bdmarriage.com name or trademarks without the express written consent of Bdmarriage.com. Any unauthorized use terminates the permission or license granted by Bdmarriage.com. You may not use any Bdmarriage.com logo or other proprietary graphic or trademark as part of the link without express written permission. By registering your profile on Bdmarriage.com, you explicitly authorize Bdmarriage.com to automatically copy your profiles from Bdmarriage.com domain to its Region based Matrimonial Sites based on member information relevance like caste, sub caste, religion, age, marital status etc. 
                           </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;