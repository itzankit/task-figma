import React, { useState } from "react";
import { useDispatch } from "react-redux";
import metaMaskLogo from "./assests/images/MetaMask_Fox.png";
import binanceLogo from "./assests/images/Binance-Coin.png";
import fortmaticeLogo from "./assests/images/Fortmatice.png";
import polygonImg from "./assests/images/Polygon.png";
import { connectedWalletName, selectWalletCLose } from "./Redux/Action";
import Wallet from "./Wallet";

function SelectWallet() {
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(connectedWalletName(e.target.id));
    dispatch(selectWalletCLose());
  }

  return (
    <div className="overlay">
      <div className="all-wallet-box">
        <div style={{ display: "flex" }}>
          <Wallet
            walletId="Metamask"
            walletLogo={metaMaskLogo}
            walletName="Metamask"
            walletPosition="metamask-wallet-position"
          />
          <Wallet
            walletId="Binance"
            walletLogo={binanceLogo}
            walletName="Binance"
            walletPosition="binance-wallet-position"
          />
        </div>
        <div style={{ display: "flex" }}>
          <Wallet
            walletId="Wallet Connect"
            walletLogo={polygonImg}
            walletName="Wallet Connect"
            walletPosition="connect-wallet-position"
          />
          <Wallet
            walletId="Fortmatice"
            walletLogo={fortmaticeLogo}
            walletName="Fortmatice"
            walletPosition="fortMatice-wallet-position"
          />
        </div>
      </div>
    </div>
  );
}
export default SelectWallet;
