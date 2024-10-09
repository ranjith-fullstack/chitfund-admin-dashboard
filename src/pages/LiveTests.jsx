import React, {useState} from 'react';
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import {motion} from 'framer-motion'; 
import { IoBarChart } from "react-icons/io5";

function LiveTests() {

  const [search,setSearch] = useState('');

  const livetestData = [
    {
      createdOn: '29/05/2023 01:57:19 PM',
      modifiedOn: '08/11/2023 05:09:20 PM',
      title: 'My SQL Test',
      courses: 'SQL',
      timings: 'From: 2023/11/08 12:00:00 PM To: 2023/11/08 05:00:00 PM',
      actions: <IoBarChart/>,
    },
    {
      createdOn: '29/05/2023 01:57:19 PM',
      modifiedOn: '08/11/2023 05:09:20 PM',
      title: 'HTML Test',
      courses: 'HTML',
      timings: 'From: 2023/11/08 12:00:00 PM To: 2023/11/08 05:00:00 PM',
      actions: <IoBarChart/>,
    },
    {
      createdOn: '29/05/2023 01:57:19 PM',
      modifiedOn: '08/11/2023 05:09:20 PM',
      title: 'CSS Test',
      courses: 'CSS',
      timings: 'From: 2023/11/08 12:00:00 PM To: 2023/11/08 05:00:00 PM',
      actions: <IoBarChart/>,
    },
    {
      createdOn: '29/05/2023 01:57:19 PM',
      modifiedOn: '08/11/2023 05:09:20 PM',
      title: 'React Test',
      courses: 'ReactJS',
      timings: 'From: 2023/11/08 12:00:00 PM To: 2023/11/08 05:00:00 PM',
      actions: <IoBarChart/>,
    },
    {
      createdOn: '29/05/2023 01:57:19 PM',
      modifiedOn: '08/11/2023 05:09:20 PM',
      title: 'NodeJS Test',
      courses: 'NodeJS',
      timings: 'From: 2023/11/08 12:00:00 PM To: 2023/11/08 05:00:00 PM',
      actions: <IoBarChart/>,
    },
  ]

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className='review-page'>
      <h2>Live Tests</h2>
            <p>Review live tests from your learners. <span style={{color:'blue'}}>Learn more</span></p>
            <hr style={{margin:'10px 0 20px 0'}}></hr>
            <div className='searchContainer'>
                <input type='search' placeholder='Search by Test title' className='quizSearch'
                  onChange = {(e) => setSearch(e.target.value)} value={search}
                />
                <div className='review-search'>
                    <AiOutlineReload className='review-icon'/>
                    <span>Reset</span>
                </div>
                <div className='review-search' style={{backgroundColor:'blue', color:'white'}}>
                    <AiOutlineSearch className='review-icon'/>
                    <span>Search</span>
                </div>
            </div>
            <div style={{margin:'20px 0px'}}>
            <span>Show</span>
            <select style={{width:'60px',margin:'0px 5px'}}>
                <option>4</option>
                <option>6</option>
                <option>8</option>
                <option>10</option>
            </select> 
            <span>enteries</span>
            </div>
            <table className='review-section'>
                <tr>
                    <th>CREATED ON</th>
                    <th>MODIFED ON</th>
                    <th>TITLE</th>
                    <th>COURSE</th>
                    <th>TIMINGS</th>
                    <th>ACTIONS</th>
                </tr>
                {
                  livetestData.filter(data => data.title.toLowerCase().includes(search.toLowerCase())).map((data,index) => {
                    return(
                      <tr style={{color: 'black'}}>
                      <td>{data.createdOn}</td>
                      <td>{data.modifiedOn}</td>
                      <td style={{fontWeight:'600'}}>{data.title}</td>
                      <td style={{fontWeight:'600'}}>{data.courses}</td>
                      <td>{data.timings}</td>
                    <td style={{color:'blue', cursor:'pointer'}}>{data.actions}</td>
                    </tr>
                    )
                  })
                }
            </table>
    </motion.div>
  )
}

export default LiveTests