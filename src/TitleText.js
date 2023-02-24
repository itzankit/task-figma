import React from "react";
import imgM from "./assests/images/Vector (6).png";
import imgA from "./assests/images/Vector (7).png";
import imgG from "./assests/images/Vector (8).png";
import imgP from "./assests/images/Vector (9).png";
import imgI from "./assests/images/Vector (10).png";
import imgE from "./assests/images/Vector (11).png";

function TitleText() {
  return (
    <div>
      <div className="title">
        <div style={{ position: "absolute", top: "-10px", left: "-10px" }}>
          <img height="16.99px" width="18.41" src={imgM}></img>
        </div>
        <div style={{ position: "absolute", top: "-10px", left: "10px" }}>
          <img height="13.15px" width="11.4px" src={imgA}></img>
        </div>
        <div style={{ position: "absolute", top: "-6px", left: "22px" }}>
          <img height="17.95px" width="12.44px" src={imgG}></img>
        </div>
        <div style={{ position: "absolute", top: "-6px", left: "35px" }}>
          <img height="17.95px" width="12.44px" src={imgP}></img>
        </div>
        <div style={{ position: "absolute", top: "-11px", left: "48px" }}>
          <img height="17.96px" width="3.82px" src={imgI}></img>
        </div>
        <div style={{ position: "absolute", top: "-10px", left: "52px" }}>
          <img height="13.15px" width="12.17px" src={imgE}></img>
        </div>
      </div>
    </div>
  );
}
export default TitleText;
