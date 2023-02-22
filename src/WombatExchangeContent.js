import React from "react";
import pancakeLogo from "./assests/images/7186 1.png";
import lorumIpsumLogo from "./assests/images/Ellipse 120.png";

function WombatExchangeContent() {
  return (
    <div className="wombat-exchange-dropdown-content">
      <div
        className="wombat-exchange-content-pancake-box"
        style={{ background: "#137ce7" }}
      >
        <img src={pancakeLogo}></img>
        <span>Pancake Swap</span>
      </div>
      <div
        className="wombat-exchange-content-lorum-ipsum-box"
        style={{ background: "#136CC7" }}
      >
        <img src={lorumIpsumLogo}></img>
        Lorum Ipsum
      </div>
    </div>
  );
}
export default WombatExchangeContent;
