import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgMoon from "./assests/images/Vector (12).png";
import downArrow from "./assests/images/Vector (13).png";
import shieldimg from "./assests/images/Vector (14).png";
import tickimg from "./assests/images/Vector (15).png";
import walletarrow from "./assests/images/Vector (26).png";
import Logo from "./Logo";
import {
  auditAlertBox,
  showHeaderDropdown,
  showWalletPopover,
} from "./Redux/Action";
import GovernanceContent from "./GovernanceContent";
import MyWallet from "./MyWallet";
import useWindowDimensions from "./ScreenSize";
import catImg from "./assests/images/catImg.png";
import wallet from "./assests/images/wallet.png";
import MobileHeaderDropdown from "./MobileHeaderDropdown";
import ChooseLanguage from "./ChooseLanguage";

function Header() {
  const [showGovernanceContent, setShowGovernanceContent] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.magpieState.walletName);

  const showHeaderMenu = useSelector(
    (state) => state.magpieState.showHeaderDropdown
  );
  const showLanguageMenu = useSelector(
    (state) => state.magpieState.showLanguageBox
  );
  const { windowWidth, windowHeight } = useWindowDimensions();
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
  function handleDropdownShow() {
    dispatch(showHeaderDropdown());
  }

  return windowWidth < 768 ? (
    <>
      <div className="header" onClick={handleDropdownShow}>
        <div style={{ width: "45%" }}>
          <div className="title">Magpie</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "65%",
          }}
        >
          <div style={{ marginRight: "40px" }}>
            <Logo />
          </div>

          <div className="header-mobile-text">$0.0</div>

          <img src={catImg}></img>

          <div className="header-mobile-text">$0.0</div>
          <div>
            <img width="24px" height="21px" src={wallet}></img>
          </div>
        </div>
      </div>
      {showHeaderMenu && <MobileHeaderDropdown />}
      {showLanguageMenu && <ChooseLanguage />}
    </>
  ) : (
    <div className="header">
      <Logo />
      <div className="title">Magpie</div>
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
