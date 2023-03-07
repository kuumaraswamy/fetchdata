import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFetch = () => {
    Axios.get("https://randomuser.me/api/")
      .then((response) => {
        const data = response.data.results[0];
        setFirstName(data.name.first);
        setLastName(data.name.last);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Data Fetching Task </h1>
      <button onClick={handleFetch}>Fetch Data</button>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
    </>
  );
}
