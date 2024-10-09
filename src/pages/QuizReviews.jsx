import React from 'react';
import './QuizReview.css';
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import {motion} from 'framer-motion';

const QuizReviews = () => {

    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='review-page'>
            <h2>Quiz Reviews</h2>
            <p>Asses quiz performance from your learners. <span style={{color:'blue'}}>Learn more</span></p>
            <hr style={{margin:'20px 0'}}></hr>
            <div className='searchContainer'>
                <input type='search' placeholder='Search by Quiz title' className='quizSearch'/>
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
            <select style={{width:'40px',margin:'0px 5px'}}>
                <option>10</option>
                <option>8</option>
                <option>6</option>
                <option>4</option>
            </select> 
            <span>enteries</span>
            </div>
            
            <table className='review-section'>
                <tr>
                    <th>SUBMITTED ON</th>
                    <th>LEARNERS</th>
                    <th>QUIZ</th>
                    <th>COURSES</th>
                    <th>REVIEWED</th>
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

export default QuizReviews;