import styled from '@emotion/styled';
import { Typography, Box, TextField, Radio } from '@mui/material';
import { mediaTablet } from '../../utils/media';

export const SignupForm = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitile = styled(Typography)`
  text-align: center;
  font-family: 'Nunito';
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 50px;
`;

export const FormWrapper = styled(Box)`
  ${mediaTablet(` width: 380px;`)}
`;

export const InputUserInfo = styled(TextField)`
  margin-bottom: 50px;
`;

export const CheckBox = styled(Radio)`
  color: ${props => props.theme.backgrounds.disabled};
`;
