import React from "react";
import twitterLogo from "./assests/images/Vector (28).png";
import discordLogo from "./assests/images/Vector (29).png";
import threeDotLogo from "./assests/images/Vector (30).png";

function SocialMedia() {
  return (
    <div className="social-media">
      <div className="social-media-icon">
        <img
          style={{ position: "absolute", top: "10px", left: "10px" }}
          src={twitterLogo}
        ></img>
      </div>
      <div
        className="social-media-icon"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <img
          style={{ position: "absolute", top: "72px", left: "8px" }}
          src={discordLogo}
        ></img>
      </div>
      <div className="social-media-icon">
        <img
          style={{ position: "absolute", top: "135px", left: "8px" }}
          src={threeDotLogo}
        ></img>
      </div>
    </div>
  );
}
export default SocialMedia;
