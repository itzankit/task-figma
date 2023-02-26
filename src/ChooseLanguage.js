import React from "react";
import tickImg from "./assests/images/Vector (38).png";
import crossImg from "./assests/images/cross-icon.png";
import { useDispatch } from "react-redux";
import { closeLanguageDropdown } from "./Redux/Action";

function ChooseLanguage() {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(closeLanguageDropdown());
  }
  return (
    <div className="choose-language-box">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          paddingTop: "40px",
        }}
      >
        <div className="choose-language-text">Choose a language</div>
        <img
          onClick={handleClose}
          width="12px"
          height="12px"
          src={crossImg}
        ></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <div className="choose-language-text" style={{ color: "#137ce7" }}>
          English
        </div>
        <img src={tickImg}></img>
      </div>
      <div className="choose-language-text" style={{ padding: "10px" }}>
        简体中文
      </div>
      <div className="choose-language-text" style={{ padding: "10px" }}>
        繁体中文
      </div>
      <div className="choose-language-text" style={{ padding: "10px" }}>
        {" "}
        Español
      </div>
      <div className="choose-language-text" style={{ padding: "10px" }}>
        日本語
      </div>
    </div>
  );
}
export default ChooseLanguage;
