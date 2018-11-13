
import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textStyle,
  colorStyle,
} from 'styled-system';
import { Box } from './Box';

export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textStyle,
  colorStyle,
);

Text.propTypes = {
  ...Box.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
};

Text.defaultProps = {
  textStyle: 'body',
  fontFamily: '"Source Sans Pro", "Lato"',
};