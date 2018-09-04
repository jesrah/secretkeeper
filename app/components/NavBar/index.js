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

const NavBar = React.createClass({
  render() {
    return (
      <div>
        <ul>
          <a onClick={() => history.push('Share') }>Share</a>
          <a onClick={() => history.push('Read') }>Read</a>
        </ul>
      </div>
    )
  }
})