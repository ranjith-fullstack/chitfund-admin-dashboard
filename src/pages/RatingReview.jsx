import React, {useState} from 'react';
import Img from '../pages/download.png';
import './discuss.css';
import {motion} from 'framer-motion';

const RatingReview = () => {

  const [search,setSearch] = useState('');

  const ratingReviewData = [
    {
      name: 'How to get a software job?',
      approvedReviews: '7',
      averageRating: '3.5',
      pendingReview: '0'
    },
    {
      name: 'Data Engineering',
      approvedReviews: '3',
      averageRating: '4.0',
      pendingReview: '0'
    },
    {
      name: 'Python Training',
      approvedReviews: '5',
      averageRating: '4.5',
      pendingReview: '0'
    },
    {
      name: 'SQL Training',
      approvedReviews: '2',
      averageRating: '5.0',
      pendingReview: '0'
    },
    {
      name: 'Enrollment Test for Megha & Omega Group of Institutions',
      approvedReviews: '3',
      averageRating: '3.5',
      pendingReview: '0'
    },
    {
      name: 'Python Training for Megha & Omega Group of Institutions',
      approvedReviews: '6',
      averageRating: '4.0',
      pendingReview: '0'
    },
    {
      name: 'Data Engineering',
      approvedReviews: '3',
      averageRating: '4.0',
      pendingReview: '0'
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.4 }}
      className='discuss'>
            <h3>Rating & Reviews</h3>
            <p>Share learner appriciation on your website. <span style={{color:'blue'}}>Learn more</span></p>
            <hr style={{margin:'20px 0'}}></hr>
            <div className='searchContainer'>
                <input type='search' placeholder='Search by Course/Package Title' className='quizSearch'
                  onChange = {(e) => setSearch(e.target.value)} value={search}
                />
            </div>
            <div>
            <span>Show</span>
            <select style={{width:'70px',margin:'0px 5px', borderRadius:'5px'}}>
                <option>10</option>
                <option>8</option>
                <option>6</option>
                <option>4</option>
            </select> 
            <span>enteries</span>
            </div>
            <div style = {{marginTop:'40px'}}>
            <table style={{width: '100%'}}>
            <thead>
                <tr className='discuss-table'>
                    <th style={{display:'flex', alignItems:'flex-start'}}>NAME</th>
                    <th>APPROVED REVIEWS</th>
                    <th>AVERAGE RATING</th>
                    <th>PENDING REVIEWS</th>
                </tr>
                </thead>
                <tbody>
                {
                  ratingReviewData.filter(data => data.name.toLowerCase().includes(search.toLowerCase())).map((data,index) => {
                        return(
                            <tr key={index}>
                                <td style={{display:'flex', alignItems:'flex-start',padding:'11px'}}>
                                <img style={{width:'50px',height:'25px', marginRight:'5px'}} alt='img' src={Img}/>
                                <span style={{fontWeight:'400', fontSize:'18px'}}>{data.name}</span>
                                </td>
                                <td style={{color:'green', fontSize:'22px',fontWeight:'600'}}>{data.approvedReviews}</td>
                                <td style={{color:'blue', fontSize:'22px',fontWeight:'600'}}>{data.averageRating}</td>
                                <td style={{color:'red', fontSize:'22px',fontWeight:'600'}}>{data.pendingReview}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        </motion.div>
  )
}

export default RatingReview