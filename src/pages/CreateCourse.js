import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import {AiFillSetting,AiOutlineBold, AiOutlineItalic,AiOutlineUnderline,AiOutlineUnorderedList,AiOutlineOrderedList} from 'react-icons/ai';
import './CreateCourse.css';
import {NavLink} from 'react-router-dom';
import { BsStars } from "react-icons/bs";
import {motion} from 'framer-motion';

export const CreateCourse = () => {
    return(
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }} 
            className='createCourse'>
            <div className='header'>
                <NavLink to={'/chitgroup'}><FaArrowLeftLong style={{marginRight:'8px',marginTop:'5px'}}/></NavLink>
                <h2>Create Group</h2>
                
            </div>
            <hr></hr>
            
            <div className='info-container' style={{width:'75%', marginTop:'25px'}}>
            <div className='display-full-1'>
       
        <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Group Id:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Group Name:"/>
      </div>
        <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Auction Type:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Start Date:"/>
      </div>   
  <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Chit Amount:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="No of Installments:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="End Date:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="No of users:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Commission:"/>
      </div>
      <div className='display-11'>
      <input type="text" name="text" class="input-11"  placeholder="Auction Date:"/>
      </div>
  
  
  <button className='button-11'>
     Save
     </button>     

      </div>               
                </div>
             
               
            
        </motion.div>
    )
}