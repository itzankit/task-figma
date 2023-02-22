import React from "react";
import { useSelector } from "react-redux";
import AllAmountBox from "./AllAmountBox";
import AuditContent from "./AuditContent";
import Header from "./Header";
import LiquidityPool from "./LiquidityPool";
import MagpiePool from "./MagpiePool";
import MyWallet from "./MyWallet";
import SelectWallet from "./SelectWallet";
import StakeFunds from "./StakeFunds";

function Layout() {
  const myState = useSelector((state) => state.magpieState.showWalletPopover);
  const auditState = useSelector((state) => state.magpieState.showAuditBox);
  return (
    <div>
      {console.log(myState)}
      <div className="layout">
        <Header />
        <div className="stake-allPrice">
          <StakeFunds />
          <AllAmountBox />
        </div>
        <MagpiePool />
        <LiquidityPool />
      </div>
      {myState && <SelectWallet />}
      {auditState && <AuditContent />}
    </div>
  );
}
export default Layout;
