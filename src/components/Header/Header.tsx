import React from "react";
import { Wrapper } from "./styled";
import { AccountBalanceProps } from "./types";
import { Button } from 'antd';

export default function AccountBalance(props: AccountBalanceProps) {
  const { toggleDarkMode, isDarkMode } = props;

  return (
    <Wrapper>
      <div className={"Container"}>
        <div className={"PageTitle"}>TradeApp</div>
        <Button onClick={toggleDarkMode} type={"primary"}>
          {isDarkMode ? "Light" : "Dark"}
        </Button>
      </div>
    </Wrapper>
  );
}
