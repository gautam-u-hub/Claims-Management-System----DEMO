import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ShowPolicy = () => {
  const { policyId } = useParams();
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
  return (
    <div className="container">
      <h1 className="text-center mb-4">Policy Details</h1>
      <div className="card">
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
          <div className="text-center mt-4">
            <Link to={`/apply-claim/${policy._id}`}className="btn btn-primary">
              Apply for Claim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPolicy;
