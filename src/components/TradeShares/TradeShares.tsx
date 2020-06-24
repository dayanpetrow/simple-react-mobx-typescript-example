import React from "react";
import { TradeSharesProps } from "./types";
import { Wrapper } from "./styled";

export default function TradeShares(props: TradeSharesProps) {
  return (
    <Wrapper>
      <div className={"Column"}>
        <div className={"TradePanel"}>
          <div className={"Title"}>Buy</div>
          <div className={"Content"}>
            <div>Price</div>
            <div>{props.buyPrice}</div>
            <div>[input]</div>
            <div>[transaction cost]</div>
          </div>
          <div className={"ActionButton"}>button</div>
        </div>
      </div>
      <div className={"Column"}>
        <div className={"TradePanel"}>
          <div className={"Title"}>Sell</div>
          <div className={"Content"}>
            <div>Price</div>
            <div>{props.sellPrice}</div>
            <div>[input]</div>
            <div>[transaction cost]</div>
          </div>
          <div className={"ActionButton"}>button</div>
        </div>
      </div>
    </Wrapper>
  );
}
