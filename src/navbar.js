// Navbar.js
import React from 'react';
import './styles.css';
import profileImage from './img/profile.png';
import menuImage from './img/menu.png'; // Import menu image



function Navbar(){
return(

<header class="flex-none scrolled fixed left-0 right-0 top-0 z-50">
        <div
          class="bg-[#041C46] w-full text-white px-8 py-10 sm:py-4 lg:py-6x h-20 sm:px-8 flex flex-row justify-between lg:justify-between items-center transition-colors duration-300">
          <div class="w-full">
            <a href="/" class="flex items-center">
              <b><span class="lg:text-4xl sandoz">SANDOZ</span></b>
            </a>
          </div>
          <div class="w-full space-x-3 flex justify-end max-lg:hiddenx items-center text-[16px]">
            <p>Hello, <strong>Thomas Smith</strong></p>
            <div class="w-fit rounded-full bg-slate-500 text-white">
              <img src={profileImage} class="w-10 rounded-full h-10" alt="aa" />
            </div>
            <div class="">
              <img src={menuImage} alt="" />
            </div>
          </div>
        </div>
      </header>
);
}

export default Navbar; 