import styled from 'styled-components';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="Nav">
          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" to="/">Share</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/Read">Read</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}