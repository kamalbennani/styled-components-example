import React, { Component } from 'react';
import { UserInfo, UserInfoBEM } from './components/UserInfo';
import { Flex } from './ui';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Flex>
          <UserInfo mr="10px" />
          <UserInfoBEM />
        </Flex>
      </div>
    );
  }
}

export default App;
