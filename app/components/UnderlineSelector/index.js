import { createGlobalStyle } from "styled-components";

const UnderlineSelector = createGlobalStyle`
  text-decoration: ${props => props.underline ? "underline" : "none"};
`;

export default UnderlineSelector;