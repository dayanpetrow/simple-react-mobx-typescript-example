import styled from "styled-components";

export const Wrapper: any = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.primaryBackground};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;

  .Balance {
    font-size: 2vw;
  }
`;
