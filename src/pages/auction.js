import React from 'react';
import './auction.css';
import {AiOutlineBold, AiOutlineItalic,AiOutlineUnderline,AiOutlineUnorderedList,AiOutlineOrderedList} from 'react-icons/ai';
import { NavLink} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Auction = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='information'>
        <div className='info-head'>
            <NavLink style={{color:'black', marginTop:'5px', marginRight:'6px'}} to={'/chitgroup'}><FaArrowLeftLong/></NavLink>
            <h3>Auction</h3>
        </div>
            <hr style={{margin:'10px 0px'}}></hr>
            <div className='info-container' style={{width:'75%', marginTop:'25px'}}>
            <div className='display-full-3'>
       
       <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Group Id:"/>
     </div>
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Group Name:"/>
     </div>
       <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Auction Date:"/>
     </div>
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Amount Due Date:"/>
     </div>   
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Installment Number:"/>
     </div>
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Next Auction Date:"/>
     </div>
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Bid Amount:"/>
     </div>
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Bider Name:"/>
     </div>
     <div className='display-33'>
     <input type="text" name="text" class="input-33"  placeholder="Chit Amount:"/>
     </div>
     <button className='button-33'>
     Save
     </button>   


     </div>
                
                </div>
            
        </motion.div>
    );
}
 
export default Auction;