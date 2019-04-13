import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import './App.css';

const ClickableIcon = css`
  cursor: pointer;
`;

const ClickableTreeIcon = css`
  ${ClickableIcon}

  width: 32px;
  height: 32px;
  background-image: url('${props => props.theme.paths.imgPath}/tree/tree.png');
`;

const MyIcon = styled.i`
  ${ClickableTreeIcon}
`;

const theme = {
  paths: { imgPath: '/imgs' }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ThemeProvider theme={theme}>
            <MyIcon />
          </ThemeProvider>
        </header>
      </div>
    );
  }
}

export default App;
