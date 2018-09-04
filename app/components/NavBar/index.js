import styled from 'styled-components';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import HorizontalList from '../../components/HorizontalList';
import Ul from '../../components/Ul';

// const NavBar = styled.button`
//   width: 100%;
//   outline: 0;
//   border: 0;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   line-height: 0.2;
 
//   ${({ active }) => active && `
//     background: pink;
//   `}
// `;


// export default NavBar;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.2em;

    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
      text-decoration: none;
      color: darkseagreen;
    }
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav__right">
          <Ul className="Nav__item-wrapper">
            <HorizontalList className="Nav__item">
              <StyledLink className="Nav__link" to="/">Share</StyledLink>
            </HorizontalList>
            <HorizontalList className="Nav__item">
              <StyledLink className="Nav__link" to="/read">Read</StyledLink>
            </HorizontalList>
          </Ul>
        </div>
      </nav>
    )
  }
}