import React, { useState } from "react";
import inputLogo from "./assests/images/mouse.png";
import infoImg from "./assests/images/info.png";

function ConvertTabContent() {
  const [amount, setAmount] = useState("0.0");
  function handleClick() {
    setAmount("MAX");
  }
  return (
    <>
      <div className="convert-tab">
        <div className="convert-tab-left">
          <p className="convert-tab-para">
            Convert WOM to mWOM and stake mWOM to earn Magpie protocol revenue
            plus MGP tokens.<br></br>
            <br></br>Note: Converting WOM to mWOM is irreversible. You may stake
            and unstake mWOM tokens, but not convert them back to WOM. Secondary
            markets however exist to allow the exchange of mWOM for WOM at
            varying market rates (See PancakeSwap).
          </p>
        </div>
        <div className="convert-tab1">
          <div className="convert-tab-right">
            <div className="magpie-input-title">
              <div className="convert-tab-right-input-title">
                Amount of WOM to Convert
              </div>
              <div className="convert-tab-right-input-amount">{amount}</div>
            </div>
            <div>
              <div className="magpie-input-box">
                <input
                  className="magpie-input"
                  placeholder={amount}
                  type="number"
                ></input>
                <div style={{ display: "flex" }}>
                  <span onClick={handleClick} className="magpie-amount-max">
                    MAX
                  </span>
                  <img src={inputLogo}></img>
                </div>
              </div>
            </div>
            <div className="magpie-approve">Approve</div>
            <div style={{ display: "flex" }}>
              <input type="checkbox"></input>
              <div className="magpie-approve-infinity-text">
                Approve infinity
              </div>
              <div>
                <img style={{ marginTop: "12px" }} src={infoImg}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="magpie-total-wom">
        <div style={{ display: "flex" }}>
          <div className="magpie-content-base-text">Total WOM Concerted</div>
          <div className="magpie-content-base-price">$0.00 WOM</div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="magpie-content-base-text">Total veWOM Accrued</div>
          <div className="magpie-content-base-price">$0.00 veWOM</div>
        </div>
      </div>
    </>
  );
}
export default ConvertTabContent;
