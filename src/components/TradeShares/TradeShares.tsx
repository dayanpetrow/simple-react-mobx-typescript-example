import React from "react";
import { TradeSharesProps } from "./types";
import Button from "../Button/Button";
import InputNumber from "../InputNumber/InputNumber";
import { Wrapper } from "./styled";

export default function TradeShares(props: TradeSharesProps) {
  console.log(props);
  return (
    <Wrapper isPriceDown={props.isPriceDown}>
      <div className={"Column"}>
        <div className={"TradePanel"}>
          <div className={"PanelHeader"}>
            <div className={"Title"}>Buy</div>
            <div className={"Amount"}>Budget: $1000</div>
          </div>
          <div className={"Content"}>
            <div>Price</div>
            <div className={"DynamicPrice"}>{props.buyPrice}</div>
            <div><InputNumber placeholder={'Quantitiy to buy'}/></div>
            <div>[transaction cost]</div>
          </div>
          <div className={"ActionButton"}>
            <Button type={"primary"}>Buy</Button>
          </div>
        </div>
      </div>
      <div className={"Column"}>
        <div className={"TradePanel"}>
          <div className={"PanelHeader"}>
            <div className={"Title"}>Sell</div>
            <div className={"Amount"}>Owned: 5</div>
          </div>
          <div className={"Content"}>
            <div>Price</div>
            <div className={"DynamicPrice"}>{props.sellPrice}</div>
            <div><InputNumber placeholder={'Quantitiy to sell'}/></div>
            <div>[transaction cost]</div>
          </div>
          <div className={"ActionButton"}>
            <Button type={"primary"} danger>
              Sell
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
