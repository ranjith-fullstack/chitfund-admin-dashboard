import React, {useState} from 'react';
import './dashboard.css';




import {motion} from 'framer-motion';

const Dashboard = () => {

    const [search,setSearch] = useState('');

    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className='courses'>
                  <div className='courses-head'>
                <div>
                    <h2>Admin Dashboard</h2>
                    
                </div>
                
            </div>
        <hr/>
        <div className='displaay1'>
         
         <select name="dropdown" id="classDropdown" className="inpuut123">
           <option value="" disabled selected>Select group</option>
           <option value="option1">Group 1</option>
           <option value="option2">Group 2</option>
           <option value="option3">Group 3</option>
         </select>
       </div>
        
                
               <div className="cards-1">
    <div className="card red">
        <p className="tip">NO OF MEMBERS</p>
        <p className="second-text">31</p>
    </div>
    <div className="card blue">
        <p className="tip">ADMIN PROFIT</p>
        <p className="second-text">131000.00</p>
    </div>
    <div className="card green">
        <p className="tip">TOTAL AMOUNT</p>
        <p className="second-text">2620000</p>
    </div>
    <div className="card purple">
        <p className="tip">PAID AMOUNT</p>
        <p className="second-text">69555.555</p>
    </div>
</div>


               
            
          
        </motion.div>
    )
}

export default Dashboard;