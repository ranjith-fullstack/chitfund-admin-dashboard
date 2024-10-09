import React, {useState} from 'react';
import {motion} from 'framer-motion';
import { MdOutlineCloudUpload } from "react-icons/md";
import './questionbank.css';
import { AiOutlineReload, AiOutlineSearch } from "react-icons/ai";
import { PiExportBold } from "react-icons/pi";
import { CgImport } from "react-icons/cg";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const QuestionBank = () => {

  const [search,setSearch] = useState('');

  const questionBankData = [
    {
      createdOn: '23-08-10 02:25:11 pm',
      questionText: 'What is the purpose of method localCompare()?',
      subject: 'Web Development',
      topic: 'JavaScript',
      usedIn: '1',
    },
    {
      createdOn: '23-08-10 02:25:11 pm',
      questionText: 'What is the command to access heap size limit?',
      subject: 'Web Development',
      topic: 'JavaScript',
      usedIn: '1',
    },
    {
      createdOn: '23-08-10 02:25:11 pm',
      questionText: 'What is the use of OnClick Event?',
      subject: 'Web Development',
      topic: 'JavaScript',
      usedIn: '1',
    },
    {
      createdOn: '23-08-10 02:25:11 pm',
      questionText: 'What is the meant by Switch Case?',
      subject: 'Web Development',
      topic: 'JavaScript',
      usedIn: '1',
    },
  ]

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    style={{padding:'10px'}}>
    <div className='question-bank'>
      <div>
        <h2>Question Bank</h2>
        <p>Manage learner assessments and questions.</p>
      </div>
      <div>
        <span className='upload'><MdOutlineCloudUpload/> Upload Questions</span>
        <span className='new-ques'>+ New Question</span>
      </div>
    </div>
    <hr style={{margin:'10px 0 20px 0'}}></hr>
    <div className='searchContainer'>
      <input type='search' placeholder='Search by Question Text' className='quizSearch'
        onChange = {(e) => setSearch(e.target.value)} value={search}
      />
    </div>
    <div style={{margin:'10px 0px',display:'flex',justifyContent:'flex-end'}}>
      <div className='review-search'>
        <CgImport className='review-icon'/>
        <span>Import</span>
      </div>
      <div className='review-search'>
        <PiExportBold className='review-icon'/>
        <span>Export</span>
      </div>
      <div className='review-search'>
        <AiOutlineReload className='review-icon'/>
        <span>Reset</span>
      </div>
      <div className='review-search' style={{backgroundColor:'blue', color:'white', border:'none'}}>
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
        <th>CREATED DATE</th>
        <th>QUESTION TEXT</th>
        <th>SUBJECT</th>
        <th>TOPIC</th>
        <th>USED IN</th>
        <th>ACTIONS</th>
      </tr>
    {questionBankData.filter(data => data.questionText.toLowerCase().includes(search.toLowerCase())).map((data,index)=> {
      return(
        <tr>
        <td>{data.createdOn}</td>
        <td>
          <p style={{marginBottom:'8px', fontWeight:'600'}}>{data.questionText}</p>
          <span style={{backgroundColor:'lightgrey', padding:'5px',marginRight:'4px'}}>Single Correct Option</span>
          <span style={{backgroundColor:'lightgrey', padding:'5px'}}>+2,-0</span>
        </td>
        <td>{data.subject}</td>
        <td>{data.topic}</td>
        <td>{data.usedIn}</td>
        <td style={{color:'blue', fontSize:'20px'}}>
          <IoInformationCircleOutline style={{cursor:'pointer', marginRight:'10px'}} />
          <MdDeleteOutline style={{cursor:'pointer'}}/>
        </td>
        </tr>
      )
    })}
    </table>
    </motion.div>
  )
}

export default QuestionBank