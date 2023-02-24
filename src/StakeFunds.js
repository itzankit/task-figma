import React, { useState } from "react";
import wombatImg from "./assests/images/19623 1.png";
import wombatArrow from "./assests/images/Vector (27).png";
import useWindowDimensions from "./ScreenSize";
import SocialMedia from "./SocialMedia";
import WombatExchangeContent from "./WombatExchangeContent";

function StakeFunds() {
  const [showContent, setShowContent] = useState(false);
  const { windowWidth, windowHeight } = useWindowDimensions();
  function handleClick() {
    setShowContent(!showContent);
  }
  return (
    <>
      {windowWidth > 768 ? (
        <div className="stake">
          <div className="stake-sub-header">
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
            <div className="purchase-insurance">
              <span className="purchase-insurance-text">
                Purchase Insurance
              </span>
            </div>
          </div>
          <SocialMedia />
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div style={{ width: "85%", marginRight: "10px" }}>
            <div className="text-stake-funds">STAKE FUNDS</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
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
            <div className="purchase-insurance">
              <span className="purchase-insurance-text">
                Purchase Insurance
              </span>
            </div>
          </div>
          <div style={{ width: "15%" }}>
            <SocialMedia />
          </div>
        </div>
      )}
    </>
  );
}
export default StakeFunds;
