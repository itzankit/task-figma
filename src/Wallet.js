import React from "react";
import { useDispatch } from "react-redux";
import { connectedWalletName, selectWalletCLose } from "./Redux/Action";

function Wallet(props) {
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(connectedWalletName(e.target.id));
    dispatch(selectWalletCLose());
  }
  return (
    <div id={props.walletId} className="wallet-box" onClick={handleClick}>
      {console.log(props)}
      <img
        id={props.walletId}
        className="wallet-logo"
        src={props.walletLogo}
      ></img>
      <div id={props.walletId} className="wallet-name-text">
        {props.walletName}
      </div>
    </div>
  );
}
export default Wallet;
