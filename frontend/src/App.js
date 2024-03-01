import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import AllPolicies from "./components/policies/AllPolicies.jsx"
import Navbar from './components/partials/Navbar.jsx';
import NewPolicy from './components/policies/NewPolicy.jsx';
import ApplyClaim from './components/Claims/ApplyClaim.jsx';
import ChangeClaimStatus from './components/Claims/ChangeClaimStatus.jsx';
import ShowPolicy from './components/policies/ShowPolicy.jsx';
import AssignPolicy from './components/policies/AssignPolicy.jsx';
import Login from './components/User/Login.jsx';
import Register from './components/User/Register.jsx';
import axios from 'axios';
import UserPolicies from "./components/policies/UserPolicies.jsx"
import { useEffect } from 'react';
import AllClaims from './components/Claims/AllClaims.jsx';
axios.defaults.withCredentials = true;
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path='/' />
        <Route path='/all-policies' element={<AllPolicies />} />
        <Route path='/your-policies' element={<UserPolicies/>} />

        <Route path='new-policy' element={<NewPolicy />} />
        <Route path='apply-claim/:policyId' element={<ApplyClaim />} />
        <Route path='show-policy/:policyId' element={<ShowPolicy/>}/>
        <Route path='change-claim/:claimId' element={<ChangeClaimStatus />} />
        <Route path='assign-policy' element={<AssignPolicy />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/all-claims' element={<AllClaims/>}/>

      </Routes>
    </Router>
  );
}

export default App;
