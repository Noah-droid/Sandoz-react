// App.js
import React from 'react'; // Import the Home component
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import Arrow2 from './img/arrow2.png';



function Update() {
    return (
        <div>
            <Navbar />
        <div class="container upp">
        <div class="lg:flex-row flex flex-col pt-4 gap- justify-between items-center">
        <h1 class="text-4xl text-left font-medium text-black flex items-center gap-3">
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
          <div class="filter"><img src="img/5.png" class="w-[25px]" /></div>
        </div>
      </div>
    </div>
    <div class="container table-responive-md table-wrapper-scroll-y my-custom-scrollbar ">
        <table class="table table-striped align-middle table-lg">
            <thead class="" >
              <tr class="">
                <th scope="col"></th>
                <th scope="col">Molecule</th>
                <th scope="col">Applicant</th>
                <th scope="col">Application Number</th>
                <th scope="col">Current Milestone</th>
                <th scope="col">Approval Timelines</th>
                <th scope="col">Estimation</th>
                <th scope="col">Other Comments</th>
              </tr>
            </thead>
            <tbody class=" overflow-auto">
              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>

              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>

              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>

              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>

              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>

              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
                <td>Sparsentan</td>
                <td>Vifor France</td>
                <td>EMEA/H/C005783</td>
                <td>Oral Explanation</td>
                <td>Oral Explanation on <br /> 16 October 2023</td>
                <td>List of oustanding issues <br /> adopted on 25.05.23. <br /> List of adopted questions <br /> on 15.12.2022</td>
                <td>Treatement of primary <br /> immuglobin.  A <br /> neuphrophathy (lGAN)</td>
              </tr>

              <tr>
                <th scope="row">
                    <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                </th>
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
        <div class="container p-5">
          <div class="display">
            <div class="pagination">
              <a href="#" class="words">Previous</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#" class="words">Next</a>
            </div>
            <div class="preview justify-content-end d-flex">
              <button class="prebtn"> <a href="./previewReport.html">Preview Report</a></button>
            </div>
          </div>
        </div>
        </div>
    );

}export default Update;