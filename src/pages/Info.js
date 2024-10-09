import React from 'react';
import {Sidebar, Menu, MenuItem, sidebarClasses} from 'react-pro-sidebar';
import './info.css';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { NavLink} from "react-router-dom";
import {motion} from 'framer-motion';

const Info = ({ children }) => {
    return (
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className='info'>
            <div className="info-sidebar">
                <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                    backgroundColor: '#f5f3f3',
                    height: '100vh',
                    width:'13vw',
                    },
                }}
                >
                    <Menu>
                        <NavLink to={'/courses'}><MenuItem icon={<FaArrowLeftLong/>}>Back to Courses</MenuItem></NavLink>
                        <NavLink to={'/information'}><MenuItem icon={<IoMdInformationCircleOutline/>}>Information</MenuItem></NavLink>
                        <MenuItem icon={<TbUsers/>}>Learners</MenuItem>
                        <MenuItem icon={<IoChatboxEllipsesOutline/>}>Discuss</MenuItem>
                    </Menu>
                </Sidebar>
            </div>
            <main>{children}</main>
            
        </motion.div>
    );
}
 
export default Info;