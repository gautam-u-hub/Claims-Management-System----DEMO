import React, { useState, useEffect } from "react";
import image from "../../Images/Random.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const AllClaims = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await axios.get("http://localhost:4000/TPA/claims");
        setClaims(response.data.claims);
      } catch (error) {
        console.error("Error fetching claims:", error);
      }
    };

    fetchClaims();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Rejected":
        return "red";
      case "Pending":
        return "orange";
      default:
        return "bg-secondary";
    }
  };

  return (
    <>
      <div className="container">
        <h1>All Claims</h1>

        {claims.map((claim, index) => (
          <div className="card mb-3" key={index}>
            <div className="row">
              <div className="col-md-3">
                <div className="image-wrapper d-flex align-items-center">
                  <img src={image} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Amount: {claim.claimAmount}</h5>
                  <p
                    className="card-text"
                    style={{
                      color: getStatusColor(claim.status), // Optional: Set text color to white for better readability
                    }}
                  >
                    Status: {claim.status}
                  </p>

                  <p className="card-text">
                    <small className="text-muted">
                      Creation Date: {claim.claimDate}
                    </small>
                  </p>
                  <Link
                    to={`/change-claim/${claim._id}`} // Adjust the link path as needed
                    className="btn btn-primary"
                  >
                    Change Claim Status
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClaims;
