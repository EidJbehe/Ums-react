import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function AddUser() {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const[preview,setPreview]=useState(null);
  const addUser = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("age", values.age);
    formData.append("image", values.image[0]);
    
    const response = await axios.post(
      `${import.meta.env.VITE_BURL}/users`,
      formData
    );
    if (response.status === 200) {
      navigate("/users");
    }

    console.log(response);
  };
  const handlePreview=(e)=>{
    const file=e.target.files[0];
    setPreview(URL.createObjectURL(file));
  }

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
          <label htmlFor="ageInbut" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            type="number"
            className="form-control"
            id="ageInbut"
            placeholder="Enter Your Age"
          />
        </div>
        <div className="mb-3">
          {preview?<img src={preview} alt="preview" width="100"/>:null}
          <label htmlFor="fileInbut" className="form-label">
           choose File
          </label>
          <input
            {...register("image")}
            type="file" onChange={handlePreview}
            className="form-control"
            id="fileInbut"
            placeholder="choose your file"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
