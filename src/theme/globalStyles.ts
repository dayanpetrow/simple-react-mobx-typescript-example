import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

/** only to please typescript for complaining about DefaultTheme in createGlobalStyles */
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

const PRIMARY_FONT = "Open Sans";
const SECONDARY_FONT = "Baloo Paaji 2";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    margin: 0;
    font-family: '${PRIMARY_FONT}', '${SECONDARY_FONT}';
    color: ${(props) => props.theme.text};
  }

  .ant-input-number-handler-wrap {
    display: none;
  }
`;
