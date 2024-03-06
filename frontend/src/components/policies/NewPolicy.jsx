import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Alert } from "react-bootstrap";

const NewPolicy = () => {
  const [formData, setFormData] = useState({
    policyType: "",
    startDate: "",
    endDate: "",
    policyTerm: "",
    paymentFrequency: "",
    premiumAmount: "",
    termsAndConditions: "",
    sumAssured: "",
  });
  const [formErrors, setFormErrors] = useState({
    policyType: "",
    startDate: "",
    endDate: "",
    policyTerm: "",
    paymentFrequency: "",
    premiumAmount: "",
    termsAndConditions: "",
    sumAssured: "",
  });
  const [errorMessage, setErrorMessage] = useState(null); // State to manage error
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value
        ? ""
        : `Please enter ${name.replace(/([A-Z])/g, " $1").toLowerCase()}.`,
    });
  };

  const handleStartDateChange = (date) => {
    setFormData({
      ...formData,
      startDate: date,
    });
    setFormErrors({
      ...formErrors,
      startDate: date ? "" : "Please select a start date.",
    });
  };

  const handleEndDateChange = (date) => {
    setFormData({
      ...formData,
      endDate: date,
    });
    setFormErrors({
      ...formErrors,
      endDate: date ? "" : "Please select an end date.",
    });
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  let isValid = true;
  const newFormErrors = { ...formErrors };

  // Check for empty fields
  for (const key in formData) {
    if (formData.hasOwnProperty(key) && formData[key] === "") {
      newFormErrors[key] = `Please enter ${key
        .replace(/([A-Z])/g, " $1")
        .toLowerCase()}.`;
      isValid = false;
    }
  }

  // Validate date range
  if (
    formData.startDate >= formData.endDate
  ) {
    newFormErrors.endDate = "End date must be after start date.";
    isValid = false;
  }

  // Validate premium amount
  const premiumAmount = parseFloat(formData.premiumAmount);
  if (isNaN(premiumAmount) || premiumAmount <= 0) {
    newFormErrors.premiumAmount = "Premium amount must be a positive number.";
    isValid = false;
  }

  // Validate sum assured
  const sumAssured = parseFloat(formData.sumAssured);
  if (isNaN(sumAssured) || sumAssured < 0) {
    newFormErrors.sumAssured = "Sum assured must be a non-negative number.";
    isValid = false;
  }

  if (!isValid) {
    setFormErrors(newFormErrors);
    return;
  }

  try {
    const config = {
      headers: { "content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `http://localhost:4000/policy`,
      formData,
      config
    );
    setSuccessMessage("Policy Created Successfully");
  } catch (e) {
    setErrorMessage("Error creating the policy");
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
      <h1 className="text-center">New Policy</h1>
      <div className="col-md-6 offset-md-3">
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        <form noValidate className="validated-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="policy-type">
              Policy Type:
            </label>
            <input
              className={`form-control ${
                formErrors.policyType ? "is-invalid" : ""
              }`}
              type="text"
              id="policy-type"
              name="policyType"
              value={formData.policyType}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{formErrors.policyType}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="startDate">
              Start Date:
            </label>
            <br />
            <DatePicker
              selected={formData.startDate}
              onChange={handleStartDateChange}
              className={`form-control ${
                formErrors.startDate ? "is-invalid" : ""
              }`}
              name="startDate"
              dateFormat="MM/dd/yyyy"
              required
            />
            <div style={{ color: "red" }}>{formErrors.startDate}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="endDate">
              End Date:
            </label>
            <br />
            <DatePicker
              selected={formData.endDate}
              onChange={handleEndDateChange}
              className={`form-control ${
                formErrors.endDate ? "is-invalid" : ""
              }`}
              name="endDate"
              dateFormat="MM/dd/yyyy"
              required
            />
            <div style={{ color: "red" }}>{formErrors.endDate}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="policyTerm">
              Policy Term:
            </label>
            <input
              className={`form-control ${
                formErrors.policyTerm ? "is-invalid" : ""
              }`}
              type="text"
              id="policyTerm"
              name="policyTerm"
              value={formData.policyTerm}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">{formErrors.policyTerm}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="paymentFrequency">
              Payment Frequency:
            </label>
            <input
              className={`form-control ${
                formErrors.paymentFrequency ? "is-invalid" : ""
              }`}
              type="text"
              id="paymentFrequency"
              name="paymentFrequency"
              value={formData.paymentFrequency}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              {formErrors.paymentFrequency}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="premiumAmount">
              Premium Amount:
            </label>
            <div className="input-group">
              <span className="input-group-text" id="premium-amount-label">
                Rs.
              </span>
              <input
                type="text"
                className={`form-control ${
                  formErrors.premiumAmount ? "is-invalid" : ""
                }`}
                id="premiumAmount"
                placeholder="0.00"
                aria-label="premiumAmount"
                aria-describedby="premium-amount-label"
                name="premiumAmount"
                value={formData.premiumAmount}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ color: "red" }}>{formErrors.premiumAmount}</div>
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="sumAssured">
              Sum Assured:
            </label>
            <div className="input-group">
              <span className="input-group-text" id="sum-assured-label">
                Rs.
              </span>
              <input
                type="text"
                className={`form-control ${
                  formErrors.sumAssured ? "is-invalid" : ""
                }`}
                id="sumAssured"
                placeholder="0.00"
                aria-label="sumAssured"
                aria-describedby="sum-assured-label"
                name="sumAssured"
                value={formData.sumAssured}
                onChange={handleChange}
                required
              />
            </div>
            <div className="invalid-feedback">{formErrors.sumAssured}</div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="termsAndConditions">
              Terms And Conditions:
            </label>
            <textarea
              className={`form-control ${
                formErrors.termsAndConditions ? "is-invalid" : ""
              }`}
              id="termsAndConditions"
              name="termsAndConditions"
              value={formData.termsAndConditions}
              onChange={handleChange}
              required
            ></textarea>
            <div className="invalid-feedback">
              {formErrors.termsAndConditions}
            </div>
          </div>
          <button type="submit" className="btn btn-success">
            Add Policy
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPolicy;
