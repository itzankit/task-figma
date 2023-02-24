import React from "react";
import { useDispatch } from "react-redux";
import shieldImg from "./assests/images/Vector (33).png";
import shieldTickImg from "./assests/images/Vector (34).png";
import crossImg from "./assests/images/cross-icon.png";
import { auditClose } from "./Redux/Action";
import useWindowDimensions from "./ScreenSize";

function AuditContent() {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(auditClose());
  }
  const { windowWidth, windowHeight } = useWindowDimensions();
  return (
    <div className="overlay">
      <div className="audit-content">
        <div className="audit-content-tag-close">
          <div className="audit-content-audit-text">Audits</div>
          <img
            style={{ cursor: "pointer" }}
            onClick={handleClose}
            height="20px"
            width="20px"
            src={crossImg}
          ></img>
        </div>
        <div className="audit-content-sheild-logo">
          <div>
            <img src={shieldImg}></img>
            <img
              className="audit-content-tick-image-position"
              src={shieldTickImg}
            ></img>
          </div>
          <div className="audit-content-safe-secure-text">
            Safe and Secure! Audited by Top Firms <br></br>
            <a href="#">Lorem A</a>
            <a style={{ marginLeft: "5px" }} href="#">
              Lorem B
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuditContent;
