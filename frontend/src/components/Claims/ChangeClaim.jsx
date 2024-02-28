// ChangeClaimStatus.js
import React from "react";
import "./ChangeClaimStatus.css"; // Import the CSS file

const ChangeClaimStatus = () => {
  return (
    <div className="row">
      <h1 className="text-center">Approve/Reject The Claim </h1>
      <div className="col-md-6 offset-md-3">
        <form
          noValidate
          className="validated-form"
          encType="multipart/form-data"
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
              value={"someid"}
              readOnly
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              User Id:
            </label>
            <input
              className="form-control readonly-input" // Apply the readonly-input class
              type="text"
              id="location"
              name="campground[location]"
              required
              value={"someid"}
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
                className="form-control readonly-input" // Apply the readonly-input class
                id="price"
                placeholder="0.00"
                aria-label="price"
                aria-describedby="price-label"
                name="campground[price]"
                required
                readOnly
                value={""}
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
              value={""}
            ></textarea>

            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="status">
              Status
            </label>
            <select className="form-select" id="status" name="status" required>
              <option value="">Select status</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
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
