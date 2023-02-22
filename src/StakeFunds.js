import React, { useState } from "react";
import wombatImg from "./assests/images/19623 1.png";
import wombatArrow from "./assests/images/Vector (27).png";
import SocialMedia from "./SocialMedia";
import WombatExchangeContent from "./WombatExchangeContent";

function StakeFunds() {
  const [showContent, setShowContent] = useState(false);
  function handleClick() {
    setShowContent(!showContent);
  }
  return (
    <div className="stake">
      <div className="sub-header">
        <div className="stake-box">
          <div className="text-stake-funds">STAKE FUNDS</div>
          <div className="change-protocol-text">Change Protocol</div>
          <div onClick={handleClick} className="wombat-exchange-box">
            <div style={{ marginTop: "6px" }}>
              <img src={wombatImg}></img>
            </div>
            <div className="text-wombat">
              Wombat Exchange
              {showContent && <WombatExchangeContent />}
            </div>
            <div style={{ marginTop: "6px", marginLeft: "25px" }}>
              <img src={wombatArrow}></img>
            </div>
          </div>
        </div>
        <div className="purchase-history">
          <span className="purchase-history-text">Purchase Insurance</span>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}
export default StakeFunds;
