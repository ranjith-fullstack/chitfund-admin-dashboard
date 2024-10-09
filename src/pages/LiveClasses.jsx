import React from 'react';
import './discuss.css';
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import {motion} from 'framer-motion'; 

function LiveClasses() {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className='live-classes discuss'>
      <h2>Live Classes</h2>
      <p>Meet your learners and teach live. <span style={{color:'blue'}}>Learn more</span></p>
            <hr style={{margin:'20px 0'}}></hr>
            <div className='searchContainer'>
                <input type='search' placeholder='Search by Course title' className='quizSearch'/>
            </div>
            <div className='liveBtnContainer'>
              <span>STATUS</span>
              <button>All</button>
              <button style={{backgroundColor:'blue', color:'white',border: 'none'}}>Upcoming</button>
              <button>In Progress</button>
              <button>Completed</button>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
            <div className='review-search'>
                    <AiOutlineReload className='review-icon'/>
                    <span>Reset</span>
                </div>
                <div className='review-search' style={{backgroundColor:'blue', color:'white'}}>
                    <AiOutlineSearch className='review-icon'/>
                    <span>Search</span>
                </div>
            </div>
            <div>
            <span>Show</span>
            <select style={{width:'60px',margin:'0px 5px', borderRadius:'5px'}}>
                <option>10</option>
                <option>8</option>
                <option>6</option>
                <option>4</option>
            </select>
            <span>enteries</span>
            </div>
            <table style={{width: '100%', marginTop:'40px'}}>
                <tr className='discuss-table'>
                    <th>CREATED ON</th>
                    <th>TITLE</th>
                    <th>COURSE LEARNERS</th>
                    <th>START TIME</th>
                    <th>LEARNERS WATCHED</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                </tr>
            </table>
            
            <p>No data available in the table</p>
            <hr style={{margin:'8px 0px', color:'black'}}></hr>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <p style={{color:'grey'}}>Showing 0 to 0 of 0 enteries</p>
                <div style={{color:'grey'}}>
                    <span style={{cursor:'pointer'}}>Previous</span>
                    <span style={{margin:'0px 9px', cursor:'pointer'}}>Next</span>
                </div>
            </div>
    </motion.div>
  )
}

export default LiveClasses