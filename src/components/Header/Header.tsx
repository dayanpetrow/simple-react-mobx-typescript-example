import React from "react";
import { Wrapper } from "./styled";
import { AccountBalanceProps } from "./types";

export default function AccountBalance(props: AccountBalanceProps) {
  const { balance, toggleDarkMode, isDarkMode } = props;

  return (
    <Wrapper>
      <div>
        <></>
      </div>
      <div className={"Balance"}>${balance}</div>
      <div>
        <button onClick={toggleDarkMode}>dark mode</button>
      </div>
    </Wrapper>
  );
}
