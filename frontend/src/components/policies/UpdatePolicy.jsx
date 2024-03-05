import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";


const UpdatePolicy = () => {
    const { policyId } = useParams(); 
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    policyType: "",
    startDate: "",
    endDate: "",
    policyTerm: "",
    paymentFrequency: "",
    premiumAmount: "",
    termsAndConditions: "",
    sumAssured: "",
    lastPaymentDate:"",
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
  const handlelastPaymentDateChange = (date) => {
    setFormData({
      ...formData,
      lastPaymentDate: date,
    });
  };
    
    useEffect(() => {
       const fetchPolicy = async () => {
         try {
           const response = await axios.get(
             `http://localhost:4000/policy/${policyId}`
             );
            console.log(response.data.policy);
           setFormData(response.data.policy);
         } catch (error) {
           setErrorMessage("Error fetching claims");
           console.error("Error fetching claims:", error.data.response);
         }
       };

       fetchPolicy();
   },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: { "content-Type": "application/json" },
      };

      const { data } = await axios.put(
        `http://localhost:4000/policy/${policyId}`,
        formData,
        config
      );
        console.log(data);
        setSuccessMessage("Policy Updated Successfully");

    } catch (e) {
        setErrorMessage("Policy is not updated try again");
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
            <label className="form-label" htmlFor="startDate">
              Last Date of Premium Payment:
            </label>
            <br />
            <DatePicker
              selected={formData.lastPaymentDate}
              onChange={handlelastPaymentDateChange}
              className="form-control"
              name="lastPaymentDate"
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
              Update Policy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePolicy;
