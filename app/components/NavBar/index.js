import styled from 'styled-components';

const NavBar = styled.button`
  width: 100%;
  outline: 0;
  border: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  line-height: 0.2;

  ${({ active }) => active && `
    background: pink;
  `}
`;


export default NavBar;