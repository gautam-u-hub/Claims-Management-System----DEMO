import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import AllPolcies from "./components/policies/AllPolicies.jsx"
import Navbar from './components/partials/Navbar.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path='/' />
        <Route path='/all-policies' element={<AllPolcies/>} />
      </Routes>
    </Router>
  );
}

export default App;
