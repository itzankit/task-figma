import React, { useState } from "react";
import settingIcon from "./assests/images/Vector (32).png";
import CurrencyHeader from "./LiquidityCurrencyHeader";
import busdImg from "./assests/images/Binance-USDollar.png";
import fraxImg from "./assests/images/frax-frax-logo 1.png";
import tusdImg from "./assests/images/tusd-logo.png";

function LiquidityPool() {
  const [active, setActive] = useState("mainPool");
  function handleClick(e) {
    setActive(e.target.id);
  }
  return (
    <div className="magpie-pool-layout">
      <div style={{ display: "flex" }}>
        <div className="magpie-pool-text">LIQUIDITY POOL</div>
        <p
          style={{
            borderBottom: "lightgray 2px solid",
            width: "825px",
            marginBottom: "28px",
            marginLeft: "65px",
          }}
        ></p>
      </div>

      <div className="magpie-pool-box-layout-without-content">
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <div className="liquidity-pool-tabs">
            <div
              id="mainPool"
              className={
                active === "mainPool"
                  ? "liquidity-pool-active-tab-text"
                  : "liquidity-pool-inactive-tab-text"
              }
              onClick={handleClick}
            >
              Main Pool
            </div>
            <div
              id="sidePool"
              className={
                active === "sidePool"
                  ? "liquidity-pool-active-tab-text"
                  : "liquidity-pool-inactive-tab-text"
              }
              onClick={handleClick}
            >
              Side Pool
            </div>
            <div
              id="BNBPools"
              className={
                active === "BNBPools"
                  ? "liquidity-pool-active-tab-text"
                  : "liquidity-pool-inactive-tab-text"
              }
              onClick={handleClick}
            >
              BNB Pools
            </div>
            <div
              id="magpieLp"
              className={
                active === "magpieLp"
                  ? "liquidity-pool-active-tab-text"
                  : "liquidity-pool-inactive-tab-text"
              }
              onClick={handleClick}
            >
              Magpie LP
            </div>
            <div
              id="iusd"
              className={
                active === "iusd"
                  ? "liquidity-pool-active-tab-text"
                  : "liquidity-pool-inactive-tab-text"
              }
              onClick={handleClick}
            >
              iUSD
            </div>
          </div>
          <div className="liquidity-pool-setting-icon">
            <img height="22.26px" width="23.25" src={settingIcon}></img>
          </div>
        </div>
        <CurrencyHeader
          currencyClassName="magpie-pool-header-layout"
          currencyLogo={busdImg}
          currencyTitle="BUSD"
          currencySubTitle="on Trader Joe"
        />
      </div>
      <div
        className="magpie-pool-box-layout-without-content"
        style={{ marginTop: "50px" }}
      >
        <CurrencyHeader
          currencyClassName="magpie-pool-frax-header-layout"
          currencyLogo={fraxImg}
          currencyTitle="FRAX"
          currencySubTitle="on Wombat"
        />
      </div>
      <div
        className="magpie-pool-box-layout-without-content"
        style={{ marginTop: "50px" }}
      >
        <CurrencyHeader
          currencyClassName="magpie-pool-stake-mgp-header-layout"
          currencyLogo={tusdImg}
          currencyTitle="TUSD"
          currencySubTitle="on Trader Joe"
        />
      </div>
    </div>
  );
}
export default LiquidityPool;
