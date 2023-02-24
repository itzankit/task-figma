import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgMoon from "./assests/images/Vector (12).png";
import downArrow from "./assests/images/Vector (13).png";
import shieldimg from "./assests/images/Vector (14).png";
import tickimg from "./assests/images/Vector (15).png";
import walletarrow from "./assests/images/Vector (26).png";
import Logo from "./Logo";
import { auditAlertBox, showWalletPopover } from "./Redux/Action";
import GovernanceContent from "./GovernanceContent";
import MyWallet from "./MyWallet";
import useWindowDimensions from "./ScreenSize";
import hamburgerIcon from "./assests/images/Hamburger_icon.png";

function Header() {
  const [showGovernanceContent, setShowGovernanceContent] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.magpieState.walletName);
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
  function handleHamburger(e) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div className="header">
      {windowWidth < 850 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Logo />
            </div>

            <div className="title">Magpie</div>
          </div>

          <div className="topnav">
            <a href="#home" className="active"></a>
            <div id="myLinks">
              <a>Stake</a>
              <a>Claim</a>
              <a>Lock</a>
              <a>Docs</a>
              <a onClick={handleGovernanceClick} className="text-all">
                Governance
                <img style={{ paddingLeft: "8px" }} src={downArrow}></img>
                {showGovernanceContent && <GovernanceContent />}
              </a>
              <a>Bribe</a>
              <a>Referral</a>
              <a onClick={handleAuditClick} className="text-audit">
                <img style={{ position: "absolute" }} src={shieldimg}></img>
                <span style={{ paddingLeft: "20px" }}>Audited</span>
              </a>

              <a onClick={handleWalletClick}>
                {myState ? myState : "CONNECT WALLET"}
                {showWallet && <MyWallet />}
              </a>
            </div>
            <a href="#" className="icon" onClick={handleHamburger}>
              <img height="30px" width="35px" src={hamburgerIcon}></img>
            </a>
          </div>
        </div>
      )}

      {windowWidth > 850 && (
        <>
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
            <img
              style={{ position: "absolute", left: "10px" }}
              src={tickimg}
            ></img>
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
        </>
      )}
    </div>
  );
}
export default Header;
