// App.js
import React from 'react';
import Home from './home'; // Import the Home component
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import Arrow2 from './img/arrow2.png';
import Image5 from './img/5.png';
// Import other components as needed

function CHMP() {
    return (
        <div>
           <Navbar />
           
           <div
        class="content flex flex-col px-6 lg:px-20 justify-center overflow-y-auto gap-10 h-full py-20 overflow-auto bg-[#ffffff]"
      >
        <div
          class="lg:flex-row flex flex-col pt-4 gap- justify-between items-center"
        >
          <h1
            class="text-4xl text-left font-medium text-black flex items-center gap-3"
          >
            <div class="">
            <Link to="/">
              
              <img src={Arrow2} alt="" />
              
               </Link>
            </div>
            CHMP Reguratory Updates
          </h1>
          <div class="flex gap-3 pt-4 items-center">
            <div class="relative">
              <input
                type="search"
                name=""
                id=""
                placeholder="search"
                class="rounded-full px-5 py-3 border w-full lg:w-[426px]"
              />
            </div>
            <div class="filter">
                <img src={Image5} class="w-[25px]" />
                </div>
          </div>
        </div>
        <div class="w-full mx-auto mb-2 h-px bg-gray-200"></div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            class="card2 space-y-4 bg-white rounded-3xl w-full h-[100%] pt-5 flex flex-col px-5 relative shadow-sm shadow-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200/20 hover:bg-opacity-20 hover:blur-20 hover:backdrop-filter"
          >
            <h1 class="text-xl text-[#000000] font-bold">
              Agenda of the CHMP meeting <br />19-22 Febuary 2024
            </h1>
            <div class="flex gap-3 py-4">
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Published:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Last updated:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Reference number:</small>
                <div class="text-sm text-gray-500">EMA/CHMP/39398/2024</div>
              </div>
            </div>
            <div class="mx-auto flex justify-center items-center w-full">
              <button
                class="px-8 py-3 border rounded-full text-center justify-center w-[70%] bg-[#1C59B5] text-white flex items-center"
              >
              <a href="regulatoryUpdate.html"> Generate Report </a>
                <div class="">
                  <img src="img/arrow.png" alt="" class="w- ml-2" />
                </div>
              </button>
            </div>
          </div>

          <div
            class="card2 space-y-4 bg-white rounded-3xl w-full h-[100%] pt-5 flex flex-col px-5 relative shadow-sm shadow-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200/20 hover:bg-opacity-20 hover:blur-20 hover:backdrop-filter"
          >
            <h1 class="text-xl text-[#000000] font-bold">
              Agenda of the CHMP meeting <br />19-22 Febuary 2024
            </h1>
            <div class="flex gap-3 py-4">
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Published:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Last updated:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Reference number:</small>
                <div class="text-sm text-gray-500">EMA/CHMP/39398/2024</div>
              </div>
            </div>
            <div class="mx-auto flex justify-center items-center w-full">
              <button
                class="px-8 py-3 border rounded-full text-center justify-center w-[70%] bg-[#1C59B5] text-white flex items-center"
              >
              <a href="regulatoryUpdate.html"> Generate Report </a>
                <div class="">
                  <img src="img/arrow.png" alt="" class="w- ml-2" />
                </div>
              </button>
            </div>
          </div>

          <div
            class="card2 space-y-4 bg-white rounded-3xl w-full h-[100%] pt-5 flex flex-col px-5 relative shadow-sm shadow-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200/20 hover:bg-opacity-20 hover:blur-20 hover:backdrop-filter"
          >
            <h1 class="text-xl text-[#000000] font-bold">
              Agenda of the CHMP meeting <br />19-22 Febuary 2024
            </h1>
            <div class="flex gap-3 py-4">
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Published:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Last updated:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Reference number:</small>
                <div class="text-sm text-gray-500">EMA/CHMP/39398/2024</div>
              </div>
            </div>
            <div class="mx-auto flex justify-center items-center w-full">
              <button
                class="px-8 py-3 border rounded-full text-center justify-center w-[70%] bg-[#1C59B5] text-white flex items-center"
              >
              <a href="regulatoryUpdate.html"> Generate Report </a>
                <div class="">
                  <img src="img/arrow.png" alt="" class="w- ml-2" />
                </div>
              </button>
            </div>
          </div>

          <div
            class="card2 space-y-4 bg-white rounded-3xl w-full h-[100%] pt-5 flex flex-col px-5 relative shadow-sm shadow-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200/20 hover:bg-opacity-20 hover:blur-20 hover:backdrop-filter"
          >
            <h1 class="text-xl text-[#000000] font-bold">
              Agenda of the CHMP meeting <br />19-22 Febuary 2024
            </h1>
            <div class="flex gap-3 py-4">
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Published:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Last updated:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Reference number:</small>
                <div class="text-sm text-gray-500">EMA/CHMP/39398/2024</div>
              </div>
            </div>
            <div class="mx-auto flex justify-center items-center w-full">
              <button
                class="px-8 py-3 border rounded-full text-center justify-center w-[70%] bg-[#1C59B5] text-white flex items-center"
              >
              <a href="regulatoryUpdate.html"> Generate Report </a>
                <div class="">
                  <img src="img/arrow.png" alt="" class="w- ml-2" />
                </div>
              </button>
            </div>
          </div>

          <div
            class="card2 space-y-4 bg-white rounded-3xl w-full h-[100%] pt-5 flex flex-col px-5 relative shadow-sm shadow-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200/20 hover:bg-opacity-20 hover:blur-20 hover:backdrop-filter"
          >
            <h1 class="text-xl text-[#000000] font-bold">
              Agenda of the CHMP meeting <br />19-22 Febuary 2024
            </h1>
            <div class="flex gap-3 py-4">
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Published:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Last updated:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Reference number:</small>
                <div class="text-sm text-gray-500">EMA/CHMP/39398/2024</div>
              </div>
            </div>
            <div class="mx-auto flex justify-center items-center w-full">
              <button
                class="px-8 py-3 border rounded-full text-center justify-center w-[70%] bg-[#1C59B5] text-white flex items-center"
              >
              <a href="regulatoryUpdate.html"> Generate Report </a>
                <div class="">
                  <img src="img/arrow.png" alt="" class="w- ml-2" />
                </div>
              </button>
            </div>
          </div>

          <div
            class="card2 space-y-4 bg-white rounded-3xl w-full h-[100%] pt-5 flex flex-col px-5 relative shadow-sm shadow-gray-500 hover:cursor-pointer hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200/20 hover:bg-opacity-20 hover:blur-20 hover:backdrop-filter"
          >
            <h1 class="text-xl text-[#000000] font-bold">
              Agenda of the CHMP meeting <br />19-22 Febuary 2024
            </h1>
            <div class="flex gap-3 py-4">
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Published:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Last updated:</small>
                <div class="text-sm text-gray-500">19/2/2024</div>
              </div>
              <div class="flex flex-col">
                <small class="text-gray-400 text-sm">Reference number:</small>
                <div class="text-sm text-gray-500">EMA/CHMP/39398/2024</div>
              </div>
            </div>
            <div class="mx-auto flex justify-center items-center w-full">
              <button
                class="px-8 py-3 border rounded-full text-center justify-center w-[70%] bg-[#1C59B5] text-white flex items-center"
              >
              <a href="regulatoryUpdate.html"> Generate Report </a>
                <div class="">
                  <img src="img/arrow.png" alt="" class="w- ml-2" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center w-full">
          <div class="pagination flex gap-2 items-center">
            <button class="text-[#9E9E9E]">Previous</button>
            <button class="py-2 px-4 h-fit text-white rounded-lg bg-[#1C59B5]">
              1
            </button>
            <button class="py-2 px-4 h-fit text-black rounded-lg bg-[#E0E0E0]">
              2
            </button>
            <button class="py-2 px-4 h-fit text-black rounded-lg bg-[#E0E0E0]">
              3
            </button>
            <button class="text-[#9E9E9E]">Next</button>
          </div>
        </div>
      </div>
    </div>
        
    );
}

export default CHMP;