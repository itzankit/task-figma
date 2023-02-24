import React, { useState } from "react";

function LiquidityPoolTabs() {
  const [active, setActive] = useState("mainPool");
  function handleClick(e) {
    setActive(e.target.id);
  }
  return (
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
  );
}
export default LiquidityPoolTabs;
