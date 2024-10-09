import React, { useState } from 'react';
import './chitgroup.css';
import { AiOutlineShareAlt, AiOutlineInfoCircle, AiOutlineEye, AiOutlineMessage } from 'react-icons/ai';
import { FaUserGroup } from 'react-icons/fa';
import { ChitgroupData } from './ChitgroupData';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Chitgroup = () => {
    const [search, setSearch] = useState('');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className='courses1'
        >
            <div className='courses1-head'>
                <div>
                    <h2>Chit Group</h2>
                </div>
                <NavLink className='create-course' to={'/createcourse'}>
                    + Create Group
                </NavLink>
            </div>
            <hr />

            <div className='course-card'>
                {ChitgroupData.filter(item => item.batch.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
                    return (
                        <div className='full-card' key={index}>
                            <NavLink to={'/addexisting'} batch={item.batch}>
                                <div className='card-chitgroup'>
                                    <div className='logo-cont'>
                                        <AiOutlineShareAlt className='share' />
                                    </div>
                                    <h2 className='batch'>{item.batch}</h2>
                                </div>
                            </NavLink>
                            <div className='batch-details'>
                                <p>{item.batch}</p>
                                <p>{item.mentorName}</p>
                                <p>Group Members: {item.enrolled}</p>
                            </div>
                            <hr />
                            <div className='bottom-icons'>
                                <NavLink style={{ color: 'black' }} to={'/information'}>
                                    <AiOutlineInfoCircle className='card-icon' title={`Information`} />
                                </NavLink>
                                <NavLink style={{ color: 'black' }} to={'/auction'}>
                                    <AiOutlineEye className='card-icon' title={`Auction`} />
                                </NavLink>
                                <NavLink style={{ color: 'black' }} to={'/biding'}>
                                    <AiOutlineMessage className='card-icon' title={`Biding`} />
                                </NavLink>
                                <NavLink style={{ color: 'black' }} to={'/allusers'}>
                                    <AiOutlineMessage className='card-icon' title={`Allusers`} />
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Chitgroup;
