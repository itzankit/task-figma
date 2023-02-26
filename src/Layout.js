import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AllAmountBox from "./AllAmountBox";
import AuditContent from "./AuditContent";
import Header from "./Header";
import LiquidityPool from "./LiquidityPool";
import MagpiePool from "./MagpiePool";
import SelectWallet from "./SelectWallet";
import StakeFunds from "./StakeFunds";
import useWindowDimensions from "./ScreenSize";

function Layout() {
  const myState = useSelector((state) => state.magpieState.showWalletPopover);
  const auditState = useSelector((state) => state.magpieState.showAuditBox);
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const prevdata = useRef();

  useEffect(() => {
    prevdata.current = currentWidth;
    console.log(prevdata.current);
    if (prevdata.current != windowWidth) {
      setCurrentWidth(windowWidth);
      window.location.reload();
    }
  });
  return (
    <div>
      <div className="layout">
        <Header />
        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
          <StakeFunds />
          <AllAmountBox />

          <MagpiePool />
          <LiquidityPool />
        </div>
      </div>
      {myState && <SelectWallet />}
      {auditState && <AuditContent />}
    </div>
  );
}
export default Layout;
