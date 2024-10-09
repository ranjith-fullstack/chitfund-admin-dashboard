import React from 'react';
import './biding.css';
import {AiOutlineBold, AiOutlineItalic,AiOutlineUnderline,AiOutlineUnorderedList,AiOutlineOrderedList} from 'react-icons/ai';
import { NavLink} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Biding = () => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='information'>
        <div className='info-head'>
            <NavLink style={{color:'black', marginTop:'5px', marginRight:'6px'}} to={'/chitgroup'}><FaArrowLeftLong/></NavLink>
            <h3>Biding</h3>
        </div>
            <hr style={{margin:'10px 0px'}}></hr>
            <div className='info-container' style={{width:'75%', marginTop:'25px'}}>
            <div className='display-full-4'>
       
       <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Select Group:"/>
     </div>
     <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Chit Amount:"/>
     </div>
       <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Installement Number:"/>
     </div>
     <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Commission:"/>
     </div>   
     <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Bid Amount:"/>
     </div>
     <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Select Bid Winner:"/>
     </div>
     <div className='display-44'>
     <input type="text" name="text" class="input-44"  placeholder="Collecting from each subcriber:"/>
     </div>
     
     <button className='button-44'>
     Save
     </button>   


     </div>
             </div>
            
        </motion.div>
    );
}
 
export default Biding;