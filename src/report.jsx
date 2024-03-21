import React from 'react';
// import Home from './home'; // Import the Home component
import Navbar from './navbar';
import Image5 from './img/image_5.jpg';
// import { Link } from 'react-router-dom';


function Report(){
    return(
      
      

        <div>
             <Navbar />



             <div class="container table-responive-md mt-5 bbg" >
        <br />
        <img src={Image5} alt="" width="100%" height="100%" />


        <table class="table table-striped align-middle table-lg">
            <thead class="">
              <tr class="">
                <th scope="col">Molecule</th>
                <th scope="col">Applicant</th>
                <th scope="col">Application Number</th>
                <th scope="col">Current Milestone</th>
                <th scope="col">Approval Timelines</th>
                <th scope="col">Estimation</th>
                <th scope="col">Other Comments</th>
              </tr>
            </thead>
            <tbody class="">
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> 
                adopted on 25.05.23. <br /> 
                List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              <tr>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>
              
            </tbody>
          </table>
    </div>
    
    <div class="container">
      <div class=" justify-content-center d-flex p-5">
        <button class="prebtn back mx-2"> <a href="./regulatoryUpdate.html">Back</a></button>
        <button class="prebtn mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Share Report</button>
      </div>
    </div>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog bba">
    <div class="modal-content bbc">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Share Report "CHMP Regulatory Updates"</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="item">
          <div class="box d-flex">
            <div class="dd">
              <img src="./img/7.png" alt="" width="30%" height="20%" />
            </div>
            <div class="">
              <button class="btnmodal mb-2">Ramesh M</button>
              <button class="btnmodal">Sudarshan Mohan</button>
            </div>
            <div class="">
              <img src="./img/9.png" alt="" width="30%" height="15%" />
            </div>
          </div>          
        </div>
        <div class="item mt-3">
          <div class="box d-flex">
            <div class="pt-2 ddd" >
              <img src="./img/8.png" alt="" width="20%" height="10%" />
            </div>
            <div class="dad">
              <form>
                <textarea placeholder="Add a message"></textarea>
              </form>
            </div>
            
          </div>          
        </div>
      </div>

        <div class=" justify-content-end d-flex p-5">
          <button class="prebtn back mx-2" data-bs-dismiss="modal"> Close</button>
          <button class="prebtn mx-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop2" data-bs-dismiss="modal"> Send Email</button>
        </div>
      </div>
  </div>
</div>


<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog dia">
    <div class="modal-content">
      <div class="modal-body text-center text-white">
        <div class="p-5">
          <img src="./img/6.png" alt="" width="20%" height="20%" />
          <h2 class="pt-3">E-mail</h2>
          <h4>Sucessfully Sent</h4>
        </div>
      </div>
      </div>
  </div>
</div>
            </div>
    );

}

export default Report;