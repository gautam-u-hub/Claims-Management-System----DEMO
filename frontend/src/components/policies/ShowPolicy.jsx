import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap";


const ShowPolicy = () => {
  
const user = useSelector((state) => state.user.user.user);
const { policyId } = useParams();
const [email, setEmail] = useState("");
const [successMessage, setSuccessMessage] = useState(null);
const [errorMessage, setErrorMessage] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const config = {
      headers: { "content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `http://localhost:4000/assign-policy/${policyId}`,
      { email },
      config
    );

    setSuccessMessage("Policy assigned successfully");
    setErrorMessage(null);
  } catch (error) {
    setErrorMessage(error.response.data.message);
    setSuccessMessage(null);
  }
  };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
        setErrorMessage(null);
      }, 15000);
      return () => clearTimeout(timer);
    }, [successMessage, errorMessage]);

const policy = useSelector((state) => {
  // Assuming policies are stored in state.policy.policies
  const policies = state.policy.policies.policies;
  // Loop through policies array to find the policy with the matching policyId
  for (let i = 0; i < policies.length; i++) {
    // console.log(policies[i]._id, policyId);
    if (policies[i]._id === policyId) {
      return policies[i];
    }
  }

  // If policy with matching ID is not found, return null or handle accordingly
  return null;
});

if (!policy) {
  return <div>No policy exists with this id on your account </div>;
}

const handleEmailChange = (e) => {
  setEmail(e.target.value);
  };
  



  return (
    <div className="container">
      <h1 className="text-center mb-4">Policy Details</h1>
      <div className="card">
        {/* Display success message */}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {/* Display error message */}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <div className="card-body">
          <div className="mb-3">
            <h5 className="card-title">Policy Type</h5>
            <p className="card-text font-weight-bold">{policy.policyType}</p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">Start Date</h5>
            <p className="card-text font-weight-bold">{policy.startDate}</p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">End Date</h5>
            <p className="card-text font-weight-bold">{policy.endDate}</p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">Premium Amount</h5>
            <p className="card-text font-weight-bold">
              Rs. {policy.premiumAmount}
            </p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">Sum Assured</h5>
            <p className="card-text font-weight-bold">
              Rs. {policy.sumAssured}
            </p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">Terms and Conditions</h5>
            <p className="card-text font-weight-bold">
              {policy.termsAndConditions}
            </p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">Policy Term</h5>
            <p className="card-text font-weight-bold">{policy.policyTerm}</p>
          </div>
          <hr />
          <div className="mb-3">
            <h5 className="card-title">Payment Frequency</h5>
            <p className="card-text font-weight-bold">
              {policy.paymentFrequency}
            </p>
          </div>

          {user.role === "policyHolder" && (
            <div className="text-center mt-4">
              <Link
                to={`/apply-claim/${policy._id}`}
                className="btn btn-primary"
              >
                Apply for Claim
              </Link>
            </div>
          )}

          <br />
          {user.role === "admin" && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Applicant's Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={email}
                  required
                  onChange={handleEmailChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Assign Policy
              </button>
            </form>
          )}
          {user.role === "admin" && (
            <div className="text-center mt-4">
              <Link
                to={`/update-policy/${policy._id}`}
                className="btn btn-primary"
              >
                Update Policy
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowPolicy;
