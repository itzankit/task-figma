import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgM from "./assests/images/Vector (6).png";
import imgA from "./assests/images/Vector (7).png";
import imgG from "./assests/images/Vector (8).png";
import imgP from "./assests/images/Vector (9).png";
import imgI from "./assests/images/Vector (10).png";
import imgE from "./assests/images/Vector (11).png";
import imgMoon from "./assests/images/Vector (12).png";
import downArrow from "./assests/images/Vector (13).png";
import shieldimg from "./assests/images/Vector (14).png";
import tickimg from "./assests/images/Vector (15).png";
import walletarrow from "./assests/images/Vector (26).png";
import Logo from "./Logo";
import { auditAlertBox, showWalletPopover } from "./Redux/Action";
import GovernanceContent from "./GovernanceContent";
import MyWallet from "./MyWallet";

function Header() {
  const [showGovernanceContent, setShowGovernanceContent] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.magpieState.walletName);
  function handleWalletClick() {
    if (myState) {
      setShowWallet(!showWallet);
    } else {
      dispatch(showWalletPopover());
    }
  }
  function handleGovernanceClick() {
    setShowGovernanceContent(!showGovernanceContent);
  }
  function handleAuditClick() {
    dispatch(auditAlertBox());
  }
  return (
    <div className="header">
      <Logo />
      <div className="title">
        <div style={{ position: "absolute", top: "-10px", left: "-10px" }}>
          <img height="16.99px" width="18.41" src={imgM}></img>
        </div>
        <div style={{ position: "absolute", top: "-10px", left: "10px" }}>
          <img height="13.15px" width="11.4px" src={imgA}></img>
        </div>
        <div style={{ position: "absolute", top: "-6px", left: "22px" }}>
          <img height="17.95px" width="12.44px" src={imgG}></img>
        </div>
        <div style={{ position: "absolute", top: "-6px", left: "35px" }}>
          <img height="17.95px" width="12.44px" src={imgP}></img>
        </div>
        <div style={{ position: "absolute", top: "-11px", left: "48px" }}>
          <img height="17.96px" width="3.82px" src={imgI}></img>
        </div>
        <div style={{ position: "absolute", top: "-10px", left: "52px" }}>
          <img height="13.15px" width="12.17px" src={imgE}></img>
        </div>
      </div>
      <div className="text-stake">Stake</div>
      <div className="text-all">Claim</div>
      <div className="text-all">Lock</div>
      <div className="text-all">Docs</div>
      <div onClick={handleGovernanceClick} className="text-all">
        Governance<img style={{ paddingLeft: "8px" }} src={downArrow}></img>
        {showGovernanceContent && <GovernanceContent />}
      </div>
      <div className="text-all">Bribe</div>
      <div className="text-all">Referral</div>
      <div onClick={handleAuditClick} className="text-audit">
        <img style={{ position: "absolute" }} src={shieldimg}></img>
        <img style={{ position: "absolute", left: "10px" }} src={tickimg}></img>
        <span style={{ paddingLeft: "20px" }}>Audited</span>
      </div>
      <div className="right-header">
        <div className="text-en">EN</div>
        <div className="connect-wallet" onClick={handleWalletClick}>
          <span className="connect-wallet-text">
            {myState ? myState : "CONNECT WALLET"}
            <img style={{ paddingLeft: "8px" }} src={walletarrow}></img>
          </span>
          {showWallet && <MyWallet />}
        </div>
        <img src={imgMoon}></img>
      </div>
    </div>
  );
}
export default Header;
