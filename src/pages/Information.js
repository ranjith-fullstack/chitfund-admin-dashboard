import React from 'react';
import './info.css';
import {AiOutlineBold, AiOutlineItalic,AiOutlineUnderline,AiOutlineUnorderedList,AiOutlineOrderedList} from 'react-icons/ai';
import { NavLink} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Information = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='information'>
        <div className='info-head'>
            <NavLink style={{color:'black', marginTop:'5px', marginRight:'6px'}} to={'/chitgroup'}><FaArrowLeftLong/></NavLink>
            <h3>Information</h3>
        </div>
            <hr style={{margin:'10px 0px'}}></hr>
            <div className='info-container' style={{width:'75%', marginTop:'25px'}}>
            <div className='display-full-2'>
       
       <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Group Id:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Group Name:"/>
     </div>
       <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Auction Type:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Start Date:"/>
     </div>   
 <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Chit Amount:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="No of Installments:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="End Date:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="No of users:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Commission:"/>
     </div>
     <div className='display-22'>
     <input type="text" name="text" class="input-22"  placeholder="Auction Date:"/>
     </div>


     </div>   
                
                
                </div>
            
        </motion.div>
    );
}
 
export default Information;