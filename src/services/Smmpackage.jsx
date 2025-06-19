import React from "react";
import Template from "./Template";
import appImage from "../img/portfolio/app-1.jpg";
import NavBar from "../components/NavBar";


const Smmpackage = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"SMM Package"}
        desc={
          "Lorem doloribus ex quisquam. Nesciunt laborum laboriosam consequuntur, eum id molestias in, Nesciunt laborum laboriosam consequuntur, eum id molestias in."
        }
        image={appImage}
      />
    </div>
  );
};

export default Smmpackage;