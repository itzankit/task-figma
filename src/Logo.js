import React from "react";
import logocircle from "./assests/images/Vector (16).png";
import eyeimg from "./assests/images/Vector (17).png";
import innereyeimg from "./assests/images/Vector (18).png";
import pupilimg from "./assests/images/Vector (19).png";
import dotimg from "./assests/images/Vector (20).png";
import leftwingimg from "./assests/images/Vector (22).png";
import rightwingimg from "./assests/images/Vector (23).png";
import lipimg from "./assests/images/Vector (24).png";
import noseimg from "./assests/images/Vector (25).png";
import img1 from "./assests/images/Vector (5).png";

function Logo() {
  return (
    <div style={{ position: "relative" }}>
      <img style={{ position: "absolute", top: "-20px" }} src={img1}></img>
      <img
        style={{ position: "absolute", left: "2px", top: "-6px" }}
        src={leftwingimg}
      ></img>
      <img
        style={{ position: "absolute", left: "10px", top: "-6px" }}
        src={rightwingimg}
      ></img>
      <img
        style={{ position: "absolute", left: "8px", top: "-10px" }}
        src={logocircle}
      ></img>
      <img
        style={{ position: "absolute", left: "9px", top: "-4px" }}
        src={eyeimg}
      ></img>
      <img
        style={{ position: "absolute", left: "21px", top: "-4px" }}
        src={eyeimg}
      ></img>
      <img
        style={{ position: "absolute", left: "13px", top: "-1px" }}
        src={innereyeimg}
      ></img>
      <img
        style={{ position: "absolute", left: "22px", top: "-1px" }}
        src={innereyeimg}
      ></img>
      <img
        style={{ position: "absolute", left: "13.8px", top: "0px" }}
        src={pupilimg}
      ></img>
      <img
        style={{ position: "absolute", left: "23px", top: "0px" }}
        src={pupilimg}
      ></img>
      <img
        style={{ position: "absolute", left: "12px", top: "0px" }}
        src={dotimg}
      ></img>
      <img
        style={{ position: "absolute", left: "21.7px", top: "0px" }}
        src={dotimg}
      ></img>
      <img
        style={{ position: "absolute", left: "8px", top: "4px" }}
        src={lipimg}
      ></img>
      <img
        style={{ position: "absolute", left: "19px", top: "4px" }}
        src={noseimg}
      ></img>
    </div>
  );
}
export default Logo;
