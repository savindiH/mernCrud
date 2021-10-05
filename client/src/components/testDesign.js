import React, { Component } from "react";
import axios from "axios";
import Joi from "joi";

class AddNewDesign extends Component {
  state = {
    data: {
      _id:"",
      designerId:"",
      material:"",
      description:"",
      qty:"",
   
    },
    errors: {},
  };

  schema = Joi.object({
    _id: Joi.string().min(4).label("ID"),
  
    designerId: Joi.string().label("DesignerId"),
    material: Joi.string().label("Material"),
    description: Joi.string().label("Description"),
    qty: Joi.number().integer().min(10).max(100).label("Quantity"),
    
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
      .post("/design/save", this.state.data)
      .then((res) => {
        if (res.data.success) {
          alert("Design Details Saved Successfully");
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
          Add new Design
        </h1>
        <form className="needs-validation" onSubmit={this.handleSubmitForm}>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Design Code</label>
            <input
              type="text"
              className="form-control"
              name="_id"
              placeholder="Enter Design Code"
              onChange={this.handleOnChange}
            />

            {errors._id && (
              <div className="alert alert-danger mt-2">{errors._id}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Designer ID</label>
            <input
              type="text"
              className="form-control"
              name="designerId"
              placeholder="Designer ID"
              onChange={this.handleOnChange}
            />

            {errors.designerId && (
              <div className="alert alert-danger mt-2">{errors.designerId}</div>
            )}
          </div>

          

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Material</label>
            <input
              type="text"
              className="form-control"
              name="material"
              placeholder="Enter material"
              onChange={this.handleOnChange}
            />

            {errors.material && (
              <div className="alert alert-danger mt-2">{errors.material}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter description of the design"
              onChange={this.handleOnChange}
            />

            {errors.description && (
              <div className="alert alert-danger mt-2">{errors.description}</div>
            )}
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Quantity</label>
            <input
              type="text"
              className="form-control"
              name="qty"
              placeholder="Enter the quantity"
              onChange={this.handleOnChange}
            />

            {errors.qty && (
              <div className="alert alert-danger mt-2">{errors.qty}</div>
            )}
          </div>

   
       

          <button
            disabled={this.validate()}
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Save Design
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewDesign;
