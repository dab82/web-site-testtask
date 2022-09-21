import Logo from '../../assets/img/Logo.svg';
import YellowButton from 'components/Button/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { MainHeader, HeaderWrapper, NavBtnWrapper } from './Header.styled';

const Header = () => {
  return (
    <MainHeader>
      <HeaderWrapper>
        <img
          alt="Logo"
          src={Logo}
          variant="rounded"
          sx={{ width: '104px', height: '26px' }}
        />
        <NavBtnWrapper>
          <AnchorLink href="#users-list">
            <YellowButton type="button" children={'Users'} />
          </AnchorLink>
          <AnchorLink href="#sign-up-form">
            <YellowButton type="button" children={'Sign up'} />
          </AnchorLink>
        </NavBtnWrapper>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default Header;
