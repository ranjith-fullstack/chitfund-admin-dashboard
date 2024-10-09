import React from 'react';
import './webinar.css';
import {FaPeopleLine} from "react-icons/fa6";
import {FaCoins} from "react-icons/fa";
import {BiSolidVideo } from "react-icons/bi";
import {motion} from 'framer-motion';

function Webinars() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className='webinar-page'>
    <div className='webinars'>
      <h2>Webinars</h2>
      <p className='create-course'>+ Create</p>
    </div>
    <hr style={{margin: '10px 0px'}}/>
    <div className='webinar-main'>
      <h3 className='webinar-head'>Your trusted lead generator</h3>
    <div className="main-sub-content">
      <div className="webinar-icon">
          <FaPeopleLine></FaPeopleLine>
      </div>
      <div className="text">
          <h4>Host free webinars to expand your lead pool</h4>
          <p>Your go-to traction channel to collect the maximum number of leads</p>
      </div>
    </div>
    <div className="main-sub-content">
        <div className="webinar-icon">
            <FaCoins></FaCoins>
        </div>
        <div className="text">
            <h4>Find your best leads with paid webinars</h4>
            <p>Easily double down on your ROI maximizing leads</p>
        </div>
    </div>
    <div className="main-sub-content">
        <div className="webinar-icon">
            <BiSolidVideo></BiSolidVideo>
        </div>
        <div className="text">
          <h4>Instantly accessible  Webinar Recordings</h4>
          <p>Your content is repurposable and up for sale</p>
        </div>
    </div>
    
    <p className="create-webinar">+ Create your webinar</p>
    </div>
    </motion.div>
    
  )
}

export default Webinars