import React from 'react';
import "./Home.css";
import { BsPhone, BsBook,BsQuestion } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsTwitterX, BsLinkedin,  BsYoutube} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';

import next from '../Assets/11_NextGenScania - 860 - lead.jpg';
import wood from '../Assets/scnia_woods.jpg'
import scania from '../Assets/bright Scania.jpg';
import blue from '../Assets/blue_truck.jpg';
import tiuring from '../Assets/tiuring2019.jpg';
import ruck from '../Assets/ruckRacing.jpg';
import sabo from '../Assets/sabo.jpg';
import scania1 from '../Assets/salesBus.jpg';
import sales from '../Assets/sabo.jpg';
import bus from '../Assets/bus.png';

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/truck_details');
  };

    return (
        <div>
            <section className='car-sales'>
                <div className="home" id='home'>
                    <div className="row">
                        <div className="col-12">
                            <h1>Scania leads <span>the shift.</span></h1>
                            <p>The electric Trucks & Buses revolution has arrived <br />
                                and Scania is driving the shift towards a <br />
                                sustainable transport system.
                            </p>


                            <p>
                                WE MAKE SHIPPING <br />
                                BIG STUFF EASY !!
                            </p>

                            <a href="mailto:salutahmoha@gmail.com">
                                <div className="button">
                                    <button type="submit">Lets talk</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="electric_trucks" id='trucks'>
                    <div className="row">
                        <h2><u>TOP ELECTRIC TRUCK</u></h2>
                        <div className="col-12 col-lg-6">
                            <div class="electricTruckTextAndSpecs">
                                <h2>The BEV</h2>
                                <p>The battery electric truck enables 100% emissions free operation 100% of the timeof the timewhich
                                    may not only be a
                                    zone of restriction in many cities very soon.But as our world strivesfor sustainable future Its
                                    an increasingly
                                    common requirements to secure new contracts, Andquiet zero emissions transport within cities
                                    isn't only needed to
                                    get goods delvered to storesbut also westes removed new buildings constructed and infrastructure
                                    maintained.
                                </p>

                                <div class="bev_specs">
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
                                    <div class="bevBtn">
                                        <a href="mailto:wambuadaniel2001@gmail.com"><button type="submit">Own a BEV</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div class="vehicle_image">
                                <img src={next} alt="" />
                                <img src={wood} alt="" />
                                <img src={scania} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="electricbus" id='electricbus'>
                    <div className="row">
                        <h2><u>TOP ELECRIC BUS</u></h2>
                        <div className="col-12 col-lg-6">
                            <div class="vehicle_image">
                                <img src={next} alt="" />
                                <img src={sales} alt="" />
                                <img src={bus} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">

                            <div class="cityWideSpecs">
                                <h2>SCANIA CITYWIDE</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero reiciendis modi repellendus expedita, sequi reprehenderit quas ipsum aspernatur ea, tempore tenetur exercitationem pariatur earum accusantium delectus unde harum autem.</p>
                                <p>
                                    The scania citywide features: <br />
                                </p>
                                <ul>
                                    <li>2-2-2 door confuguration</li> <br />
                                    <li>12 meters length, 2.55 wide and 3.27 height</li> <br />
                                    <li>32 seats and 45 standing places</li> <br />
                                </ul>

                                <p>
                                    The bus boasts of 254kWH battery modules  producing up to300kW for 210nM torque.
                                    the battery module are located at the rear and  others at the roof.
                                    This bus is certified for public transport.Its also well suited for long distance travelling .the battery can reach upto
                                    <b>700 km</b> without re-chargbing. <br />
                                    This machine is worth investing.
                                </p>
                                <p><br /></p>
                                <p>Get intouch with us now and own a citywide today !</p>

                                <a href="mailto:salutahmoha@gmail.com">
                                    <div class="cityWideBtn">
                                        <button type="submit">Own a Citywide</button>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="deals" id='others'>
                    <div className="row">
                        <h2><u>OTHER DEALS</u></h2>

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
                        <div className="col-12 col-lg-4">
                            <a href="truck_details">
                                <div className="T_and_B">
                                    <div className="Img" width="20%">
                                        <img src={ruck} alt="" />
                                    </div>
                                    <div>
                                        <h4>Scania T-30, Racer</h4>
                                        <p><span><b>Was </b> </span><strike>Ksh 12M</strike></p>
                                        <p><span><b>Now </b> </span> Ksh 11.07M </p>
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
                                        <img src={scania1} alt="" />
                                    </div>
                                    <div>
                                        <h4>Scania R-410</h4>
                                        <p><span><b>Was </b> </span><strike>Ksh 17M</strike></p>
                                        <p><span><b>Now </b> </span> Ksh 16.7M </p>
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
                                        <img src={sabo} alt="" />
                                    </div>
                                    <div>
                                        <h4>Scania sabo</h4>
                                        <p><span><b>Was </b> </span><strike>Ksh 10M</strike></p>
                                        <p><span><b>Now </b> </span> Ksh 9.67M </p>
                                        <div className="button_checkout">
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
                             <a href="#"> <span><BsInstagram /></span> Instagram</a> <br/>
                             <a href="#"> <span><BsTwitterX /></span> Twitter</a> <br/>
                             <a href="#"><span><BsFacebook /></span> Facebook</a> <br/>
                             <a href="#"><span><BsLinkedin /> </span>LinkedIn</a> <br/>
                             <a href="#"> <span><BsYoutube /> </span>Youtube</a>
                           </p>
                        </div>
                        <div className="col-12 col-lg-3">
                            <h4>Company</h4>
                            <p>
                             <a href="#"><span><BsFillPersonFill /></span> About Us</a> <br/>
                             <a href="#"><span></span> Blog</a> <br/>
                             <a href="#"> Partnerships</a> <br/>
                             <a href="#"> Careers</a> <br/>
                             <a href="#"><span><i class="fa fa-"></i></span> Press</a>
                            </p>
                        </div>
                        <div className="col-12 col-lg-3">
                        <div class="footer_div">
                             <h4>Contacts</h4>
                             <p>
                              <a href="tel:+25427505049"> <span><i class="fa fa-phone"></i></span> 0796875621</a> <br/>
                              <a href="tel:+25471015999"><span><i class="fa fa-phone"></i></span> 071015999</a> <br/>
                              <a href="#"><span><i class="fa fa-envelope"></i></span> salutamoha@gmail.com</a> <br/>
                            </p>
                             <p className='copyright'><span><i class="fa fa-copyright"></i></span> Copyright 2022 | All rights reserved</p>
                          </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
