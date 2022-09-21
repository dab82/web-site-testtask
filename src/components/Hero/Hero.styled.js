import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { mediaTablet, mediaDesktop } from 'utils';
import Hero from '../../assets/img/pexels-alexandr-podvalny-1227513.webp';

export const MainHero = styled.div`
  background: no-repeat
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Hero});
  background-size: cover;
  width: 100%;
  height: 500px;
  margin: 0 auto 140px auto;
  ${mediaDesktop(`
    height: 650px;
    max-width: 1170px;
  `)}
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 328px;
  color: ${props => props.theme.fontColors.secondary};
  ${mediaTablet(`
    width: 380px;
  `)}
`;

export const HeroTitle = styled(Typography)`
  text-align: center;
  font-family: 'Nunito';
  font-size: 40px;
  line-height: 40px;
  margin-top: 40px;
  margin-bottom: 21px;
  ${mediaTablet(` margin-top: 89px;`)}
  ${mediaDesktop(` margin-top: 164px;`)}
`;

export const HeroContent = styled(Typography)`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 32px;
`;
