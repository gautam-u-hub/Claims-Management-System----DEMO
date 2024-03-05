// ChangeClaimStatus.js
import React, { useEffect } from "react";
import "./ChangeClaimStatus.css"; // Import the CSS file

import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";


const ChangeClaimStatus = () => {
  const [errorMessage, setErrorMessage] = useState(null); // State to manage error
  const [successMessage, setSuccessMessage] = useState(null);
    const [lastPaymentDate, setLastPaymentDate] = useState(null);

  const user = useSelector((state) => state.user.user.user);


  const { claimId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/TPA/claims/${claimId}`
        );
        setClaim(response.data.claim);
        console.log(response.data);
        setLastPaymentDate(response.data.lastPaymentDate);
        // Process the response here
      } catch (error) {
        console.error("Error changing claim status:", error);
        
      }
    };

    fetchData(); // Call the async function
  }, []);
  const [claim, setClaim] = useState("");
  const [status, setStatus] = useState(""); // State to manage selected status

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: { "content-Type": "application/json" },
      };

      const { data } = await axios.put(
        `http://localhost:4000/TPA/claims/${claimId}`,
        { status },
        config
      );
      console.log(data);
      setSuccessMessage("Claim Status Changed Succesfully");

    } catch (e) {
      console.log(e);
      setErrorMessage("Error changing claim status")
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 15000);
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);
  return (
    <div className="row">
      <h1 className="text-center">Approve/Reject The Claim </h1>
      <div className="col-md-6 offset-md-3">
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <form
          noValidate
          className="validated-form"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Policy Id:
            </label>
            <input
              className="form-control readonly-input" // Apply the readonly-input class
              type="text"
              id="title"
              name="campground[title]"
              required
              value={claim._id}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Claim Date:
            </label>
            <input
              className="form-control readonly-input" // Apply the readonly-input class
              type="text"
              id="location"
              name="claimDate"
              required
              value={claim.claimDate}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Last Premium Payment Pay Date:
            </label>
            <input
              className="form-control readonly-input" // Apply the readonly-input class
              type="text"
              id="location"
              name="lastPaymentDate"
              required
              value={lastPaymentDate}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Claim Amount
            </label>
            <div className="input-group">
              <span className="input-group-text" id="price-label">
                Rs.
              </span>
              <input
                type="text"
                className="form-control readonly-input" // Apply the readonly-input class
                id="price"
                placeholder="0.00"
                aria-label="price"
                aria-describedby="price-label"
                name="campground[price]"
                required
                readOnly
                value={claim.claimAmount}
              />
            </div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              className="form-control readonly-input" // Apply the readonly-input class
              id="description"
              name="campground[description]"
              required
              readOnly
              value={claim.description}
            ></textarea>

            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="status">
              Status
            </label>
            <select
              className="form-select"
              id="status"
              name="status"
              value={status} // Bind select value to status state
              onChange={(e) => setStatus(e.target.value)} // Update status state on select change
              required
            >
              <option value="">Select status</option>
              <option value="Approved">Approve</option>
              <option value="Rejected">Reject</option>
              {user.role === "admin" && (
                <option value="Reimbursed">Reimburse</option>
              )}
            </select>
          </div>

          <div className="mb-3">
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeClaimStatus;
