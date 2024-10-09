import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chitgroup from "./pages/Chitgroup";
import MemberEntry from './pages/MemberEntry';
import Memberpassbook from './pages/Memberpassbook';
import Paymentreport from './pages/Paymentreport';
import Auction from "./pages/auction";
import Information from './pages/Information';
import Biding from "./pages/biding";
import Allusers from "./pages/allusers";
import Addexisting from "./pages/addexisting";
import Payout from "./pages/payout";
import Profile from "./pages/profile";
import Communication from "./pages/communication";
import Logout from "./pages/logout";

import { CreateCourse } from "./pages/CreateCourse";

function App() {
  return (
    <BrowserRouter>
    <div style={{display:'flex'}}>
      <SideBar></SideBar>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/chitgroup" element={<Chitgroup />}/>
          <Route path="/memberentry" element={<MemberEntry />}/>
          <Route path="/auction" element={<Auction />}/> 
          <Route path="/information" element={<Information />}/>
          <Route path="/memberpassbook" element={<Memberpassbook />}/>
          <Route path="/paymentreport" element={<Paymentreport/>}/>
          <Route path="/createcourse" element={<CreateCourse/>}/>
          <Route path="/biding" element={<Biding/>}/>
          <Route path="/Allusers" element={<Allusers/>}/>
          <Route path="/Addexisting" element={<Addexisting/>}/>
          <Route path="/Payout" element={<Payout/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Communication" element={<Communication/>}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path="*" element={<> not found</>} />
        </Routes>
        </div>
      </div>
        
</BrowserRouter>
 );
}

export default App;
