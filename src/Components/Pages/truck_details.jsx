import React, { useState } from 'react';
import bev from '../Assets/11_NextGenScania - 860 - lead.jpg';
import "./truck_details.css";
import axios from 'axios';

import blue from '../Assets/blue_truck.jpg';
import tiuring from '../Assets/tiuring2019.jpg';
import wood from '../Assets/scnia_woods.jpg'
import { useNavigate } from 'react-router-dom';

import { BsPhone, BsBook,BsQuestion } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsTwitterX, BsLinkedin,  BsYoutube} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Truckdetails = () => {

  const [values, setValues] = useState({
    clientname: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/truck_details');
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/car_sales', values)
    .then(res => {
      console.log("Registered successfully!!!");
      setValues({
        clientname: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
      alert("Registered successfully");
    })
    .catch(err => {
      console.error('AxiosError:', err);
      alert("Error occurred. Data not saved to the database.");
    });
  };
  return (
    <section className='truck_details'>
      <div className="truck_details" id='specs'>
        <div className="row">
          <h2 class="tittle">The BEV</h2>

          <div className="col-12 col-lg-6">
            <img src={bev} alt="" />
          </div>

          <div className="col-12 col-lg-6">
            <div class="specs">
              <h2>BEV Specifications</h2>

              <h4>WHEEL CONFIGURATIONS</h4>
              <p>4×2, 6×2, 6×2*4</p>

              <h4>AXLE DISTANCE</h4>
              <p>3950 - 5750</p>

              <h4>CAB OPTIONS</h4>
              <p>P, L</p>

              <h4>PROPUlSION</h4>
              <p>Parmanent magnet electric machine with oil spray cooling. <br />
                ~295kW 2,200Nm(Peak) <br />
                ~230kW 1,300Nm(Continous) <br />
                60kW electric power Take-off <br />
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="prices_and_inquiry">
        <div className="row">
          <h2 className="tittle">Price and Inquiry</h2>
          <div className="col-12 col-lg-5">
            <div className="price">
              <h3 className="tittle">Price</h3>
              <p><span>Was </span><strike>Ksh 10M</strike></p>
              <p><span>Now </span>Ksh 9.733M</p>
              <h4><u>Payment Methods</u></h4>
              <ul>
                <li>Mastercard</li>
                <li>Pay pal</li>
                <li>Cash</li>
              </ul>
              <p>For more details call or text: <br />
                <a href="tel:+254796875621"><p>0796875621</p></a>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="inquiry">
              <h2 class="tittle">Message Us</h2>
              <form onSubmit={handleSubmit}>
                <div class="name_and_phoneNumber">
                  <div class="name_field">
                    <input type="text" name="clientname" onChange={handleChange} value={values.clientname} id="clientName" placeholder="Name" required />
                  </div>
                  <div class="phoneNumberField">
                    <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleChange} value={values.phoneNumber} placeholder="Phone Number" required />
                  </div>
                </div>
                <div className="emailField">
                  <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={values.email} required />
                </div>
                <div class="textArea">
                  <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={values.message} placeholder="Message..." required></textarea>
                </div>
                <div class="button">
                  <button type="submit">Make Inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="deals" id='others'>
        <div className="row">
          <h2><u>Similar deals</u></h2>

          <div className="col-12 col-lg-4">
            <a href="truck_details">
              <div className="T_and_B">
                <div className="Img" width="20%">
                  <img src={wood} alt="" />
                </div>
                <div>
                  <h4>Scania Actross</h4>
                  <p><span><b>Was </b> </span><strike>Ksh 11M</strike></p>
                  <p><span><b>Now </b> </span> Ksh 10.89M </p>
                  <div class="button_checkout">
                    <a href="truck_details"><button type="submit" onClick={handleClick}>CHECK OUT</button></a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-4">
            <a href="truck_details">
              <div className="T_and_B">
                <div className="Img" width="20%">
                  <img src={blue} alt="" />
                </div>
                <div>
                  <h4>Scania FRR</h4>
                  <p><span><b>Was </b> </span><strike>Ksh 12.5M</strike></p>
                  <p><span><b>Now </b> </span> Ksh 12.3M </p>
                  <div class="button_checkout">
                    <a href="truck_details"><button type="submit" onClick={handleClick}>CHECK OUT</button></a>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-4">
            <a href="truck_details">
              <div className="T_and_B">
                <div className="Img" width="20%">
                  <img src={tiuring} alt="" />
                </div>
                <div>
                  <h4>Scania Touring 2019</h4>
                  <p><span><b>Was </b> </span><strike>Ksh 13M</strike></p>
                  <p><span><b>Now </b> </span> Ksh 12.76M </p>
                  <div class="button_checkout">
                    <a href="truck_details"><button type="submit" onClick={handleClick}>CHECK OUT</button></a>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="footer" id='footer'>
        <div className="row">
          <div className="col-12 col-lg-3">
            <h4>Resources</h4>
            <p>
              <a href="#"><span><BsPhone /></span> Mobile Application</a> <br />
              <a href="#"><span><BsBook /></span> Documentation</a> <br />
              <a href="#"><span><BsQuestion /></span> FAQs</a> <br />
            </p>
          </div>
          <div className="col-12 col-lg-3">
            <h4>Social</h4>
            <p>
              <a href="#"> <span><BsInstagram /></span> Instagram</a> <br />
              <a href="#"> <span><BsTwitterX /></span> Twitter</a> <br />
              <a href="#"><span><BsFacebook /></span> Facebook</a> <br />
              <a href="#"><span><BsLinkedin /> </span>LinkedIn</a> <br />
              <a href="#"> <span><BsYoutube /> </span>Youtube</a>
            </p>
          </div>
          <div className="col-12 col-lg-3">
            <h4>Company</h4>
            <p>
              <a href="#"><span><BsFillPersonFill /></span> About Us</a> <br />
              <a href="#"><span></span> Blog</a> <br />
              <a href="#"> Partnerships</a> <br />
              <a href="#"> Careers</a> <br />
              <a href="#"><span><i class="fa fa-"></i></span> Press</a>
            </p>
          </div>
          <div className="col-12 col-lg-3">
            <div class="footer_div">
              <h4>Contacts</h4>
              <p>
                <a href="tel:+25427505049"> <span><i class="fa fa-phone"></i></span> 0796875621</a> <br />
                <a href="tel:+25471015999"><span><i class="fa fa-phone"></i></span> 071015999</a> <br />
                <a href="#"><span><i class="fa fa-envelope"></i></span> salutamoha@gmail.com</a> <br />
              </p>
              <p><span><i class="fa fa-copyright"></i></span> Copyright 2022 | All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Truckdetails;
