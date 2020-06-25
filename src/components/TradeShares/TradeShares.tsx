import React, { useState } from "react";
import { TradeSharesProps } from "./types";
import Button from "../Button/Button";
import InputNumber from "../InputNumber/InputNumber";
import {
  FallOutlined,
  RiseOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Wrapper } from "./styled";

export default function TradeShares(props: TradeSharesProps) {
  const [buyQuantity, setBuyQuantity] = useState();
  const [sellQuantity, setSellQuantity] = useState();

  const {
    balance,
    quantityOwned,
    isPriceDown,
    buyPrice,
    sellPrice,
    handleBuyShares,
    handleSellShares
  } = props;

  const buyButtonDisabled = !buyQuantity || buyQuantity * buyPrice > balance;
  const sellButtonDisabled = !sellQuantity || sellQuantity > quantityOwned;

  const _handleBuyShares = () => {
    handleBuyShares(buyQuantity, buyPrice);
    setBuyQuantity('');
  };

  const _handleSellShares = () => {
    handleSellShares(sellQuantity, sellPrice);
    setSellQuantity('');
  }

  return (
    <Wrapper isPriceDown={isPriceDown}>
      {/** Left Column => BUY */}
      <div className={"Column"}>
        <div className={"TradePanel"}>
          <div className={"PanelHeader"}>
            <div className={"Title"}>
              Buy{" "}
              <div className={"PriceChangeIcon"}>
                {isPriceDown ? <FallOutlined /> : <RiseOutlined />}
              </div>
            </div>
            <div className={"Amount"}>
              <DollarCircleOutlined /> {balance.toFixed(2)}
            </div>
          </div>
          <div className={"Content"}>
            <div className={"Label"}>Price</div>
            <div className={"DynamicPrice"}>${buyPrice}</div>
            <div>
              <InputNumber
                placeholder={"Quantitiy to buy"}
                onChange={(value) => setBuyQuantity(value)}
                value={buyQuantity}
                min={1}
              />
            </div>
            {buyQuantity && typeof buyQuantity === "number" && (
              <div className={"TotalPrice"}>
                Total: ${(buyQuantity * buyPrice).toFixed(4)}
              </div>
            )}
            {buyQuantity && buyQuantity * buyPrice > balance && (
              <div className={"ErrorMessage"}>Insufficient balance.</div>
            )}
          </div>
          <div className={"ActionButton"}>
            <Button
              type={"primary"}
              disabled={buyButtonDisabled}
              onClick={_handleBuyShares}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>

      {/** Right Column => SELL */}
      <div className={"Column"}>
        <div className={"TradePanel"}>
          <div className={"PanelHeader"}>
            <div className={"Title"}>
              Sell{" "}
              <div className={"PriceChangeIcon"}>
                {isPriceDown ? <FallOutlined /> : <RiseOutlined />}
              </div>
            </div>
            <div className={"Amount"}>
              <FileDoneOutlined /> {quantityOwned}
            </div>
          </div>
          <div className={"Content"}>
            <div className={"Label"}>Price</div>
            <div className={"DynamicPrice"}>${sellPrice}</div>
            <div>
              <InputNumber
                placeholder={"Quantitiy to sell"}
                onChange={(value) => setSellQuantity(value)}
                value={sellQuantity}
                min={1}
              />
            </div>
            {sellQuantity && typeof sellQuantity === "number" && (
              <div className={"TotalPrice"}>
                Total: ${(sellQuantity * sellPrice).toFixed(4)}
              </div>
            )}
            {sellQuantity && sellQuantity > quantityOwned && (
              <div className={"ErrorMessage"}>
                You do not own enough shares for this transaction.
              </div>
            )}
          </div>
          <div className={"ActionButton"}>
            <Button type={"primary"} danger disabled={sellButtonDisabled} onClick={_handleSellShares}>
              Sell
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
