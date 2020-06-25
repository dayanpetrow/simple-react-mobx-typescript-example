import styled from "styled-components";
import { InputNumber } from "antd";

const StyledInput = styled(InputNumber)`
  background: ${(props) => props.theme.input};
  border: none;
  width: 250px;
  margin: 16px 0 8px 0;
  color: ${(props) => props.theme.text};
  .ant-input-number-input {
    text-align: center;
  }
`;

export default StyledInput;
