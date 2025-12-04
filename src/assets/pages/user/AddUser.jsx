import React from "react";
import { useForm } from "react-hook-form";
export default function AddUser() {
  const {register, handleSubmit,formState:{ errors }} = useForm();
  const addUser = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(addUser)}>
        <div className="mb-3">
          <label htmlFor="nameInbut" className="form-label">
            User Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-control"
            id="nameInbut"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInbut" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            className="form-control"
            input="email"
            id="emailInbut"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floatingInbut" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            type="number"
            className="form-control"
            id="floatingInbut"
            placeholder="Enter Your Age"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
