import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wallet from "./assests/images/wallet.png";
import { diconnectWallet } from "./Redux/Action";

function MyWalletMobile() {
  const myState = useSelector((state) => state.magpieState.walletName);
  const dispatch = useDispatch();
  function handleDisconnectClick() {
    dispatch(diconnectWallet());
  }
  return (
    myState && (
      <>
        <div className="mobile-myWallet">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex" }}>
              <img width="20px" height="17.5" src={wallet}></img>
              <div className="myWallet-text">MyWallet</div>
            </div>
            <div className="myWallet-name-text">{myState}</div>
          </div>
          <div className="myWallet-amount">$0.0</div>
        </div>
        <div onClick={handleDisconnectClick} className="myWallet-disconnect">
          Disconnect
        </div>
      </>
    )
  );
}
export default MyWalletMobile;
