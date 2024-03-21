// Home.js
import React from 'react';
import './styles.css';

import glass2Image from './img/glass2.png'; // Import glass2 image
import glass3Image from './img/glass3.png'; // Import glass3 image
import glassImage from './img/Glass.png'; // Import Glass image
import card1Image from './img/1.png'; // Import card 1 image
import card2Image from './img/2.png'; // Import card 2 image
import card4Image from './img/4.png'; // Import card 4 image
import Navbar from './navbar';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
           <div class="">
      <Navbar />
      <div
        class="content flex flex-col px-10 relative justify-center items-center gap-10 h-screen overflow-x-auto bg-[#041C46]">
        <h1 class="text-2xl text-white">
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. 
        
        </h1>
        <img
          src={glass2Image}
          alt="wd"
          class="absolute bottom-10 left-[30%] left-20"
        />
        <img src={glass3Image} alt="" class="absolute top-20 left-20" />
        <img
          src={glassImage}
          alt="dw"
          class="absolute bottom-5 right-20 -z-1"
        />

        <div class="flex justify-center gap-6 text-white font-medium z-10">
          
          
        <div
            class=" bg-opacity-20 backdrop-filter shadow-lg rounded-3xl p-5  border-gray-300"
          >
           <Link to="/chmp" class="card gap-4 px-20 hover:opacity-100 items-center rounded-2xl w-[348px] h-[411px] flex flex-col justify-center">
             
             
              <div class="icon active">
                <img src={card1Image} class="w-20" alt='ss' />
              </div>
              <div class="text-[30px] text-center">CHMP Reguratory updates</div>
            </Link>
          </div>



          <div
            class=" bg-opacity-20 backdrop-filter shadow-lg rounded-3xl p-5  border-gray-300"
          >
            <div
              class="card gap-4 px-20 opacity-50 items-center rounded-2xl w-[350px] h-[400px] flex flex-col justify-center relative"
            >
                    <Link to="/update" class="card gap-4 px-20 hover:opacity-100 items-center rounded-2xl w-[348px] h-[411px] flex flex-col justify-center">
              <div class="icon">
                <img src={card2Image} class="w-20" alt='wsw' />
              </div>
              <div class="absolute top-0 right-0 px-4 py-3">
                <img src={card4Image} class="w-[20px]" alt='ss'/>
              </div>
              <div class="text-[30px] text-center">
                Daily Newsletter Assistant
              </div>
              </Link>
            </div>
          </div>

          <div
            class="bg-opacity-20 backdrop-filter shadow-lg rounded-3xl p-5  border-gray-300"
          >
            <div
              class="card gap-4 px-20 opacity-50 items-center rounded-2xl w-[350px] h-[400px] flex flex-col justify-center relative"
            >
                  <Link to="/report" class="card gap-4 px-20 hover:opacity-100 items-center rounded-2xl w-[348px] h-[411px] flex flex-col justify-center">
              <div class="icon">
                <img src={card2Image} class="w-20" alt='sa' />
              </div>
              <div class="absolute top-0 right-0 px-4 py-3">
                <img src={card4Image} class="w-[20px]" alt='s'/>
              </div>
              <div class="text-[30px] text-center">
                Multi-alert Newsletter Assistant
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Home;
