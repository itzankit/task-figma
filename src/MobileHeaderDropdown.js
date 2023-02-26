import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeHeaderDropdown,
  showLanguageBox,
  showWalletPopover,
} from "./Redux/Action";
import darkModeImg from "./assests/images/Ellipse 119.png";
import lightModeImg from "./assests/images/Vector (37).png";
import downArrow from "./assests/images/Vector (13).png";
import upArrow from "./assests/images/Vector (36).png";
import MyWalletMobile from "./MyWalletMobile";

function MobileHeaderDropdown() {
  const [active, setActive] = useState(false);
  const myState = useSelector((state) => state.magpieState.walletName);
  const dispatch = useDispatch();
  const [showWallet, setShowWallet] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  function handleWalletClick() {
    if (myState) {
      setShowWallet(!showWallet);
    } else {
      dispatch(showWalletPopover());
    }
  }
  function handleLanguageClick() {
    dispatch(showLanguageBox());
    dispatch(closeHeaderDropdown());
  }
  return (
    <div className="header-dropdown-box">
      <div className="header-dropdown-text">Stake</div>
      <div className="header-dropdown-text">Claim</div>
      <div className="header-dropdown-text">Lock</div>
      <div
        onClick={handleClick}
        className={`${active ? "governance-active" : "header-dropdown-text"}`}
      >
        Governance
        <img
          style={{ marginLeft: "5px" }}
          src={active ? upArrow : downArrow}
        ></img>
      </div>
      {active && (
        <>
          <div className="header-dropdown-text" style={{ color: "#137ce7" }}>
            Forum
          </div>
          <div className="header-dropdown-text" style={{ color: "#137ce7" }}>
            Vote
          </div>
        </>
      )}
      <div className="header-dropdown-text">Bribe</div>
      <div className="header-dropdown-text">Docs</div>
      <div className="header-dropdown-text">Referral</div>
      <div className="connect-wallet" onClick={handleWalletClick}>
        <span className="connect-wallet-text">
          {myState ? myState : "CONNECT WALLET"}
        </span>
      </div>
      {showWallet && <MyWalletMobile />}
      <div className="language-and-mode-box">
        <div onClick={handleLanguageClick}>Language</div>
        <div style={{ color: "#137ce7" }}>English</div>
      </div>
      <div className="language-and-mode-box">
        <div>Dark Mode</div>
        <div className="dark-light-toggle-box">
          <img src={darkModeImg}></img>
          <img src={lightModeImg}></img>
        </div>
      </div>
    </div>
  );
}
export default MobileHeaderDropdown;
