import { Container } from 'components/Container/Container';
import UserCard from './UserCard';
import YellowButton from 'components/Button/Button';

import { UsersListBox, UserListTitile } from './Users.styled';

const UsersList = ({ usersList, currentPage, totalPages, handleShowMore }) => {
  return (
    <Container>
      <UserListTitile id="users-list">Working with GET request</UserListTitile>
      <UsersListBox>
        {usersList.map(({ name, email, position, phone, photo }, i) => (
          <UserCard
            key={i}
            photo={photo}
            name={name}
            position={position}
            email={email}
            phone={phone}
          />
        ))}
      </UsersListBox>
      {currentPage < totalPages && (
        <YellowButton
          style={{ width: 120, margin: '0 auto 140px auto' }}
          type="button"
          children={'Show more'}
          onClick={handleShowMore}
        />
      )}
    </Container>
  );
};

export default UsersList;
