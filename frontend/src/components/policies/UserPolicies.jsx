import React, { useEffect } from "react";
import image from "../../Images/Random.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAllUserPolicies } from "../../store/policyActions";
import { Link } from "react-router-dom";

const AllPolicies = () => {
  const dispatch = useDispatch();
  const policies = useSelector((state) => state.policy.policies.policies) || [];
  useEffect(() => {
    dispatch(getAllUserPolicies());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1>All Policies</h1>

        {policies.map((policy, index) => (
          <div className="card mb-3" key={index}>
            <div className="row">
              <div className="col-md-3">
                <div className="image-wrapper d-flex align-items-center">
                  <img src={image} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{policy.policyType}</h5>
                  <p className="card-text">{policy.termsAndConditions}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Rs. {policy.premiumAmount}
                    </small>
                  </p>
                  <Link
                    to={`/show-policy/${policy._id}`}
                    className="btn btn-primary"
                  >
                    Show Policy
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

export default AllPolicies;
