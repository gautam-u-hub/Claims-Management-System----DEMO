import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import AllPolcies from "./components/policies/AllPolicies.jsx"
import Navbar from './components/partials/Navbar.jsx';
import NewPolicy from './components/policies/NewPolicy.jsx';
import ApplyClaim from './components/Claims/ApplyClaim.jsx';
import ChangeClaimStatus from './components/Claims/ChangeClaim.jsx';
import ShowPolicy from './components/policies/ShowPolicy.jsx';
import AssignPolicy from './components/policies/AssignPolicy.jsx';
import Login from './components/User/Login.jsx';
import Register from './components/User/Register.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path='/' />
        <Route path='/all-policies' element={<AllPolcies />} />
        <Route path='new-policy' element={<NewPolicy />} />
        <Route path='apply-claim' element={<ApplyClaim />} />
        <Route path='show-policy' element={<ShowPolicy/>}/>
        <Route path='change-claim' element={<ChangeClaimStatus />} />
        <Route path='assign-policy' element={<AssignPolicy />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
