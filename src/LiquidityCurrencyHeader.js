import React from "react";
import downArrow from "./assests/images/Vector (27).png";
import infoImg from "./assests/images/info.png";

function CurrencyHeader(props) {
  return (
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
  );
}
export default CurrencyHeader;
