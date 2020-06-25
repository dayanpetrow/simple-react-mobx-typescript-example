import React from "react";
import { Wrapper } from "./styled";
import { HeaderProps } from "./types";
import { Button } from "antd";

export default function Header(props: HeaderProps) {
  const { toggleDarkMode, isDarkMode } = props;

  return (
    <Wrapper>
      <div className={"Container"}>
        <div className={"PageTitle"}>TradeAwesome</div>
        <Button onClick={toggleDarkMode} type={"primary"}>
          {isDarkMode ? "Light" : "Dark"}
        </Button>
      </div>
    </Wrapper>
  );
}
