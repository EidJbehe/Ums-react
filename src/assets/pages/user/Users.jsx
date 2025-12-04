import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../components/useFetch/useFetch";
import { Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Users() {
  const { data, isError, isLoading } = useFetch("users");
  const deleteUser=async(id)=>{
    try{
      const response=await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
      console.log(response);
      if(response.status===200){
     toast.success('User deleted succesfully', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})
    }
  }
    catch(error){
 toast.error('Eroor ', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }
    finally{

    }
    
  }

  if (isError) {
    return <div className="text-danger">{isError}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <h3>{user.name}</h3>
                </td>
                <td className="d-flex gap-2">
                  <Link to={`/users/${user.id}`} className="btn btn-outline-success">
                    Details
                  </Link>
                  <button onClick={()=>{deleteUser(user.id)}} className="btn btn-outline-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
