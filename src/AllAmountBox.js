import React from "react";
import PriceBox from "./PriceBox";
import depositOwlImg from "./assests/images/333455.png";
import busdImg from "./assests/images/busd 1.png";
import piggyBankImg from "./assests/images/pig money bbox.png";
import rewardImg from "./assests/images/Frame 13624-1 1.png";
import totalAmountImg from "./assests/images/Frame 13624 1.png";

function AllAmountBox() {
  const depositLogoImg = {
    depositOwlImg: depositOwlImg,
    busdImg: busdImg,
    piggyBankImg: piggyBankImg,
  };
  return (
    <div className="all-amount-layout">
      <PriceBox amount="$0.00" tag="Your Deposit" logo={depositLogoImg} />
      <PriceBox amount="$0.00" tag="Your Rewards" logo={rewardImg} />
      <PriceBox amount="$0.00" tag="Magpie Total TVL" logo={totalAmountImg} />
    </div>
  );
}
export default AllAmountBox;
