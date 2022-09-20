import { Tooltip } from '@mui/material';
import {
  MainUserCard,
  UserAvatar,
  UserName,
  UserInfoWraper,
  UserInfo,
} from './Users.styled';

const UserCard = ({ name, photo, position, email, phone }) => {
  return (
    <MainUserCard>
      <>
        <Tooltip title={name} placement="bottom-end">
          <UserAvatar alt={name} src={photo} />
        </Tooltip>
        <Tooltip title={name} placement="bottom-end">
          <UserName>{name}</UserName>
        </Tooltip>
        <UserInfoWraper>
          <Tooltip title={position} placement="bottom-end">
            <UserInfo>{position}</UserInfo>
          </Tooltip>
          <Tooltip title={email} placement="bottom-end">
            <UserInfo>{email}</UserInfo>
          </Tooltip>
          <Tooltip title={phone} placement="bottom-end">
            <UserInfo>{phone}</UserInfo>
          </Tooltip>
        </UserInfoWraper>
      </>
    </MainUserCard>
  );
};

export default UserCard;
