import React, { Component } from 'react';
import { UserInfo, UserInfoBEM } from './components/UserInfo';
import { Button, ButtonCM } from './components/Button';
import { Flex, Box } from './ui';
import './App.css';

class App extends Component {
  render() {
    return (
      <Box width="50%" mx="auto">
        <Flex>
          <UserInfo mr="50px" />
          <UserInfoBEM />
        </Flex>
        <Flex mt="15px">
          <Button type="success" mr="10px">
            Primary
          </Button>
          <Button type="info" mr="10px">
            Primary
          </Button>
          <Button type="danger" mr="10px">
            Primary
          </Button>
          <Button type="warning" mr="10px">
            Primary
          </Button>
        </Flex>
        <Flex>
          <ButtonCM type="success">Primary</ButtonCM>
          <ButtonCM type="info">Primary</ButtonCM>
          <ButtonCM type="danger">Primary</ButtonCM>
          <ButtonCM type="warning">Primary</ButtonCM>
        </Flex>
      </Box>
    );
  }
}

export default App;
