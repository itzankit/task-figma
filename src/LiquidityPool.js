import React, { useState } from "react";
import settingIcon from "./assests/images/Vector (32).png";
import CurrencyHeader from "./CurrencyHeader";
import busdImg from "./assests/images/Binance-USDollar.png";
import fraxImg from "./assests/images/frax-frax-logo 1.png";
import tusdImg from "./assests/images/tusd-logo.png";
import useWindowDimensions from "./ScreenSize";
import LiquidityPoolTabs from "./LiquidityPoolTabs";
import downArrow from "./assests/images/Vector (35).png";

function LiquidityPool() {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [showContent, setShowContent] = useState(false);
  const [dropdownName, setDropdownName] = useState("Main Pool");
  function handleClick() {
    setShowContent(!showContent);
  }
  function handleDropdown(e) {
    setDropdownName(e.target.id);
  }
  return (
    <div className="magpie-pool-layout">
      <div className="pool-text-border">
        <div className="magpie-pool-text">LIQUIDITY POOLS</div>
        {windowWidth > 768 ? (
          <p
            style={{
              borderBottom: "lightgray 2px solid",
              width: "825px",
              marginBottom: "8px",
              marginLeft: "65px",
            }}
          ></p>
        ) : (
          <p
            style={{
              borderBottom: "lightgray 2px solid",
              width: "190px",
              marginBottom: "28px",
              marginLeft: "10px",
            }}
          ></p>
        )}
      </div>
      {windowWidth < 768 && (
        <>
          <div
            onClick={handleClick}
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <div className="liquidity-pool-dropdown">
              <div className="liquidity-pool-dropdown-text">{dropdownName}</div>
              <img src={downArrow}></img>
            </div>

            <div className="liquidity-pool-setting-icon">
              <img height="22.26px" width="23.25" src={settingIcon}></img>
            </div>
          </div>
          {showContent && (
            <div className="liquidity-pool-dropdown-content">
              <div
                onClick={handleDropdown}
                id="Main Pool"
                className={`${
                  dropdownName === "Main Pool"
                    ? "liquidity-pool-dropdown-content-text-active"
                    : "liquidity-pool-dropdown-content-text"
                }`}
              >
                Main Pool
              </div>
              <div
                onClick={handleDropdown}
                id="Side Pool"
                className={`${
                  dropdownName === "Side Pool"
                    ? "liquidity-pool-dropdown-content-text-active"
                    : "liquidity-pool-dropdown-content-text"
                }`}
              >
                Side Pool
              </div>
              <div
                onClick={handleDropdown}
                id="BNB Pools"
                className={`${
                  dropdownName === "BNB Pools"
                    ? "liquidity-pool-dropdown-content-text-active"
                    : "liquidity-pool-dropdown-content-text"
                }`}
              >
                BNB Pools
              </div>
              <div
                onClick={handleDropdown}
                id="Magpie LP"
                className={`${
                  dropdownName === "Magpie LP"
                    ? "liquidity-pool-dropdown-content-text-active"
                    : "liquidity-pool-dropdown-content-text"
                }`}
              >
                Magpie LP
              </div>
              <div
                onClick={handleDropdown}
                id="IUSD"
                className={`${
                  dropdownName === "IUSD"
                    ? "liquidity-pool-dropdown-content-text-active"
                    : "liquidity-pool-dropdown-content-text"
                }`}
              >
                IUSD
              </div>
            </div>
          )}
        </>
      )}

      <div className="magpie-pool-box-layout-without-content">
        <div style={{ display: "flex", marginBottom: "30px" }}>
          {windowWidth > 768 && (
            <>
              <LiquidityPoolTabs />
              <div className="liquidity-pool-setting-icon">
                <img height="22.26px" width="23.25" src={settingIcon}></img>
              </div>
            </>
          )}
        </div>
        <CurrencyHeader
          currencyClassName="magpie-pool-header-layout"
          currencyLogo={busdImg}
          currencyTitle="BUSD"
          currencySubTitle="on Trader Joe"
        />
      </div>
      <div className="magpie-pool-box-layout-without-content">
        <CurrencyHeader
          currencyClassName="magpie-pool-frax-header-layout"
          currencyLogo={fraxImg}
          currencyTitle="FRAX"
          currencySubTitle="on Wombat"
        />
      </div>
      <div className="magpie-pool-box-layout-without-content">
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
