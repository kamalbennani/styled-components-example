import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from '../../ui/Box';

const buttonColor = ({ color, background, border }) => css`
  color: ${color};
  background-color: ${background};
  border-color: ${border};

  ${({ type }) => {
    if (type !== 'disabled') {
      return `
        &:hover {
          background-color: lighten(${background}, 2%);
        }
        &:active {
          background-color: darken(${background}, 5%);
        }
        &:focus {
          outline: 0;
          border-color: ${border};
          box-shadow: none;
        }
      `;
    }
  }}
`;

const ThemedButton = styled(Box)`
  position: relative;
  display: inline-block;
  text-align: center;
  line-height: 1.43;
  transition: 0.2s all;
  outline-color: transparent;
  cursor: pointer;
  padding: ${props => props.theme.btnPaddingBase};
  font-size: ${props => props.theme.fontSizeBase};
  border-width: ${props => props.theme.borderWidthBase};
  border-style: ${props => props.theme.borderStyleBase};
  border-radius: ${props => props.theme.borderRadiusBase};
  height: ${props => props.theme.btnHeightBase};

  ${({ type, theme }) => {
    switch (type) {
      case 'success':
        return buttonColor({
          color: theme.btnPrimaryColor,
          background: theme.btnPrimaryBg,
          border: theme.btnPrimaryBg,
        });
      case 'info':
        return buttonColor({
          color: theme.btnInfoColor,
          background: theme.btnInfoBg,
          border: theme.btnInfoBg,
        });

      case 'warning':
        return buttonColor({
          color: theme.btnWarningColor,
          background: theme.btnWarningBg,
          border: theme.btnWarningBg,
        });

      case 'danger':
        return buttonColor({
          color: theme.btnDangerColor,
          background: theme.btnDangerBg,
          border: theme.btnDangerBg,
        });
      default:
        return `
          &:hover {
            background-color: ${theme.btnDefaultBg.hover};
          }

          &:active {
            background-color: ${theme.btnDefaultBg.active};
          }
        `;
    }
  }}
`;

export const Button = props => <ThemedButton {...props} />;

Button.defaultProps = {
  type: 'default',
  as: 'button',
};
