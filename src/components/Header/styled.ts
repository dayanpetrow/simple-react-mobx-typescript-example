import styled from "styled-components";

export const Wrapper: any = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primaryBackground};
  .Container {
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    .PageTitle {
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
`;
