import styled from '@emotion/styled';
import { Typography, Card, Avatar, Box } from '@mui/material';
import { mediaTablet, mediaDesktop, mediaMaxPhone } from '../../utils/media';

export const UsersListBox = styled(Box)`
  margin-bottom: 50px;
  ${mediaTablet(`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    `)}

  ${mediaDesktop(`
    grid-template-columns: 1fr 1fr 1fr;
    gap: 29px;
    `)}
`;

export const UserListTitile = styled(Typography)`
  text-align: center;
  font-family: 'Nunito';
  font-size: 40px;
  line-height: 40px;
  margin-bottom: 50px;
`;

export const MainUserCard = styled(Card)`
  border-radius: 10px;
  padding: 20px;
  ${mediaMaxPhone(`max-width: 767px;
  &:not(:last-child) {
    margin-bottom: 20px;
    `)}
`;

export const UserAvatar = styled(Avatar)`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px auto;
  cursor: pointer;
`;

export const UserName = styled(Typography)`
  margin-bottom: 20px;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const UserInfoWraper = styled(Box)``;

export const UserInfo = styled(Typography)`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;
