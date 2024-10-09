import React from 'react';
import './memberpassbook.css';
import {motion} from "framer-motion";

const Memberpassbook = () => {
    return (
        <motion.div 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.4}}
        className='admin'>
            <div>
            <div className='courses1-head'>
                <div>
                    <h2>Member Passbook Entry</h2>
                    
                </div>
                
            </div>
        <hr/>
            <div className='display-full1'>
        <h3 className='memberpassbook-h3'>Member Passbook Report</h3>
       

      <div className='display-111'>
    <select name="dropdown" class="input-111">
      <option value="" disabled selected>Select Group</option>
      <option value="option1">Group1</option>
      <option value="option2">Group2</option>
      <option value="option3">Group3</option>
    </select>
  </div>
  <div className='display-111'>
    <select name="dropdown" class="input-111">
      <option value="" disabled selected>Type</option>
      <option value="option1">Monthly Wise</option>
      <option value="option2">Yearly Wise</option>
      <option value="option3">Others</option>
    </select>
  </div>
  <div className='display-111'>
    <select name="dropdown" class="input-111">
      <option value="" disabled selected>Months</option>
      <option value="option1">3 months</option>
      <option value="option2">6 months</option>
      <option value="option3">12 months</option>
    </select>
  </div>
  
  
  
  <button className='button-1'>
     Search
     </button>     

      </div>

            </div>

        </motion.div>
    );
}
 
export default Memberpassbook;