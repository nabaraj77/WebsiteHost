import React, { forwardRef } from "react";
import "./ContactMe.css";

import { useForm } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="contactMe" id="contactMe">
      <h1 className="heading fa-bounce">Contact Me</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fullName">
          <label htmlFor="name">
            <h5 className="labelName">Full Name :</h5>
          </label>
          <input
            type="text"
            className="form-control widthInput"
            id="exampleInputEmail1"
            required
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[a-zA-Z ]*$/,
              },
            })}
            placeholder="Full Name"
          />
        </div>
        <div className="email">
          <label htmlFor="email">
            <h5 className="labelEmail">Email :</h5>
          </label>
          <input
            type="email"
            className="form-control widthInput"
            id="exampleInputEmail1"
            required
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email"
          />
        </div>
        <div className="mobileNumber">
          <label htmlFor="email">
            <h5 className="labelMobile">Mobile No :</h5>
          </label>
          <input
            type="text"
            className="form-control widthInput"
            id="exampleInputEmail1"
            required
            {...register("mobileNumber", {
              required: "Mobile  Number is required",
            })}
            placeholder="Mobile Number"
          />
        </div>
        <div className="message">
          <label htmlFor="message">
            <h5 className="labelMessage">Message :</h5>
          </label>
          <textarea
            type="text-area"
            className="form-control widthInput"
            id="exampleInputEmail1"
            required
            {...register("message", {
              required: "Message is required",
            })}
            placeholder="Message"
          />
        </div>
        <div className="submitBtn">
          <button type="submit" className="btn btn-outline-light">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactMe;
