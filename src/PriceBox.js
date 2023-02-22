import React from "react";

function PriceBox(props) {
  return (
    <div className="price-box">
      <div className="amount-and-tag">
        <div className="amount-text">{props.amount}</div>
        <div className="tag-text">{props.tag}</div>
      </div>
      <div className="price-display-image">
        {props.tag === "Your Deposit" && (
          <>
            <img
              style={{ position: "absolute", left: "50px" }}
              src={props.logo.depositOwlImg}
            ></img>
            <img
              style={{ position: "absolute", left: "0px" }}
              src={props.logo.piggyBankImg}
            ></img>
            <img
              style={{ position: "absolute", left: "20px", top: "45px" }}
              src={props.logo.busdImg}
            ></img>
          </>
        )}
        {props.tag === "Your Rewards" && <img src={props.logo}></img>}
        {props.tag === "Magpie Total TVL" && <img src={props.logo}></img>}
      </div>
    </div>
  );
}
export default PriceBox;
