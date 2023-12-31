import React, { useEffect } from 'react';
import './login.css';

import { useState } from 'react';

import db from '../firebase';
import { addDoc, collection } from "firebase/firestore"; 
import { async } from '@firebase/util';
import edo from './edo.png';
import { Link, useNavigate}  from 'react-router-dom';
import {getDocs, where, query } from "firebase/firestore";






function Login(){

    


    const[hospital_code, setHospitalCode] = useState('');
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const [documentExists, setDocumentExists] = useState(false);

    const [showError, setShowError] = useState(false);



  async function addToFireStore(e){
       e.preventDefault();

       try {
        const docRef = await addDoc(collection(db, "hospitals"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
        alert("working")
      } catch (e) {
        console.error("Error adding document: ", e);
      }
   }


       async function handleLogin(e){
            e.preventDefault();
            const hospital = localStorage.getItem("hospital");

            if(hospital == null){


                const hospitalsRef = collection(db, 'centers');
                const q = query(hospitalsRef, where('hospital_code', '==', hospital_code));

                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                  setDocumentExists(true);

                  localStorage.setItem("hospital",hospital_code);
                 navigate('/dashboard');
                }

                else{
                    setDocumentExists(false);
                    setShowError(true);

                }





                // localStorage.setItem("hospital",hospital_code);
                //  navigate('/dashboard');
                
            }

           

            
            




        }


        React.useEffect(() => {

          
                var hospital = localStorage.getItem("hospital");

                if(hospital != null){
                    navigate('/dashboard');
                }
        
          
        
    
    
        }, []);
    

  
    return (
        <div className='maindiv'style={{
            
            minHeight:"100vh",
            width:"100%",
            overflow:'hidden',
            display:'flex',
            flexDirection:'column',
            justifyContent:"center",
           
            
            
        }}>



            <form>
                {/* <div className='form-group'>
                    <input onChange={function(e){
                        setHospitalCode(e.target.value);
                    }} value={hospital_code} type="text"name="hospital_code"className='form-control'placeholder='Enter Hospital Code'required />

                </div> */}

                <div className='col-md-4 m-auto'>

                    <div className='text-center py-5'>

                        {showError && <div className='alert alert-danger text-danger font-weight-bold'>
                            <p className='text-center'>Invalid Hospital Code</p>

                        </div>}

                    <img src={edo} className="" style={{
                        width:"130px",
                        height:"130px",
                        borderRadius:"100%",
                    }} />

                    </div>

                    


                    <div className='form-group'>
                        <input onChange={function(e){
                            setHospitalCode(e.target.value);

                        }} value={hospital_code} type="text"className='form-control py-4'placeholder='Enter Hospital Code'required />

                    </div>

                    <br/>
                   

                    <div className='text-center'>
                <button onClick={handleLogin} className='btn btn-sm btn-success py-2'>Go To Dashboard</button>

                </div>

                </div>

                {/* <input type="text"className='form-control w-100'placeholder='Enter Hospital Name'/> */}

               
                <br/>

                {/* <Link to={}></Link> */}

                
                

                
            </form>



            

            
            
            
        
        
        </div>
    );
}

export default Login;