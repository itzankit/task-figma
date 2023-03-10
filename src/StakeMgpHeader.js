import React from "react";
import downArrow from "./assests/images/Vector (27).png";
import Logo from "./Logo";
import infoImg from "./assests/images/info.png";
import useWindowDimensions from "./ScreenSize";

function StakeMgpHeader() {
  const { windowWidth, windowHeight } = useWindowDimensions();
  return windowWidth > 768 ? (
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
  ) : (
    <div className="magpie-pool-stake-mgp-header-layout">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "10px", marginRight: "42px" }}>
            <Logo />
          </div>

          <div className="convert-wom-text">Staked MGP</div>
        </div>
        <div>
          <img src={downArrow}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div>
          <div className="magpie-header-amount">
            0.0% <img style={{ marginLeft: "10px" }} src={infoImg}></img>
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
      </div>
    </div>
  );
}
export default StakeMgpHeader;
