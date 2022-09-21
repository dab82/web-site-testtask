import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { mediaTablet } from 'utils';

export const SuccessTitile = styled(Typography)`
  text-align: center;
  font-family: 'Nunito';
  font-size: 40px;
  line-height: 40px;
  ${mediaTablet(`white-space: nowrap;`)}
`;

export const SuccessImg = styled.img`
  margin: 50px auto;
`;
