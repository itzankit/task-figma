import React from "react";
import walletLogo from "./assests/images/wallet.png";
import { useDispatch, useSelector } from "react-redux";
import { diconnectWallet } from "./Redux/Action";

function MyWallet() {
  const walletName = useSelector((state) => state.magpieState.walletName);
  const dispatch = useDispatch();
  function handleDisconnectClick() {
    dispatch(diconnectWallet());
  }
  return (
    <div className="myWallet-box">
      <div>
        <img src={walletLogo}></img>
        <span className="myWallet-text">My Wallet</span>
      </div>
      <div className="myWallet-name-text">{walletName}</div>
      <div className="myWallet-amount">$0.0</div>
      <div onClick={handleDisconnectClick} className="myWallet-disconnect">
        Disconnect
      </div>
    </div>
  );
}
export default MyWallet;
