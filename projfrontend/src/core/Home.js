import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";

const Home = () => {
  console.log("API IS", process.env.REACT_APP_BACKEND);
  console.log(API);
  return (
    <Base title="Home page">
      <h1>Children</h1>
      <h1 className="text-white">Hello frontend </h1>
    </Base>
  );
};

export default Home;
