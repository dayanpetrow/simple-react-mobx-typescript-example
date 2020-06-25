import styled from "styled-components";
import { InputNumber } from "antd";

const StyledInput = styled(InputNumber)`
  background: ${(props) => props.theme.input};
  border: none;
  width: 200px;
  margin: 8px 0;
  color: ${props => props.theme.text}
`;

export default StyledInput;
