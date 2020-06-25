import styled from "styled-components";

type WrapperProps = {
  isPriceDown?: boolean,
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .Column {
    display: flex;
    width: 100%;
    max-width: 444px;
    margin: 16px;

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
          font-size: 24px;
        }
        .Amount {
          font-size: 16px;
        }
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
        }
        .DynamicPrice {
          font-size: 48px;
          font-weight: bold;
          line-height: 1.1;
          color: ${(props) =>
            props.isPriceDown ? props.theme.red : props.theme.green};
        }
      }

      .ActionButton {
        display: flex;
      }
    }
  }
`;
