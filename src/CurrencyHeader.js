import React from "react";
import downArrow from "./assests/images/Vector (27).png";
import infoImg from "./assests/images/info.png";
import useWindowDimensions from "./ScreenSize";

function CurrencyHeader(props) {
  const { windowWidth, windowHeight } = useWindowDimensions();
  return windowWidth > 768 ? (
    <div className={props.currencyClassName}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img src={props.currencyLogo}></img>
        </div>
        <div className="convert-wom-text">
          {props.currencyTitle}
          <div className="header-name-subtitle">{props.currencySubTitle}</div>
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
        <div className="magpie-header-text">Your Deposits</div>
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
    <div className={props.currencyClassName}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={props.currencyLogo}></img>
          <div
            className="convert-wom-text"
            style={{
              color: "#137CE7",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            {props.currencyTitle}
            <div className="header-name-subtitle">{props.currencySubTitle}</div>
          </div>
        </div>
        <div>
          <img src={downArrow}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
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
export default CurrencyHeader;
