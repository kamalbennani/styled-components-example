import React from 'react';
import { Flex, Image, Text, Box } from '../../ui';

export const UserInfo = (props) => (
  <Flex {...props}>
    <Image width={56} height={56} src="https://react.semantic-ui.com/images/avatar/small/matthew.png" borderRadius="50%" />
    <Box ml="4px">
      <Text>Kamal Bennani</Text>
      <Text>JS Developer</Text>
    </Box>
  </Flex>
);

UserInfo.propTypes = {
  ...Flex.propTypes,
}
