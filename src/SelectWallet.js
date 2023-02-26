import React, { useState } from "react";
import metaMaskLogo from "./assests/images/MetaMask_Fox.png";
import binanceLogo from "./assests/images/Binance-Coin.png";
import fortmaticeLogo from "./assests/images/Fortmatice.png";
import polygonImg from "./assests/images/Polygon.png";
import Wallet from "./Wallet";
import useWindowDimensions from "./ScreenSize";
import crossImg from "./assests/images/cross-icon.png";
import { useDispatch } from "react-redux";
import { selectWalletCLose } from "./Redux/Action";

function SelectWallet() {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(selectWalletCLose());
  }
  return (
    <div className="overlay">
      <div className="all-wallet-box">
        {windowWidth < 768 && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="connect-your-wallet-text">Connect Your Wallet</div>
            <img
              onClick={handleClose}
              width="20px"
              height="20px"
              src={crossImg}
            ></img>
          </div>
        )}
        <div className="all-wallet-row">
          <Wallet
            walletId="Metamask"
            walletLogo={metaMaskLogo}
            walletName="Metamask"
          />
          <Wallet
            walletId="Binance"
            walletLogo={binanceLogo}
            walletName="Binance"
          />
        </div>
        <div className="all-wallet-row">
          <Wallet
            walletId="Wallet Connect"
            walletLogo={polygonImg}
            walletName="Wallet Connect"
          />
          <Wallet
            walletId="Fortmatice"
            walletLogo={fortmaticeLogo}
            walletName="Fortmatice"
          />
        </div>
      </div>
    </div>
  );
}
export default SelectWallet;
