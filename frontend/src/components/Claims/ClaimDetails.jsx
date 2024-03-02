import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ClaimDetails = () => {
  const { claimId } = useParams();
  const [claim, setClaim] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/claims/${claimId}`
        );
        setClaim(response.data.claim);
        // Process the response here
      } catch (error) {
        console.error("Error fetching claims:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-success";
      case "Rejected":
        return "text-danger";
      case "Pending":
        return "text-warning";
      default:
        return "text-muted";
    }
  };

  return (
    <div className="row">
      <h1 className="text-center mb-4">Claim Details</h1>
      <div className="col-md-6 offset-md-3">
        {claim && (
          <div className="card">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5 className="card-title">Policy Id</h5>
                <p className="card-text">{claim._id}</p>
              </div>
              <div className="border-bottom mb-3 pb-3">
                <h5 className="card-title">Claim Date</h5>
                <p className="card-text">{claim.claimDate}</p>
              </div>
              <div className="border-bottom mb-3 pb-3">
                <h5 className="card-title">Claim Amount</h5>
                <p className="card-text">Rs. {claim.claimAmount}</p>
              </div>
              <div className="border-bottom mb-3 pb-3">
                <h5 className="card-title">Description</h5>
                <p className="card-text">{claim.description}</p>
              </div>
              <div className={`fw-bold ${getStatusColor(claim.status)}`}>
                <h5 className="card-title">Status</h5>
                <p className="card-text">{claim.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimDetails;
