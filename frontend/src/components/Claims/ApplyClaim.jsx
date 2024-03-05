import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createClaim } from "../../store/claimActions";
import axios from "axios";
import { Alert } from "react-bootstrap";

const ApplyClaim = () => {
  const { policyId } = useParams();
  const [claimAmount, setClaimAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();
  const claimDate = new Date();

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError(null);
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `http://localhost:4000/claims/${policyId}`,
        { claimDate, claimAmount, description },
        config
      );

      // Handle successful claim creation here, if needed
      setSuccess("Claim Created Successfully");
    } catch (error) {
      setError(error.response.data.message);
    }

    setClaimAmount("");
    setDescription("");
  };

  return (
    <div className="row">
      <h1 className="text-center">Application for claim </h1>
      <div className="col-md-6 offset-md-3">
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="validated-form"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Policy Id:
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              name="campground[title]"
              required
              value={policyId}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Claim Date:
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="campground[location]"
              required
              value={new Date().toLocaleDateString("en-GB")}
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
                className="form-control"
                id="price"
                placeholder="0.00"
                aria-label="price"
                aria-describedby="price-label"
                name="campground[price]"
                required
                value={claimAmount}
                onChange={(e) => setClaimAmount(e.target.value)}
              />
            </div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="campground[description]"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Apply For Claim
            </button>
          </div>
        </form>
        <a href="/campgrounds">All Policies</a>
      </div>
    </div>
  );
};

export default ApplyClaim;
