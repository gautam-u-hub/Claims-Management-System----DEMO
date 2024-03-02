import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const NewPolicy = () => {
  const [formData, setFormData] = useState({
    policyType: "",
    startDate: "",
    endDate: "",
    policyTerm: "",
    paymentFrequency: "",
    premiumAmount: "",
    termsAndConditions: "",
    sumAssured:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleStartDateChange = (date) => {
    setFormData({
      ...formData,
      startDate: date,
    });
  };

  const handleEndDateChange = (date) => {
    setFormData({
      ...formData,
      endDate: date,
    });
  };


  const handleSubmit = async (event) => {
   event.preventDefault();
    try {
      const config = {
        headers: { "content-Type": "application/json" },
      };
    
    

      const { data } = await axios.post(`http://localhost:4000/policy`, formData, config);
      console.log(data);
    } catch (e) {
      console.log(e);
    }


  };

  return (
    <div className="row">
      <h1 className="text-center">New Policy</h1>
      <div className="col-md-6 offset-md-3">
        <form noValidate className="validated-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="policy-type">
              Policy Type:
            </label>
            <input
              className="form-control"
              type="text"
              id="policy-type"
              name="policyType" // Change this to "policyType"
              value={formData.policyType}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="startDate">
              Start Date:
            </label>
            <br />
            <DatePicker
              selected={formData.startDate}
              onChange={handleStartDateChange}
              className="form-control"
              name="startDate"
              dateFormat="MM/dd/yyyy"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="endDate">
              End Date:
            </label>
            <br />
            <DatePicker
              selected={formData.endDate}
              onChange={handleEndDateChange}
              className="form-control"
              name="endDate"
              dateFormat="MM/dd/yyyy"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="policyTerm">
              Policy Term
            </label>
            <input
              className="form-control"
              type="text"
              id="policyTerm"
              name="policyTerm"
              value={formData.policyTerm}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="paymentFrequency">
              Payment Frequency
            </label>
            <input
              className="form-control"
              type="text"
              id="paymentFrequency"
              name="paymentFrequency"
              value={formData.paymentFrequency}
              onChange={handleChange}
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
                name="premiumAmount"
                value={formData.premiumAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">
              Sum Assured
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
                name="sumAssured"
                value={formData.sumAssured}
                onChange={handleChange}
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
              name="termsAndConditions"
              value={formData.termsAndConditions}
              onChange={handleChange}
              required
            ></textarea>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-success">
              Add Policy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPolicy;
