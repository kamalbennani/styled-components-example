import styled from 'styled-components';
import { height, borderRadius } from 'styled-system';
import { Box } from './Box';

export const Image = styled(Box)`
  maxWidth: '100%';
  height: 'auto';
  ${height}
  ${borderRadius}
`;

Image.propTypes = {
  ...Box.propTypes,
  ...height.propTypes,
  ...borderRadius.propTypes,
};

Image.defaultProps = {
  as: 'img',
  m: 0,
};