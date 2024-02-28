// {
//   "_id": {
//     "$oid": "65dd9a69273750438dc0fe75"
//   },
//   "policyId": {
//     "$oid": "65dd7b3df9bdaf409b452f05"
//   },
//   "userId": {
//     "$oid": "65dd8f9a1568775fa27c97e2"
//   },
//   "claimDate": {
//     "$date": "2024-02-27T00:00:00.000Z"
//   },
//   "claimAmount": 2500,
//   "description": "car dashboard error",
//   "status": "Pending",
//   "documents": [
//     {
//       "public_id": "this is a sample id",
//       "url": "profilepicurl",
//       "_id": {
//         "$oid": "65dd9a69273750438dc0fe76"
//       }
//     }
//   ],
//   "createdAt": {
//     "$date": "2024-02-27T08:16:41.775Z"
//   },
//   "updatedAt": {
//     "$date": "2024-02-27T08:16:41.775Z"
//   },
//   "__v": 0
// }

import React from 'react'

const NewPolicy = () => {
  return (
    <div className="row">
      <h1 className="text-center">New Policy</h1>
      <div className="col-md-6 offset-md-3">
        <form
          noValidate
          className="validated-form"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="title">
              Policy Type:
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              name="campground[title]"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Start Date
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="campground[location]"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              End Date
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="campground[location]"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Policy Term
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="campground[location]"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Payment Frequency
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              name="campground[location]"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Premium Amount
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
              Terms And Conditions
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
            <button className="btn btn-success">Add Policy</button>
          </div>
        </form>
        <a href="/campgrounds">All Policies</a>
      </div>
    </div>
  );
}

export default NewPolicy
