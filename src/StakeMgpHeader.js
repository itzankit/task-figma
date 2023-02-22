import React from "react";
import downArrow from "./assests/images/Vector (27).png";
import Logo from "./Logo";
import infoImg from "./assests/images/info.png";

function StakeMgpHeader() {
  return (
    <div className="magpie-pool-stake-mgp-header-layout">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Logo />
        </div>
        <div className="convert-wom-text" style={{ marginLeft: "50px" }}>
          Stake MGP
        </div>
      </div>
      <div>
        <div className="magpie-header-amount">
          0.0%<img style={{ marginLeft: "10px" }} src={infoImg}></img>
        </div>
        <div className="magpie-header-text">APR</div>
      </div>
      <div>
        <div className="magpie-header-amount">$0.00</div>
        <div className="magpie-header-text">TVL</div>
      </div>
      <div>
        <div className="magpie-header-amount">0.00 mWOM</div>
        <div className="magpie-header-text">Your Staked</div>
      </div>
      <div>
        <div className="magpie-header-amount">$0.00</div>
        <div className="magpie-header-text">Rewards</div>
      </div>
      <div>
        <img src={downArrow}></img>
      </div>
    </div>
  );
}
export default StakeMgpHeader;
