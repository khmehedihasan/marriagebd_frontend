import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Alert2, AlertContainer } from '../components/Alert';
import { Form, FormContainer, Input, Button1 } from '../components/Input';
import url from '../url';
import useAuth from '../hooks/useAuth';

function ChangePic(){


    const [photo, setPhoto] = useState({});
    const [alert, setAlert] = useState([]);
    const navigate = useNavigate();
    const { id } = useAuth();

    function set(e){
        setPhoto(e.target.files[0])
    }

    function save(){

        const formData = new FormData();
        formData.append('photo',photo);

        if(photo.size === undefined){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message='Please select an Image!' />]);
        }else{

            fetch(`${url}/user/changePic/${id}`,{
                method:"PUT",
                body:  formData,
                credentials: 'include'
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                  navigate('/profile');
                }else{
                  setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild!" message={data.message} />]);
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
                <Form title="Change Profile Picture">
                    <h1 className=" text-red-600 text-right">Please upload .jpg or .jpeg or .png file</h1 >

                    <Input onChange={(e)=> set(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" type="file" name="photo" id="photo" placeholder="Photo:" label="Upload photo:" />

                    <div className=" flex gap-5">
                        <Button1 onClick={save} name="Upload" />
                    </div>

                </Form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default ChangePic;