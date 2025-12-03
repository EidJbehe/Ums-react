import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "../../components/useFetch/useFetch";
import { Link } from "react-router-dom";

export default function Users() {
  const { data, isError, isLoading } = useFetch("users");

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
                <td>
                  <Link to={`/users/${user.id}`} className="btn btn-outline-success">
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
