import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImage from "../../Images/HomePage.jpg";

const Home = () => {
  // Get user data from Redux store
  const user = useSelector((state) => state.user.user.user);

  return (
    <div
      className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1334574095/photo/insurance-concept-businessman-holding-red-umbrella-on-falling-rain-with-protect-with-icon.jpg?s=1024x1024&w=is&k=20&c=u6edpYPZP19dqHeVk30j_jJA7FzhV1iaZafm2WwvgL4=")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h1 className="display-20 text-black mb-4">
        Welcome to Claim Management System
      </h1>
      <div className="text-center">
        {user ? (
          <>
            {user.role === "policyHolder" && (
              <Link
                to="/your-policies"
                className="btn btn-lg btn-primary mb-2 me-2"
              >
                Your Policies
              </Link>
            )}
            {["admin", "TPA"].includes(user.role) && (
              <Link to="/all-policies" className="btn btn-lg btn-primary mb-2">
                All Policies
              </Link>
            )}
          </>
        ) : (
          <Link to="/login" className="btn btn-lg btn-primary mb-2">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
