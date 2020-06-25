import styled from "styled-components";

type WrapperProps = {
  hasProfit?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;

  .Table {
    display: flex;
    flex-direction: column;
    margin: 16px;
    .TableHead {
      font-size: 22px;
      padding: 16px 24px;
      background-color: ${(props) => props.theme.secondaryBackground};
      display: flex;
      justify-content: space-between;
      .Profit {
        color: ${(props) =>
          props.hasProfit ? props.theme.green : props.theme.red};
      }
    }
    .TableRow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 12px 24px;
      &:nth-child(even) {
        background: ${(props) => props.theme.primaryBackground};
      }
      &:nth-child(odd) {
        background: ${(props) => props.theme.input};
      }
      &__date {
        flex: 0.2;
      }
      &__type {
        flex: 0.5;
      }
      &__price {
        display: flex;
        flex: 0.3;
        justify-content: flex-end;
      }
    }
    .EmptyTable {
      width: 100%;
      padding: 24px;
      font-size: 18px;
      text-align: center;
      background-color: ${(props) => props.theme.primaryBackground};
    }
  }
`;
