import React from "react";
import catImg from "./assests/images/catImg.png";
import downArrow from "./assests/images/Vector (27).png";
import upArrow from "./assests/images/upArrow.png";
import { useDispatch, useSelector } from "react-redux";
import { showMagpiePoolContent } from "./Redux/Action";
import infoImg from "./assests/images/info.png";

function MagpieHeader() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.magpieState.showContent);
  function handleClick() {
    dispatch(showMagpiePoolContent());
  }
  return (
    <div onClick={handleClick} className="magpie-pool-header-layout">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img src={catImg}></img>
        </div>
        <div className="convert-wom-text">Convert WOM</div>
      </div>
      <div>
        <div className="magpie-header-amount">
          0.0% <img style={{ marginLeft: "10px" }} src={infoImg}></img>
        </div>
        <div className="magpie-header-text">APR</div>
      </div>
      <div>
        <div className="magpie-header-amount">$0.00</div>
        <div className="magpie-header-text">TVL</div>
      </div>
      <div>
        <div className="magpie-header-amount">0.00 mWOM</div>
        <div className="magpie-header-text">Your Staked</div>
      </div>
      <div>
        <div className="magpie-header-amount">$0.00</div>
        <div className="magpie-header-text">Rewards</div>
      </div>
      <div>
        <img src={myState ? upArrow : downArrow}></img>
      </div>
    </div>
  );
}
export default MagpieHeader;
