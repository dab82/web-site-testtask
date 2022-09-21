import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import { mediaTablet } from 'utils/media';

export const ModalWrapper = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: ${props => props.theme.backgrounds.modal};
  padding: 5%;
`;
export const ModalTitile = styled(Typography)`
  text-align: center;
  font-family: 'Nunito';
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 50px;
  ${mediaTablet(`white-space: nowrap;`)}
`;

export const ModalImg = styled.img`
  margin: 0 auto;
`;
