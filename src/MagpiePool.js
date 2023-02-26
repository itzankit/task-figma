import React from "react";
import MagpieHeader from "./MagpieHeader";
import MagpieTabs from "./MagpieTabs";
import { useSelector } from "react-redux";
import StakeMgpHeader from "./StakeMgpHeader";
import useWindowDimensions from "./ScreenSize";

function MagpiePool() {
  const myState = useSelector((state) => state.magpieState.showContent);
  const { windowWidth, windowHeight } = useWindowDimensions();
  return (
    <div className="magpie-pool-layout">
      {windowWidth > 768 && (
        <div className="pool-text-border">
          <div className="magpie-pool-text">MAGPIE POOL</div>
          <p
            style={{
              borderBottom: "lightgray 2px solid",
              width: "850px",
              marginBottom: "8px",
              marginLeft: "65px",
            }}
          ></p>
        </div>
      )}
      <div
        className={`${
          myState
            ? "magpie-pool-box-layout-with-content"
            : "magpie-pool-box-layout-without-content"
        }`}
      >
        <MagpieHeader />
        <MagpieTabs />
      </div>
      <div className="magpie-pool-box-layout-without-content">
        <StakeMgpHeader />
      </div>
    </div>
  );
}
export default MagpiePool;
