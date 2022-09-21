import styled from '@emotion/styled';
import { AppBar, Box } from '@mui/material';
import { mediaTablet, mediaDesktop, mediaMaxHD } from '../../utils/media';

export const MainHeader = styled(AppBar)`
  position: static;
  height: 60px;
  background-color: ${props => props.theme.fontColors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  ${mediaTablet(`padding: 0 32px;`)};
  ${mediaDesktop(`padding: 0 60px;`)};
  ${mediaMaxHD(` 
  max-width: 1170px;
  padding: 0;`)};
`;

export const NavBtnWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;
`;
