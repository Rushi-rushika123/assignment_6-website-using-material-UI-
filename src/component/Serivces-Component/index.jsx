
import React from "react";
import "./index.scss";
import ServicesCard from "../../commonComponent/servicesCard";
export default function Services({ serviceCardData }) {
  return (
    <div id="servicesComp">
      <div >
        <div className="heading">Our Services</div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>

      <div sx={{ paddingTop: "50px" }}>
        <div id="serviceCardDec">
         <ServicesCard serviceCardData={serviceCardData} />

        </div>
        
      </div>
    </div>
  );
}
