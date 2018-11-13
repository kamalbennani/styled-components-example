import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';
import styled from 'styled-components';
import { Box } from './Box';

export const Flex = styled(Box)`
  display: flex;
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;

Flex.propTypes = {
  ...Box.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
};