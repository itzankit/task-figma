import React, { useState } from "react";
import settingIcon from "./assests/images/Vector (32).png";
import CurrencyHeader from "./LiquidityCurrencyHeader";
import busdImg from "./assests/images/Binance-USDollar.png";
import fraxImg from "./assests/images/frax-frax-logo 1.png";
import tusdImg from "./assests/images/tusd-logo.png";
import useWindowDimensions from "./ScreenSize";
import LiquidityPoolTabs from "./LiquidityPoolTabs";
import hamburgerIcon from "./assests/images/Hamburger_icon.png";

function LiquidityPool() {
  const { windowWidth, windowHeight } = useWindowDimensions();
  function handleHamburger(e) {
    var x = document.getElementById("poolTabs");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="magpie-pool-layout">
      <div style={{ display: "flex" }}>
        <div className="magpie-pool-text">LIQUIDITY POOL</div>
        {windowWidth > 850 && (
          <p
            style={{
              borderBottom: "lightgray 2px solid",
              width: "825px",
              marginBottom: "28px",
              marginLeft: "65px",
            }}
          ></p>
        )}
      </div>

      <div className="magpie-pool-box-layout-without-content">
        <div style={{ display: "flex", marginBottom: "30px" }}>
          {windowWidth > 768 ? (
            <LiquidityPoolTabs />
          ) : (
            <div className="topnav">
              <a href="#home" className="active"></a>
              <div id="poolTabs">
                <a>Main Pool</a>
                <a>Side Pool</a>
                <a>BNB Pool</a>
                <a>Magpie LP</a>
                <a>IUSD</a>
              </div>
              <a href="#" className="icon" onClick={handleHamburger}>
                <img height="30px" width="35px" src={hamburgerIcon}></img>
              </a>
            </div>
          )}
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
