import React from "react";
import MagpieHeader from "./MagpieHeader";
import MagpieTabs from "./MagpieTabs";
import { useSelector } from "react-redux";
import StakeMgpHeader from "./StakeMgpHeader";

function MagpiePool() {
  const myState = useSelector((state) => state.magpieState.showContent);
  return (
    <div className="magpie-pool-layout">
      <div style={{ display: "flex" }}>
        <div className="magpie-pool-text">MAGPIE POOL</div>
        <p
          style={{
            borderBottom: "lightgray 2px solid",
            width: "850px",
            marginBottom: "28px",
            marginLeft: "65px",
          }}
        ></p>
      </div>
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
      <div
        className="magpie-pool-box-layout-without-content"
        style={{ marginTop: "50px" }}
      >
        <StakeMgpHeader />
      </div>
    </div>
  );
}
export default MagpiePool;
