import React, { useState } from "react";
import ConvertTabContent from "./ConvertTabContent";
import { useSelector } from "react-redux";

function MagpieTabs() {
  const [active, setActive] = useState("convertTab");
  const myState = useSelector((state) => state.magpieState.showContent);
  function handleClick(e) {
    setActive(e.target.id);
  }
  return myState ? (
    <>
      <div className="magpie-tab">
        <div
          id="convertTab"
          className={`${
            active === "convertTab"
              ? "magpie-active-tab"
              : "magpie-inactive-tab"
          }`}
          onClick={handleClick}
        >
          Convert
        </div>
        <div
          id="stakeTab"
          className={`${
            active === "stakeTab" ? "magpie-active-tab" : "magpie-inactive-tab"
          }`}
          onClick={handleClick}
        >
          Stake
        </div>
        <div
          id="unstakeTab"
          className={`${
            active === "unstakeTab"
              ? "magpie-active-tab"
              : "magpie-inactive-tab"
          }`}
          onClick={handleClick}
        >
          Unstake
        </div>
      </div>
      {active === "convertTab" && <ConvertTabContent />}
      {active === "stakeTab" && (
        <div className="stake-tab-layout ">Stake Tab Content</div>
      )}
      {active === "unstakeTab" && (
        <div className="unstake-tab-layout">Unstake Tab Content</div>
      )}
    </>
  ) : null;
}
export default MagpieTabs;
