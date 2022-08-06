import React from "react";
import logo from "./logo.svg";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

import { FETCH_PRODUCTS } from "./providers/products/queries";
import {
  ProductInventoryData,
  ProductInventoryVars,
} from "./providers/products/types";

function App() {
  const { loading, error, data, fetchMore } = useQuery<
    ProductInventoryData,
    ProductInventoryVars
  >(FETCH_PRODUCTS, { variables: { skip: 1, take: 5 } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("typed", { data });
  return (
    <>
      <button
        onClick={() => {
          fetchMore({
            variables: {
              skip: 5,
            },
          });
          console.log("typed", { data });
        }}
      >
        dadasd
      </button>
      {/* {data?.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))} */}
    </>
  );
}

export default App;
