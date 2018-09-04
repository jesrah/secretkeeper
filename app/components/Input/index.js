import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  min-width: 300px;
  width: 50%;
  text-align: center;
  color: darkslategray;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  &:hover {
  	color: darkseagreen;
  }
  &:focus {
  	outline-width: 0;
  }
`;

export default Input;