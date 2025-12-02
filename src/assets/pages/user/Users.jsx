import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUseres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const getUesrs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);

      setUseres(response.data.users);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUesrs();
  }, []);
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
            <th>email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
               <td> <h3>{user.name}</h3></td>
             <td><p>{user.email}</p></td>   
               <td><img src={user.imageUrl} width="200px" alt={user.name} /></td> 
              </tr>
             
            );
          })}
        </tbody>
      </table>
    </>
  );
}
