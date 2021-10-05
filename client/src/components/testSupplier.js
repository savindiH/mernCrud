import React, { Component } from "react";
import axios from "axios";
import Joi from "joi";

class CreateSupplier extends Component {
  state = {
    data: {
      _id: "",
      name: "",
      email: "",
      nic: "",
      address: "",
      contactNo: "",
      age: "",
      contractCode:"",
    },
    errors: {},
  };

  schema = Joi.object({
    _id: Joi.string().min(4).label("ID"),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .label("Email"),
    name: Joi.string().label("Name"),
    nic: Joi.string().label("NIC"),
    address: Joi.string().label("Address"),
    contactNo: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .label("Contact No")
      .messages({
        "string.empty": "Should be a valid contact number.",
        "string.pattern.base": "Should be a valid contact number.",
      }),
    age: Joi.number().integer().min(10).max(100).label("Age"),
    
  });

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const { error } = this.schema.validate(obj);
    return error ? error.details[0].message : null;
  };

  handleOnChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const { error } = this.schema.validate(this.state.data);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.onSubmit();
  };

  onSubmit = () => {
    axios
      .post("/supplier/save", this.state.data)
      .then((res) => {
        if (res.data.success) {
          alert("Supplier Details Saved Successfully")
      
        
        }
        
      })
      .catch((err) => {
        console.log(err);
        if (err && err.res.status === 400) {
          const errors = { ...this.state.errors };
          errors.name = err.res.data;
          this.setState({ errors });
        }
      });
      
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal" style={{ color: "#99e6ff" }}>
          Add new Designer
        </h1>
        <form className="needs-validation" onSubmit={this.handleSubmitForm}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Supplier ID</label>
            <input
              type="text"
              className="form-control"
              name="_id"
              placeholder="Enter Supplier ID"
              onChange={this.handleOnChange}
            />

            {errors._id && (
              <div className="alert alert-danger mt-2">{errors._id}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Supplier Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Supplier Name"
              onChange={this.handleOnChange}
            />

            {errors.name && (
              <div className="alert alert-danger mt-2">{errors.name}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter Supplier Email Address"
              onChange={this.handleOnChange}
            />

            {errors.email && (
              <div className="alert alert-danger mt-2">{errors.email}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>NIC</label>
            <input
              type="text"
              className="form-control"
              name="nic"
              placeholder="Enter Supplier NIC"
              onChange={this.handleOnChange}
            />

            {errors.nic && (
              <div className="alert alert-danger mt-2">{errors.nic}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Enter Supplier Address"
              onChange={this.handleOnChange}
            />

            {errors.address && (
              <div className="alert alert-danger mt-2">{errors.address}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Contact NO</label>
            <input
              type="text"
              className="form-control"
              name="contactNo"
              placeholder="Enter Supplier Contact Number"
              onChange={this.handleOnChange}
            />

            {errors.contactNo && (
              <div className="alert alert-danger mt-2">{errors.contactNo}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              placeholder="Enter the Age"
              onChange={this.handleOnChange}
            />
          </div>

          {errors.age && (
            <div className="alert alert-danger mt-2">{errors.age}</div>
          )}
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Contract Code</label>
            <input
              type="text"
              className="form-control"
              name="contractCode"
              placeholder="Enter Contract Code"
              onChange={this.handleOnChange}
            />

            {errors.contractCode && (
              <div className="alert alert-danger mt-2">{errors.contractCode}</div>
            )}
          </div>

          <button
            disabled={this.validate()}
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Save Supplier
          </button>
        </form>
      </div>
    );
  }
}

export default CreateSupplier;
