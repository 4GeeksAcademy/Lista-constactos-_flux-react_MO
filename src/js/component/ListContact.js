import React, { Component } from "react";

export const ListContact = () => {
  return (
    <div className=" bg-success-subtle container mt-2 ">
      <h1 className="text-center mb-4">Add a new contact</h1>
      <htmlForm>
        <div classNameName="mb-3">
          <h5>Full Name</h5>
          <label htmlFor="exampleInputFullName" className="Form-label "></label>
          <input
            type="fullName"
            className="Form-control w-50"
            id="exampleInputFullName"
            aria-describedby="emailHelp"
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <h5>Email</h5>
          <label htmlFor="exampleInputEmail" className="Form-label"></label>
          <input
            type="Email"
            className="Form-control justify-content-center w-50"
            id="exampleInputPhone"
            placeholder="Email"
          />
        </div>
        <div classNameName="text-center mb-3">
          <h5>Phone</h5>
          <label htmlFor="exampleInputPhone" className="Form-label"></label>
          <input
            type="Phone"
            className="Form-control justify-content-center w-50"
            id="exampleInputPhone"
            aria-describedby="emailHelp"
            placeholder="Phone"
          />
        </div>
        <div className="mb-3">
          <h5>Adress</h5>
          <label htmlFor="exampleInputAddress" className="Form-label"></label>
          <input
            type="Address"
            className="Form-control justify-content-center w-50"
            id="exampleInputAddress"
            placeholder="adress"
          />
        </div>

        <button
          type="submit"
          className=" d-flex justify-content-center btn btn-primary btn-lg w-50"
        >
          Save
        </button>
        <button type="submit" className="btn text-center">
          or get to contacts
        </button>
      </htmlForm>
    </div>
  );
};
