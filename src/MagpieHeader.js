import React from "react";
import catImg from "./assests/images/catImg.png";
import downArrow from "./assests/images/Vector (27).png";
import upArrow from "./assests/images/upArrow.png";
import { useDispatch, useSelector } from "react-redux";
import { showMagpiePoolContent } from "./Redux/Action";
import infoImg from "./assests/images/info.png";
import useWindowDimensions from "./ScreenSize";

function MagpieHeader() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.magpieState.showContent);
  const { windowWidth, windowHeight } = useWindowDimensions();

  function handleClick() {
    dispatch(showMagpiePoolContent());
  }
  return windowWidth > 768 ? (
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
  ) : (
    <div
      onClick={handleClick}
      className={`${
        myState
          ? "magpie-pool-header-layout-mobile-with-content"
          : "magpie-pool-header-layout"
      }`}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={catImg}></img>
          <div className="convert-wom-text">Convert WOM</div>
        </div>
        <div>
          <img src={myState ? upArrow : downArrow}></img>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div>
          <div
            className={`${
              myState
                ? "magpie-header-amount-mobile-with-content"
                : "magpie-header-amount"
            }`}
          >
            0.0% <img style={{ marginLeft: "10px" }} src={infoImg}></img>
          </div>
          <div
            className={`${
              myState
                ? "magpie-header-text-mobile-with-content"
                : "magpie-header-text"
            }`}
          >
            APR
          </div>
        </div>
        <div>
          <div
            className={`${
              myState
                ? "magpie-header-amount-mobile-with-content"
                : "magpie-header-amount"
            }`}
          >
            $0.00
          </div>
          <div
            className={`${
              myState
                ? "magpie-header-text-mobile-with-content"
                : "magpie-header-text"
            }`}
          >
            TVL
          </div>
        </div>
        <div>
          <div
            className={`${
              myState
                ? "magpie-header-amount-mobile-with-content"
                : "magpie-header-amount"
            }`}
          >
            0.00 mWOM
          </div>
          <div
            className={`${
              myState
                ? "magpie-header-text-mobile-with-content"
                : "magpie-header-text"
            }`}
          >
            Your Staked
          </div>
        </div>
        <div>
          <div
            className={`${
              myState
                ? "magpie-header-amount-mobile-with-content"
                : "magpie-header-amount"
            }`}
          >
            $0.00
          </div>
          <div
            className={`${
              myState
                ? "magpie-header-text-mobile-with-content"
                : "magpie-header-text"
            }`}
          >
            Rewards
          </div>
        </div>
      </div>
    </div>
  );
}
export default MagpieHeader;
