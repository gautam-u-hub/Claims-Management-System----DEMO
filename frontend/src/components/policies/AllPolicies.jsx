import React from "react";
import image from "../../Images/Random.jpg"

const AllPolicies = () => {
  return (
    <>
      <div className="container">
        <h1>All Policies</h1>

        <div className="card mb-3">
          <div className="row">
            <div className="col-md-3">
              <img src={image} alt="" className="img-fluid"  />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> Health Insurance </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  qui mollitia accusantium ipsam velit dolore quisquam impedit
                  amet quis delectus magni maiores, alias repellat nesciunt
                  modi, labore, vitae perspiciatis nostrum.
                </p>
                <p className="card-text">
                  <small className="text-muted">location</small>
                </p>
                <a href="" className="btn btn-primary">Show Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPolicies;
