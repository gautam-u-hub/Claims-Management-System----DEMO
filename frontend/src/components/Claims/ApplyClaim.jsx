import React from "react";

const ApplyClaim = () => {
  return (
    <div className="row">
      <h1 className="text-center">Application for claim </h1>
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
              className="form-control"
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
              className="form-control"
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
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <button className="btn btn-success">Apply For Claim</button>
          </div>
        </form>
        <a href="/campgrounds">All Policies</a>
      </div>
    </div>
  );
};

export default ApplyClaim;
