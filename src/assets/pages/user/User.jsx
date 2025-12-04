import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/useFetch/useFetch";

export default function User() {
  const { id } = useParams();
  const { data, isError, isLoading } = useFetch(`users/${id}`);

  if (isError) {
    return <div className="text-danger">{isError}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4 d-flex flex-column align-items-start">
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {data.data.name}
      </p>
      <p>
        <strong>Email:</strong> {data.data.email}
      </p>
      <p>
        <strong>Username:</strong> {data.data.age}
      </p>
      <img src={data.data.image} alt={data.data.name} width="200" />
    </div>
  );
}
