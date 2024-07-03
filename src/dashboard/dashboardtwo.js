import React, { useState, useEffect } from 'react';
import './dashboard.css';

import moment from 'moment';
import { useNavigate,Link } from 'react-router-dom';


import logo from '../logo.svg';
import fwallet from '../fwallets.svg';



import {db, auth} from '../firebase';

import axios from 'axios'

import { collection, getDocs, where, query } from "firebase/firestore";
import Nav from './nav';


function DashBoardTwo(){


    const navigate = useNavigate();


    React.useEffect(()=>{
        var docId = localStorage.getItem("authid");

        if(docId == null){
            navigate('/');
        }
        
     

     
    },[]);



    const handleSignOut = () => {
        auth.signOut()
          .then(() => {
            // Sign-out successful.
            console.log("User signed out");

            localStorage.removeItem("authid");

         
            navigate('/');

        
          })
          .catch((error) => {
            // An error happened.
            console.error("Error signing out:", error);
          });
      };


    return (
        <>


<div className='main row'>
                <Nav />

                <div className='col-md-9 full bg-light m-0 px-0'>

                    <h5 className='card card-heading py-3 text-center m-0'style={{
                        fontWeight:"700",
                    }}>{moment(new Date()).format('dddd, MMMM DD, YYYY')}</h5>

                    <br/>
                    <br/>

                    <div className='text-right pr-4'>
                        <Link to="/payment-method" className='btn mywith'>Withdraw</Link>

                    </div>




                    <div className='row container py-4 balance  pl-5'>

                        <div className='col-md-4 btc rounded mb-5'>
                            <p className='aboutt'>BTC Investment</p>

                            <h3 className='aboutValue'>$ 52,890</h3>
                        </div>



                        <div className='col-md-4 profit rounded mb-5'>
                            <p className='aboutt'>Profit Gained</p>

                            <h3 className='aboutValue'>$ 456,890</h3>
                        </div>

                    </div>


                    <br></br>
                    <br></br>


                    <div className='col-md-10 card m-auto rounded py-4'>
                        <p className='text-center'>No Recent Withdrawals</p>
                    </div>

                    <div class="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>
                   
                    
                </div>

                


               




            </div>
        
        </>
    );
}

export default DashBoardTwo;