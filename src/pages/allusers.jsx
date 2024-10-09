import React from 'react';
import './allusers.css';
import {AiOutlineBold, AiOutlineItalic,AiOutlineUnderline,AiOutlineUnorderedList,AiOutlineOrderedList} from 'react-icons/ai';
import { NavLink} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Allusers = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='information'>
        <div className='info-head'>
            <NavLink style={{color:'black', marginTop:'5px', marginRight:'6px'}} to={'/chitgroup'}><FaArrowLeftLong/></NavLink>
            <h3>All users</h3>
        </div>
            <hr style={{margin:'10px 0px'}}></hr>
            <div className='displaay1'>
            <label for="title">Select user:</label><br/>
          <select name="dropdown" id="classDropdown" className="inpuut123">
            <option value="" disabled selected>Select User</option>
            <option value="option1">All Users</option>
            <option value="option2">Single User</option>
            
          </select>
        </div>
        <table>
  <tr>
    <th>Assessment Id</th>
    <th>Assessment Name</th>
    <th>Score</th>
    <th>Percentage</th>
    <th>Result Date</th>

  </tr>
  <tr>
    <td>01</td>
    <td>Aptitude</td>
    <td>1</td>
    <td>20</td>
    <td>09-08-2023</td>
    

  </tr>
  <tr>
    <td>02</td>
    <td>Aptitude</td>
    <td>1</td>
    <td>20</td>
    <td>09-08-2023</td>
    
  </tr>
  <tr>
    <td>03</td>
    <td>Aptitude</td>
    <td>1</td>
    <td>20</td>
    <td>09-08-2023</td>
    
  </tr>
  <tr>
    <td>04</td>
    <td>Aptitude</td>
    <td>1</td>
    <td>20</td>
    <td>09-08-2023</td>

  </tr>
  <tr>
    <td>06</td>
    <td>Aptitude</td>
    <td>1</td>
    <td>20</td>
    <td>09-08-2023</td>

  </tr>
  <tr>
    <td>07</td>
    <td>Aptitude</td>
    <td>1</td>
    <td>20</td>
    <td>09-08-2023</td>

  </tr>
</table>
            
        </motion.div>
    );
}
 
export default Allusers;