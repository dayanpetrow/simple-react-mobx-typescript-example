import styled from "styled-components";

type WrapperProps = {
  isPriceDown?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 919px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Column {
    display: flex;
    width: 100%;
    max-width: 444px;
    margin: 16px;
    @media (max-width: 919px) {
      max-width: 100%;
      width: 100%;
      justtify-content: center;
      align-items: center;
      padding: 0 16px;
      box-sizing: border-box;
    }
    .TradePanel {
      width: 100%;
      background-color: black;
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme.primaryBackground};

      .PanelHeader {
        width: 100%;
        background-color: ${(props) => props.theme.secondaryBackground};
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .Title {
          font-size: 28px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .Amount {
          color: ${(props) => props.theme.blue};
          font-size: 28px;
        }
      }

      .PriceChangeIcon {
        margin-left: 18px;
        color: ${(props) =>
          props.isPriceDown ? props.theme.red : props.theme.green};
      }

      .Content {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 24px 16px;
        flex: 1;
        text-align: center;
        .Label {
          font-size: 16px;
          opacity: 0.5;
          color: ${(props) => props.theme.text};
        }
        .DynamicPrice {
          font-size: 48px;
          font-weight: bold;
          line-height: 1.1;
          color: ${(props) =>
            props.isPriceDown ? props.theme.red : props.theme.green};
        }
        .TotalPrice {
          margin-top: 12px;
        }
        .ErrorMessage {
          color: ${(props) => props.theme.red};
        }
      }

      .ActionButton {
        display: flex;
        padding: 16px;
      }
    }
  }
`;
