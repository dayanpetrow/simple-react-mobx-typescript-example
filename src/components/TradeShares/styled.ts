import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

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

      .Title {
        width: 100%;
        background-color: #313131;
        text-align: center;
        font-size: 24px;
        padding: 16px;
        box-sizing: border-box;
      }

      .Content {
        width: 100%;
        box-sizing: border-box;
        background-color: #dedede;
        display: flex;
        flex-direction: column;
        padding: 16px;
        flex: 1;
        text-align: center;
      }

      .ActionButton {
        display: flex;
        background-color: yellow;
      }
    }
  }
`;
