import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const CustomButton = styled(Button)`
  width: 100px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito';
  font-style: normal;
  text-transform: none;
  font-size: 16px;
  line-height: 26px;
  cursor: pointer;
  color: ${props => props.theme.fontColors.primary};
  background: ${props => props.theme.backgrounds.yellow};
  border: none;
  border-radius: 80px;
  transition: all ${props => props.theme.transitions.primary};

  &:hover,
  &:focus,
  &:active {
    background: ${props => props.theme.hover.yellow};
  }
  &:disabled,
  &[disabled] {
    background: ${props => props.theme.backgrounds.disabled};
    color: ${props => props.theme.fontColors.secondary};
  }
`;
