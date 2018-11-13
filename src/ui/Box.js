import {
  space,
  color,
  width,
  flex,
  order,
  alignSelf,
  fontSize,
} from 'styled-system';
import styled from 'styled-components';
import { css } from './utils';

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${css}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...alignSelf.propTypes,
};
