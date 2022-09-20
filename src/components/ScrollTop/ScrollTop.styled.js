import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

export const ToTop = styled(IconButton)`
  z-index: 10;
  position: fixed;
  bottom: 2vh;
  right: 2vh;
  color: ${props => props.theme.fontColors.primary};
  background-color: ${props => props.theme.backgrounds.yellow};
`;
