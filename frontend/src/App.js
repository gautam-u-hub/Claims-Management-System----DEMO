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
import AllClaims from './components/Claims/AllClaims.jsx';
import UserClaims from './components/Claims/UserClaims.jsx';
import ClaimDetails from './components/Claims/ClaimDetails.jsx';
import UpdatePolicy from './components/policies/UpdatePolicy.jsx';
import Home from './components/partials/Home.jsx';
import Footer from './components/partials/Footer.jsx';
import { useSelector } from 'react-redux';
import AuthRoute from './AuthRoute.jsx';
import AdminRoute from './AdminRoute.jsx'

axios.defaults.withCredentials = true;
function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <Navbar />
      <Routes>


        <Route element={<AuthRoute />}
        >
          <Route path='your-policies' element={<UserPolicies />} />
          <Route path='apply-claim/:policyId' element={<ApplyClaim />} />
          <Route path='show-policy/:policyId' element={<ShowPolicy />} />
          <Route path='/your-claims' element={<UserClaims />} />
          <Route path='/user-claims/:claimId' element={<ClaimDetails />} />



        </Route>

        <Route element={
          <AdminRoute />
        }
        >
          <Route path='/all-claims' element={<AllClaims />} />

          <Route path='new-policy' element={<NewPolicy />} />
          <Route path='all-policies' element={<AllPolicies />} />
          <Route path='change-claim/:claimId' element={<ChangeClaimStatus />} />
          <Route path='assign-policy' element={<AssignPolicy />} />
          <Route path='update-policy/:policyId' element={<UpdatePolicy />} />



        </Route>

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
