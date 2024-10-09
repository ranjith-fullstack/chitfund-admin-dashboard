import { NavLink } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";  
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { LuFiles } from "react-icons/lu";
import {PiUsersThreeBold } from "react-icons/pi";
import logolms from "../Sidebar/img/logolms.png";
import { FaCircleUser } from "react-icons/fa6";

const routes = [
  {
    path:"/dashboard",
    name:"Dashboard",
    icon:<FaHome />,
    
  },
  {
    path:"/chitgroup",
    name:"Chitgroup",
    icon:<HiOutlineChatAlt2 />
  },
  {
    path:"/memberentry",
    name:"MemberEntry",
    icon:<PiUsersThreeBold />
  },
  {
    path:"/memberpassbook",
    name:"Memberpassbook",
    icon:<FaCircleUser />
  },
  {
    path:"/paymentreport",
    name:"Paymentreport",
    icon:<PiUsersThreeBold />
  },
  {
    path:"/payout",
    name:"Payout",
    icon:<PiUsersThreeBold />
  },
  {
    path:"/profile",
    name:"Profile",
    icon:<PiUsersThreeBold />
  },
  {
    path:"/communication",
    name:"Communication",
    icon:<PiUsersThreeBold />
  },
  {
    path:"/logout",
    name:"Logout",
    icon:<PiUsersThreeBold />
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
             

                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars style={{cursor:'pointer'}} onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

      <main className={isOpen?'open':'closed'}>{children}</main>
      </div>
      
    </>
  );
};

export default SideBar;
