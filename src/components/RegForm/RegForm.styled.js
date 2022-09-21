import styled from '@emotion/styled';
import {
  Typography,
  Box,
  TextField,
  Radio,
  ButtonBase,
  FormControlLabel,
} from '@mui/material';
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
`;

export const FormWrapper = styled(Box)`
  margin-bottom: 100px;
  ${mediaTablet(` width: 380px;`)};
`;

export const InputUserInfo = styled(TextField)`
  height: 56px;
  margin-top: 50px;
  input,
  label {
    font-family: 'Nunito';
  }
`;

export const CheckBoxLabel = styled(FormControlLabel)`
  span {
    font-family: 'Nunito';
  }
`;

export const CheckBox = styled(Radio)`
  color: ${props => props.theme.backgrounds.disabled};
`;
export const UploadButton = styled(ButtonBase)`
  height: 104%;
  padding: 14px 15px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  color: ${props => props.theme.fontColors.primary};
  cursor: pointer;
  transition: ${props => props.theme.transitions.primary};

  &:hover {
    box-shadow: inset 2px 2px 10px -5px rgba(0, 0, 0, 0.75);
  }
`;
export const UploadInput = styled.div`
  width: 100%;
  padding: 14px 16px;
  color: ${props => props.theme.fontColors.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const UploadPlaceholder = styled(Typography)`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: ${props => props.theme.fontColors.placeholder};
`;

export const UploadWrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 47px;
  margin-bottom: 50px;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
`;
